type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      {subtitle ? (
        <p className="text-base text-slate-700">{subtitle}</p>
      ) : null}
    </div>
  );
}
