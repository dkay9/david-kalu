"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [light, setLight] = useState(false);

  // Sync with whatever the pre-hydration script applied
  useEffect(() => {
    setLight(document.documentElement.getAttribute("data-theme") === "light");
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      /* private mode — ignore */
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      className={`rounded-full border border-line p-2 transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper ${className}`}
    >
      {light ? <Moon size={13} strokeWidth={1.8} /> : <Sun size={13} strokeWidth={1.8} />}
    </button>
  );
}
