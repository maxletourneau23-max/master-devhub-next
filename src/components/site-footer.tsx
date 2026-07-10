import { ExternalLinkIcon, GitHubIcon } from "@/components/icons";

const githubProfile = "https://github.com/maxletourneau23-max";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a className="wordmark footer-wordmark" href="#top" aria-label="Back to the top">
          <span>MAX</span> <span className="wordmark-accent">DEVHUB</span>
        </a>
        <div className="footer-actions">
          <a href={githubProfile} target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="footer-icon" /> GitHub
          </a>
          <a href={githubProfile} target="_blank" rel="noopener noreferrer">
            Start a conversation <ExternalLinkIcon className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
