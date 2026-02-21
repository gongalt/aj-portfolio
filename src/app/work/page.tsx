import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Work | Adrian Jenson",
  description:
    "Portfolio of Adrian Jenson — AI SaaS platforms, enterprise web applications, mobile apps, and AI micro-products built for clients and as side projects.",
  openGraph: {
    title: "Work | Adrian Jenson",
    description:
      "AI SaaS platforms, enterprise web applications, mobile apps, and AI micro-products.",
    url: "https://adrianjenson.com/work",
  },
};

/* ── Status badge helper ── */
type Status = "Live" | "Beta" | "In Development";
const statusStyles: Record<Status, string> = {
  Live: "bg-green-accent/10 text-green-accent border border-green-accent/30",
  Beta: "bg-yellow-400/10 text-yellow-400 border border-yellow-400/30",
  "In Development": "bg-slate/10 text-slate-light border border-slate/30",
};

function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`font-mono text-xs px-2.5 py-1 rounded ${statusStyles[status]}`}>
      {status}
    </span>
  );
}

/* ── External link icon ── */
function ExternalIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/* ── GitHub icon ── */
function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

/* ── Data ── */
const featuredProjects = [
  {
    title: "Posteridy.ai",
    subtitle: "AI Business Credit Intelligence",
    description:
      "Full-stack AI SaaS platform that helps entrepreneurs discover and qualify for business funding. Features an AI credit coach powered by OpenAI, semantic matching via pgvector, a 31-point compliance checklist, Stripe subscriptions, and a nationwide directory of lenders, CDFIs, and credit unions. Built end-to-end — NestJS API, Next.js 15 frontend, PostgreSQL with vector embeddings, Redis caching, and AWS infrastructure.",
    tech: ["Next.js 15", "NestJS", "PostgreSQL", "pgvector", "OpenAI", "Stripe", "Redis", "AWS"],
    liveUrl: "https://posteridy.ai",
    githubUrl: null,
    status: "Live" as Status,
  },
  {
    title: "Bermwood Real Estate Platform",
    subtitle: "Property Search & Listings",
    description:
      "A modern real estate platform for property buyers and agents. Features interactive Google Maps property search, real-time listing updates, agent dashboards, and a streamlined property inquiry flow. Architected and built during a 4-month senior developer contract.",
    tech: ["Next.js", "MUI", "Google Maps API", "Supabase", "TypeScript"],
    liveUrl: null,
    githubUrl: null,
    status: "Live" as Status,
  },
  {
    title: "Malogica HPC Cloud Platform",
    subtitle: "Enterprise Cloud Dashboard",
    description:
      "A high-performance computing cloud management platform serving enterprise clients. Led a team of 4 frontend engineers to build a comprehensive dashboard for compute resource management, billing, and team access controls using Angular and TypeScript.",
    tech: ["Angular", "TypeScript", "RxJS", "Cypress", "Node.js", "PostgreSQL"],
    liveUrl: null,
    githubUrl: null,
    status: "Live" as Status,
  },
];

const otherProjects = [
  {
    title: "Docuvera SaaS Content Platform",
    description:
      "Cloud-based technical content authoring platform for enterprise documentation teams. Supports DITA XML structured authoring and multi-channel publishing.",
    tech: ["Angular", "Node.js", ".NET", "PostgreSQL", "AWS"],
    liveUrl: "https://docuvera.com",
    githubUrl: null,
  },
  {
    title: "Logmaster Transport Compliance",
    description:
      "Mobile app for Australian truck drivers to manage logbooks, fatigue compliance, and route reporting. Offline-first with real-time sync via Firebase.",
    tech: ["Ionic", "Angular", "Firebase", "GCP"],
    liveUrl: "https://logmaster.com.au",
    githubUrl: null,
  },
  {
    title: "Mandarin Oriental Residences",
    description:
      "Luxury real estate marketing site for Mandarin Oriental Residences Grand Cayman — 42 private oceanfront residences from $8M+. Features video hero, multi-language support (EN/PT), lead capture with admin dashboard, UTM tracking, and Calendly scheduling integration. Built for agent Dayanne Costa at Compass.",
    tech: ["Angular 19", "Tailwind CSS", "Firebase", "Firestore"],
    liveUrl: "https://dayanne-website.web.app",
    githubUrl: null,
  },
  {
    title: "Upwork Freelance Projects",
    description:
      "Collection of full-stack applications delivered for clients across e-commerce, fintech, and SaaS. 100% Job Success Score across all engagements.",
    tech: ["React", "Angular", "Node.js", "Firebase"],
    liveUrl: null,
    githubUrl: null,
  },
];

const aiProjects: {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  status: Status;
}[] = [
  {
    title: "Contract Crafter",
    description:
      "AI-powered legal contract generator. Input your deal terms and get a professionally structured contract in seconds. Supports NDAs, service agreements, and freelance contracts.",
    tech: ["Next.js", "OpenAI", "Stripe", "Vercel"],
    liveUrl: null,
    githubUrl: null,
    status: "Live",
  },
  {
    title: "DreamTales",
    description:
      "AI bedtime story generator for parents. Enter your child's name, favourite characters, and a theme — get a unique, age-appropriate story with illustrated scenes.",
    tech: ["Next.js", "OpenAI", "Replicate", "Firebase"],
    liveUrl: null,
    githubUrl: null,
    status: "Live",
  },
  {
    title: "Memefy",
    description:
      "AI meme generator that creates contextually relevant memes from any text prompt. Picks the right template, generates the caption, and lets you download or share instantly.",
    tech: ["Next.js", "OpenAI", "Replicate", "Cloudinary"],
    liveUrl: null,
    githubUrl: null,
    status: "Beta",
  },
  {
    title: "SnapSuit",
    description:
      "AI professional headshot generator. Upload 10 casual photos and get back 50+ polished LinkedIn-ready headshots in different outfits and backgrounds.",
    tech: ["Next.js", "Replicate", "AWS S3", "Stripe"],
    liveUrl: null,
    githubUrl: null,
    status: "Live",
  },
  {
    title: "TimeStampIt",
    description:
      "AI-powered video search tool. Transcribes video content and lets you search for any spoken moment with natural language queries — returns exact timestamps.",
    tech: ["Next.js", "OpenAI Whisper", "Pinecone", "Node.js"],
    liveUrl: null,
    githubUrl: null,
    status: "In Development",
  },
];

export default function WorkPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

      {/* ── Header ── */}
      <section aria-labelledby="work-heading" className="mb-16">
        <SectionHeading number="01" title="Work" />
        <p className="text-slate leading-relaxed max-w-2xl">
          A selection of projects I&apos;ve built — from enterprise platforms and client contracts
          to AI side projects I ship for fun. Source code is private for most client work.
        </p>
      </section>

      {/* ── Featured Projects ── */}
      <section aria-labelledby="featured-heading" className="mb-20">
        <h2
          id="featured-heading"
          className="font-mono text-green-accent text-sm tracking-wider mb-8"
        >
          Featured Projects
        </h2>
        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="bg-navy-light rounded-lg p-8 border border-navy-lighter hover:border-slate/40 transition-colors duration-200 group"
              aria-label={project.title}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-slate-lightest font-semibold text-xl group-hover:text-green-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="font-mono text-sm text-green-accent">{project.subtitle}</p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4" role="group" aria-label={`Links for ${project.title}`}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-green-accent transition-colors duration-200"
                      aria-label={`View ${project.title} source on GitHub`}
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-green-accent transition-colors duration-200"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate leading-relaxed mb-6">{project.description}</p>

              <ul className="flex flex-wrap gap-2" aria-label={`Technologies used in ${project.title}`}>
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="font-mono text-xs text-green-accent bg-green-accent/10 border border-green-accent/20 px-3 py-1 rounded"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── Other Projects ── */}
      <section aria-labelledby="other-heading" className="mb-20">
        <h2
          id="other-heading"
          className="font-mono text-green-accent text-sm tracking-wider mb-8"
        >
          Other Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {otherProjects.map((project) => (
            <article
              key={project.title}
              className="bg-navy-light rounded-lg p-6 border border-navy-lighter hover:border-slate/40 hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              aria-label={project.title}
            >
              {/* Top row: folder + links */}
              <div className="flex items-center justify-between mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-green-accent"
                  aria-hidden="true"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-green-accent transition-colors duration-200"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-green-accent transition-colors duration-200"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-slate-lightest font-semibold mb-2">{project.title}</h3>
              <p className="text-slate text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 mt-auto" aria-label={`Technologies used in ${project.title}`}>
                {project.tech.map((t) => (
                  <li key={t} className="font-mono text-xs text-slate">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── AI Projects ── */}
      <section aria-labelledby="ai-heading">
        <h2
          id="ai-heading"
          className="font-mono text-green-accent text-sm tracking-wider mb-8"
        >
          AI Side Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiProjects.map((project) => (
            <article
              key={project.title}
              className="bg-navy-light rounded-lg p-6 border border-navy-lighter hover:border-green-accent/30 hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              aria-label={project.title}
            >
              {/* Top row: folder + status + links */}
              <div className="flex items-start justify-between mb-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-green-accent"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div className="flex items-center gap-2">
                  <StatusBadge status={project.status} />
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-green-accent transition-colors duration-200"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-slate-lightest font-semibold mb-2">{project.title}</h3>
              <p className="text-slate text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 mt-auto" aria-label={`Technologies used in ${project.title}`}>
                {project.tech.map((t) => (
                  <li key={t} className="font-mono text-xs text-slate">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
