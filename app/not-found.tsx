import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/design-system/Button/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-label text-brand">404</p>
      <h1 className="mt-2 text-display-lg text-text-primary">Page not found</h1>
      <p className="mt-4 max-w-md text-text-secondary">
        This page does not exist or is not available in our current coverage area.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Go home</Button>
        <Link href="/trails" className="text-sm font-semibold text-brand hover:underline">
          Browse trails
        </Link>
      </div>
    </Container>
  );
}
