import Link from "next/link";
import type { TrailMapFeature } from "@/lib/maps/trail-map-utils";

interface TrailMapPopupProps {
  trail: TrailMapFeature;
  onClose?: () => void;
}

export function TrailMapPopup({ trail, onClose }: TrailMapPopupProps) {
  return (
    <div className="pointer-events-auto w-72 rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised p-4 shadow-[var(--shadow-md)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold leading-snug text-text-primary">{trail.title}</h3>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 text-text-muted hover:text-text-primary"
            aria-label="Close trail info"
          >
            ×
          </button>
        ) : null}
      </div>

      <p className="mt-2 line-clamp-2 text-xs text-text-secondary">{trail.description}</p>

      <dl className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
        <div>
          <dt className="text-text-muted">Difficulty</dt>
          <dd className="font-medium capitalize text-text-primary">{trail.difficulty}</dd>
        </div>
        {trail.distanceMiles ? (
          <div>
            <dt className="text-text-muted">Distance</dt>
            <dd className="font-medium text-text-primary">{trail.distanceMiles} mi</dd>
          </div>
        ) : null}
        <div>
          <dt className="text-text-muted">E-bikes</dt>
          <dd className="font-medium text-text-primary">
            {trail.ebikeAllowed ? "Allowed" : "Restricted"}
          </dd>
        </div>
      </dl>

      <Link
        href={trail.href}
        className="mt-4 inline-block text-sm font-semibold text-brand hover:underline"
      >
        View trail →
      </Link>
    </div>
  );
}
