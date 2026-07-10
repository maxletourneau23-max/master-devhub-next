import { BlueprintArt } from "@/components/blueprint-art";
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  GitHubIcon,
  RoadmapSymbol,
} from "@/components/icons";
import {
  navigation,
  projects,
  resourceLinks,
  roadmap,
  toolGroups,
  workspaceTree,
} from "@/data/portfolio";

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="#profile" aria-label="Master DevHub home">
          <span>MAX</span> <span className="wordmark-accent">DEVHUB</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
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
          <div className="blue-rule" />
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

function Projects() {
  return (
    <section className="content-section projects-section section-anchor" id="projects" aria-labelledby="projects-title">
      <div className="shell">
        <div className="section-heading-row">
          <div>
            <p className="section-number">SECTION 2</p>
            <h2 id="projects-title">Featured Projects</h2>
          </div>
          <p className="section-intro">Selected work across construction technology, automation, and application development.</p>
        </div>
        <div className="project-layout">
          <div className="project-drawing" aria-hidden="true">
            <svg viewBox="0 0 260 500" fill="none">
              <path d="M25 450h210M45 450V210l80-135 80 135v240M80 450V235h90v215M60 210h145M45 305h160M45 370h160M125 75v375M20 470h220" stroke="currentColor" strokeOpacity=".28" />
              <path d="M15 470V42M15 42h12M15 470h12M236 470v-18M12 455h6" stroke="currentColor" strokeOpacity=".45" />
              <path d="M0 120h250M0 330h250" stroke="currentColor" strokeOpacity=".09" strokeDasharray="4 6" />
            </svg>
            <span>PROJECT INDEX<br />BUILD. SOLVE. SHIP.</span>
          </div>
          <ol className="project-list">
            {projects.map((project, index) => {
              const inner = (
                <>
                  <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="project-copy">
                    <strong>{project.name}</strong>
                    <small>{project.description}</small>
                  </span>
                  <ArrowRightIcon className="project-arrow" />
                </>
              );

              return (
                <li key={project.name}>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`}>
                      {inner}
                    </a>
                  ) : (
                    <div>{inner}</div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ToolStack() {
  return (
    <section className="content-section stack-section section-anchor" id="stack" aria-labelledby="stack-title">
      <div className="shell">
        <div className="section-heading-row stack-heading">
          <div>
            <p className="section-number">SECTION 3</p>
            <h2 id="stack-title">Tools Stack</h2>
          </div>
          <p className="section-intro">Core tools and platforms that power development across AI assistance, building, data, and project operations.</p>
        </div>
        <div className="tool-matrix">
          {toolGroups.map((group) => (
            <div className="tool-row" key={group.name}>
              <div className="tool-category">
                <span className="tool-category-mark" aria-hidden="true">{group.mark}</span>
                <span>{group.name}</span>
              </div>
              <div className="tool-items">
                {group.tools.map((tool) => (
                  <div className="tool-item" key={tool}>
                    <span className="tool-monogram" aria-hidden="true">{tool.slice(0, 2).toUpperCase()}</span>
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workspace() {
  return (
    <section className="content-section workspace-section section-anchor" id="workspace" aria-labelledby="workspace-title">
      <div className="shell workspace-grid">
        <div className="workspace-copy">
          <p className="section-number">SECTION 4</p>
          <h2 id="workspace-title">Local AI / Dev Workspace</h2>
          <div className="blue-rule" />
          <p>This is the local organization system for production repos, experiments, AI tooling, documentation, automation, and archives.</p>
        </div>
        <div className="workspace-panel">
          <div className="workspace-cross cross-one" aria-hidden="true" />
          <div className="workspace-cross cross-two" aria-hidden="true" />
          <code>
            <span className="tree-root">~/Dev_WorkSpace</span>
            {workspaceTree.map((folder, index) => (
              <span key={folder}>{index === workspaceTree.length - 1 ? "└──" : "├──"} {folder}</span>
            ))}
          </code>
          <span className="grid-note" aria-hidden="true">GRID 8PX</span>
        </div>
      </div>
    </section>
  );
}

function UsefulLinks() {
  return (
    <section className="content-section links-section section-anchor" id="links" aria-labelledby="links-title">
      <div className="shell">
        <div className="links-heading">
          <p className="section-number">SECTION 5</p>
          <h2 id="links-title">Useful Links</h2>
          <p>A curated directory of the platforms and tools that power my work and workflow.</p>
        </div>
        <ul className="resource-list">
          {resourceLinks.map((resource) => (
            <li key={resource.label}>
              <a href={resource.href} target="_blank" rel="noopener noreferrer">
                <span>{resource.label}</span>
                <ExternalLinkIcon className="external-icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="content-section roadmap-section section-anchor" id="roadmap" aria-labelledby="roadmap-title">
      <div className="shell">
        <p className="section-number">SECTION 6</p>
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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-mark" aria-hidden="true">M</div>
        <div>
          <strong>Max Letourneau</strong>
          <span>MASTER DEVHUB</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Projects />
        <ToolStack />
        <Workspace />
        <UsefulLinks />
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}
