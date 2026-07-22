import { FileText } from "lucide-react";

interface AboutProps {
  resumeMailto: string;
}

export function About({ resumeMailto }: AboutProps) {
  return (
    <section id="about" className="border-t border-foreground/5 bg-background py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
            / About
          </span>
        </div>
        <div className="md:col-span-8">
          <p className="text-pretty text-2xl font-medium leading-snug tracking-tight text-foreground/90 md:text-3xl">
            I approach software the way a structural engineer approaches a building — foundations
            first, load paths second, finish last.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
            <p className="text-pretty">
              MERN-stack developer building products from bootstrapped MVPs to systems serving
              hundreds of thousands of requests a day. I care about readable domain models, honest
              tests, and interfaces that don't lie to their callers. My favourite work sits at the
              seam between product and infrastructure: designing boundaries, extracting services
              when they earn their weight, and keeping the codebase a place engineers want to come
              back to.
            </p>
          </div>

          {/* Resume request button */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={resumeMailto}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-12px_color-mix(in_oklch,var(--primary)_60%,transparent)] transition-all hover:-translate-y-0.5"
            >
              <FileText className="size-4" />
              Ask me for my Resume
            </a>
            <span className="font-mono text-xs text-foreground/40">
              → opens your email to request a copy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
