import { useState, useEffect, useRef, useCallback } from "react";

const GithubIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>;
const Linkedin = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const Mail = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const ExternalLink = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;
const Download = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
const Menu = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const X = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const Award = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const Star = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const Users = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const BookOpen = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
const ChevronRight = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;
const Send = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;

/* ─── CSS ─── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg-0: #f0f4ff;
    --bg-1: #ffffff;
    --bg-2: #e8effe;
    --glass: rgba(255,255,255,0.88);
    --glass-border: rgba(59,130,246,0.18);
    --glass-hover: rgba(59,130,246,0.32);
    --v0: #1d4ed8;
    --v1: #3b82f6;
    --v2: #0ea5e9;
    --text-primary: #0f172a;
    --text-secondary: #475569;
    --text-muted: #94a3b8;
    --radius: 16px;
    --radius-sm: 10px;
  }

  html { scroll-behavior: smooth; font-size: 16px; }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--bg-0);
    color: var(--text-primary);
    overflow-x: hidden;
    line-height: 1.6;
  }

  ::selection { background: rgba(59,130,246,0.25); }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--bg-0); }
  ::-webkit-scrollbar-thumb { background: var(--v1); border-radius: 3px; }

  .grad { background: linear-gradient(135deg, #1d4ed8, #3b82f6, #0ea5e9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes float {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    33%       { transform: translateY(-18px) translateX(8px); }
    66%       { transform: translateY(10px) translateX(-6px); }
  }
  @keyframes pulseBorder {
    0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
    50%       { box-shadow: 0 0 0 6px rgba(59,130,246,0.15); }
  }
  @keyframes gradientShift {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }

  .reveal { opacity: 0; transform: translateY(36px); transition: opacity 0.65s cubic-bezier(.22,1,.36,1), transform 0.65s cubic-bezier(.22,1,.36,1); }
  .reveal.visible { opacity: 1; transform: none; }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
  .reveal-delay-4 { transition-delay: 0.4s; }

  /* ── Navbar ── */
  .navbar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 0 2rem;
    display: flex; align-items: center; justify-content: space-between;
    height: 64px;
    transition: background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s;
  }
  .navbar.scrolled {
    background: rgba(240,244,255,0.88);
    backdrop-filter: blur(18px);
    box-shadow: 0 1px 0 rgba(59,130,246,0.12);
  }
  .nav-logo { font-weight: 800; font-size: 1.15rem; letter-spacing: -0.02em; cursor: pointer; }
  .nav-links { display: flex; align-items: center; gap: 0.25rem; }
  .nav-link {
    font-size: 0.8rem; font-weight: 500; letter-spacing: 0.03em;
    color: var(--text-secondary); padding: 6px 10px; border-radius: 6px;
    cursor: pointer; transition: color 0.2s, background 0.2s; text-transform: uppercase; border: none; background: none;
  }
  .nav-link:hover { color: var(--text-primary); background: rgba(59,130,246,0.08); }
  .nav-link.active { color: #1d4ed8; }
  .hamburger { display: none; background: none; border: none; color: var(--text-primary); cursor: pointer; padding: 8px; }

  /* ── Mobile menu ── */
  .mobile-menu {
    position: fixed; inset: 0; z-index: 99; background: rgba(240,244,255,0.97);
    backdrop-filter: blur(24px);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 1.5rem; transform: translateX(100%); transition: transform 0.35s cubic-bezier(.22,1,.36,1);
  }
  .mobile-menu.open { transform: none; }
  .mobile-menu .nav-link { font-size: 1.25rem; padding: 12px 24px; }

  /* ── Hero ── */
  .hero {
    min-height: 100vh; position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
  }
  .hero-canvas { position: absolute; inset: 0; }
  .particle {
    position: absolute; border-radius: 50%;
    background: radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%);
    animation: float linear infinite;
    pointer-events: none;
  }
  .hero-content {
    position: relative; z-index: 2; text-align: center;
    max-width: 760px; padding: 2rem;
  }
  .hero-eyebrow {
    font-size: 0.75rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
    color: #1d4ed8; margin-bottom: 1.25rem;
    display: inline-flex; align-items: center; gap: 8px;
  }
  .hero-eyebrow::before, .hero-eyebrow::after {
    content: ''; flex: 1; height: 1px; width: 32px;
    background: linear-gradient(90deg, transparent, #3b82f6);
  }
  .hero-eyebrow::after { background: linear-gradient(90deg, #3b82f6, transparent); }
  .hero-name {
    font-size: clamp(2.8rem, 7vw, 5.5rem); font-weight: 900; line-height: 1.05;
    letter-spacing: -0.03em; margin-bottom: 1.25rem;
  }
  .typewriter-wrap {
    font-family: 'Fira Code', monospace; font-size: clamp(1rem, 2.5vw, 1.4rem);
    color: #3b82f6; min-height: 2.2rem; display: flex; align-items: center; justify-content: center;
    margin-bottom: 1rem; font-weight: 500;
  }
  .cursor { display: inline-block; width: 2px; height: 1.2em; background: #0ea5e9; margin-left: 3px; animation: blink 1s step-end infinite; border-radius: 1px; }
  .hero-subtitle { color: var(--text-secondary); font-size: 1rem; margin-bottom: 2.5rem; letter-spacing: 0.01em; }
  .hero-ctas { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2.5rem; }
  .btn-primary {
    background: linear-gradient(135deg, var(--v0), var(--v1), var(--v2));
    background-size: 200% 200%; animation: gradientShift 4s ease infinite;
    color: #fff; border: none; padding: 0.75rem 2rem; border-radius: 50px;
    font-size: 0.9rem; font-weight: 600; cursor: pointer; letter-spacing: 0.02em;
    transition: transform 0.2s, box-shadow 0.2s;
    display: inline-flex; align-items: center; gap: 8px;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(59,130,246,0.4); }
  .btn-outline {
    background: transparent;
    border: 1.5px solid rgba(59,130,246,0.45);
    color: #1d4ed8; padding: 0.75rem 2rem; border-radius: 50px;
    font-size: 0.9rem; font-weight: 600; cursor: pointer; letter-spacing: 0.02em;
    transition: border-color 0.2s, background 0.2s, transform 0.2s, color 0.2s;
    display: inline-flex; align-items: center; gap: 8px;
  }
  .btn-outline:hover { border-color: #3b82f6; background: rgba(59,130,246,0.08); transform: translateY(-2px); color: #1d4ed8; }
  .hero-socials { display: flex; gap: 1.25rem; justify-content: center; }
  .social-icon {
    width: 42px; height: 42px; border-radius: 50%;
    border: 1.5px solid rgba(59,130,246,0.2);
    display: flex; align-items: center; justify-content: center;
    color: var(--text-secondary); cursor: pointer; text-decoration: none;
    transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s;
    background: rgba(255,255,255,0.7);
  }
  .social-icon:hover { border-color: #3b82f6; color: #1d4ed8; background: rgba(59,130,246,0.1); transform: translateY(-3px); }

  /* ── Section wrapper ── */
  .section { padding: 6rem 0; }
  .section-inner { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
  .section-title {
    font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 800; letter-spacing: -0.02em;
    margin-bottom: 0.6rem;
  }
  .section-divider {
    width: 56px; height: 3px; border-radius: 2px;
    background: linear-gradient(90deg, var(--v0), var(--v2));
    margin-bottom: 3rem;
  }

  /* ── Glass card ── */
  .glass-card {
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius);
    backdrop-filter: blur(12px);
    box-shadow: 0 2px 12px rgba(59,130,246,0.06);
    transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
  }
  .glass-card:hover {
    border-color: var(--glass-hover);
    box-shadow: 0 0 0 1px rgba(59,130,246,0.15), 0 12px 40px rgba(59,130,246,0.12);
  }

  /* ── Timeline ── */
  .timeline { position: relative; padding-left: 2.5rem; }
  .timeline::before {
    content: ''; position: absolute; left: 8px; top: 0; bottom: 0; width: 2px;
    background: linear-gradient(180deg, var(--v0), transparent);
  }
  .timeline-item { position: relative; margin-bottom: 2rem; }
  .timeline-dot {
    position: absolute; left: -2.18rem; top: 1.5rem;
    width: 14px; height: 14px; border-radius: 50%;
    background: linear-gradient(135deg, var(--v0), var(--v2));
    box-shadow: 0 0 0 3px rgba(59,130,246,0.2);
  }
  .timeline-card { padding: 1.5rem 1.75rem; }
  .timeline-date { font-family: 'Fira Code', monospace; font-size: 0.75rem; color: #3b82f6; font-weight: 500; margin-bottom: 0.4rem; letter-spacing: 0.05em; }
  .timeline-title { font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.15rem; }
  .timeline-sub { font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.75rem; }
  .timeline-bullets { list-style: none; display: flex; flex-direction: column; gap: 6px; }
  .timeline-bullets li { font-size: 0.88rem; color: var(--text-secondary); display: flex; gap: 8px; }
  .timeline-bullets li::before { content: '▸'; color: #3b82f6; flex-shrink: 0; font-size: 0.7rem; margin-top: 3px; }

  /* ── Research cards ── */
  .research-card { padding: 2rem; margin-bottom: 1.5rem; }
  .research-title { font-size: 1.15rem; font-weight: 700; margin-bottom: 0.35rem; }
  .research-meta { font-size: 0.82rem; color: #3b82f6; font-family: 'Fira Code', monospace; margin-bottom: 0.75rem; }
  .research-abstract { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.25rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
  .icon-btn {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 7px 16px; border-radius: 50px; font-size: 0.8rem; font-weight: 600;
    cursor: pointer; border: 1.5px solid rgba(59,130,246,0.35); background: transparent;
    color: #1d4ed8; transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
  }
  .icon-btn:hover { background: rgba(59,130,246,0.1); border-color: #3b82f6; transform: translateY(-1px); }

  /* ── Projects grid ── */
  .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
  .project-card {
    padding: 1.75rem; cursor: default;
    transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
  }
  .project-card:hover {
    transform: translateY(-4px) scale(1.015);
    box-shadow: 0 0 32px rgba(59,130,246,0.15), 0 16px 48px rgba(59,130,246,0.08);
    border-color: rgba(59,130,246,0.45);
  }
  .project-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; }
  .project-desc { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem; }
  .tech-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 1.25rem; }
  .tech-pill { font-size: 0.72rem; font-weight: 600; padding: 4px 12px; border-radius: 50px; letter-spacing: 0.04em; font-family: 'Fira Code', monospace; }
  .pill-v { background: rgba(29,78,216,0.1); color: #1d4ed8; border: 1px solid rgba(29,78,216,0.2); }
  .pill-p { background: rgba(59,130,246,0.12); color: #2563eb; border: 1px solid rgba(59,130,246,0.25); }
  .pill-t { background: rgba(14,165,233,0.12); color: #0284c7; border: 1px solid rgba(14,165,233,0.25); }
  .project-actions { display: flex; gap: 10px; }

  /* ── Leadership ── */
  .leadership-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
  .leadership-card { padding: 1.75rem; text-align: center; }
  .leadership-icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(59,130,246,0.1); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: #3b82f6; }
  .leadership-title { font-size: 1rem; font-weight: 700; margin-bottom: 0.2rem; }
  .leadership-org { font-size: 0.85rem; color: #3b82f6; margin-bottom: 0.2rem; }
  .leadership-date { font-size: 0.75rem; color: var(--text-muted); font-family: 'Fira Code', monospace; margin-bottom: 0.85rem; }

  /* ── Skills ── */
  .skills-groups { display: flex; flex-direction: column; gap: 2rem; }
  .skill-group-label { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary); margin-bottom: 0.75rem; }
  .skill-pills { display: flex; flex-wrap: wrap; gap: 8px; }
  .skill-pill {
    padding: 6px 16px; border-radius: 50px; font-size: 0.82rem; font-weight: 500;
    border: 1px solid; cursor: default; transition: filter 0.2s, transform 0.2s;
  }
  .skill-pill:hover { filter: brightness(0.9); transform: translateY(-1px); }
  .sg0 { background: rgba(29,78,216,0.1); color: #1d4ed8; border-color: rgba(29,78,216,0.25); }
  .sg1 { background: rgba(37,99,235,0.1); color: #2563eb; border-color: rgba(37,99,235,0.25); }
  .sg2 { background: rgba(59,130,246,0.1); color: #3b82f6; border-color: rgba(59,130,246,0.25); }
  .sg3 { background: rgba(14,165,233,0.1); color: #0284c7; border-color: rgba(14,165,233,0.25); }
  .sg4 { background: rgba(56,189,248,0.1); color: #0369a1; border-color: rgba(56,189,248,0.3); }

  /* ── Certifications ── */
  .certs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
  .cert-card { padding: 1.75rem; text-align: center; }
  .cert-icon { width: 52px; height: 52px; border-radius: 14px; background: linear-gradient(135deg, rgba(29,78,216,0.15), rgba(14,165,233,0.15)); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: #3b82f6; animation: pulseBorder 3s ease-in-out infinite; }
  .cert-name { font-size: 0.95rem; font-weight: 700; margin-bottom: 0.3rem; }
  .cert-org { font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 0.2rem; }
  .cert-date { font-size: 0.75rem; color: var(--text-muted); font-family: 'Fira Code', monospace; margin-bottom: 1rem; }
  .btn-xs { padding: 5px 14px; font-size: 0.75rem; border-radius: 50px; border: 1.5px solid rgba(59,130,246,0.35); background: transparent; color: #1d4ed8; cursor: pointer; transition: background 0.2s, border-color 0.2s; font-weight: 600; }
  .btn-xs:hover { background: rgba(59,130,246,0.1); border-color: #3b82f6; }

  /* ── Recommendations ──
  .recs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
  .rec-card { padding: 2rem; }
  .rec-quote-mark { font-size: 5rem; line-height: 1; background: linear-gradient(135deg, #1d4ed8, #0ea5e9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-family: Georgia, serif; margin-bottom: -0.5rem; }
  .rec-text { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.75; margin-bottom: 1.25rem; }
  .rec-footer { display: flex; align-items: center; gap: 12px; }
  .rec-avatar { width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(135deg, var(--v0), var(--v2)); display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; color: #fff; flex-shrink: 0; }
  .rec-name { font-size: 0.9rem; font-weight: 700; margin-bottom: 2px; }
  .rec-role { font-size: 0.78rem; color: var(--text-secondary); }
 */
  /* ── Contact ── */
  .contact-wrap { max-width: 640px; margin: 0 auto; text-align: center; }
  .contact-email { font-size: clamp(1.2rem, 3vw, 1.8rem); font-weight: 700; margin: 1.5rem 0 2rem; word-break: break-all; }
  .contact-email a { text-decoration: none; background: linear-gradient(135deg, #1d4ed8, #0ea5e9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; transition: filter 0.2s; }
  .contact-email a:hover { filter: brightness(1.2); }
  .contact-form { display: flex; flex-direction: column; gap: 1rem; text-align: left; margin-bottom: 2rem; }
  .form-field { display: flex; flex-direction: column; gap: 6px; }
  .form-label { font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); letter-spacing: 0.05em; text-transform: uppercase; }
  .form-input, .form-textarea {
    background: rgba(255,255,255,0.8); border: 1.5px solid rgba(59,130,246,0.2);
    border-radius: var(--radius-sm); padding: 0.75rem 1rem; font-size: 0.9rem;
    color: var(--text-primary); font-family: 'Inter', sans-serif; transition: border-color 0.2s, box-shadow 0.2s; outline: none; width: 100%;
  }
  .form-input:focus, .form-textarea:focus { border-color: rgba(59,130,246,0.5); box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
  .form-textarea { resize: vertical; min-height: 130px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .contact-sub { color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 0.5rem; }

  /* ── Footer ── */
  .footer { padding: 2rem; text-align: center; border-top: 1px solid rgba(59,130,246,0.1); }
  .footer-text { font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1rem; }
  .footer-socials { display: flex; gap: 1rem; justify-content: center; }

  /* ── About ── */
  .about-grid { display: grid; grid-template-columns: 1fr 320px; gap: 4rem; align-items: center; }
  .about-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 50px; background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.25); font-size: 0.8rem; color: #1d4ed8; font-weight: 600; margin-bottom: 1.5rem; }
  .about-badge-dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 6px #22c55e; animation: blink 2s ease-in-out infinite; }
  .about-text { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.8; }
  .about-text p + p { margin-top: 1rem; }
  .about-photo {
    width: 100%; aspect-ratio: 3/4; border-radius: 20px;
    border: 2px dashed rgba(59,130,246,0.3);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 10px; color: var(--text-muted); font-size: 0.85rem;
    background: rgba(59,130,246,0.04);
  }
  .about-photo-icon { width: 56px; height: 56px; border-radius: 50%; background: rgba(59,130,246,0.1); display: flex; align-items: center; justify-content: center; color: rgba(59,130,246,0.5); }

  /* ── Hero grid & glows ── */
  .hero-grid {
    position: absolute; inset: 0; pointer-events: none;
    background-image: linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
  }
  .hero-glow {
    position: absolute; border-radius: 50%; pointer-events: none;
    filter: blur(80px); opacity: 0.18;
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .projects-grid { grid-template-columns: 1fr; }
    .leadership-grid { grid-template-columns: 1fr 1fr; }
    .certs-grid { grid-template-columns: 1fr 1fr; }
    .about-grid { grid-template-columns: 1fr; }
    .about-photo { aspect-ratio: 16/7; max-width: 340px; margin: 0 auto; }
  }
  @media (max-width: 680px) {
    .nav-links { display: none; }
    .hamburger { display: flex; }
    .recs-grid { grid-template-columns: 1fr; }
    .leadership-grid { grid-template-columns: 1fr; }
    .certs-grid { grid-template-columns: 1fr; }
    .form-row { grid-template-columns: 1fr; }
    .section { padding: 4rem 0; }
    .timeline { padding-left: 1.75rem; }
  }
`;

/* ─── Data ─── */
const NAV_LINKS = ["About","Education","Experience","Research","Projects","Leadership","Skills","Certifications",/*"Recommendations" */,"Contact"];

const ROLES = ["Data Scientist", "Machine Learning Engineer", "Freelance Data Analyst"];

const EDUCATION = [
  { degree: "B.S. in Data Science", school: "The American University in Cairo (AUC)", location: "Cairo, Egypt", date: "Sep 2023 – Present", bullets: ["Awarded the Tomorrow's Leaders Undergraduate Scholarship", "Coursework: Machine Learning, Statistical Inference, Data Structures & Algorithms, Linear Algebra, Applied Probability"] },
  { degree: "B.S. Data Science · Exchange Semester", school: "College of Charleston (CofC)", location: "Charleston, SC, USA", date: "Jan 2026 – May 2026", bullets: ["Selected for a competitive international exchange program", "Conducted applied research in statistical modeling and real estate forecasting"] },
  { degree: "Baccalaureate Certificate · Mathematics Branch", school: "Mohand Mokhbi High School", location: "Algiers, Algeria", date: "2019 – 2022", bullets: ["GPA: 17.17/20 — Mention: Good", "Strong foundation in mathematics, analytical reasoning, and quantitative methods"] },
];

const EXPERIENCE = [
  { title: "Data Analyst", company: "Freelance · Remote", date: "Jan 2025 – Present", bullets: ["Delivered 20+ data analytics and ML projects for private clients and governmental authorities", "Built end-to-end pipelines covering data cleaning, EDA, modeling, clustering, and visualization reporting", "Worked across diverse domains including finance, public sector, and business intelligence"] },
  { title: "Internal PR & Stakeholder Manager", company: "AUC International Symposium · Cairo, Egypt", date: "Jan 2025 – Jun 2025", bullets: ["Managed stakeholder relationships across 8+ university departments and external partners", "Coordinated logistics for a 300+ participant international event and managed a $20,000 cross-functional budget", "Prepared structured budget and progress reports for senior university leadership"] },
  { title: "Action Committee Member", company: "Tomorrow's Leaders Annual Symposium · AUC · Cairo, Egypt", date: "Jan 2024 – Feb 2024", bullets: ["Collected and analyzed operational data from 42 NGOs to evaluate program impact", "Translated findings into professional development recommendations for symposium leadership", "Contributed to event logistics and cross-team coordination for a high-profile leadership forum"] },
];

const RESEARCH = [
{
    title: "The Influence of Spell Checkers on AUC Students' Spelling Ability",
    inst: "The American University in Cairo",
    date: "Summer 2024",
    abstract: "Quasi-experimental study (n=10) investigating whether spell checker dependency hinders independent spelling in EFL students. Results showed accuracy jump during treatment (61.18% → 88.24%) with partial post-test retention (68.24%), confirming reliance without deep learning. Identified cross-linguistic influence as a key factor — North African students with French backgrounds outperformed peers on shared vocabulary.",
    links: { paper: "Wassim Bousbia_reseach_paper.pdf" }
  },];

const PROJECTS = [
{ title: "SC Real Estate Market Forecast",desc: "Engineered a Monte Carlo simulation pipeline (10,000 paths, 36-month horizon) on 2.65GB of South Carolina housing data across 339 regions. Forecasted median home price of $328K with full VaR quantification across 7 risk scenarios.", tech: ["Python", "Monte Carlo", "GBM"],github: "https://github.com/wassimbousbia",report: "/sc_real_estate_report.pdf",image: "/sc_real_estate_screenshot.png"},
{ title: "Egypt NGO Membership Network Analysis",desc: "Built a graph-based network model mapping Egypt's memberships across international organizations using NetworkX and K-Means clustering. Analyzed centrality, bilateral influence, and sectoral engagement across 100+ IGOs to identify Egypt's strategic positioning in global governance.", tech: ["Python", "NetworkX", "scikit-learn"], github: "https://github.com/wassimbousbia/Egypt-NGOs-membership-networks-Project",image: "/egypt_ngo_screenshot.png"},
{ title: "Egypt's Sporting Goods Trade Analysis", image:"\egypt_trade_cover.png", desc: "End-to-end analysis commissioned by Egypt's Ministry of Youth and Sports. Processed 6 years of import/export trade data (2019–2024) across 20+ partner countries. Identified Egypt's shift from a $160M trade deficit to a surplus in 2023, with exports projected to hit $217M in 2025.",tech: ["Python", "Power BI", "Excel"], github: "https://github.com/wassimbousbia/Egypt-exports-and-imports---Data-analysis-using-power-BI-", report: "/egypt_sports_trade_report.pdf"},
{ title: "Credit Card Fraud Detection", image:"\credit_cardd_detection.png" , desc: "Reproducible ML pipeline for anomaly detection on highly imbalanced financial data. Applied SMOTE resampling, threshold tuning, and benchmarked Logistic Regression, Random Forest, and Gradient Boosting using ROC-AUC and F1.", tech: ["Python", "scikit-learn", "XGBoost"], github: "https://github.com/wassimbousbia/Credit-card-fraud-detection" },
{ title: "House Price Prediction — XGBoost", desc: "Trained an XGBoost regression model achieving 89.08% accuracy for next-day house price forecasting. Engineered lag features and applied cross-validation for robust generalization with structured experiment comparison reports.", tech: ["Python", "XGBoost", "Pandas"], github: "https://github.com/wassimbousbia/Egypt-housing-prediction-model-" }, 
{ title: "Multi-Stock Price Predictor", desc: "Deep learning pipeline for multi-asset stock price forecasting across a FAANG portfolio. Engineered 10+ technical indicators (RSI, MACD, Bollinger Bands, EMA), applied LSTM/GRU/Transformer architectures with strict train/val/test splits, and evaluated via MAE, RMSE, and R². Includes backtesting against buy-and-hold strategy with Sharpe Ratio analysis.", tech: ["Python", "LSTM/GRU", "yfinance"], github: "https://github.com/wassimbousbia/Multi-Stock-Price-Predictor" },


];

const LEADERSHIP = [
  { icon: <Users/>, role: "Internal PR & Stakeholder Manager", org: "AUC International Symposium", date: "Jan – Jun 2025", bullets: ["Coordinated logistics and stakeholder communications for a 300+ participant international academic event", "Managed a $20,000 cross-departmental budget and prepared reports for senior leadership"] },
  { icon: <Star/>, role: "Action Committee Member", org: "Tomorrow's Leaders Annual Symposium", date: "Jan – Feb 2024", bullets: ["Analyzed operational data from 42 NGOs to evaluate social impact and inform programmatic decisions", "Contributed to cross-functional event planning for a prestigious leadership development symposium"] },
  { icon: <Award/>, role: "Scholarship Recipient & Community Member", org: "Tomorrow's Leaders Program, AUC", date: "2023 – Present", bullets: ["One of a competitive cohort of scholars selected for academic excellence and leadership potential", "Nominated for outstanding academic research paper in 2024"] },
];

const SKILL_GROUPS = [
  { label: "Programming", cls: "sg0", pills: ["Python", "R", "SQL", "C++", "Java"] },
  { label: "ML / AI", cls: "sg1", pills: ["scikit-learn", "XGBoost", "TensorFlow", "PyTorch"] },
  { label: "Generative AI & NLP", cls: "sg2", pills: ["Hugging Face", "LLMs", "RAG", "Prompt Engineering"] },
  { label: "Data & Visualization", cls: "sg3", pills: ["Feature Engineering", "EDA", "Matplotlib", "Power BI"] },
  { label: "Tools & Cloud", cls: "sg4", pills: ["Git/GitHub", "Docker", "Jupyter Notebook", "Excel"] },
];

const CERTS = [
  { name: "Tomorrow's Leaders Undergraduate Scholarship", org: "The American University in Cairo", date: "2023 – Present" },
  { name: "Research Nomination — Outstanding Academic Paper", org: "The American University in Cairo", date: "2024" },
  { name: "Finalist — Beltone AI Hackathon", org: "Beltone Financial", date: "Jun 2024" },
];

const RECS = [
  { quote: "Add a quote from a professor, client, or colleague who can speak to your technical skills and work ethic. Reach out to a supervisor from AUC or CofC, or a client from your freelance work.", name: "Professor / Supervisor Name", role: "Title · Institution", initials: "PN" },
  { quote: "A short testimonial from a client or collaborator goes a long way. Consider asking someone from your freelance projects or the AUC Symposium team for a brief recommendation.", name: "Client / Collaborator Name", role: "Title · Organization", initials: "CN" },
  { quote: "Recommendations from people who have seen your work firsthand — whether in research, data projects, or leadership roles — add strong social proof to your portfolio.", name: "Colleague / Mentor Name", role: "Title · Organization", initials: "MN" },
];

/* ─── Particles ─── */
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: 4 + Math.random() * 8,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${12 + Math.random() * 20}s`,
    delay: `${-Math.random() * 20}s`,
    opacity: 0.15 + Math.random() * 0.25,
  }));
  return (
    <div className="hero-canvas" aria-hidden="true">
      <div className="hero-grid" />
      <div className="hero-glow" style={{ width:500, height:500, left:'20%', top:'10%', background:'radial-gradient(#1d4ed8, transparent)' }} />
      <div className="hero-glow" style={{ width:400, height:400, right:'10%', bottom:'20%', background:'radial-gradient(#0ea5e9, transparent)' }} />
      {particles.map(p => (
        <div key={p.id} className="particle" style={{
          width: p.size, height: p.size, left: p.left, top: p.top,
          animationDuration: p.duration, animationDelay: p.delay, opacity: p.opacity,
        }} />
      ))}
    </div>
  );
}

/* ─── Typewriter ─── */
function Typewriter({ words }) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;
    if (typing) {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(d => d.slice(0, -1)), 28);
      } else {
        setWordIdx(i => (i + 1) % words.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [display, typing, wordIdx, words]);

  return (
    <div className="typewriter-wrap">
      <span>{">"} {display}</span>
      <span className="cursor" />
    </div>
  );
}

/* ─── Reveal hook ─── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── Section wrapper ─── */
function Section({ id, title, children }) {
  const ref = useReveal();
  return (
    <section id={id} className="section">
      <div className="section-inner">
        <div ref={ref} className="reveal">
          <h2 className="section-title grad">{title}</h2>
          <div className="section-divider" />
        </div>
        {children}
      </div>
    </section>
  );
}

/* ─── Main App ─── */
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.textContent = STYLES;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.toLowerCase().replace(/\s+/g,"-").replace("&","").replace("--","-"));
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  const sectionId = (label) => label.toLowerCase().replace(/\s+/g,"-").replace("&","").replace("--","-");

  const RevealDiv = ({ children, className="", delay="" }) => {
    const ref = useReveal();
    return <div ref={ref} className={`reveal ${className} ${delay ? "reveal-delay-"+delay : ""}`}>{children}</div>;
  };

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <button className="nav-logo grad" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{fontSize:"1.4rem", letterSpacing:"0.05em"}}>W.B.</button>
        <div className="nav-links">
          {NAV_LINKS.map(l => (
            <button key={l} className={`nav-link${activeSection === sectionId(l) ? " active" : ""}`} onClick={() => scrollTo(sectionId(l))}>{l}</button>
          ))}
        </div>
        <div style={{display:"flex", alignItems:"center", gap:"0.75rem"}}>
          <a href="https://linkedin.com/in/wassim-bousbia" target="_blank" rel="noreferrer" className="social-icon" style={{width:34,height:34}} aria-label="LinkedIn"><Linkedin /></a>
          <a href="https://github.com/wassimbousbia" target="_blank" rel="noreferrer" className="social-icon" style={{width:34,height:34}} aria-label="GitHub"><GithubIcon /></a>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map(l => (
          <button key={l} className="nav-link" onClick={() => scrollTo(sectionId(l))}>{l}</button>
        ))}
      </div>

      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <Particles />
        <div className="hero-content" style={{animation:"fadeUp 0.9s cubic-bezier(.22,1,.36,1) both"}}>
          <div className="hero-eyebrow">Welcome to my portfolio</div>
          <h1 className="hero-name grad">Wassim Bousbia</h1>
          <Typewriter words={ROLES} />
          <p className="hero-subtitle">The American University in Cairo &nbsp;·&nbsp; B.S. Data Science &nbsp;·&nbsp; Cairo, Egypt</p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              View My Work <ChevronRight/>
            </button>
            <a href="/Wassim_Bousbia_CV.pdf" download="Wassim_Bousbia_CV.pdf" className="btn-outline" style={{textDecoration:"none"}}><Download /> Download CV</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/wassimbousbia" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub"><GithubIcon/></a>
            <a href="https://linkedin.com/in/wassim-bousbia" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn"><Linkedin/></a>
            <a href="mailto:wassim@aucegypt.edu" className="social-icon" aria-label="Email"><Mail/></a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <Section id="about" title="About Me">
        <div className="about-grid">
          <RevealDiv delay="1">
            <div className="about-badge"><span className="about-badge-dot"/>Open to full-time &amp; freelance Data Science / ML roles — available now</div>
            <div className="about-text">
              <p>I'm a Data Science student at <strong style={{color:"#1d4ed8"}}>The American University in Cairo</strong>, recipient of the Tomorrow's Leaders Undergraduate Scholarship, with an exchange semester at the College of Charleston (Spring 2026). My work sits at the intersection of statistical modeling, machine learning, and real-world impact.</p>
              <p>I've delivered 20+ data analytics and ML projects as a freelance data analyst — working with private clients and governmental authorities — covering the full pipeline from data cleaning and EDA to predictive modeling and visualization. I've also competed in national-level hackathons including Beltone AI and Deloitte Datathon.</p>
              <p>Beyond technical work, I enjoy leading and collaborating — I've coordinated a 300+ participant international symposium, managed cross-functional budgets, and represented my university in stakeholder forums. I'm trilingual (Arabic, French, English) and bring a multicultural perspective to everything I build.</p>
            </div>
          </RevealDiv>
          <RevealDiv delay="2">
            <img src="/profile.jpg" alt="Wassim Bousbia" style={{width:"100%",borderRadius:"20px",border:"2px solid rgba(59,130,246,0.25)",boxShadow:"0 8px 32px rgba(59,130,246,0.12)"}} />
          </RevealDiv>
        </div>
      </Section>

      {/* ── EDUCATION ── */}
      <Section id="education" title="Education">
        <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
          {EDUCATION.map((item, i) => (
            <RevealDiv key={i} className="glass-card" delay={String(i+1)}>
              <div style={{padding:"1.5rem 2rem"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"1rem", flexWrap:"wrap"}}>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{fontSize:"1.1rem", fontWeight:700, color:"var(--text-primary)", marginBottom:"0.2rem"}}>{item.school} · {item.location}</div>
                    <div style={{fontSize:"0.9rem", fontWeight:500, color:"#3b82f6", marginTop:"0.2rem"}}>{item.degree}</div>
                  </div>
                  <div style={{flexShrink:0}}>
                    <div style={{fontSize:"0.78rem", fontFamily:"'Fira Code', monospace", color:"#1d4ed8", whiteSpace:"nowrap", background:"rgba(59,130,246,0.08)", border:"1px solid rgba(59,130,246,0.2)", borderRadius:"50px", padding:"4px 12px"}}>{item.date}</div>
                  </div>
                </div>
                {item.bullets && (
                  <ul style={{marginTop:"1rem", listStyle:"none", display:"flex", flexDirection:"column", gap:6}}>
                    {item.bullets.map((b, j) => (
                      <li key={j} style={{fontSize:"0.85rem", color:"var(--text-secondary)", display:"flex", gap:8}}>
                        <span style={{color:"#3b82f6", flexShrink:0}}>▸</span>{b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </RevealDiv>
          ))}
        </div>
      </Section>

      {/* ── EXPERIENCE ── */}
      <Section id="experience" title="Experience">
        <div className="timeline">
          {EXPERIENCE.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <RevealDiv className="glass-card timeline-card" delay={String(i+1)}>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-sub">{item.company}</div>
                <ul className="timeline-bullets">{item.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul>
              </RevealDiv>
            </div>
          ))}
        </div>
      </Section>

      {/* ── RESEARCH ── */}
      <Section id="research" title="Research & Publications">
        {RESEARCH.map((r, i) => (
          <RevealDiv key={i} className="glass-card research-card" delay={String(i+1)} style={{marginBottom:"1.5rem"}}>
            <div className="research-title grad">{r.title}</div>
            <div className="research-meta">{r.inst} · {r.date}</div>
            <div className="research-abstract">{r.abstract}</div>
            <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
              <a href={r.links.paper} target="_blank" rel="noreferrer" className="icon-btn"><BookOpen/> View Report</a>
            </div>
          </RevealDiv>
        ))}
      </Section>

      {/* ── PROJECTS ── */}
      <Section id="projects" title="Projects">
        <div className="projects-grid">
          {PROJECTS.map((p, i) => {
            const pillCls = ["pill-v","pill-p","pill-t"];
            return (
              <RevealDiv key={i} className="glass-card project-card" delay={String((i%2)+1)}>
                <div className="project-title grad">{p.title}</div>
                {p.image && (
  <img src={p.image} alt={p.title}
    style={{width:"100%", borderRadius:"10px", marginBottom:"1rem", border:"1px solid rgba(59,130,246,0.15)"}}
  />
)}
                <div className="project-desc">{p.desc}</div>
                <div className="tech-pills">{p.tech.map((t,j)=><span key={j} className={`tech-pill ${pillCls[j%3]}`}>{t}</span>)}</div>
                <div className="project-actions">
<a href={p.github} target="_blank" rel="noreferrer" className="icon-btn"><GithubIcon/> GitHub</a>
{p.report && <a href={p.report} target="_blank" rel="noreferrer" className="icon-btn"><BookOpen/> View Report</a>}                </div>
              </RevealDiv>
            );
          })}
        </div>
      </Section>

      {/* ── LEADERSHIP ── */}
      <Section id="leadership" title="Leadership & Involvement">
        <div className="leadership-grid">
          {LEADERSHIP.map((l, i) => (
            <RevealDiv key={i} className="glass-card leadership-card" delay={String(i+1)}>
              <div className="leadership-icon">{l.icon}</div>
              <div className="leadership-title">{l.role}</div>
              <div className="leadership-org">{l.org}</div>
              <div className="leadership-date">{l.date}</div>
              <ul className="timeline-bullets" style={{textAlign:"left"}}>
                {l.bullets.map((b,j)=><li key={j}>{b}</li>)}
              </ul>
            </RevealDiv>
          ))}
        </div>
      </Section>

      {/* ── SKILLS ── */}
      <Section id="skills" title="Technical Skills">
        <div className="skills-groups">
          {SKILL_GROUPS.map((g, i) => (
            <RevealDiv key={i} delay={String(i+1)}>
              <div className="skill-group-label">{g.label}</div>
              <div className="skill-pills">{g.pills.map((p,j)=><span key={j} className={`skill-pill ${g.cls}`}>{p}</span>)}</div>
            </RevealDiv>
          ))}
        </div>
      </Section>

      {/* ── CERTIFICATIONS ── */}
      <Section id="certifications" title="Certifications & Awards">
        <div className="certs-grid">
          {CERTS.map((c, i) => (
            <RevealDiv key={i} className="glass-card cert-card" delay={String(i+1)}>
              <div className="cert-icon"><Award/></div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-org">{c.org}</div>
              <div className="cert-date">{c.date}</div>
              <button className="btn-xs">View Certificate</button>
            </RevealDiv>
          ))}
        </div>
      </Section>

      {/* ── RECOMMENDATIONS ── */}
    {/* <Section id="recommendations" title="Recommendations">
        <div className="recs-grid">
          {RECS.map((r, i) => (
            <RevealDiv key={i} className="glass-card rec-card" delay={String(i+1)}>
              <div className="rec-quote-mark">"</div>
              <p className="rec-text">{r.quote}</p>
              <div className="rec-footer">
                <div className="rec-avatar">{r.initials}</div>
                <div>
                  <div className="rec-name">{r.name}</div>
                  <div className="rec-role">{r.role}</div>
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </Section>
*/}
      {/* ── CONTACT ── */}
      <Section id="contact" title="Get In Touch">
        <div className="contact-wrap">
          <RevealDiv>
            <p className="contact-sub">Open to opportunities, collaborations, and conversations.</p>
            <div className="contact-email"><a href="mailto:wassim@aucegypt.edu">wassim@aucegypt.edu</a></div>
          </RevealDiv>
          <RevealDiv className="contact-form" delay="1">
            <div className="form-row">
              <div className="form-field">
                <label className="form-label">Name</label>
                <input className="form-input" placeholder="Your full name" />
              </div>
              <div className="form-field">
                <label className="form-label">Email</label>
                <input className="form-input" placeholder="your@email.com" />
              </div>
            </div>
            <div className="form-field">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" placeholder="Tell me about your project, opportunity, or just say hello…" />
            </div>
            <button className="btn-primary" style={{alignSelf:"flex-start"}}>
              <Send/> Send Message
            </button>
          </RevealDiv>
          <RevealDiv delay="2">
            <div className="hero-socials" style={{marginTop:"2rem"}}>
              <a href="https://github.com/wassimbousbia" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub"><GithubIcon/></a>
              <a href="https://linkedin.com/in/wassim-bousbia" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn"><Linkedin/></a>
              <a href="mailto:wassim@aucegypt.edu" className="social-icon" aria-label="Email"><Mail/></a>
            </div>
          </RevealDiv>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p className="footer-text">Designed &amp; Built by <span className="grad" style={{fontWeight:600}}>Wassim Bousbia</span> · 2026</p>
        <div className="footer-socials">
          <a href="https://github.com/wassimbousbia" target="_blank" rel="noreferrer" className="social-icon" style={{width:34,height:34}} aria-label="GitHub"><GithubIcon/></a>
          <a href="https://linkedin.com/in/wassim-bousbia" target="_blank" rel="noreferrer" className="social-icon" style={{width:34,height:34}} aria-label="LinkedIn"><Linkedin/></a>
          <a href="mailto:wassim@aucegypt.edu" className="social-icon" style={{width:34,height:34}} aria-label="Email"><Mail/></a>
        </div>
      </footer>
    </>
  );
}