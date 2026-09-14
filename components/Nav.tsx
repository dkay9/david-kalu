"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Github, Linkedin, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "Home", href: "/" },
  { label: "Worlds", href: "/#worlds" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ---------- Desktop: vertical rail ---------- */}
      <aside className="fixed left-0 top-0 z-50 hidden h-dvh w-16 flex-col items-center justify-between border-r border-line bg-paper py-6 transition-colors duration-300 lg:flex">
        <Link
          href="/"
          className="vertical-rl rotate-180 font-mono text-[11px] font-bold tracking-[0.3em] uppercase"
        >
          DK<span className="text-rec">.</span>DEV
        </Link>

        <nav className="flex flex-col items-center gap-3">
          {links.map((link) => {
            const active =
              link.href === pathname ||
              (link.href === "/projects" && pathname.startsWith("/projects"));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`vertical-rl rotate-180 rounded-full px-2 py-4 text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                  active
                    ? "border-ink bg-ink text-paper"
                    : "border-line hover:border-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-col items-center gap-3">
          <ThemeToggle />
          <a
            href="https://github.com/dkay9"
            aria-label="GitHub"
            className="rounded-full border border-line p-2 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            <Github size={13} strokeWidth={1.8} />
          </a>
        </div>
      </aside>

      {/* ---------- Mobile: top bar ---------- */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-line bg-paper/90 px-5 py-4 backdrop-blur-sm transition-colors duration-300 lg:hidden">
        <Link
          href="/"
          className="font-mono text-xs font-bold tracking-[0.3em] uppercase"
        >
          DK<span className="text-rec">.</span>DEV
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="rounded-full border border-ink p-2"
          >
            <Menu size={16} strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* ---------- Mobile: fullscreen overlay menu ---------- */}
      <div
        className={`fixed inset-0 z-80 bg-ink text-paper transition-[clip-path] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open
            ? "[clip-path:inset(0_0_0_0)]"
            : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="timecode flex items-center gap-2">
            <span className="size-2 rounded-full bg-rec animate-blink" /> Menu
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="rounded-full border border-paper/40 p-2"
          >
            <X size={16} />
          </button>
        </div>

        <nav className="mt-10 flex flex-col px-5">
          {links.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between border-b border-paper/15 py-5"
              style={{
                animation: open
                  ? `slide-right 0.5s ${0.15 + i * 0.08}s cubic-bezier(0.22,1,0.36,1) both`
                  : "none",
              }}
            >
              <span className="display text-4xl">{link.label}</span>
              <ArrowUpRight
                size={22}
                className="arrow-launch text-paper/50 group-hover:text-rec"
              />
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-8 left-5 right-5 flex items-center justify-between">
          <span className="timecode text-paper/50">Abuja, Nigeria</span>
          <div className="flex gap-4">
            <a href="https://github.com/BuildItt-Inc" aria-label="GitHub">
              <Github size={18} strokeWidth={1.6} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin size={18} strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}