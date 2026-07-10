"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/portfolio";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [progress, setProgress] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? Math.min(100, Math.max(0, (window.scrollY / available) * 100)) : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    const sections = navigation
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-18% 0px -68%", threshold: [0.02, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    navRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="page-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Master DevHub home">
          <span>MAX</span> <span className="wordmark-accent">DEVHUB</span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          ref={navRef}
          className={`site-nav${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={activeId === item.sectionId ? "is-active" : undefined}
              aria-current={activeId === item.sectionId ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
