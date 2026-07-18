import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "../components/hero";
import { Navbar } from "../components/navbar";
import { About } from "../components/about";
import { Projects } from "../components/projects";
import { Techstack } from "../components/techstack";
import { Contact } from "../components/contact";

const CONTACT_EMAIL = "amruthakm707@gmail.com";
const GITHUB_URL = "https://github.com/KM-Amrutha ";
const LINKEDIN_URL = "https://linkedin.com/in/amrutha-km77";
const LOCATION = "Kochi, Kerala, India";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Your Name — Full Stack Developer" },
      {
        name: "description",
        content:
          "Senior Full Stack Developer specializing in MERN, TypeScript, Clean Architecture, and MVC.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <Hero githubUrl={GITHUB_URL} linkedinUrl={LINKEDIN_URL} contactEmail={CONTACT_EMAIL} />
      <About resumeMailto={`mailto:${CONTACT_EMAIL}?subject=Resume Request`} />
      <Projects githubUrl={GITHUB_URL} />
      <Techstack />
      <Contact
        contactEmail={CONTACT_EMAIL}
        githubUrl={GITHUB_URL}
        linkedinUrl={LINKEDIN_URL}
        location={LOCATION}
      />
    </>
  );
}
