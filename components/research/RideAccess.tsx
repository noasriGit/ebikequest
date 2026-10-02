import Link from "next/link";
import type { RideAccessReport } from "@/lib/commerce/ride-access";

export function RideAccess({ report }: { report: RideAccessReport }) {
  return (
    <section className="mt-10" aria-labelledby="where-to-ride">
      <h2 id="where-to-ride" className="text-heading-md text-text-primary">
        Where can I ride this bike?
      </h2>
      <p className="mt-3 max-w-3xl text-body-sm text-text-secondary">{report.summary}</p>
      {report.groups.length ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {report.groups.map((group) => (
            <div key={group.jurisdiction}>
              <h3 className="text-body-sm font-medium text-text-primary">{group.jurisdictionName}</h3>
              {group.trails.length ? (
                <ul className="mt-2 space-y-2">
                  {group.trails.map((trail) => (
                    <li key={trail.href}>
                      <Link href={trail.href} className="link-editorial">
                        {trail.title}
                      </Link>
                      <p className="text-sm text-text-muted">{trail.note}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-body-sm text-text-secondary">
                  No trail in this directory documents {group.jurisdictionName} access for this class.
                </p>
              )}
              {group.hiddenCount > 0 ? (
                <p className="mt-2 text-sm text-text-muted">
                  <Link href={group.moreHref} className="link-editorial">
                    {group.hiddenCount} more in {group.jurisdictionName}
                  </Link>
                </p>
              ) : (
                <p className="mt-2 text-sm">
                  <Link href={group.moreHref} className="link-editorial">
                    {group.jurisdictionName} trail directory
                  </Link>
                </p>
              )}
            </div>
          ))}
        </div>
      ) : null}
      <ul className="mt-6 space-y-1 text-body-sm">
        {report.lawLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="link-editorial">
              {link.label}
            </Link>
            {link.note ? <span className="text-text-muted"> — {link.note}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
