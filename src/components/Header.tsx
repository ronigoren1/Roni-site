import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site } from "@/content/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-night/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-display text-2xl tracking-wide md:text-3xl">
          {site.name}
        </Link>

        {/* Desktop menu */}
        <nav className="hidden gap-8 text-sm md:flex">
          {site.mainMenu.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "text-primary" : "link-quiet")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="link-quiet text-sm md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav id="mobile-menu" className="flex flex-col gap-5 border-t border-border px-6 py-8 md:hidden">
          {site.mainMenu.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `font-display text-4xl ${isActive ? "text-primary" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
