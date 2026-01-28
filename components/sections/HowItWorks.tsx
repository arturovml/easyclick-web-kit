const steps = [
  {
    title: "Configura el contenido",
    description: "Edita los archivos MDX o conecta un CMS más adelante.",
  },
  {
    title: "Personaliza la UI",
    description: "Ajusta los componentes y estilos con Tailwind.",
  },
  {
    title: "Publica rápido",
    description: "Lanza el sitio con rutas listas para producción.",
  },
];

export default function HowItWorks() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        Cómo funciona
      </h2>
      <div className="mt-6 space-y-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Paso {index + 1}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-slate-700">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
