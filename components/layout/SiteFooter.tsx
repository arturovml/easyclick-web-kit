export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-4xl px-6 py-6 text-sm text-slate-600">
        © {new Date().getFullYear()} EasyClick. Todos los derechos reservados.
      </div>
    </footer>
  );
}
