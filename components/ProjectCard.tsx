"use client";

import { useState } from "react";
import { ArrowUpRight, Github, ImageIcon } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [missing, setMissing] = useState(false);

  return (
    <figure className="group flex h-full flex-col">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-ink/[0.04] transition-colors duration-300 group-hover:border-ink">
        <div className="relative aspect-video">
          {missing ? (
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-smoke">
              <ImageIcon size={26} strokeWidth={1.2} />
              <span className="timecode px-4 text-center">
                Drop {project.image.replace("/projects/", "")} into
                /public/projects
              </span>
            </span>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              onError={() => setMissing(true)}
              className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          )}

          {/* Category chip */}
          <span className="absolute top-3 left-3 rounded-full bg-paper/90 px-3 py-1 timecode backdrop-blur-sm">
            {project.category}
          </span>

          {/* Links — only render if provided */}
          <span className="absolute top-3 right-3 flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="flex size-9 items-center justify-center rounded-full bg-paper/90 backdrop-blur-sm transition-colors hover:bg-rec hover:text-white"
              >
                <Github size={15} strokeWidth={1.8} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title}`}
                className="flex size-9 items-center justify-center rounded-full bg-paper/90 backdrop-blur-sm transition-colors hover:bg-rec hover:text-white"
              >
                <ArrowUpRight size={15} strokeWidth={1.8} className="arrow-launch" />
              </a>
            )}
          </span>
        </div>
      </div>

      <figcaption className="mt-4 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="display text-xl sm:text-2xl">{project.title}</h3>
          <span className="timecode mt-1 shrink-0 text-smoke">{project.year}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-smoke">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-wider transition-colors duration-300 group-hover:border-smoke"
            >
              {tool}
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
