import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects — DK.DEV",
  description: "Products, client work and open source by DK.",
};

export default function ProjectsPage() {
  return (
    <main className="lg:pl-16">
      <section className="px-5 pt-28 pb-10 sm:px-10 lg:px-16 lg:pt-24">
        <Reveal>
          <p className="timecode mb-4 flex items-center gap-2 text-rec">
            <span className="size-2 rounded-full bg-rec animate-blink" />
            // full archive
          </p>
          <h1 className="display text-[clamp(3.2rem,11vw,9rem)]">
            <span className="headline-fade">All</span>{" "}
            <span className="outline-text">Projects</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-smoke">
            Products I&apos;ve founded, client work under BuildItt, and things
            built in the open. Filter by type below.
          </p>
        </Reveal>
      </section>

      <ProjectsGrid />
      <Footer />
    </main>
  );
}
