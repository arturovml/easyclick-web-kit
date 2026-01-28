import type { ReactNode } from "react";

import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import DeviceGrid from "@/components/sections/DeviceGrid";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import PageHeader from "@/components/sections/PageHeader";
import ServiceList from "@/components/sections/ServiceList";

const typography = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-xl font-semibold tracking-tight text-slate-900">
      {children}
    </h3>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-base leading-relaxed text-slate-700">{children}</p>
  ),
  a: ({
    children,
    href,
  }: {
    children: ReactNode;
    href?: string;
  }) => (
    <a className="text-blue-600 underline" href={href}>
      {children}
    </a>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc space-y-2 pl-6 text-slate-700">{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal space-y-2 pl-6 text-slate-700">{children}</ol>
  ),
  li: ({ children }: { children: ReactNode }) => <li>{children}</li>,
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-slate-200 pl-4 text-slate-600">
      {children}
    </blockquote>
  ),
};

export const mdxComponents = {
  ...typography,
  Hero,
  Features,
  HowItWorks,
  FAQ,
  Contact,
  CTA,
  PageHeader,
  ServiceList,
  DeviceGrid,
};
