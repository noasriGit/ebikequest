import Link from "next/link";
import type { Author, Reviewer } from "@/types/content";

export function AuthorByline({ author }: { author: Author }) {
  return (
    <p className="text-sm text-text-secondary">
      By{" "}
      {author.url ? (
        <Link href={author.url} className="font-medium link-editorial">
          {author.name}
        </Link>
      ) : (
        <span className="font-medium text-text-primary">{author.name}</span>
      )}
      {author.title ? ` · ${author.title}` : null}
    </p>
  );
}

export function ReviewerByline({ reviewer }: { reviewer: Reviewer }) {
  return (
    <p className="text-sm text-text-secondary">
      Reviewed by{" "}
      <span className="font-medium text-text-primary">{reviewer.name}</span>
      {reviewer.credentials ? ` · ${reviewer.credentials}` : null}
    </p>
  );
}
