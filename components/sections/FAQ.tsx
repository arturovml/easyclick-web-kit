type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items?: FaqItem[];
};

export default function FAQ({ items }: FaqProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        Preguntas frecuentes
      </h2>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <h3 className="text-base font-semibold text-slate-900">
              {item.question}
            </h3>
            <p className="mt-2 text-sm text-slate-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
