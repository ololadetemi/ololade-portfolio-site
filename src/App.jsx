import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  ChevronLeft,
  ExternalLink,
  GraduationCap,
  Layers,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", hash: "#/" },
  { label: "About", hash: "#/about" },
  { label: "Case Studies", hash: "#/case-studies" },
  { label: "Contact", hash: "#/contact" },
];

const caseStudies = [
  {
    slug: "ai-literacy",
    title: "AI Literacy Program",
    eyebrow: "Featured Case Study",
    summary:
      "Designing age-appropriate, ethical, and practical AI education for learners ages 8–30.",
    icon: Brain,
    heroNote:
      "A learner-centered AI literacy program structured for two distinct age bands, with ethics and application built into the design from the design start.",
    challenge:
      "Young people increasingly use AI tools without clear guidance on how AI works, when to trust it, or how to use it responsibly. Existing learning is often either too technical or too shallow.",
    objectives: [
      "Build foundational AI understanding",
      "Foster responsible, ethical AI engagement",
      "Promote confident decision-making with AI",
      "Support academic and career-related AI use",
      "Prepare learners for academic, vocational, and professional pathways",
    ],
    approach: [
      "Modular curriculum design",
      "Scaffolded learning from simple concepts to application",
      "Active learning over passive consumption",
      "AI as a copilot, not an autopilot",
      "Backward design with formative assessment and reflection",
    ],
    metrics: [
      "Pre- and post-learning knowledge checks",
      "Scenario-based assessments",
      "Learner reflections on ethical decision-making",
      "Participation and engagement tracking",
    ],
    contribution: [
      "Conducted learner and needs analysis",
      "Designed modular curricula for two age groups",
      "Developed assessment and evaluation frameworks",
      "Integrated AI tools to support rather than replace learning",
      "Ensured ethical alignment and accessibility",
    ],
    subStudies: [
      {
        title: "Foundations and Awareness",
        audience: "Ages 8–17",
        description:
          "Introduces AI through stories, visuals, everyday examples, and guided activities.",
        topics: [
          "What is AI? explained through stories and examples",
          "Everyday AI in games, YouTube, and voice assistants",
          "How AI learns through basic pattern recognition",
          "Right and wrong uses of AI",
          "Staying safe online with AI tools",
        ],
        activities: [
          "AI storytelling sessions",
          "Image and text recognition games",
          "Group discussions using real-life examples",
          "Short quizzes and creative tasks",
        ],
        assessment: ["Simple quizzes", "Group presentations", "Reflection prompts"],
      },
      {
        title: "Application and Responsible Use",
        audience: "Ages 18–30",
        description:
          "Focuses on practical use, prompting basics, ethics, and real-world AI-supported decision-making.",
        topics: [
          "AI fundamentals and real-world applications",
          "Prompting basics and tool limitations",
          "AI ethics, bias, and data privacy",
          "AI in work, learning, and entrepreneurship",
          "Avoiding over-reliance and misuse",
        ],
        activities: [
          "Guided prompt design exercises",
          "Case-based discussions",
          "Practical use scenarios for learning and productivity",
          "Mini capstone project",
        ],
        assessment: [
          "Scenario-based assignments",
          "Short reflective essays",
          "Practical AI-use demonstrations",
        ],
      },
    ],
  },
  {
    slug: "software-development",
    title: "Software Development for the Learner Today",
    eyebrow: "Technical Curriculum Design",
    summary:
      "Designing a curriculum that builds strong foundations in today’s tool-rich learning environment.",
    icon: Workflow,
    heroNote:
      "A software development curriculum that prioritizes reasoning, debugging, and independent problem-solving before tool dependence.",
    challenge:
      "Many beginner and early-career developers rely on tools and tutorials without developing a strong understanding of how software works, making debugging and transfer difficult.",
    learners: [
      "Beginner developers with basic exposure to programming concepts",
      "Early-career developers seeking stronger foundational skills",
      "Learners transitioning from guided tutorials to independent problem-solving",
    ],
    goals: [
      "Understand core software development concepts and workflows",
      "Approach problems methodically before reaching for tools",
      "Evaluate tool-generated suggestions critically",
      "Build small, functional projects with confidence and clarity",
    ],
    modules: [
      {
        title: "Module 1: Foundations of Software Development",
        body:
          "Introduces core programming concepts, logical thinking, and debugging fundamentals, with emphasis on understanding how code works rather than memorizing syntax.",
        assessment: "Code reading exercises and basic problem-solving tasks.",
      },
      {
        title: "Module 2: Working in a Tool-Rich Environment",
        body:
          "Explores how development tools fit into the software development process and how learners can use them as learning aids rather than shortcuts.",
        assessment: "Reflection-based activities and prompt evaluation tasks.",
      },
      {
        title: "Module 3: Debugging and Improving Code",
        body:
          "Focuses on identifying issues in existing code, comparing solution approaches, and refining code for clarity and maintainability.",
        assessment: "Guided debugging tasks with written explanations of decisions made.",
      },
      {
        title: "Module 4: Building with Support, Thinking Independently",
        body:
          "Learners apply their knowledge to small projects while maintaining ownership of design and logic decisions.",
        assessment: "Mini-project submission with a reflection on problem-solving approach.",
      },
      {
        title: "Module 5: Transitioning to Independent Practice",
        body:
          "Supports reduced reliance on external help and builds confidence for real-world development environments.",
        assessment: "Final project and reflective summary.",
      },
    ],
    designApproach: [
      "Progressive scaffolding from foundational concepts to applied practice",
      "Reflection-based assessments to encourage critical thinking",
      "Realistic development scenarios to simulate real-world challenges",
      "A learner-centered approach that prioritizes understanding over speed",
    ],
    deliverables: [
      "Curriculum outline and module breakdown",
      "Assessment framework",
      "Learner progression map",
      "Optional storyboard for selected modules",
    ],
  },
  {
    slug: "devops-bootcamp",
    title: "Curriculum Framework and Facilitator Enablement",
    eyebrow: "Instructor-Led Technical Learning",
    summary:
      "Designing a 12-week DevOps bootcamp and facilitator framework for consistent, high-quality instructor-led delivery.",
    icon: Layers,
    heroNote:
      "A curriculum and enablement model built to help facilitators deliver rigorous technical learning with greater consistency across cohorts.",
    problem:
      "Organizations often scale DevOps training quickly, but facilitators are left to interpret loosely defined curricula, leading to inconsistent learner outcomes.",
    overview:
      "This 12-week, instructor-led DevOps bootcamp supports early-career engineers moving from foundational understanding to intermediate-level practice through daily guided learning, hands-on work, and weekly assessments.",
    roleFocus: [
      "Structuring learning progression across foundational, applied, and integrative phases",
      "Defining weekly learning outcomes and assessment intent",
      "Designing practical, scenario-based assessments",
      "Embedding guidance for responsible tool and AI usage",
    ],
    rationale: [
      "Introduces core concepts before tools so learners understand system behavior, trade-offs, and failure patterns",
      "Positions AI-enabled DevOps tools as productivity accelerators rather than replacements for engineering judgment",
      "Uses weekly applied assessments to reinforce transfer into live environments",
    ],
    phases: [
      {
        title: "Foundations (Weeks 1–3)",
        body:
          "DevOps mindset, version control, and systems fundamentals to establish shared mental models and technical context.",
      },
      {
        title: "Cloud & Automation Core (Weeks 4–6)",
        body:
          "Cloud-agnostic infrastructure concepts, Infrastructure as Code, and CI/CD pipelines to introduce reproducibility and automation.",
      },
      {
        title: "Containerization & Orchestration (Weeks 7–8)",
        body:
          "Docker and Kubernetes concepts to support deployment, scaling, and system-level thinking.",
      },
      {
        title: "Reliability & Tool-Aware Practice (Weeks 9–10)",
        body:
          "Observability, incident response, and AI-assisted DevOps workflows with emphasis on judgment and validation.",
      },
      {
        title: "Secure & Scalable Systems (Weeks 11–12)",
        body:
          "DevSecOps principles, cost awareness, and a capstone project integrating end-to-end DevOps workflows.",
      },
    ],
    assessmentStrategy: [
      "Applied understanding",
      "Decision-making and reasoning",
      "Practical problem-solving",
      "Reflection and learning transfer",
    ],
    sampleAssessment: {
      title: "Week 6: CI/CD Pipeline Design & Failure Analysis",
      scenario:
        "Learners review a simplified CI/CD pipeline, deployment issues, logs, and error outputs to identify failures, explain underlying causes, and propose a more reliable flow.",
      tasks: [
        "Identify the failure point",
        "Explain the underlying cause",
        "Propose an improved pipeline flow",
        "Optionally use AI-assisted suggestions and critically evaluate which recommendations to accept or reject",
      ],
      focus: [
        "Reason through system behavior rather than rely on presets",
        "Communicate technical decisions clearly",
        "Apply foundational DevOps principles to a real scenario",
        "Use AI tools thoughtfully, not blindly",
      ],
    },
  },
];

function getHash() {
  return window.location.hash || "#/";
}

function useHashRoute() {
  const [hash, setHash] = useState(getHash());

  useEffect(() => {
    const onHashChange = () => setHash(getHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return hash;
}

function SectionTag({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-stone-600 backdrop-blur">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function Shell({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#f5f3ff] to-[#e0f2fe] text-stone-900">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-gradient-to-br from-[#eef2ff]/90 via-[#f5f3ff]/90 to-[#e0f2fe]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#/" className="text-sm font-semibold tracking-[0.18em] text-stone-900 uppercase">
            Ololade Abiodun
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.hash}
                className="text-sm text-stone-700 transition hover:text-stone-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#/contact"
              className="hidden rounded-full bg-[#312e81] px-4 py-2 text-sm text-white transition hover:translate-y-[-1px] md:inline-flex"
            >
              Let’s Talk
            </a>
            <button
              className="inline-flex rounded-full border border-stone-300 p-2 md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-stone-200 bg-gradient-to-br from-[#eef2ff] via-[#f5f3ff] to-[#e0f2fe] md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.hash}
                    className="py-3 text-sm text-stone-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <main className="pt-24">{children}</main>
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-14 pt-8 md:px-8 md:pb-20 md:pt-12">
      <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <SectionTag>Instructional Design Portfolio</SectionTag>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-stone-950 md:text-6xl"
          >
            Designing future-ready learning systems for technical and AI-enabled environments.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6 }}
            className="mt-6 max-w-2xl text-base leading-8 text-stone-700 md:text-lg"
          >
            I design learner-centered experiences that combine pedagogy, structure, and modern technology — with a strong emphasis on curriculum design, assessment strategy, and responsible AI integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#/case-studies"
              className="inline-flex items-center gap-2 rounded-full bg-[#312e81] px-5 py-3 text-sm text-white transition hover:translate-y-[-1px]"
            >
              View Case Studies <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#/about"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/80 px-5 py-3 text-sm text-stone-900 transition hover:bg-white"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.65 }}
          className="relative"
        >
          <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] bg-stone-300/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_10px_40px_rgba(28,25,23,0.08)] md:p-8">
            <div className="grid gap-4">
              {[
                [Brain, "AI-enhanced curriculum design"],
                [BookOpen, "Assessment and evaluation frameworks"],
                [GraduationCap, "Technical curriculum development"],
                [ShieldCheck, "Responsible AI integration in education"],
              ].map(([Icon, label], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + index * 0.08, duration: 0.4 }}
                  className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-stone-50/80 p-4"
                >
                  <div className="rounded-2xl bg-white p-3 shadow-sm">
                    <Icon className="h-5 w-5 text-stone-800" />
                  </div>
                  <p className="text-sm font-medium text-stone-800">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionTag>Selected Work</SectionTag>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Featured case studies</h2>
        </div>
        <a href="#/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-[#312e81]">
          See all projects <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {caseStudies.map((study, index) => {
          const Icon = study.icon;
          return (
            <motion.a
              key={study.slug}
              href={`#/case-studies/${study.slug}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_8px_30px_rgba(28,25,23,0.05)] transition hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(28,25,23,0.08)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100">
                <Icon className="h-6 w-6 text-stone-800" />
              </div>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.22em] text-stone-500">{study.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">{study.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-700">{study.summary}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#312e81]">
                View project <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-[#312e81] p-7 text-white">
          <SectionTag>What I do</SectionTag>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Learning design with structure, curiosity, and impact.</h2>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm md:p-8">
          <p className="text-base leading-8 text-stone-700">
            I’m an instructional designer with a strong technical foundation, focused on building curriculum frameworks and learning systems for technology-driven programs. My work sits at the intersection of learning design, technical systems, and facilitator enablement.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "AI-enhanced curriculum design",
              "Instructional design and learning strategy",
              "Assessment and evaluation frameworks",
              "EdTech and learning systems thinking",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-stone-50 p-4 text-sm text-stone-800">
                {item}
              </div>
            ))}
          </div>
          <a href="#/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#312e81]">
            More about me <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactStrip() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionTag>Contact</SectionTag>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Let’s build learning experiences that work in real-world environments.</h2>
          </div>
          <a href="#/contact" className="inline-flex items-center gap-2 rounded-full bg-[#312e81] px-5 py-3 text-sm text-white">
            Contact Me <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedGrid />
      <ContactStrip />
    </>
  );
}

function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
      <SectionTag>About</SectionTag>
      <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">About me</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm md:p-9">
          <div className="space-y-6 text-base leading-8 text-stone-700">
            <p>
              I’m an instructional designer with a strong technical foundation, focused on designing curriculum frameworks and learning systems for technology-driven programs.
            </p>
            <p>
              My work sits at the intersection of learning design, technical systems, and facilitator enablement. I design programs that build durable skills, helping learners develop sound reasoning and apply knowledge effectively in real-world, tool-rich environments.
            </p>
            <p>
              In my current role, I create curriculum structures that facilitators translate into lesson delivery, which has shaped my emphasis on clarity, scalability, and learning transfer over content volume.
            </p>
            <p>
              I’ve designed learning across multiple formats, including bootcamps, fellowships, and short-form programs, supporting learners at different stages of life and career while maintaining rigor and practical outcomes.
            </p>
            <p>
              I approach instructional design with structure, curiosity, and a focus on impact.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-stone-200 bg-[#312e81] p-7 text-white">
            <h2 className="text-xl font-semibold">Core focus areas</h2>
            <div className="mt-5 grid gap-3">
              {[
                "Future-ready curriculum design",
                "Technical learning programs",
                "Facilitator enablement",
                "Assessment and evaluation strategy",
                "Responsible AI in education",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-stone-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold text-stone-950">Selected strengths</h2>
            <div className="mt-5 grid gap-3">
              {[
                "Learner-centered design",
                "Structured learning progression",
                "Scenario-based assessment",
                "Clarity for facilitator delivery",
                "Systems thinking for program design",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-stone-50 p-4 text-sm text-stone-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudiesPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
      <SectionTag>Portfolio</SectionTag>
      <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">Case studies</h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
        A selection of curriculum and learning design projects focused on AI literacy, technical education, and scalable instructor-led delivery.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {caseStudies.map((study) => {
          const Icon = study.icon;
          return (
            <a
              key={study.slug}
              href={`#/case-studies/${study.slug}`}
              className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100">
                <Icon className="h-6 w-6 text-stone-800" />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-stone-500">{study.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">{study.title}</h2>
              <p className="mt-4 text-sm leading-7 text-stone-700">{study.summary}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#312e81]">Open project <ArrowRight className="h-4 w-4" /></div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function BulletList({ items }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div key={item} className="rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-800">
          {item}
        </div>
      ))}
    </div>
  );
}

function StudyLayout({ study, children }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
      <a href="#/case-studies" className="inline-flex items-center gap-2 text-sm text-[#312e81]">
        <ChevronLeft className="h-4 w-4" /> Back to case studies
      </a>

      <div className="mt-6 rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm md:p-10">
        <p className="text-xs uppercase tracking-[0.22em] text-stone-500">{study.eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">{study.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">{study.heroNote}</p>
      </div>

      <div className="mt-8">{children}</div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-7">
      <h2 className="text-2xl font-semibold tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function AILiteracyPage({ study }) {
  return (
    <StudyLayout study={study}>
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card title="Project overview">
          <p className="text-base leading-8 text-stone-700">{study.summary}</p>
          <p className="mt-4 text-base leading-8 text-stone-700">{study.challenge}</p>
        </Card>
        <Card title="Learning and program objectives">
          <BulletList items={study.objectives} />
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card title="Instructional strategy and approach">
          <BulletList items={study.approach} />
        </Card>
        <Card title="Evaluation and measurement">
          <BulletList items={study.metrics} />
        </Card>
      </div>

      <div className="mt-6 rounded-[2rem] border border-stone-200 bg-[#312e81] p-7 text-white md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Role and contribution</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {study.contribution.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-stone-100">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {study.subStudies.map((sub) => (
          <Card key={sub.title} title={sub.title}>
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{sub.audience}</p>
            <p className="mt-3 text-base leading-8 text-stone-700">{sub.description}</p>
            <div className="mt-6 space-y-5">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-900">Key topics</h3>
                <div className="mt-3"><BulletList items={sub.topics} /></div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-900">Learning activities</h3>
                <div className="mt-3"><BulletList items={sub.activities} /></div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-900">Assessment</h3>
                <div className="mt-3"><BulletList items={sub.assessment} /></div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </StudyLayout>
  );
}

function SoftwarePage({ study }) {
  return (
    <StudyLayout study={study}>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card title="The problem">
          <p className="text-base leading-8 text-stone-700">{study.challenge}</p>
        </Card>
        <Card title="Target learners">
          <BulletList items={study.learners} />
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card title="Learning goals">
          <BulletList items={study.goals} />
        </Card>
        <Card title="Instructional design approach">
          <BulletList items={study.designApproach} />
        </Card>
      </div>

      <div className="mt-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-7">
        <h2 className="text-2xl font-semibold tracking-tight">Curriculum structure</h2>
        <div className="mt-6 grid gap-4">
          {study.modules.map((module) => (
            <div key={module.title} className="rounded-2xl border border-stone-200 bg-stone-50/70 p-5">
              <h3 className="text-lg font-semibold text-stone-950">{module.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">{module.body}</p>
              <p className="mt-3 text-sm font-medium text-stone-900">Assessment: <span className="font-normal text-stone-700">{module.assessment}</span></p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card title="Tools and deliverables">
          <BulletList items={study.deliverables} />
        </Card>
        <Card title="Why this case study matters">
          <BulletList
            items={[
              "Design structured technical curricula",
              "Balance foundational learning with real-world tool usage",
              "Support learners transitioning to independent problem-solving",
              "Create learning experiences that remain relevant as tools evolve",
            ]}
          />
        </Card>
      </div>
    </StudyLayout>
  );
}

function DevOpsPage({ study }) {
  return (
    <StudyLayout study={study}>
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card title="The problem">
          <p className="text-base leading-8 text-stone-700">{study.problem}</p>
        </Card>
        <Card title="Program overview">
          <p className="text-base leading-8 text-stone-700">{study.overview}</p>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card title="My approach">
          <BulletList items={study.roleFocus} />
        </Card>
        <Card title="Curriculum design rationale">
          <BulletList items={study.rationale} />
        </Card>
      </div>

      <div className="mt-6 rounded-[2rem] border border-stone-200 bg-[#312e81] p-7 text-white md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Curriculum overview</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {study.phases.map((phase) => (
            <div key={phase.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">{phase.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-100/90">{phase.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card title="Assessment strategy">
          <BulletList items={study.assessmentStrategy} />
        </Card>
        <Card title={study.sampleAssessment.title}>
          <p className="text-sm leading-7 text-stone-700">{study.sampleAssessment.scenario}</p>
          <div className="mt-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-900">Learner tasks</h3>
            <div className="mt-3"><BulletList items={study.sampleAssessment.tasks} /></div>
          </div>
          <div className="mt-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-900">Assessment focus</h3>
            <div className="mt-3"><BulletList items={study.sampleAssessment.focus} /></div>
          </div>
        </Card>
      </div>
    </StudyLayout>
  );
}

function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-16">
      <SectionTag>Contact</SectionTag>
      <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">Let’s work together</h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
        I’m open to remote roles, contract work, and curriculum design projects.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
          <div className="mt-6 space-y-4 text-sm text-stone-800">
            <a 
  href="mailto:ololadetoluwalase@gmail.com" 
  className="flex items-center gap-3 rounded-2xl bg-stone-50 p-4 hover:bg-stone-100 transition"
>
  <Mail className="h-5 w-5" />
  <span>Send me an email</span>
</a>
            <a href="https://www.linkedin.com/in/ololade-abiodun-191623276/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-stone-50 p-4">
              <span className="flex h-5 w-5 items-center justify-center text-stone-800">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A1.96 1.96 0 0 0 3.3 4.96c0 1.08.86 1.96 1.92 1.96h.03a1.96 1.96 0 1 0 0-3.92ZM20.7 12.58c0-3.16-1.69-4.63-3.95-4.63-1.82 0-2.64 1-3.1 1.7V8.5h-3.38c.04.76 0 10.5 0 10.5h3.38v-5.86c0-.31.02-.62.11-.84.25-.62.82-1.26 1.78-1.26 1.26 0 1.76.96 1.76 2.37V19h3.38v-6.42Z" />
                </svg>
              </span>
              <span>LinkedIn Profile</span>
              <ExternalLink className="ml-auto h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-[#312e81] p-7 text-white">
          <h2 className="text-2xl font-semibold tracking-tight">Best fit for</h2>
          <div className="mt-6 grid gap-3">
            {[
              "Instructional design roles",
              "Curriculum design projects",
              "Technical learning programs",
              "AI literacy and responsible AI education",
              "Facilitator enablement and learning systems work",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-stone-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-5 pb-10 pt-8 text-sm text-stone-500 md:px-8">
      <div className="flex flex-col gap-3 border-t border-stone-200 pt-6 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Ololade Abiodun.</p>
        <div className="flex items-center gap-4">
          <a href="#/about">About</a>
          <a href="#/case-studies">Case Studies</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const hash = useHashRoute();

  const page = useMemo(() => {
    if (hash === "#/" || hash === "#") return <HomePage />;
    if (hash === "#/about") return <AboutPage />;
    if (hash === "#/case-studies") return <CaseStudiesPage />;
    if (hash === "#/contact") return <ContactPage />;

    const match = hash.match(/^#\/case-studies\/([a-z0-9-]+)/);
    if (match) {
      const study = caseStudies.find((item) => item.slug === match[1]);
      if (!study) return <CaseStudiesPage />;
      if (study.slug === "ai-literacy") return <AILiteracyPage study={study} />;
      if (study.slug === "software-development") return <SoftwarePage study={study} />;
      if (study.slug === "devops-bootcamp") return <DevOpsPage study={study} />;
    }

    return <HomePage />;
  }, [hash]);

  return (
    <Shell>
      {page}
      <Footer />
    </Shell>
  );
}
