import Link from "next/link";
import type { Author, Reviewer } from "@/types/content";

export function AuthorByline({ author }: { author: Author }) {
  return (
    <p className="text-sm text-zinc-600">
      By{" "}
      {author.url ? (
        <Link href={author.url} className="font-medium text-emerald-700 hover:underline">
          {author.name}
        </Link>
      ) : (
        <span className="font-medium text-zinc-900">{author.name}</span>
      )}
      {author.title ? ` · ${author.title}` : null}
    </p>
  );
}

export function ReviewerByline({ reviewer }: { reviewer: Reviewer }) {
  return (
    <p className="text-sm text-zinc-600">
      Reviewed by{" "}
      <span className="font-medium text-zinc-900">{reviewer.name}</span>
      {reviewer.credentials ? ` · ${reviewer.credentials}` : null}
    </p>
  );
}
