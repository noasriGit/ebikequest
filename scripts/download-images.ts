import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { imageAssets } from "../content/images/manifest";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchWithRetry(url: string, attempts = 5): Promise<Response> {
  for (let i = 0; i < attempts; i++) {
    const res = await fetch(url, {
      headers: { "User-Agent": "eBikeQuest/1.0 (image-sourcing; https://ebikequest.com)" },
    });
    if (res.ok) return res;
    if (res.status === 429 && i < attempts - 1) {
      const wait = 3000 * (i + 1);
      console.log(`rate limited, waiting ${wait}ms...`);
      await sleep(wait);
      continue;
    }
    return res;
  }
  throw new Error("unreachable");
}

async function downloadAsset(asset: (typeof imageAssets)[number]) {
  const dest = path.join(publicDir, asset.localPath.replace(/^\//, ""));
  fs.mkdirSync(path.dirname(dest), { recursive: true });

  if (fs.existsSync(dest)) {
    console.log(`skip (exists): ${asset.localPath}`);
    return;
  }

  const res = await fetchWithRetry(asset.downloadUrl);
  if (!res.ok) {
    throw new Error(`Failed ${asset.id}: HTTP ${res.status} ${asset.downloadUrl}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buffer);
  console.log(`saved: ${asset.localPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
  await sleep(2000);
}

async function main() {
  console.log(`Downloading ${imageAssets.length} image assets...\n`);
  for (const asset of imageAssets) {
    await downloadAsset(asset);
  }
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
