export interface Project {
  slug: string;
  title: string;
  description: string;
  category: "Product" | "Client work" | "Open source" | "Visual Media" | "AI";
  tools: string[];
  /** Screenshot inside /public — e.g. "/projects/definam.png" */
  image: string;
  year: string;
  /** Renders as a wide (2-column) card in the grid */
  wide?: boolean;
  /** Optional links — rendered only if present */
  live?: string;
  github?: string;
}

/**
 * HOW TO ADD PROJECTS
 * -------------------
 * 1. Drop a screenshot into  public/projects/  (16:9-ish works best)
 * 2. Add an entry below. wide: true makes the card span 2 columns.
 */
export const projects: Project[] = [
  // ——— Software ———
  {
    slug: "definam",
    title: "DefinAm",
    description:
      "Ed-tech PWA helping Nigerian secondary students prep for WAEC, NECO & JAMB with structured learning flows and daily recall.",
    category: "Product",
    tools: ["Next.js 15", "TypeScript", "Tailwind", "PWA", "Zod"],
    image: "/projects/definam.svg",
    year: "2026",
    wide: true,
  },
  {
    slug: "debategym",
    title: "DebateGym",
    description:
      "AI-powered debate training app with real-time evaluation, voice input and progress history.",
    category: "Product",
    tools: ["Next.js", "Prisma", "Supabase", "NextAuth", "Gemini API"],
    image: "/projects/debategym.svg",
    year: "2025",
  },
  {
    slug: "noqueue",
    title: "NoQueue",
    description:
      "Campus library reserve-to-pickup PWA with slot locking across multiple schools.",
    category: "Product",
    tools: ["Next.js", "FastAPI", "Redis", "PostgreSQL"],
    image: "/projects/noqueue.svg",
    year: "2026",
  },
  {
    slug: "velox",
    title: "VELOX",
    description:
      "Luxury automotive brand site with a gear-loader intro and buttery scroll storytelling.",
    category: "Client work",
    tools: ["Next.js", "GSAP", "Lenis", "Tailwind"],
    image: "/projects/velox.svg",
    year: "2026",
    wide: true,
  },
  {
    slug: "clientportal",
    title: "ClientPortal",
    description:
      "Freelancer client portal with shareable public project links — used in production by an NGO.",
    category: "Product",
    tools: ["Next.js", "TypeScript", "Prisma", "Supabase"],
    image: "/projects/clientportal.svg",
    year: "2025",
  },
  {
    slug: "tradebridge",
    title: "Tradebridge",
    description:
      "B2B matchmaking platform connecting Nigerian buyers with verified international suppliers.",
    category: "Client work",
    tools: ["Next.js", "Express", "Prisma", "Supabase"],
    image: "/projects/tradebridge.svg",
    year: "2025",
  },

  // ——— Visual Media (placeholders — swap images when ready) ———
  {
    slug: "brand-portraits",
    title: "Brand Portraits",
    description:
      "Portrait and headshot sessions for founders, creatives, and professionals — natural light, editorial grade.",
    category: "Visual Media",
    tools: ["Photography", "Lightroom", "Portraiture"],
    image: "/projects/placeholder-photo.svg",
    year: "2025",
    wide: true,
  },
  {
    slug: "event-coverage",
    title: "Event Coverage",
    description:
      "Photo and video coverage for tech meetups, conferences, and community events across Abuja.",
    category: "Visual Media",
    tools: ["Photography", "Videography", "Premiere Pro"],
    image: "/projects/placeholder-video.svg",
    year: "2026",
  },
  {
    slug: "content-reels",
    title: "Content Reels",
    description:
      "Short-form video content — product demos, behind-the-scenes, and social reels for brands.",
    category: "Visual Media",
    tools: ["Videography", "Editing", "Storytelling"],
    image: "/projects/placeholder-reel.svg",
    year: "2026",
  },

  // ——— AI & Automation ———
  {
    slug: "meetscribe",
    title: "MeetScribe",
    description:
      "Chrome extension that transcribes meetings in real-time using Whisper and summarises with Claude.",
    category: "AI",
    tools: ["Chrome Extension", "Whisper", "Claude API", "Manifest V3"],
    image: "/projects/placeholder-ai.svg",
    year: "2025",
    wide: true,
  },
];

/** Projects highlighted on the home page — one from each world */
export const featured = [
  projects.find((p) => p.slug === "definam")!,
  projects.find((p) => p.slug === "brand-portraits")!,
  projects.find((p) => p.slug === "meetscribe")!,
];