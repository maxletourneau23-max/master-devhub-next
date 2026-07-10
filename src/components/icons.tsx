type IconProps = {
  className?: string;
};

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M4 16h23M19 8l8 8-8 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 4h6v6M20 4l-9 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function RoadmapSymbol({ type }: { type: "profile" | "dashboard" | "ai" | "integration" | "solar" }) {
  if (type === "profile") {
    return (
      <svg viewBox="0 0 96 72" fill="none" aria-hidden="true">
        <rect x="15" y="6" width="66" height="60" stroke="currentColor" />
        <circle cx="35" cy="29" r="9" stroke="currentColor" />
        <path d="M22 53c2-9 8-13 13-13s11 4 13 13M54 24h17M54 32h13M54 40h17M20 12h2M26 12h2M32 12h2" stroke="currentColor" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "dashboard") {
    return (
      <svg viewBox="0 0 96 72" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="80" height="60" stroke="currentColor" />
        <path d="M8 17h80M14 12h2M20 12h2M26 12h2M17 52h20V27H17v25ZM44 27h34v13H44zM44 47h14v11H44zM64 47h14v11H64z" stroke="currentColor" />
        <path d="m49 36 6-5 6 3 9-8" stroke="var(--accent)" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg viewBox="0 0 96 72" fill="none" aria-hidden="true">
        <path d="m48 5 30 17v32L48 71 18 54V22L48 5Z" stroke="currentColor" />
        <path d="m18 22 30 17 30-17M48 39v32" stroke="currentColor" />
        <text x="48" y="37" fill="var(--accent)" textAnchor="middle" fontSize="17" fontWeight="700">AI</text>
      </svg>
    );
  }

  if (type === "integration") {
    return (
      <svg viewBox="0 0 96 72" fill="none" aria-hidden="true">
        <path d="M15 17h26c0 8 10 8 10 0h25v20c-8 0-8 10 0 10v20H51c0-8-10-8-10 0H15V47c8 0 8-10 0-10V17Z" stroke="currentColor" />
        <path d="M46 17v50M15 42h61" stroke="currentColor" strokeDasharray="3 4" opacity=".45" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 96 72" fill="none" aria-hidden="true">
      <path d="M8 37 48 9l40 28M15 34v32h66V34M28 66V44h40v22" stroke="currentColor" />
      <path d="M46 12h31v16H58L46 12Z" fill="none" stroke="var(--accent)" />
      <path d="m52 14 6 14M61 14l6 14M70 14l6 14M50 19h26M54 24h23" stroke="var(--accent)" strokeWidth=".8" />
    </svg>
  );
}
