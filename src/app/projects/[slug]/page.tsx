import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProjectBySlug, projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.slug === "master-devhub" ? "Master DevHub Case Study" : project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} | Master DevHub`,
      description: project.summary,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

function Status({ status }: { status: string }) {
  return (
    <span className={`project-status status-${status.toLowerCase()}`}>
      <span aria-hidden="true" />
      {status}
    </span>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(projectIndex - 1 + projects.length) % projects.length];
  const next = projects[(projectIndex + 1) % projects.length];

  return (
    <div id="top">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content" className="case-main">
        <header className="case-hero">
          <div className="shell">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/#projects">Selected Work</Link>
              <span aria-hidden="true">/</span>
              <span>{project.name}</span>
            </nav>
            <div className="case-hero-grid">
              <div>
                <span className="case-index">{String(projectIndex + 1).padStart(2, "0")}</span>
                <h1>{project.name}</h1>
                <p>{project.summary}</p>
              </div>
              <dl className="case-facts">
                <div><dt>Status</dt><dd><Status status={project.status} /></dd></div>
                <div><dt>Role</dt><dd>{project.role}</dd></div>
                <div><dt>Stack</dt><dd>{project.stack.join(" / ")}</dd></div>
                <div><dt>Purpose</dt><dd>{project.purpose}</dd></div>
              </dl>
            </div>
          </div>
        </header>

        <section className={`case-media${project.slug === "local-ai-control-center" ? " case-media-dark" : ""}`} aria-label={`${project.name} product preview`}>
          <div className="shell">
            <div className="case-image-frame">
              <span className="browser-bar" aria-hidden="true"><i /><i /><i /></span>
              <Image src={project.image} alt={project.imageAlt} fill priority sizes="100vw" />
            </div>
          </div>
        </section>

        <section className="content-section case-story" aria-labelledby="case-story-title">
          <div className="shell case-story-grid">
            <div>
              <p className="section-number">CASE STUDY</p>
              <h2 id="case-story-title">From problem to direction</h2>
            </div>
            <div className="case-story-copy">
              <article>
                <span>01</span>
                <h3>Challenge</h3>
                <p>{project.caseStudy.challenge}</p>
              </article>
              <article>
                <span>02</span>
                <h3>Approach</h3>
                <p>{project.caseStudy.approach}</p>
              </article>
              <article>
                <span>03</span>
                <h3>What it demonstrates</h3>
                <ul>
                  {project.caseStudy.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {project.liveHref || project.sourceHref ? (
          <section className="case-actions-section" aria-label="Project links">
            <div className="shell case-actions">
              <p>Continue exploring the live project and its public source.</p>
              <div>
                {project.liveHref ? (
                  <a className="button button-primary" href={project.liveHref} target="_blank" rel="noopener noreferrer">
                    Live Site <ExternalLinkIcon className="button-external" />
                  </a>
                ) : null}
                {project.sourceHref ? (
                  <a className="button button-dark" href={project.sourceHref} target="_blank" rel="noopener noreferrer">
                    Source <GitHubIcon className="button-github" />
                  </a>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        <nav className="project-pagination" aria-label="Project case studies">
          <div className="shell">
            <Link href={`/projects/${previous.slug}`}>
              <ArrowRightIcon className="arrow-back" />
              <span><small>Previous project</small>{previous.name}</span>
            </Link>
            <Link href={`/projects/${next.slug}`}>
              <span><small>Next project</small>{next.name}</span>
              <ArrowRightIcon />
            </Link>
          </div>
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
}
