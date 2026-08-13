import React from 'react';
import { Terminal, Zap, Globe, MapPin, Briefcase, ExternalLink } from 'lucide-react';
import roboticistPhoto from '@/assets/roboticist.jpg';

// Simple, beautiful, type-safe inline SVG icons for LinkedIn and GitHub
const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const About: React.FC = () => {
  const profileData = {
    name: "Ariel Anders, PhD",
    role: "Senior roboticist · DevAI engineer",
    bio: "MIT PhD and former senior engineer at Waymo and Robust.AI. I bridge the gap between shipping production robotics software and building the agentic engineering workflows that scale robotics teams. Below is a breakdown of my professional experience and independent projects.",
    details: [
      { label: "Location", value: "San Francisco, CA", icon: MapPin },
      { label: "Portfolio", value: "View Portfolio", url: "#/research", icon: Globe },
      { label: "Resume", value: "View Resume", url: "#/resume", icon: Briefcase }
    ],
    experience: [
      {
        icon: Terminal,
        title: "Robotics & Engineering",
        content: "Senior roboticist with production experience at Waymo and Robust.AI. I work across navigation, localization, motion planning, and behavior for autonomous systems. At startups, that means owning the full stack — from algorithm to Docker to deployment. Stack: ROS1/ROS2, C++, Python."
      },
      {
        icon: Zap,
        title: "DevAI tooling (independent projects)",
        content: "I build agentic CI/CD pipelines, LLM-assisted code review, and developer tooling as self-directed projects — the tools I wish robotics teams had. Current work: RepoAuditor AI (Gemini-driven PR auditing) and BoomTick.blog (live RAG + LLM testbed in active development). Code at github.com/arii."
      },
      {
        icon: Globe,
        title: "DevAI for robotics",
        content: "Most DevAI practitioners don't know ROS. Most roboticists aren't building agentic pipelines. I work at that intersection, helping robotics teams adopt AI-assisted engineering practices: automated code review, agentic CI/CD, and LLM tooling built by someone who has shipped production robotics software."
      }
    ],
    availability: "Open to Staff/Senior SWE roles, robotics contracts, and DevAI consulting — especially where robotics and AI-assisted engineering overlap.",
    socials: [
      { label: "LinkedIn", url: "https://linkedin.com/in/arielanders", icon: LinkedinIcon },
      { label: "GitHub", url: "https://github.com/arii", icon: GithubIcon }
    ]
  };

  return (
    <div className="relative min-h-screen bg-brand-bg-dark text-slate-100 overflow-hidden grid-pattern px-4 sm:px-6 md:px-8 py-10 rounded-2xl border border-slate-900 shadow-2xl">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Console Diagnostic Header Bar */}
        <div className="border border-slate-800 bg-brand-bg-darker/95 backdrop-blur-md rounded-xl px-6 py-4 flex flex-wrap gap-4 items-center justify-between text-xs text-slate-400 font-mono shadow-lg">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse shadow-[0_0_8px_#10b981]"></span>
            <span className="text-slate-200 font-semibold uppercase tracking-wider">CONSOLE STATE: ACTIVE</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="flex items-center space-x-1.5 text-brand-green">
              <span className="opacity-65">SYS_CPU:</span> <span className="font-bold text-slate-100">10.8%</span>
            </span>
            <span className="flex items-center space-x-1.5 text-brand-cyan-light">
              <span className="opacity-65">MEM:</span> <span className="font-bold text-slate-100">2.84 / 16 GB</span>
            </span>
            <span className="flex items-center space-x-1.5 text-brand-green">
              <span className="opacity-65">SHELL:</span> <span className="font-bold text-slate-100">secure-shell (v3)</span>
            </span>
          </div>
        </div>

        {/* Header Profile Info */}
        <header className="space-y-4 border-b border-slate-900 pb-8">
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 border border-brand-green/30 px-3 py-1 rounded-full text-xs text-brand-green font-mono uppercase tracking-widest">
            <span>{`$ bio --init`}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            {profileData.name}
          </h1>
          <p className="text-lg sm:text-xl text-brand-cyan-light font-bold font-mono tracking-wide">
            {profileData.role}
          </p>
        </header>

        {/* Main Grid: Info + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Bio Content + Experience Cards */}
          <section className="lg:col-span-8 space-y-10 order-2 lg:order-1">
            <div className="space-y-4 bg-brand-bg-darker/60 p-6 rounded-xl border border-slate-900/60">
              <h2 className="text-xl font-extrabold text-white flex items-center space-x-2 border-b border-slate-900 pb-2">
                <span className="text-brand-green font-mono">{`> `}</span>
                <span>Professional Summary</span>
              </h2>
              <p className="text-slate-300 leading-relaxed text-base">
                {profileData.bio}
              </p>
            </div>

            {/* Pillars List */}
            <div className="space-y-6">
              <h2 className="text-xl font-extrabold text-white flex items-center space-x-2 border-b border-slate-900 pb-2">
                <span className="text-brand-green font-mono">{`> `}</span>
                <span>Core Pillars</span>
              </h2>

              <div className="space-y-6">
                {profileData.experience.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-800 bg-brand-bg-darker/80 rounded-xl p-6 hover:border-brand-green/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)] transition-all duration-300 flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6"
                    >
                      <div className="h-12 w-12 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0 border border-brand-green/20 shadow-sm">
                        <Icon className="h-6 w-6 text-brand-green" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white tracking-wide">
                          {card.title}
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {card.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Availability Banner */}
            <div className="border border-brand-cyan/30 bg-brand-cyan/5 rounded-xl p-6 space-y-2 shadow-[0_0_15px_rgba(6,182,212,0.03)]">
              <span className="text-xs font-mono text-brand-cyan-light uppercase tracking-widest font-extrabold flex items-center space-x-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
                <span>Current Availability</span>
              </span>
              <p className="text-sm text-slate-200 leading-relaxed">
                {profileData.availability}
              </p>
            </div>
          </section>

          {/* Right Column: Sticky Sidebar / Portrait + Glances */}
          <aside className="lg:col-span-4 space-y-8 order-1 lg:order-2">
            {/* Portrait Image */}
            <div className="relative group mx-auto lg:mx-0 max-w-sm rounded-2xl overflow-hidden border border-slate-800 bg-brand-bg-darker p-2 shadow-2xl hover:border-brand-green/30 transition-all duration-300">
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-950">
                <img
                  src={roboticistPhoto}
                  alt="Ariel Anders, PhD - Roboticist and DevAI Engineer"
                  className="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
              {/* Visual control dots layout */}
              <div className="absolute top-4 left-4 flex space-x-1.5 bg-slate-950/80 px-2.5 py-1.5 rounded-full backdrop-blur-sm border border-slate-800/40">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
              </div>
            </div>

            {/* At a Glance Box */}
            <div className="border border-slate-800 bg-brand-bg-darker/90 rounded-2xl p-6 space-y-4 shadow-lg">
              <h3 className="text-xs font-mono text-brand-green uppercase tracking-widest font-black flex items-center space-x-1.5">
                <span className="h-1 w-1 bg-brand-green rounded-full"></span>
                <span>At a Glance</span>
              </h3>
              <div className="space-y-4">
                {profileData.details.map((detail, idx) => {
                  const Icon = detail.icon;
                  return (
                    <div key={idx} className="flex items-center justify-between border-b border-slate-900/60 pb-3 last:border-0 last:pb-0">
                      <span className="text-xs text-slate-400 font-mono flex items-center space-x-1.5">
                        <Icon className="h-4 w-4 text-slate-400" />
                        <span>{detail.label}</span>
                      </span>
                      {detail.url ? (
                        <a
                          href={detail.url}
                          className="text-sm font-bold text-brand-cyan-light hover:text-white transition-colors flex items-center space-x-1 decoration-brand-cyan/30 hover:underline"
                        >
                          <span>{detail.value}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <span className="text-sm font-bold text-slate-200">
                          {detail.value}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Connect / Socials */}
            <div className="border border-slate-800 bg-brand-bg-darker/90 rounded-2xl p-6 space-y-4 shadow-lg">
              <h3 className="text-xs font-mono text-brand-green uppercase tracking-widest font-black flex items-center space-x-1.5">
                <span className="h-1 w-1 bg-brand-green rounded-full"></span>
                <span>Connect</span>
              </h3>
              <div className="flex flex-col gap-3">
                {profileData.socials.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-slate-300 hover:text-white border border-slate-800 hover:border-brand-green/30 bg-slate-900/40 hover:bg-slate-900/80 p-3.5 rounded-xl transition-all duration-350 shadow-sm"
                    >
                      <Icon className="h-4 w-4 text-brand-cyan-light shrink-0" />
                      <span className="text-sm font-bold">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default About;
