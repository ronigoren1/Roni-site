import { Link } from "react-router-dom";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-night">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="font-display text-6xl md:text-8xl">{site.footerTitle}</p>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 text-sm">
          <div className="flex gap-8">
            <a href={site.instagram} className="link-quiet" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={`mailto:${site.email}`} className="link-quiet">
              {site.email}
            </a>
          </div>

          <nav className="flex flex-wrap gap-6 text-muted-foreground" aria-label="More pages">
            {site.footerMenu.map((item) => (
              <Link key={item.to} to={item.to} className="link-quiet">
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="text-muted-foreground">
            © {site.year} {site.name}{" "}
            <span className="ml-2 inline-block h-2 w-2 bg-lipstick align-middle" aria-hidden />
          </p>
        </div>
      </div>
    </footer>
  );
}
