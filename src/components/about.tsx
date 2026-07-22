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
            A passionate MERN STACK DEVELOPER with a creative edge
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
            <p className="text-pretty">
              I spent years working as an accountant, doing the same thing every day. At some point
              I realized that wasn't enough for me. I wanted something that would challenge me,
              something that kept changing and kept me learning. That's what led me to coding, and
              it's why I still love it today. Now I build full-stack web apps using the MERN stack —
              MongoDB, Express, React, and Node.js. I care about writing code that's clean and easy
              to understand, not just code that works. I like thinking through how things are built,
              not just making them look good on the surface. When I'm not coding, you can find me
              exploring emerging technologies, brainstorming new project ideas, or refining my
              skills through tech articles, tutorials, and hands-on experiments.
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
