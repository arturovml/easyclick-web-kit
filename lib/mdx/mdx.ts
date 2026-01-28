import { createElement } from "react";
import type { ReactElement } from "react";

import { MDXRemote } from "next-mdx-remote/rsc";

import { mdxComponents } from "@/lib/mdx/mdx-components";

export function renderMdx(source: string): ReactElement {
  return createElement(MDXRemote, {
    source,
    components: mdxComponents,
  });
}
