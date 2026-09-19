import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { CONTACT } from "../../constants/site";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#process" },
  { label: "Our Work", href: "#gallery" },
  { label: "Contact", href: "#quote" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#top" data-testid="brand-logo-link" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sky-700 text-white font-extrabold text-lg tracking-tight">
              DP
            </span>
            <span className="leading-tight">
              <span className="block font-bold text-slate-900 tracking-tight">Dean Patching</span>
              <span className="block text-xs font-medium uppercase tracking-widest text-slate-500">
                Local Cleaning
              </span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={CONTACT.phoneHref}
              data-testid="header-call-button"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-sky-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {CONTACT.phone}
            </a>
            <Button asChild data-testid="header-quote-button" className="bg-sky-700 hover:bg-sky-800 text-white">
              <a href="#quote">Get a Free Quote</a>
            </Button>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white" data-testid="mobile-menu">
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              data-testid="mobile-quote-button"
              className="mt-2 bg-sky-700 hover:bg-sky-800 text-white"
            >
              <a href="#quote" onClick={() => setOpen(false)}>
                Get a Free Quote
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
