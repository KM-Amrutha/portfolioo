import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

interface HeroProps {
  githubUrl: string;
  linkedinUrl: string;
  contactEmail: string;
}

export function Hero({ githubUrl, linkedinUrl, contactEmail }: HeroProps) {
  return (
    <div className="flex h-svh flex-col">
      {/* Hero */}
      <section className="relative isolate flex min-h-0 flex-1 items-center overflow-hidden bg-background py-6 md:py-8">
        <div
          aria-hidden
          className="absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        />
        <div aria-hidden className="absolute inset-0 bg-radial-primary" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />

        <div className="relative mx-auto w-full max-w-4xl px-6 md:pl-16 lg:pl-24">
          <header className="flex flex-col items-start text-left animate-rise">
            <div className="mb-5 flex items-center gap-3">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-primary sm:text-xs">
                Available for engagements — Q3 2026
              </span>
            </div>

            <h1 className="relative flex items-baseline">
              <span className="absolute right-full top-0 bottom-0 mr-5 flex items-center whitespace-nowrap font-mono text-lg font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-xl">
                Hi, I'm
              </span>
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-[3.25rem] font-semibold leading-[0.95] tracking-[-0.03em] text-transparent sm:text-7xl md:text-[6.5rem]">
                Amrutha KM
              </span>
            </h1>

            <p className="mt-5 text-xl font-bold uppercase tracking-[0.25em] text-primary md:text-3xl">
              MERN Stack Developer
            </p>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-primary md:text-base">
              I build exceptional digital experiences
            </p>
            <p className="mt-5 max-w-[46ch] text-pretty text-base leading-relaxed text-muted-foreground md:mt-7 md:text-lg">
              <span className="font-medium text-foreground">
                I am a passionate full-stack developer, who builds well-architected, scalable
                systems. Clean code by default. Built with tomorrow's tools.
              </span>
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-start gap-3 md:mt-9">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-[0_10px_30px_-12px_color-mix(in_oklch,var(--primary)_60%,transparent)] transition-all hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-primary"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-7 flex items-center justify-start gap-3 md:mt-9">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid size-10 place-items-center rounded-full border border-foreground/10 text-foreground/60 transition-colors hover:border-primary hover:text-primary"
              >
                <Github className="size-4" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center rounded-full border border-foreground/10 text-foreground/60 transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="size-4" />
              </a>

              <a
                href={`mailto:${contactEmail}`}
                aria-label="Email"
                className="grid size-10 place-items-center rounded-full border border-foreground/10 text-foreground/60 transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </header>
        </div>
      </section>

      {/* Marquee */}
      <section
        aria-hidden
        className="relative shrink-0 overflow-hidden border-y border-foreground/5 bg-background py-3"
      >
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap font-serif-display text-xl text-foreground/30 md:text-3xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              {[
                "TypeScript",
                "React",
                "Node.js",
                "MongoDB",
                "PostgreSQL",
                "Docker",
                "AWS",
                "GraphQL",
                "Redis",
                "Next.js",
              ].map((t) => (
                <span key={t} className="flex items-center gap-16">
                  {t}
                  <span className="size-1.5 rounded-full bg-primary/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
