export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 shrink-0 border-b border-foreground/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <span className="font-mono text-sm font-medium tracking-tight">AMRUTHA.</span>
        <div className="hidden gap-6 sm:flex">
          <a
            href="#about"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Projects
          </a>
          <a
            href="#stack"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Stack
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
