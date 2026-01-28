import { readFile } from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

import { siteConfig } from "@/content/data/site.config";

export type PageContent = {
  slug: string;
  title: string;
  description?: string;
  body: string;
};

export class ContentNotFoundError extends Error {
  slug: string;

  constructor(slug: string) {
    super(`No se encontró contenido para el slug "${slug}".`);
    this.name = "ContentNotFoundError";
    this.slug = slug;
  }
}

type Frontmatter = {
  title?: string;
  description?: string;
};

export function getSiteConfig() {
  return siteConfig;
}

export async function getPage(slug: string): Promise<PageContent> {
  const baseDir = path.join(process.cwd(), "content", "mdx", "pages");
  const filePath = path.join(baseDir, `${slug}.mdx`);

  let fileContents: string;
  try {
    fileContents = await readFile(filePath, "utf8");
  } catch (error) {
    const nodeError = error as NodeJS.ErrnoException;
    if (nodeError?.code === "ENOENT") {
      throw new ContentNotFoundError(slug);
    }

    const message =
      error instanceof Error ? error.message : "Error desconocido";
    throw new Error(
      `No se pudo leer el archivo MDX para el slug "${slug}". ${message}`
    );
  }

  const { data, content } = matter(fileContents);
  const frontmatter = data as Frontmatter;
  const title = frontmatter.title ?? slug;

  return {
    slug,
    title,
    description: frontmatter.description,
    body: content,
  };
}
