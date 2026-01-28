import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Section from "@/components/layout/Section";
import { getPage, getSiteConfig } from "@/lib/content/provider";
import { renderMdx } from "@/lib/mdx/mdx";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();

  try {
    const page = await getPage("contacto");
    const title = siteConfig.seo.titleTemplate.replace("%s", page.title);
    const description =
      page.description ?? siteConfig.seo.defaultDescription;

    return { title, description };
  } catch {
    return notFound();
  }
}

export default async function Page() {
  try {
    const page = await getPage("contacto");
    return <Section>{renderMdx(page.body)}</Section>;
  } catch {
    return notFound();
  }
}
