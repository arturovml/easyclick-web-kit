import { devices } from "@/content/data/devices";

export default function DeviceGrid() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {devices.map((device) => (
        <div
          key={device.id}
          className={`rounded-2xl border p-5 ${
            device.featured
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold">{device.name}</h3>
            {device.featured ? (
              <span className="rounded-full bg-white/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide">
                Destacado
              </span>
            ) : null}
          </div>
          <p
            className={`mt-3 text-sm ${
              device.featured ? "text-slate-200" : "text-slate-700"
            }`}
          >
            {device.description}
          </p>
          {device.tags && device.tags.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {device.tags.map((tag) => (
                <span
                  key={`${device.id}-${tag}`}
                  className={`rounded-full px-2.5 py-1 text-xs ${
                    device.featured
                      ? "bg-white/15 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
