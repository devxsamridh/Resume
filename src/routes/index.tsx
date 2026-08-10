import { createFileRoute } from "@tanstack/react-router";
import {
  useEffect,
  useMemo,
  useState,
  type ComponentType,
  type CSSProperties,
  type ReactNode,
} from "react";

import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  Sparkles,
  Terminal,
  Code2,
  Database,
  Brain,
  Wrench,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

import {
  SiCplusplus,
  SiC,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTensorflow,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiLinux,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiVercel,
  SiFirebase,
  SiX,
} from "react-icons/si";

import samridhPhotoUrl from "@/assets/portfolio.jpg";

/* ---------------- types ---------------- */

type IconType = ComponentType<{
  className?: string;
  style?: CSSProperties;
}>;

/* ---------------- route ---------------- */

export const Route = createFileRoute("/")({
  component: Portfolio,
});

/* ---------------- data ---------------- */

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

const ROLES = [
  "Full Stack Developer",
  "AI Engineer",
  "Backend Developer",
  "React Developer",
  "Open Source Learner",
];

const SKILLS: {
  title: string;
  icon: IconType;
  items: {
    name: string;
    icon: IconType;
    color: string;
  }[];
}[] = [
  {
    title: "Languages",
    icon: Code2,
    items: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
    ],
  },

  {
    title: "Frontend",
    icon: Sparkles,
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
    ],
  },

  {
    title: "Backend",
    icon: Database,
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "REST APIs", icon: Database, color: "#4F8CFF" },
    ],
  },

  {
    title: "AI / ML",
    icon: Brain,
    items: [
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "NLP", icon: Brain, color: "#00D4AA" },
      {
        name: "Sentiment Analysis",
        icon: Brain,
        color: "#00D4AA",
      },
    ],
  },

  {
    title: "Core CS",
    icon: Terminal,
    items: [
      { name: "DSA", icon: Terminal, color: "#4F8CFF" },
      { name: "Operating Systems", icon: SiLinux, color: "#FCC624" },
      { name: "DBMS", icon: Database, color: "#4F8CFF" },
      { name: "Networks", icon: Terminal, color: "#00D4AA" },
      { name: "OOP", icon: Code2, color: "#4F8CFF" },
    ],
  },

  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
];

const PROJECTS = [
  {
    name: "Memory Companion AI",
    tagline: "Virtual Saathi",
    description:
      "An AI-powered empathetic support system that converses naturally, remembers past interactions, understands emotional context, and responds with warmth.",
    stack: [
      "NLP",
      "Sentiment Analysis",
      "Contextual Memory",
      "Chatbots",
      "Python",
    ],
    href: null,
    accent:
      "from-[oklch(0.72_0.16_258)] to-[oklch(0.80_0.15_175)]",
  },

  {
    name: "Homico",
    tagline: "Home services & construction platform",
    description:
      "A full-featured platform for booking repair services, ordering materials, and managing end-to-end home-building workflows.",
    stack: ["React", "Django", "DRF", "PostgreSQL", "JavaScript"],
    href: null,
    accent:
      "from-[oklch(0.72_0.16_258)] to-[oklch(0.65_0.20_305)]",
  },
];

const EXPERIENCE = [
  {
    when: "2022",
    title: "Class 10 — SSC",
    where: "Creane Memorial High School",
    body:
      "Built the foundation. Discovered a love for problem solving and computers.",
    icon: GraduationCap,
  },

  {
    when: "2024",
    title: "Class 12 — PCM",
    where: "City Public School",
    body:
      "Deep dive into math and physics; started exploring programming seriously.",
    icon: GraduationCap,
  },

  {
    when: "2024 — Present",
    title: "B.E. Information Science & Engineering",
    where: "Siddaganga Institute of Technology, Tumkur",
    body:
      "Pre-final year. Focused on AI/ML, distributed systems, and shipping real full-stack products.",
    icon: GraduationCap,
  },
];

/* ---------------- components ---------------- */

function useTypewriter(
  words: string[],
  speed = 70,
  pause = 1600
) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];

    const done = !deleting && text === current;
    const cleared = deleting && text === "";

    const delay = done
      ? pause
      : deleting
        ? speed / 2
        : speed;

    const timer = setTimeout(() => {
      if (done) {
        setDeleting(true);
        return;
      }

      if (cleared) {
        setDeleting(false);
        setI((value) => value + 1);
        return;
      }

      setText(
        deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

/* ---------------- navigation ---------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto flex justify-center px-4">
      <nav
        className={`flex h-14 w-full max-w-4xl items-center justify-between rounded-full border border-[color:var(--hairline)] px-5 transition-all duration-300 ${
          scrolled
            ? "glass shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]"
            : "bg-[color:var(--surface)]/40 backdrop-blur-md"
        }`}
      >
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight"
        >
          samridh
          <span className="text-[color:var(--accent)]">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-[color:var(--surface-elevated)] hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-elevated)] px-4 py-1.5 text-sm font-medium transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}

/* ---------------- hero ---------------- */

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div
        className="absolute inset-8 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, var(--accent) 0%, transparent 60%), radial-gradient(circle at 70% 70%, var(--accent-mint) 0%, transparent 55%)",
        }}
      />

      <div className="animate-float glass relative flex h-full w-full flex-col overflow-hidden rounded-3xl p-6 shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />

          <span className="ml-2 font-mono">
            ~/samridh — zsh
          </span>
        </div>

        <div className="mt-6 flex flex-1 flex-col items-center justify-center">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-full opacity-60 blur-2xl"
              style={{
                background:
                  "conic-gradient(from 120deg, var(--accent), var(--accent-mint), var(--accent))",
              }}
            />

            <div className="relative h-44 w-44 overflow-hidden rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-elevated)] ring-1 ring-[color:var(--accent)]/20">
              <img
                src={samridhPhotoUrl}
                alt="Samridh Shaurya Singh"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          <p className="mt-6 font-mono text-xs text-muted-foreground">
            <span className="text-[color:var(--accent-mint)]">
              $
            </span>{" "}
            whoami
          </p>

          <p className="mt-1 font-mono text-sm">
            samridh — engineer, builder, learner
          </p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center font-mono text-[10px] text-muted-foreground">
          <div className="rounded-xl border border-[color:var(--hairline)] py-2">
            <div className="text-sm text-foreground">
              3+ yrs
            </div>
            coding
          </div>

          <div className="rounded-xl border border-[color:var(--hairline)] py-2">
            <div className="text-sm text-foreground">
              10+
            </div>
            projects
          </div>

          <div className="rounded-xl border border-[color:var(--hairline)] py-2">
            <div className="text-sm text-foreground">
              ∞
            </div>
            curiosity
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2">
        <div className="animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface)] px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent-mint)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--accent-mint)]" />
            </span>

            Available for internships & collaborations
          </div>

          <h1 className="font-display text-6xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            Hi, I'm{" "}
            <span className="text-[color:var(--accent)]">
              Samridh
            </span>
          </h1>

          <h2 className="mt-5 font-display text-2xl font-medium text-muted-foreground md:text-3xl">
            <span className="caret text-foreground">
              {typed}
            </span>
          </h2>

          <p className="mt-6 max-w-lg font-display text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
            I build scalable web applications, intelligent AI
            solutions, and clean user experiences with modern
            technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[color:var(--accent)] px-4 py-2.5 text-sm font-medium text-[color:var(--accent-foreground)] transition-transform hover:-translate-y-0.5"
            >
              View Projects

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--hairline)] bg-[color:var(--surface)] px-4 py-2.5 text-sm font-medium transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a
              href="https://github.com/devxsamridh"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/samridh-shaurya-singh-139063336/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="https://x.com/samridh_4606"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="X"
            >
              <SiX className="h-5 w-5" />
            </a>

            <a
              href="mailto:samridh7781@gmail.com"
              className="transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>

            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin className="h-4 w-4" />
              Bengaluru, India
            </span>
          </div>
        </div>

        <div className="animate-rise [animation-delay:120ms]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

/* ---------------- section ---------------- */

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
            {eyebrow}
          </p>

          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
}

/* ---------------- about ---------------- */

function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title="Engineer at heart, learner by design."
    >
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground md:col-span-3">
          <p>
            I'm a pre-final year student at{" "}
            <span className="text-foreground">
              Siddaganga Institute of Technology, Tumkur
            </span>
            , pursuing Information Science and Engineering,
            driven by an urge to understand how logic and
            creativity can coexist in a single line of code.
          </p>

          <p>
            My work sits at the intersection of{" "}
            <span className="text-foreground">
              full-stack engineering
            </span>{" "}
            and{" "}
            <span className="text-foreground">
              applied AI
            </span>{" "}
            — building products that are fast, thoughtful, and
            genuinely useful. I care about clean architecture,
            sharp interfaces, and shipping ideas end-to-end.
          </p>

          <p>
            When I'm not building, I'm grinding DSA, exploring
            backend systems, or reading about the next frontier
            of AI infrastructure.
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="glass rounded-3xl p-6">
            <h3 className="mb-4 font-display font-medium">
              What I'm focused on
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Building AI-native full-stack products",
                "Scalable backend systems & clean APIs",
                "Data Structures, Algorithms & problem solving",
                "Cloud, DevOps & shipping to production",
                "Contributing to open source",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- skills ---------------- */

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="Tools I reach for."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map(({ title, icon: Icon, items }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 hover:shadow-[var(--shadow-glow)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-2xl bg-[color:var(--surface-elevated)] text-[color:var(--accent)]">
                <Icon className="h-4 w-4" />
              </div>

              <h3 className="font-display text-base font-medium">
                {title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {items.map(
                ({ name, icon: ItemIcon, color }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-elevated)] px-3 py-1.5 text-xs font-medium text-foreground/90 transition-all hover:border-[color:var(--accent)]/50 hover:bg-[color:var(--surface)]"
                  >
                    <ItemIcon
                      className="h-4 w-4 shrink-0"
                      style={{ color }}
                    />

                    {name}
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- projects ---------------- */

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 — Selected Work"
      title="Things I've built."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            className="group relative overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/40"
          >
            <div
              className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${project.accent} opacity-[0.12] blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
            />

            <div className="relative">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {project.name}
                  </h3>

                  <p className="mt-1 text-sm text-[color:var(--accent)]">
                    {project.tagline}
                  </p>
                </div>

                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-xl border border-[color:var(--hairline)] px-2 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Github className="h-4 w-4" />
                  Repository coming soon
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <a
        href="https://github.com/devxsamridh"
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        See more on GitHub
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </Section>
  );
}

/* ---------------- experience ---------------- */

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 — Journey"
      title="A short timeline."
    >
      <ol className="relative border-l border-[color:var(--hairline)]">
        {EXPERIENCE.map(
          ({ when, title, where, body, icon: Icon }) => (
            <li
              key={title}
              className="mb-10 ml-6 last:mb-0"
            >
              <span className="absolute -left-3.5 grid h-7 w-7 place-items-center rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-elevated)] text-[color:var(--accent)]">
                <Icon className="h-3.5 w-3.5" />
              </span>

              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {when}
              </p>

              <h3 className="mt-1 font-display text-lg font-medium">
                {title}
              </h3>

              <p className="text-sm text-[color:var(--accent)]">
                {where}
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </li>
          )
        )}
      </ol>
    </Section>
  );
}

/* ---------------- resume ---------------- */

const RESUME_URL = "/Aug2026-Resume.pdf";

function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="05 — Resume"
      title="My resume."
    >
      <div className="rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface)] p-8 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h3 className="font-display text-xl font-medium">
              Samridh Shaurya Singh — Resume
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A one-page summary of my education, projects,
              technical skills, and experience across full-stack
              development and AI/ML.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
              {[
                "Education",
                "Projects",
                "Skills",
                "Achievements",
              ].map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-[color:var(--hairline)] px-3 py-1"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={RESUME_URL}
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-[color:var(--accent)] px-4 py-2.5 text-sm font-medium text-[color:var(--accent-foreground)] transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--hairline)] px-4 py-2.5 text-sm font-medium transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              View
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- contact ---------------- */

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">(
    "idle"
  );

  const mailto = useMemo(
    () => "mailto:samridh7781@gmail.com",
    []
  );

  return (
    <Section
      id="contact"
      eyebrow="06 — Contact"
      title="Let's build something."
    >
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-6 text-sm text-muted-foreground md:col-span-2">
          <p className="text-[15px] leading-relaxed">
            I'm open to internships, freelance work, and
            interesting collaborations — especially anything at
            the intersection of full-stack and AI. The fastest
            way to reach me is email.
          </p>

          <div className="space-y-3">
            <a
              href={mailto}
              className="flex items-center gap-3 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface)] px-4 py-3 transition-colors hover:border-[color:var(--accent)]/40"
            >
              <Mail className="h-4 w-4 text-[color:var(--accent)]" />

              <span className="text-foreground">
                samridh7781@gmail.com
              </span>
            </a>

            <a
              href="https://github.com/devxsamridh"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface)] px-4 py-3 transition-colors hover:border-[color:var(--accent)]/40"
            >
              <Github className="h-4 w-4 text-[color:var(--accent)]" />

              <span className="text-foreground">
                github.com/devxsamridh
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/samridh-shaurya-singh-139063336/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface)] px-4 py-3 transition-colors hover:border-[color:var(--accent)]/40"
            >
              <Linkedin className="h-4 w-4 text-[color:var(--accent)]" />

              <span className="text-foreground">
                Samridh Shaurya Singh
              </span>
            </a>
          </div>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();

            const formData = new FormData(event.currentTarget);

            const params = new URLSearchParams({
              subject: String(
                formData.get("subject") || "Hello Samridh"
              ),
              body: `From: ${formData.get(
                "name"
              )} <${formData.get(
                "email"
              )}>\n\n${formData.get("message")}`,
            });

            window.location.href = `${mailto}?${params.toString()}`;

            setStatus("sent");
          }}
          className="glass space-y-4 rounded-3xl p-6 md:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              name="name"
              label="Name"
              placeholder="Your name"
            />

            <Field
              name="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <Field
            name="subject"
            label="Subject"
            placeholder="What's this about?"
          />

          <div>
            <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Message
            </label>

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me a little about your project or idea…"
              className="w-full resize-none rounded-xl border border-[color:var(--hairline)] bg-[color:var(--surface-elevated)] px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-[color:var(--accent)]"
            />
          </div>

          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-xl bg-[color:var(--accent)] px-4 py-2.5 text-sm font-medium text-[color:var(--accent-foreground)] transition-transform hover:-translate-y-0.5"
          >
            {status === "sent"
              ? "Opening your mail app…"
              : "Send message"}

            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </form>
      </div>
    </Section>
  );
}

/* ---------------- field ---------------- */

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>

      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-[color:var(--hairline)] bg-[color:var(--surface-elevated)] px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-[color:var(--accent)]"
      />
    </div>
  );
}

/* ---------------- footer ---------------- */

function Footer() {
  return (
    <footer className="hairline-b border-t border-[color:var(--hairline)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <p>
          © {new Date().getFullYear()} Samridh Shaurya Singh.
          Built with care.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/devxsamridh"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/samridh-shaurya-singh-139063336/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href="mailto:samridh7781@gmail.com"
            className="hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>

          <a
            href="#top"
            className="hover:text-foreground"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- main portfolio ---------------- */

function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}