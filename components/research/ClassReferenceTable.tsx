import Link from "next/link";
import { EBIKE_CLASS_REFERENCE } from "@/lib/commerce/classes";

export function ClassReferenceTable({ caption }: { caption?: string }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="research-table">
          <caption className="sr-only">
            {caption ?? "Common United States three-class e-bike framework"}
          </caption>
          <thead>
            <tr>
              <th scope="col">Class</th>
              <th scope="col">Assist</th>
              <th scope="col">Motor cutoff</th>
              <th scope="col">Why it matters</th>
            </tr>
          </thead>
          <tbody>
            {EBIKE_CLASS_REFERENCE.map((row) => (
              <tr key={row.id}>
                <th scope="row">{row.name}</th>
                <td>{row.assist}</td>
                <td>{row.cutoff}</td>
                <td>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 max-w-3xl text-body-sm text-text-muted">
        This is the framework used by many state statutes, including Virginia and Maryland.
        Washington DC uses a motorized-bicycle definition instead of these labels, and federal
        land managers can set their own rules.{" "}
        <Link href="/laws" className="link-editorial">
          Compare the laws we have documented
        </Link>
        .
      </p>
    </div>
  );
}
