const features = [
  {
    title: "Estructura clara",
    description: "Rutas estándar y carpetas ordenadas para crecer rápido.",
  },
  {
    title: "Contenido flexible",
    description: "MDX listo para migrar a un CMS cuando lo necesites.",
  },
  {
    title: "UI consistente",
    description: "Componentes reutilizables con estilos base en Tailwind.",
  },
];

export default function Features() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        Lo que incluye el kit
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
