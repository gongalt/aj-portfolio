"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ── Types ─────────────────────────────────────────────────────────────────────
interface NavItem {
  number: string;
  label: string;
  href: string;
}

// ── Nav items config ──────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  { number: "01", label: "About", href: "/#about" },
  { number: "02", label: "Services", href: "/#services" },
  { number: "03", label: "Work", href: "/#work" },
  { number: "04", label: "Blog", href: "/blog" },
  { number: "05", label: "Contact", href: "/#contact" },
];

// ── Hamburger Icon ────────────────────────────────────────────────────────────
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-6 h-5 flex flex-col justify-between">
      <span
        className={`block h-px bg-green-accent transition-all duration-300 origin-center ${
          open ? "rotate-45 translate-y-[10px]" : ""
        }`}
      />
      <span
        className={`block h-px bg-green-accent transition-all duration-300 ${
          open ? "opacity-0 scale-x-0" : ""
        }`}
      />
      <span
        className={`block h-px bg-green-accent transition-all duration-300 origin-center ${
          open ? "-rotate-45 -translate-y-[10px]" : ""
        }`}
      />
    </div>
  );
}

// ── Main Navbar Component ─────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Mount animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll behavior: backdrop blur + hide/show
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // Backdrop blur threshold
        setScrolled(currentScrollY > 20);

        // Hide on scroll down (past hero), show on scroll up
        if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
          setHidden(true);
          setMobileOpen(false); // close mobile menu when hiding
        } else {
          setHidden(false);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu open + close on Escape
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileOpen(false);
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  // Check if a nav item is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ── Desktop/Tablet Navbar ──────────────────────────────────────── */}
      <header
        role="banner"
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300 ease-in-out",
          scrolled
            ? "bg-navy/90 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]"
            : "bg-transparent",
          hidden ? "-translate-y-full" : "translate-y-0",
        ].join(" ")}
      >
        <nav
          className="max-w-6xl mx-auto px-6 md:px-12 h-[70px] flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* ── Logo ──────────────────────────────────────────────────── */}
          <Link
            href="/"
            aria-label="Adrian Jenson — home"
            className={[
              "font-mono text-green-accent font-semibold text-lg",
              "border border-green-accent/60 rounded px-2.5 py-1",
              "hover:bg-green-accent/10 hover:border-green-accent",
              "transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
              // Mount animation
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2",
              "transition-all duration-500 ease-out",
            ].join(" ")}
            style={{ transitionDelay: "100ms" }}
          >
            AJ
          </Link>

          {/* ── Desktop Nav Links ──────────────────────────────────────── */}
          <div
            className="hidden md:flex items-center gap-1"
            role="list"
          >
            {NAV_ITEMS.map((item, i) => (
              <div
                key={item.href}
                role="listitem"
                className={[
                  "transition-all duration-500 ease-out",
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2",
                ].join(" ")}
                style={{ transitionDelay: `${150 + i * 80}ms` }}
              >
                <Link
                  href={item.href}
                  className={[
                    "group relative px-3 py-2 rounded",
                    "font-mono text-sm",
                    "transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent focus-visible:ring-offset-1 focus-visible:ring-offset-navy",
                    isActive(item.href) ? "text-green-accent" : "",
                  ].join(" ")}
                >
                  <span className="text-green-accent text-xs mr-1">
                    {item.number}.
                  </span>
                  <span
                    className={[
                      "transition-colors duration-200",
                      isActive(item.href)
                        ? "text-green-accent"
                        : "text-slate-lightest group-hover:text-green-accent",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                </Link>
              </div>
            ))}

            {/* Resume CTA */}
            <div
              className={[
                "ml-3 transition-all duration-500 ease-out",
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2",
              ].join(" ")}
              style={{ transitionDelay: `${150 + NAV_ITEMS.length * 80}ms` }}
            >
              <a
                href="/Adrian_Resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "inline-flex items-center px-4 py-2 rounded",
                  "font-mono text-sm text-green-accent",
                  "border border-green-accent/70",
                  "hover:bg-green-accent/10 hover:border-green-accent",
                  "hover:-translate-y-0.5",
                  "transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
                ].join(" ")}
              >
                Resume
              </a>
            </div>
          </div>

          {/* ── Mobile Hamburger ──────────────────────────────────────── */}
          <button
            type="button"
            className={[
              "md:hidden p-2 rounded",
              "hover:bg-green-accent/10",
              "transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent",
              mounted ? "opacity-100" : "opacity-0",
            ].join(" ")}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ────────────────────────────────────────────── */}
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className={[
          "fixed inset-0 z-40 bg-navy/70 backdrop-blur-sm md:hidden",
          "transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setMobileOpen(false)}
      />

      {/* Slide-in panel */}
      <aside
        id="mobile-nav"
        className={[
          "fixed top-0 right-0 bottom-0 z-50",
          "w-[min(75vw,320px)] bg-navy-light",
          "flex flex-col justify-center items-center gap-8",
          "transition-transform duration-350 ease-in-out md:hidden",
          "shadow-[-10px_0_30px_-5px_rgba(2,12,27,0.8)]",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        {/* Close button */}
        <button
          type="button"
          className="absolute top-5 right-5 p-2 rounded hover:bg-green-accent/10 transition-colors"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        >
          <HamburgerIcon open={true} />
        </button>

        {/* Mobile nav links */}
        <nav className="flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item, i) => (
            <div
              key={item.href}
              className={[
                "transition-all duration-400 ease-out",
                mobileOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8",
              ].join(" ")}
              style={{ transitionDelay: mobileOpen ? `${i * 60 + 80}ms` : "0ms" }}
            >
              <Link
                href={item.href}
                className={[
                  "group flex flex-col items-center gap-1",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent rounded",
                ].join(" ")}
                onClick={() => setMobileOpen(false)}
              >
                <span className="font-mono text-green-accent text-xs tracking-widest">
                  {item.number}.
                </span>
                <span
                  className={[
                    "font-mono text-lg tracking-wide transition-colors duration-200",
                    isActive(item.href)
                      ? "text-green-accent"
                      : "text-slate-lightest group-hover:text-green-accent",
                  ].join(" ")}
                >
                  {item.label}
                </span>
              </Link>
            </div>
          ))}

          {/* Mobile Resume link */}
          <div
            className={[
              "mt-4 transition-all duration-400 ease-out",
              mobileOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8",
            ].join(" ")}
            style={{
              transitionDelay: mobileOpen
                ? `${NAV_ITEMS.length * 60 + 100}ms`
                : "0ms",
            }}
          >
            <a
              href="/Adrian_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "inline-flex items-center px-8 py-3 rounded",
                "font-mono text-base text-green-accent",
                "border border-green-accent/70",
                "hover:bg-green-accent/10 hover:border-green-accent",
                "transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent",
              ].join(" ")}
              onClick={() => setMobileOpen(false)}
            >
              Resume
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
}
