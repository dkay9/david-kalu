import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const skills = ["Software", "Photography", "Videography", "AI", "Design"];

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-center overflow-hidden px-5 pt-24 pb-16 sm:px-10 lg:px-16 lg:pt-16">
      {/* Status line */}
      <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
        {/* Stacked headline */}
        <h1 className="display text-[clamp(3.4rem,13vw,11rem)]">
          <span
            className="hero-clip block headline-fade"
            style={{ animationDelay: "0.2s" }}
          >
            Create.
          </span>
          <span
            className="hero-clip block outline-text"
            style={{ animationDelay: "0.35s" }}
          >
            Build.
          </span>
          <span
            className="hero-clip block headline-fade"
            style={{ animationDelay: "0.5s" }}
          >
            Ship
          </span>
        </h1>

        {/* Rotated skill list */}
        <ul
          className="hero-rise hidden flex-col items-end gap-5 lg:flex"
          style={{ animationDelay: "0.7s" }}
        >
          {skills.map((skill) => (
            <li
              key={skill}
              className="vertical-rl timecode text-smoke transition-colors duration-300 hover:text-rec"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Sub row */}
      <div
        className="hero-rise mt-10 flex flex-wrap items-center justify-between gap-6"
        style={{ animationDelay: "0.85s" }}
      >
        <p className="max-w-xs text-sm leading-relaxed text-smoke sm:max-w-sm">
          I&apos;m DK. A creative technologist. I engineer software,
          capture stories through lens and motion, and build with AI.
          <br />
          Software · Visual Media · AI.
        </p>

        <Link
          href="#worlds"
          className="group flex items-center gap-4"
          aria-label="Explore what I do"
        >
          <span className="timecode">Explore my worlds</span>
          <span className="flex size-14 items-center justify-center rounded-full border border-ink transition-colors duration-300 group-hover:bg-rec group-hover:border-rec group-hover:text-white">
            <ArrowUpRight size={20} className="arrow-launch" />
          </span>
        </Link>
      </div>

      {/* Mobile skill row */}
      <div
        className="hero-rise mt-8 flex flex-wrap gap-x-4 gap-y-2 lg:hidden"
        style={{ animationDelay: "0.95s" }}
      >
        {skills.map((skill) => (
          <span key={skill} className="timecode text-smoke">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}