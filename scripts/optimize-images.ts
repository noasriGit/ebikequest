import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.join(process.cwd());
const imagesDir = path.join(root, "public", "images");
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;

async function optimizeImage(filePath: string) {
  const relative = path.relative(path.join(root, "public"), filePath).replace(/\\/g, "/");
  const before = fs.statSync(filePath).size;
  const image = sharp(filePath);
  const metadata = await image.metadata();

  const needsResize = (metadata.width ?? 0) > MAX_WIDTH;
  const isJpeg = /\.jpe?g$/i.test(filePath);

  if (!needsResize && isJpeg && before < 400 * 1024) {
    console.log(`skip: /${relative} (${Math.round(before / 1024)} KB)`);
    return;
  }

  let pipeline = sharp(filePath).rotate();

  if (needsResize) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
      fit: "inside",
    });
  }

  if (isJpeg) {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  } else if (/\.png$/i.test(filePath)) {
    pipeline = pipeline.png({ compressionLevel: 9 });
  } else if (/\.webp$/i.test(filePath)) {
    pipeline = pipeline.webp({ quality: JPEG_QUALITY });
  }

  const buffer = await pipeline.toBuffer();
  if (buffer.length >= before) {
    console.log(`skip (no savings): /${relative}`);
    return;
  }

  const tempPath = `${filePath}.tmp`;
  fs.writeFileSync(tempPath, buffer);
  fs.renameSync(tempPath, filePath);
  console.log(
    `optimized: /${relative} ${Math.round(before / 1024)} KB → ${Math.round(buffer.length / 1024)} KB`,
  );
}

async function walk(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
      continue;
    }
    if (/\.(jpe?g|png|webp)$/i.test(entry.name)) {
      await optimizeImage(fullPath);
    }
  }
}

async function main() {
  if (!fs.existsSync(imagesDir)) {
    console.error("No public/images directory found.");
    process.exit(1);
  }

  console.log(`Optimizing images under public/images (max width ${MAX_WIDTH}px)...\n`);
  await walk(imagesDir);
  console.log("\nDone.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
