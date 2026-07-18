import { ExternalLink, Github } from "lucide-react";
import realtimeImg from "../assets/project-realtime.jpg";
import commerceImg from "../assets/project-commerce.jpg";

interface ProjectsProps {
  githubUrl: string;
}

const projects = [
  {
    number: "01",
    title: "Confluence",
    image: realtimeImg,
    alt: "Confluence collaborative editor",
    description:
      "Real-time collaborative editor with CRDTs, WebSockets, and a Node.js sync server.",
    tags: ["Socket.io", "Yjs", "React", "Redis"],
    repoUrl: "https://github.com/yourhandle/confluence",
  },
  {
    number: "02",
    title: "Meridian Commerce",
    image: commerceImg,
    alt: "Meridian commerce analytics",
    description:
      "Headless commerce platform with a MERN storefront and a DDD-inspired order domain.",
    tags: ["Next.js", "Express", "Stripe", "PostgreSQL"],
    repoUrl: "https://github.com/yourhandle/meridian-commerce",
  },
  {
    number: "03",
    title: "Portfolio Site",
    image: realtimeImg,
    alt: "Personal portfolio website",
    description:
      "A TanStack Router + Vite SSR portfolio with a custom design system and animated sections.",
    tags: ["TanStack Router", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/yourhandle/portfolio",
  },
];

export function Projects({ githubUrl }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="flex h-svh flex-col justify-center bg-secondary py-8 md:py-10"
    >
      <div className="mx-auto w-full max-w-[100rem] px-8 md:px-12">
        <div className="mb-8 flex items-end justify-between gap-4 md:mb-10">
          <div className="max-w-[40ch]">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
              / Projects
            </span>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              Selected <span className="font-serif-display text-primary">builds</span>
            </h2>
          </div>
          <span className="font-mono text-xs text-foreground/30">[ 01 — 03 ]</span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.number}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-foreground/5"
            >
              <div className="aspect-[3/2] w-full overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-medium text-primary">{p.number}</span>
                  <h3 className="text-lg font-medium tracking-tight">{p.title}</h3>
                </div>
                <p className="mt-2.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 self-start border-b border-transparent pb-0.5 text-sm font-medium text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                >
                  <Github className="size-4" />
                  View code
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View all on GitHub */}
        <div className="mt-8 flex justify-center md:mt-10">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Github className="size-4" />
            See all projects on GitHub
            <ExternalLink className="size-3.5 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
