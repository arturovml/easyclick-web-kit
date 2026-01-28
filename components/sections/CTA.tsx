import Link from "next/link";

type CtaProps = {
  title: string;
  subtitle?: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export default function CTA({
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: CtaProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        {subtitle ? <p className="text-slate-700">{subtitle}</p> : null}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"
          href={primaryCtaHref}
        >
          {primaryCtaLabel}
        </Link>
        {secondaryCtaLabel && secondaryCtaHref ? (
          <Link
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800"
            href={secondaryCtaHref}
          >
            {secondaryCtaLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
