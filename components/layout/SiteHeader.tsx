import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4">
        <Link className="text-lg font-semibold" href="/">
          EasyClick
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-4">
          <Link className="text-sm text-slate-700" href="/servicios">
            Servicios
          </Link>
          <Link className="text-sm text-slate-700" href="/dispositivos">
            Dispositivos
          </Link>
        </nav>
      </div>
    </header>
  );
}
