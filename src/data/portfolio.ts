export type ProjectStatus = "Active" | "Prototype" | "Planned" | "Archived";

export type Project = {
  slug: string;
  name: string;
  status: ProjectStatus;
  role: string;
  stack: readonly string[];
  purpose: string;
  summary: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  liveHref?: string;
  sourceHref?: string;
  caseStudy: {
    challenge: string;
    approach: string;
    outcomes: readonly string[];
  };
};

export type ToolGroup = {
  name: string;
  mark: string;
  tools: readonly string[];
};

export type ExperienceEntry = {
  role: string;
  organization?: string;
  period: string;
  description: string;
  focusAreas: readonly string[];
};

export type BuildLogEntry = {
  date: string;
  title: string;
  description: string;
  href?: string;
};

export type LaunchpadLink = {
  label: string;
  description: string;
  href: string;
};

export type RoadmapItem = {
  title: string;
  description: string;
  symbol: "profile" | "dashboard" | "ai" | "integration" | "solar";
};

export const navigation = [
  { label: "Profile", href: "/#profile", sectionId: "profile" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Build Log", href: "/#build-log", sectionId: "build-log" },
  { label: "Launchpad", href: "/#launchpad", sectionId: "launchpad" },
  { label: "Roadmap", href: "/#roadmap", sectionId: "roadmap" },
] as const;

export const nowBuilding = {
  currentFocus: "Master DevHub V2",
  activeProjects: [
    "Master DevHub",
    "Estimating Intelligence Toolkit",
    "Local AI Control Center",
  ],
  latestDeployment: "Production / Vercel",
  currentExperiment: "MCP workflow orchestration",
  roadmap: "V2 interface in progress",
  recentlyCompleted: "Public repository and protected deployment pipeline",
} as const;

export const projects: readonly Project[] = [
  {
    slug: "master-devhub",
    name: "Master DevHub",
    status: "Active",
    role: "Designer & Developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    purpose: "Public portfolio and personal command center",
    summary:
      "A living home for experience, projects, technical systems, and the work currently being built.",
    image: "/images/projects/master-devhub.png",
    imageAlt: "Master DevHub portfolio interface",
    featured: true,
    liveHref: "https://master-devhub-next.vercel.app",
    sourceHref: "https://github.com/maxletourneau23-max/master-devhub-next",
    caseStudy: {
      challenge:
        "Projects, tools, professional experience, and current experiments needed one public-safe home instead of being scattered across separate platforms.",
      approach:
        "Build a static-first Next.js portfolio around typed content, an editorial blueprint system, protected GitHub workflows, and Vercel previews.",
      outcomes: [
        "A single public index for projects, experience, tools, and current work.",
        "A protected pull-request workflow with automated quality checks and previews.",
        "A foundation for a future authenticated command center without mixing private data into the public site.",
      ],
    },
  },
  {
    slug: "solarops-os",
    name: "SolarOps OS",
    status: "Planned",
    role: "Product Systems Design",
    stack: ["Next.js", "Supabase", "Power BI"],
    purpose: "Solar operations platform",
    summary:
      "A public-safe product concept for organizing project visibility, operational context, and reporting surfaces.",
    image: "/images/projects/solarops-os.png",
    imageAlt: "Abstract solar operations interface with field layout and planning views",
    featured: false,
    caseStudy: {
      challenge:
        "Solar operations information can become fragmented across planning, delivery, and reporting tools.",
      approach:
        "Define a unified interface concept that centers project visibility, schedule context, field layout, and clear reporting boundaries.",
      outcomes: [
        "A roadmap-ready product direction rather than a claim of a deployed production system.",
        "A reusable visual language for project controls and operational dashboards.",
        "A clear boundary between public product thinking and private project information.",
      ],
    },
  },
  {
    slug: "estimating-intelligence-toolkit",
    name: "Estimating Intelligence Toolkit",
    status: "Prototype",
    role: "Estimating & AI Workflow Design",
    stack: ["TypeScript", "AI workflows", "Structured data"],
    purpose: "AI-assisted estimating",
    summary:
      "A prototype direction for organizing drawings, scope information, and human-reviewed AI assistance.",
    image: "/images/projects/estimating-intelligence-toolkit.png",
    imageAlt: "Abstract estimating workflow with drawing canvas and connected review steps",
    featured: false,
    caseStudy: {
      challenge:
        "Estimating work involves large amounts of drawing context, scope organization, and review that must remain explainable and human-led.",
      approach:
        "Explore structured extraction, review gates, and AI assistance while keeping decisions visible and controlled by the estimator.",
      outcomes: [
        "A public-safe workflow concept with no customer, estimate, pricing, or proposal data.",
        "A modular direction for drawing review, scope structure, and validation.",
        "A design principle that AI supports professional judgment instead of replacing it.",
      ],
    },
  },
  {
    slug: "local-ai-control-center",
    name: "Local AI Control Center",
    status: "Prototype",
    role: "Local AI Systems",
    stack: ["Ollama", "MCP", "Local models"],
    purpose: "Private local AI workspace",
    summary:
      "A local-first workspace concept for orchestrating models, tools, repeatable tasks, and private development experiments.",
    image: "/images/projects/local-ai-control-center.png",
    imageAlt: "Dark navy local AI orchestration interface with connected workflow nodes",
    featured: false,
    caseStudy: {
      challenge:
        "Local AI experiments need a clear operating surface that separates models, tools, pipelines, and runtime state.",
      approach:
        "Design a private-by-default control center around visible orchestration, modular workflows, and local runtime boundaries.",
      outcomes: [
        "A visual architecture for local models, tools, and repeatable workflows.",
        "A private-first direction that keeps credentials and working data outside the public portfolio.",
        "A reusable interface language for future local AI utilities.",
      ],
    },
  },
  {
    slug: "mcp-automation-experiments",
    name: "MCP / Automation Experiments",
    status: "Active",
    role: "Integration Design",
    stack: ["MCP", "Automation", "Integrations"],
    purpose: "Purpose-built tool connections",
    summary:
      "A collection of integration experiments focused on dependable routing, validation, and observable automation.",
    image: "/images/projects/mcp-automation-experiments.png",
    imageAlt: "Blueprint automation diagram connecting tools, validation gates, and outputs",
    featured: false,
    caseStudy: {
      challenge:
        "Useful automation depends on clear tool boundaries, validation, and understandable failure paths—not only successful demos.",
      approach:
        "Model integrations as observable flows with explicit inputs, routing decisions, validation gates, and outputs.",
      outcomes: [
        "A repeatable blueprint for discussing integration architecture publicly and safely.",
        "A stronger emphasis on validation, observability, and recoverable workflows.",
        "A growing laboratory for purpose-built MCP and automation patterns.",
      ],
    },
  },
] as const;

export const toolGroups: readonly ToolGroup[] = [
  { name: "AI", mark: "AI", tools: ["ChatGPT", "Codex", "Cursor"] },
  { name: "Build", mark: "</>", tools: ["GitHub", "Vercel", "Supabase"] },
  { name: "Data", mark: "DB", tools: ["Ollama", "Microsoft 365", "Power BI"] },
  { name: "Operations", mark: "OP", tools: ["Procore"] },
] as const;

export const workspaceTree = [
  "00-GitHub-Projects",
  "01-Sandboxes",
  "02-AI-HUB",
  "03-Documentation",
  "04-Automation",
  "99-Archive",
] as const;

export const experience: readonly ExperienceEntry[] = [
  {
    role: "Estimator / Business Developer",
    organization: "Alpine Painting & Restoration",
    period: "Present",
    description:
      "Focused on estimating, business development, and practical systems that support clear construction workflows.",
    focusAreas: ["Estimating", "Business Development", "Construction Technology"],
  },
  {
    role: "Solar EPC Construction & Technology Manager",
    period: "Former",
    description:
      "Experience connecting construction delivery, project controls, technology, and operational improvement.",
    focusAreas: ["Automation", "Project Controls", "Operational Systems"],
  },
] as const;

export const buildLog: readonly BuildLogEntry[] = [
  {
    date: "Jul 10, 2026",
    title: "Master DevHub V2",
    description: "Modern hybrid command center underway",
  },
  {
    date: "Jul 10, 2026",
    title: "Deployment pipeline",
    description: "Public repository, protected main branch, and Vercel previews completed",
    href: "https://github.com/maxletourneau23-max/master-devhub-next/actions",
  },
] as const;

export const launchpad: readonly LaunchpadLink[] = [
  {
    label: "GitHub",
    description: "Source code & repositories",
    href: "https://github.com/maxletourneau23-max",
  },
  {
    label: "Master DevHub Live",
    description: "Live public portfolio",
    href: "https://master-devhub-next.vercel.app",
  },
  { label: "Vercel", description: "Hosting & previews", href: "https://vercel.com" },
  { label: "Supabase", description: "Database & backend", href: "https://supabase.com" },
  {
    label: "OpenAI Platform",
    description: "APIs & models",
    href: "https://platform.openai.com",
  },
  { label: "Bitwarden", description: "Secrets & security", href: "https://bitwarden.com" },
] as const;

export const roadmap: readonly RoadmapItem[] = [
  {
    title: "Developer profile site",
    description: "A central hub for experience, projects, and technical focus.",
    symbol: "profile",
  },
  {
    title: "Project command center",
    description: "A useful view of active projects, current work, and deployment context.",
    symbol: "dashboard",
  },
  {
    title: "Local AI tools",
    description: "Private, focused utilities that orchestrate local models and workflows.",
    symbol: "ai",
  },
  {
    title: "MCP integrations",
    description: "Purpose-built connections between tools, services, and repeatable tasks.",
    symbol: "integration",
  },
  {
    title: "Construction workflow tools",
    description: "Practical systems for estimating, project controls, and construction operations.",
    symbol: "solar",
  },
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
