import { useEffect } from "react";
import { site } from "@/content/site";

/** Sets the browser-tab title and the page description. */
export function usePageTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} — ${site.name}`;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [title, description]);
}
