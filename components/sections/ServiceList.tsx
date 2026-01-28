const services = [
  {
    title: "Integración rápida",
    description: "Conecta el kit a tu stack con mínima configuración.",
  },
  {
    title: "Diseño adaptable",
    description: "Componentes flexibles para distintos formatos de negocio.",
  },
  {
    title: "Soporte continuo",
    description: "Te acompañamos en cada etapa del lanzamiento.",
  },
];

export default function ServiceList() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.title}
          className="rounded-2xl border border-slate-200 bg-white p-5"
        >
          <h3 className="text-lg font-semibold text-slate-900">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-slate-700">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
