import { FileText } from "lucide-react";
import profileImg from "../assets/profile.JPG";

interface AboutProps {
  resumeMailto: string;
}

export function About({ resumeMailto }: AboutProps) {
  return (
    <section id="about" className="border-t border-foreground/5 bg-background py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-12">
        <div className="md:order-2 md:col-span-4">
          <span className="font-mono text-xs font-large uppercase tracking-widest text-primary">
            / About
          </span>
          <div className="mt-6 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5">
            <img src={profileImg} alt="Amrutha KM" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="md:order-1 md:col-span-8">
          <p className="text-pretty text-2xl font-extrabold leading-snug tracking-tight text-primary md:text-3xl">
            A passionate MERN STACK DEVELOPER with a creative edge.
          </p>
          <div className="mt-8 space-y-1.5 text-sm leading-relaxed text-foreground/70 md:text-base">
            <p className="text-pretty">
              I'm Amrutha, a full-stack developer specializing in building exceptional digital
              experiences. With a strong foundation in the MERN stack (MongoDB, Express.js, React,
              and Node.js), I create dynamic and user-friendly web applications that solve
              real-world problems.
            </p>
            <p className="text-pretty">
              I spent years as an accountant, doing the same thing every single day — until I
              realized that wasn't enough. I wanted something that kept changing, kept teaching me,
              kept me curious. Web development gave me exactly that. Now I channel that same
              curiosity into writing clean, efficient, scalable code.
            </p>
            <p className="text-pretty">
              When I'm not coding, you can find me exploring emerging technologies, brainstorming
              new project ideas, or refining my skills through tech articles, tutorials, and
              hands-on experiments.
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
