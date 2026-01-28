import type { ElementType, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export default function Section({
  children,
  className,
  as,
}: SectionProps) {
  const Component = as ?? "section";
  return (
    <Component
      className={`mx-auto w-full max-w-4xl px-6 py-12 ${
        className ?? ""
      }`.trim()}
    >
      {children}
    </Component>
  );
}
