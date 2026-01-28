import Link from "next/link";

export default function Hero() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          EasyClick Web Kit
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Lanza una experiencia clara y escalable.
        </h1>
        <p className="text-base text-slate-700">
          Base modular con rutas, contenido MDX y componentes listos para
          personalizar.
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"
          href="/servicios"
        >
          Explorar servicios
        </Link>
        <Link
          className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800"
          href="/dispositivos"
        >
          Ver dispositivos
        </Link>
      </div>
    </div>
  );
}
