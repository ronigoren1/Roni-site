// Shown for any address that doesn't have a page yet.
import { Link, useLocation } from "react-router-dom";
import { site } from "@/content/site";
import { usePageTitle } from "@/usePageTitle";

export function ComingSoonPage() {
  const { pathname } = useLocation();
  const known = [...site.mainMenu, ...site.footerMenu].find((item) => item.to === pathname);
  const title = known ? known.label : "Page not found";
  usePageTitle(title);

  return (
    <header className="mx-auto max-w-6xl px-6 pb-16 pt-40 md:pt-48">
      <p className="eyebrow rise">{known ? "Coming soon" : "404"}</p>
      <h1 className="rise mt-6 text-6xl md:text-8xl lg:text-9xl">{title}</h1>
      <p className="rise mt-8 max-w-xl text-base leading-loose text-muted-foreground">
        {known ? "This room is still being furnished." : "There's nothing at this address."}{" "}
        <Link to="/" className="border-b border-primary text-primary">
          Back to the magazine
        </Link>
      </p>
    </header>
  );
}
