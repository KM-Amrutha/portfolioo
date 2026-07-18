import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from "@/lib/send-contact-email";

interface ContactProps {
  contactEmail: string;
  githubUrl: string;
  linkedinUrl: string;
  location: string;
}

export function Contact({ contactEmail, githubUrl, linkedinUrl, location }: ContactProps) {
  return (
    <div className="dark flex h-svh flex-col bg-background text-foreground">
      <section
        id="contact"
        className="flex min-h-0 flex-1 items-center border-t border-foreground/5 py-8 md:py-10"
      >
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-6 text-center md:mb-8">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Get In <span className="font-serif-display text-primary">Touch</span>
            </h2>
            <p className="mx-auto mt-2 max-w-[55ch] text-pretty text-sm text-muted-foreground">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach
              out!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Contact Info */}
            <div className="rounded-2xl bg-card p-6 ring-1 ring-foreground/5 md:p-7">
              <h3 className="text-lg font-medium">Contact Information</h3>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium">Email</div>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="mt-0.5 block break-all text-sm text-muted-foreground hover:text-primary"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Location</div>
                    <div className="mt-0.5 text-sm text-muted-foreground">{location}</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-secondary p-4 text-xs leading-relaxed text-muted-foreground md:text-sm">
                I'm currently open to freelance opportunities, full-time positions, and interesting
                projects. Let's create something amazing together!
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid size-9 place-items-center rounded-full border border-foreground/10 text-foreground/60 transition-colors hover:border-primary hover:text-primary"
                >
                  <Github className="size-4" />
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid size-9 place-items-center rounded-full border border-foreground/10 text-foreground/60 transition-colors hover:border-primary hover:text-primary"
                >
                  <Linkedin className="size-4" />
                </a>
                <a
                  href={`mailto:${contactEmail}`}
                  aria-label="Email"
                  className="grid size-9 place-items-center rounded-full border border-foreground/10 text-foreground/60 transition-colors hover:border-primary hover:text-primary"
                >
                  <Mail className="size-4" />
                </a>
              </div>
            </div>

            {/* Message Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="shrink-0 border-t border-foreground/5 py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 md:flex-row">
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            &copy; {new Date().getFullYear()} Amrutha K M — Built for Performance
          </span>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      await sendContactEmail({ data: form });
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const input =
    "mt-1.5 w-full rounded-lg border border-foreground/10 bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-primary/50";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-card p-6 ring-1 ring-foreground/5 md:p-7">
      <h3 className="text-lg font-medium">Send Me a Message</h3>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Name</span>
          <input
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className={input}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input
            required
            type="email"
            maxLength={255}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Your email"
            className={input}
          />
        </label>
      </div>

      <label className="mt-3 block">
        <span className="text-sm font-medium">Subject</span>
        <input
          maxLength={150}
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          placeholder="Subject"
          className={input}
        />
      </label>

      <label className="mt-3 block">
        <span className="text-sm font-medium">Message</span>
        <textarea
          required
          maxLength={1000}
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Your message"
          className={`${input} resize-y`}
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 disabled:opacity-60"
      >
        <Send className="size-4" />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && (
        <p className="mt-3 text-sm text-primary">
          Message sent — thanks, I'll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-destructive">Couldn't send: {errorMsg}</p>
      )}
    </form>
  );
}
