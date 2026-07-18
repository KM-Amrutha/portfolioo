const TECH_MATRIX: { category: string; items: string[] }[] = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "GraphQL", "REST", "tRPC"] },
  { category: "Data", items: ["MongoDB", "PostgreSQL", "Redis", "Prisma", "Mongoose", "SQL"] },
  {
    category: "Platform",
    items: ["Docker", "AWS", "GitHub Actions", "Nginx", "Vercel", "Cloudflare"],
  },
];

const TECH_STACK: { name: string; icon: string; color?: string }[] = [
  { name: "React", icon: "devicon-react-original colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain colored" },
  { name: "GraphQL", icon: "devicon-graphql-plain colored" },
  { name: "Redis", icon: "devicon-redis-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
];

export function Techstack() {
  return (
    <>
      {/* Technical Matrix */}
      <section id="stack" className="border-t border-foreground/5 bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
                / Stack
              </span>
              <h2 className="mt-4 text-5xl font-medium tracking-tight md:text-6xl">
                Technical <span className="font-serif-display text-primary">matrix</span>
              </h2>
            </div>
            <span className="font-mono text-xs text-foreground/30">v.2026</span>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-x-8 md:divide-x md:divide-foreground/10">
            {TECH_MATRIX.map((col) => (
              <div key={col.category} className="md:px-6 first:md:pl-0">
                <div className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-primary">
                  {col.category}
                </div>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-base text-foreground/80"
                    >
                      <span className="size-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="border-t border-foreground/5 bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
              / Toolkit
            </span>
            <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">
              Tech <span className="font-serif-display text-primary">Stack</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[55ch] text-pretty text-sm text-muted-foreground">
              The core technologies I use to build modern, scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center justify-center rounded-2xl bg-card p-6 ring-1 ring-foreground/5 transition-all hover:-translate-y-1 hover:ring-primary/20"
              >
                <i className={`${tech.icon} text-4xl transition-transform group-hover:scale-110`} />
                <span className="mt-4 text-center text-xs font-medium text-foreground/70">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
