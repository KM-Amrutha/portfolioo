import { ExternalLink, Github } from "lucide-react";
import usermanage from "../assets/usermanage.png";
import skylife from "../assets/skylife.png";
import sportzzone from "../assets/sportzzone.png";

interface ProjectsProps {
  githubUrl: string;
}

const projects = [
  {
    number: "01",
    title: "Skylife",
    image: skylife,
    alt: "Confluence collaborative editor",
    description:
      "SkyLife — a solo-built, production-grade flight booking platform. Supporting aircraft adding, flight search, real-time seat locking, Stripe payments, user/provider/admin dashboards, from reservation to refund. A fully automated booking lifecycle — architected with zero shortcuts.",
    tags: [
      "JWT",
      "OAuth",
      "Redis",
      "Redux",
      "TailwindCSS",
      "React",
      "AWS S3",
      "MongoDB",
      "NodeJS",
      "TypeScript",
      "Stripe",
      "Axios",
      "Docker",
      "CI/CD",
    ],
    repoUrl: "https://github.com/KM-Amrutha/Skylife-client",
    url: "https://www.skylife.help",
  },
  {
    number: "02",
    title: "Sportzzone",
    image: sportzzone,
    alt: "Meridian commerce analytics",
    description:
      "A full-stack e-commerce platform exclusively for cricket products with secure user authentication, product browsing, shopping cart, wishlist, order placement, COD, and Razorpay payment integration. It also includes an admin panel for managing products, orders, and users, enabling complete control over the platform.",
    tags: ["JavaScript", "Node.js", "Express", "EJS", "RazorPay", "MongoDB", "Nodemailer"],
    repoUrl: "https://github.com/KM-Amrutha/Sportzzone",
    url: "https://www.sportzzone.help",
  },
  {
    number: "03",
    title: "User Management System",
    image: usermanage,
    alt: "Personal portfolio website",
    description:
      "A full-stack user management system with secure authentication, user registration, and profile management. Includes an admin dashboard for viewing, editing, and managing all users with role-based access control to ensure secure and organized user operations.",
    tags: ["Tailwind", "JWT", "Redux", "React", "JavaScript", "TypeScript"],
    repoUrl: "https://github.com/KM-Amrutha/REDUX--UserManagementSystem",
  },
];

export function Projects({ githubUrl }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="flex h-svh flex-col justify-center overflow-hidden bg-secondary py-4 md:py-6"
    >
      <div className="mx-auto flex h-full w-full max-w-[100rem] flex-col justify-center px-8 md:px-12">
        <div className="mb-5 flex shrink-0 flex-col items-center gap-2 text-center md:mb-7">
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
            / Projects
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
            My Projects
          </h2>
          <p className="max-w-[60ch] text-pretty text-sm leading-relaxed text-foreground md:text-base">
            Here are some of my recent projects that showcase my skills and expertise in building
            modern web applications.
          </p>
          <span className="mt-1 font-mono text-xs text-foreground/30">[ 01 — 03 ]</span>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {projects.map((p) => (
            <div
              key={p.number}
              className="group relative flex min-h-0 flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-foreground/5"
            >
              <div className="h-24 w-full shrink-0 overflow-hidden bg-secondary md:h-28 lg:h-32">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <div className="flex min-h-0 flex-1 flex-col overflow-hidden p-4">
                <div className="flex shrink-0 items-center gap-2">
                  <span className="font-mono text-xs font-medium text-primary">{p.number}</span>
                  <h3 className="text-base font-medium tracking-tight">{p.title}</h3>
                </div>
                <p className="mt-2 min-h-0 flex-1 overflow-y-auto text-pretty text-sm font-medium leading-relaxed text-foreground/85">
                  {p.description}
                </p>
                <div className="mt-3 flex max-h-10 shrink-0 flex-wrap gap-1 overflow-y-auto">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-secondary px-1.5 py-0.5 text-[9px] font-medium tracking-wider text-foreground/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-3 flex shrink-0 flex-wrap gap-x-4 gap-y-1">
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 self-start border-b border-transparent pb-0.5 text-xs font-medium text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                  >
                    <Github className="size-3.5" />
                    View code
                  </a>

                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-1.5 self-start border-b border-transparent pb-0.5 text-xs font-medium text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                    >
                      <ExternalLink className="size-3.5" />
                      Live site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all on GitHub */}
        <div className="mt-4 flex shrink-0 justify-center md:mt-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-5 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary md:text-sm"
          >
            <Github className="size-3.5" />
            See all projects on GitHub
            <ExternalLink className="size-3 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
