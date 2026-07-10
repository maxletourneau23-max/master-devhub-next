import Image from "next/image";
import Link from "next/link";
import { BlueprintArt } from "@/components/blueprint-art";
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  GitHubIcon,
  NowIcon,
  RoadmapSymbol,
} from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  buildLog,
  experience,
  launchpad,
  nowBuilding,
  projects,
  roadmap,
  toolGroups,
  workspaceTree,
  type Project,
} from "@/data/portfolio";

function SectionHeading({
  id,
  number,
  title,
  intro,
}: {
  id?: string;
  number: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="section-heading-row">
      <div>
        <p className="section-number">{number}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function Status({ status }: Pick<Project, "status">) {
  return (
    <span className={`project-status status-${status.toLowerCase()}`}>
      <span aria-hidden="true" />
      {status}
    </span>
  );
}

function ProjectMeta({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <dl className={compact ? "project-meta project-meta-compact" : "project-meta"}>
      <div>
        <dt>Status</dt>
        <dd><Status status={project.status} /></dd>
      </div>
      <div>
        <dt>Role</dt>
        <dd>{project.role}</dd>
      </div>
      <div>
        <dt>Stack</dt>
        <dd>{project.stack.join(" / ")}</dd>
      </div>
      <div>
        <dt>Purpose</dt>
        <dd>{project.purpose}</dd>
      </div>
    </dl>
  );
}

function Hero() {
  return (
    <section className="hero section-anchor" id="profile" aria-labelledby="profile-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <h1 id="profile-title">Max Letourneau</h1>
          <p className="hero-role">Estimator / Business Developer at Alpine Painting &amp; Restoration</p>
          <p className="hero-history">Former Solar EPC Construction &amp; Technology Manager</p>
          <div className="blue-rule" aria-hidden="true" />
          <p className="hero-summary">
            Focused on estimating, business development, construction technology,
            AI automation, project controls, and app development.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore Projects <ArrowRightIcon className="button-icon" />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/maxletourneau23-max"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="button-github" /> GitHub
            </a>
          </div>
        </div>
        <BlueprintArt />
      </div>
    </section>
  );
}

function NowBuilding() {
  type NowItem =
    | {
        label: string;
        type: "focus" | "deployment" | "experiment" | "roadmap" | "complete";
        value: string;
        healthy?: boolean;
      }
    | {
        label: string;
        type: "projects";
        values: readonly string[];
      };

  const items: readonly NowItem[] = [
    { label: "Current focus", type: "focus" as const, value: nowBuilding.currentFocus },
    { label: "Active projects", type: "projects" as const, values: nowBuilding.activeProjects },
    { label: "Latest deployment", type: "deployment" as const, value: nowBuilding.latestDeployment, healthy: true },
    { label: "Current experiment", type: "experiment" as const, value: nowBuilding.currentExperiment },
    { label: "Roadmap", type: "roadmap" as const, value: nowBuilding.roadmap },
    { label: "Recently completed", type: "complete" as const, value: nowBuilding.recentlyCompleted, healthy: true },
  ];

  return (
    <section className="now-section reveal-section" aria-labelledby="now-title">
      <div className="shell">
        <div className="now-heading">
          <h2 id="now-title">Now Building</h2>
          <span aria-hidden="true" />
          <small>Public-safe project pulse</small>
        </div>
        <div className="now-grid">
          {items.map((item) => (
            <article className="now-item" key={item.label}>
              <NowIcon type={item.type} className="now-icon" />
              <div>
                <h3>{item.label}</h3>
                {"values" in item ? (
                  <ul>
                    {item.values.map((value) => <li key={value}>{value}</li>)}
                  </ul>
                ) : (
                  <p className={item.healthy ? "healthy" : undefined}>{item.value}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const featured = projects[0];

  return (
    <section className="content-section projects-section section-anchor reveal-section" id="projects" aria-labelledby="projects-title">
      <div className="shell">
        <SectionHeading
          id="projects-title"
          number="01 / PROJECTS"
          title="Selected Work"
          intro="Visual case studies across construction technology, AI workflows, local systems, and dependable automation."
        />

        <article className="featured-project">
          <div className="featured-project-copy">
            <span className="project-index">01</span>
            <h3>{featured.name}</h3>
            <ProjectMeta project={featured} />
            <p className="project-summary">{featured.summary}</p>
            <div className="project-actions">
              <Link className="button button-primary" href={`/projects/${featured.slug}`}>
                View Case Study <ArrowRightIcon className="button-icon" />
              </Link>
              {featured.liveHref ? (
                <a className="button button-secondary" href={featured.liveHref} target="_blank" rel="noopener noreferrer">
                  Live Site <ExternalLinkIcon className="button-external" />
                </a>
              ) : null}
              {featured.sourceHref ? (
                <a className="button button-secondary" href={featured.sourceHref} target="_blank" rel="noopener noreferrer">
                  Source <GitHubIcon className="button-github" />
                </a>
              ) : null}
            </div>
          </div>

          <Link className="featured-project-media" href={`/projects/${featured.slug}`} aria-label={`View ${featured.name} case study`}>
            <span className="browser-bar" aria-hidden="true"><i /><i /><i /></span>
            <Image src={featured.image} alt={featured.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 52vw" />
            <span className="media-hover-label">Preview on hover</span>
          </Link>
        </article>

        <div className="project-rows">
          {projects.slice(1).map((project, index) => (
            <article className={`project-row${project.slug === "local-ai-control-center" ? " project-row-dark" : ""}`} key={project.slug}>
              <span className="project-index">{String(index + 2).padStart(2, "0")}</span>
              <Link className="project-row-media" href={`/projects/${project.slug}`} aria-label={`View ${project.name} case study`}>
                <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 760px) 100vw, 20vw" />
              </Link>
              <div className="project-row-copy">
                <h3>{project.name}</h3>
                <ProjectMeta project={project} compact />
              </div>
              <Link className="project-row-link" href={`/projects/${project.slug}`}>
                View Case Study <ArrowRightIcon />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Systems() {
  return (
    <section className="content-section systems-section reveal-section" aria-labelledby="systems-title">
      <div className="shell">
        <SectionHeading
          id="systems-title"
          number="02 / SYSTEMS"
          title="Tools & Workspace"
          intro="The practical systems behind public projects, local experimentation, documentation, and automation."
        />
        <div className="systems-grid">
          <div className="tool-matrix">
            <h3>Tools Stack</h3>
            {toolGroups.map((group) => (
              <div className="tool-row" key={group.name}>
                <div className="tool-category">
                  <span className="tool-category-mark" aria-hidden="true">{group.mark}</span>
                  <span>{group.name}</span>
                </div>
                <div className="tool-items">
                  {group.tools.map((tool) => (
                    <span className="tool-item" key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="workspace-panel">
            <div className="workspace-panel-heading">
              <span>Local AI / Dev Workspace</span>
              <small>GRID 8PX</small>
            </div>
            <code>
              <span className="tree-root">~/Dev_WorkSpace</span>
              {workspaceTree.map((folder, index) => (
                <span key={folder}>{index === workspaceTree.length - 1 ? "└──" : "├──"} {folder}</span>
              ))}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const focusAreas = Array.from(new Set(experience.flatMap((entry) => entry.focusAreas)));

  return (
    <section className="content-section experience-section section-anchor reveal-section" id="experience" aria-labelledby="experience-title">
      <div className="shell experience-layout">
        <div>
          <p className="section-number">03 / EXPERIENCE</p>
          <h2 id="experience-title">Experience</h2>
          <div className="experience-timeline">
            {experience.map((entry) => (
              <article key={`${entry.role}-${entry.period}`}>
                <span className="timeline-node" aria-hidden="true" />
                <p className="timeline-period">{entry.period}</p>
                <h3>{entry.role}</h3>
                {entry.organization ? <p className="timeline-org">{entry.organization}</p> : null}
                <p>{entry.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="experience-focus">
          <h3>Public focus areas</h3>
          <ul>
            {focusAreas.map((area, index) => (
              <li key={area}><span>{String(index + 1).padStart(2, "0")}</span>{area}</li>
            ))}
          </ul>
          <BlueprintArt />
        </div>
      </div>
    </section>
  );
}

function BuildLog() {
  return (
    <section className="content-section build-log-section section-anchor reveal-section" id="build-log" aria-labelledby="build-log-title">
      <div className="shell">
        <SectionHeading
          id="build-log-title"
          number="04 / BUILD LOG"
          title="Build Log"
          intro="A short, public record of releases, experiments, and infrastructure milestones."
        />
        <div className="build-log-list">
          {buildLog.map((entry) => {
            const content = (
              <>
                <time>{entry.date}</time>
                <strong>{entry.title}</strong>
                <span aria-hidden="true">—</span>
                <p>{entry.description}</p>
                {entry.href ? <ExternalLinkIcon className="external-icon" /> : <span className="log-end" aria-hidden="true" />}
              </>
            );

            return entry.href ? (
              <a key={`${entry.date}-${entry.title}`} href={entry.href} target="_blank" rel="noopener noreferrer">{content}</a>
            ) : (
              <article key={`${entry.date}-${entry.title}`}>{content}</article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Launchpad() {
  return (
    <section className="content-section launchpad-section section-anchor reveal-section" id="launchpad" aria-labelledby="launchpad-title">
      <div className="shell">
        <SectionHeading
          id="launchpad-title"
          number="05 / LAUNCHPAD"
          title="Public Launchpad"
          intro="Direct routes to the public platforms and resources that support the work."
        />
        <ul className="launchpad-list">
          {launchpad.map((resource, index) => (
            <li key={resource.label}>
              <a href={resource.href} target="_blank" rel="noopener noreferrer">
                <span className="launchpad-index">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <strong>{resource.label}</strong>
                  <small>{resource.description}</small>
                </span>
                <ExternalLinkIcon className="external-icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PrivateCommandCenter() {
  return (
    <section className="private-section reveal-section" aria-labelledby="private-title">
      <div className="shell private-grid">
        <div className="private-copy">
          <p className="section-number">06 / PRIVATE COMMAND CENTER</p>
          <div className="private-title-row">
            <h2 id="private-title">Private Command Center</h2>
            <span>Planned</span>
          </div>
          <p>A future authenticated workspace for private project notes, deployment controls, and internal shortcuts.</p>
          <ul>
            <li>Private project notes</li>
            <li>Deployment controls</li>
            <li>Internal shortcuts</li>
          </ul>
        </div>
        <div className="dashboard-preview" aria-hidden="true">
          <div className="dashboard-sidebar">
            <span /><span /><span /><span /><span />
          </div>
          <div className="dashboard-main">
            <div className="dashboard-toolbar"><span /><span /><span /></div>
            <div className="dashboard-panels">
              <i /><i /><i />
            </div>
            <div className="dashboard-lines"><span /><span /><span /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="content-section roadmap-section section-anchor reveal-section" id="roadmap" aria-labelledby="roadmap-title">
      <div className="shell">
        <p className="section-number">07 / ROADMAP</p>
        <h2 id="roadmap-title">Roadmap</h2>
        <div className="roadmap-grid">
          {roadmap.map((item, index) => (
            <article className="roadmap-item" key={item.title}>
              <div className="roadmap-symbol"><RoadmapSymbol type={item.symbol} /></div>
              <div className="roadmap-node" aria-hidden="true" />
              <span className="roadmap-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <NowBuilding />
        <FeaturedProjects />
        <Systems />
        <Experience />
        <BuildLog />
        <Launchpad />
        <PrivateCommandCenter />
        <Roadmap />
      </main>
      <SiteFooter />
    </div>
  );
}
