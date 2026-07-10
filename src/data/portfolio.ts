export type Project = {
  name: string;
  description: string;
  href?: string;
};

export type ToolGroup = {
  name: string;
  mark: string;
  tools: readonly string[];
};

export type ResourceLink = {
  label: string;
  href: string;
};

export type RoadmapItem = {
  title: string;
  description: string;
  symbol: "profile" | "dashboard" | "ai" | "integration" | "solar";
};

export const navigation = [
  { label: "Profile", href: "#profile" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Workspace", href: "#workspace" },
  { label: "Links", href: "#links" },
  { label: "Roadmap", href: "#roadmap" },
] as const;

export const projects: readonly Project[] = [
  {
    name: "Master DevHub",
    description: "Personal developer profile and command center",
    href: "https://github.com/maxletourneau23-max/master-devhub",
  },
  { name: "SolarOps OS", description: "Solar operations platform" },
  {
    name: "Estimating Intelligence Toolkit",
    description: "AI-assisted estimating",
  },
  { name: "Local AI Control Center", description: "Local AI workspace" },
  {
    name: "MCP / Automation Experiments",
    description: "Integration experiments",
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

export const resourceLinks: readonly ResourceLink[] = [
  { label: "GitHub", href: "https://github.com/maxletourneau23-max" },
  { label: "Vercel", href: "https://vercel.com" },
  { label: "Supabase", href: "https://supabase.com" },
  { label: "OpenAI Platform", href: "https://platform.openai.com" },
  { label: "Bitwarden", href: "https://bitwarden.com" },
] as const;

export const roadmap: readonly RoadmapItem[] = [
  {
    title: "Developer profile site",
    description: "A central hub for experience, projects, and technical focus.",
    symbol: "profile",
  },
  {
    title: "Project dashboard",
    description: "A unified view of projects, tasks, environments, and deployments.",
    symbol: "dashboard",
  },
  {
    title: "Local AI tools",
    description: "Private, fast utilities that run and orchestrate local models.",
    symbol: "ai",
  },
  {
    title: "MCP integrations",
    description: "Purpose-built connections between tools, services, and workflows.",
    symbol: "integration",
  },
  {
    title: "Solar EPC workflow tools",
    description: "Focused systems for solar engineering and construction operations.",
    symbol: "solar",
  },
] as const;
