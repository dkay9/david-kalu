"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  LayoutGrid,
  Package,
  Briefcase,
  GitBranch,
  Camera,
  Bot,
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects, type Project } from "@/lib/projects";

type Filter = "all" | Project["category"];

const filters: { value: Filter; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All", icon: <LayoutGrid size={14} /> },
  { value: "Product", label: "Products", icon: <Package size={14} /> },
  { value: "Client work", label: "Client work", icon: <Briefcase size={14} /> },
  {
    value: "Visual Media",
    label: "Visual Media",
    icon: <Camera size={14} />,
  },
  { value: "AI", label: "AI", icon: <Bot size={14} /> },
  {
    value: "Open source",
    label: "Open source",
    icon: <GitBranch size={14} />,
  },
];

export default function ProjectsGrid() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState<Filter>("all");

  // Read ?filter= from URL on mount
  useEffect(() => {
    const param = searchParams.get("filter");
    if (param === "software") setFilter("Product");
    else if (param === "visual") setFilter("Visual Media");
    else if (param === "ai") setFilter("AI");
    else if (param === "client") setFilter("Client work");
    else if (param === "oss") setFilter("Open source");
  }, [searchParams]);

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="px-5 pb-24 sm:px-10 lg:px-16">
      {/* Filter pills */}
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="mb-10 flex flex-wrap gap-3 border-t border-ink pt-8"
      >
        {filters.map((item) => {
          const active = filter === item.value;
          return (
            <button
              key={item.value}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(item.value)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs uppercase tracking-widest transition-colors duration-300 ${
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-line hover:border-ink"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
        <span className="ml-auto hidden self-center timecode text-smoke sm:block">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {/* Grid: wide projects span 2 columns */}
      <div
        key={filter}
        className="grid grid-flow-dense grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={(i % 3) * 100}
            className={project.wide ? "sm:col-span-2" : ""}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="py-20 text-center timecode text-smoke">
          Nothing in this category yet — add one in lib/projects.ts
        </p>
      )}
    </section>
  );
}