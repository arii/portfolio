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
    <div className="space-y-12 py-6">
      {/* Console Diagnostic Header Bar */}
      <div className="border border-slate-800 bg-[#0c0f16] rounded-xl px-6 py-4 flex flex-wrap gap-4 items-center justify-between text-xs text-slate-400 font-mono shadow-md">
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse"></span>
          <span className="text-slate-300 font-semibold uppercase tracking-wider">CONSOLE STATE: ACTIVE</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <span className="flex items-center space-x-1.5 text-brand-green">
            <span className="opacity-60">SYS_CPU:</span> <span>10.8%</span>
          </span>
          <span className="flex items-center space-x-1.5 text-brand-cyan-light">
            <span className="opacity-60">MEM:</span> <span>2.84 / 16 GB</span>
          </span>
          <span className="flex items-center space-x-1.5 text-brand-green">
            <span className="opacity-60">SHELL:</span> <span className="font-bold">secure-shell (v3)</span>
          </span>
        </div>
      </div>

      {/* Header Profile Info */}
      <header className="space-y-4 border-b border-slate-900 pb-8">
        <div className="inline-flex items-center space-x-2 bg-slate-800/40 border border-slate-800 px-3 py-1 rounded-full text-xs text-brand-green font-mono uppercase tracking-widest">
          <span>{`$ bio --init`}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
          {profileData.name}
        </h1>
        <p className="text-lg text-brand-cyan-light font-medium font-mono">
          {profileData.role}
        </p>
      </header>

      {/* Main Grid: Info + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Bio Content + Experience Cards */}
        <section className="lg:col-span-8 space-y-10 order-2 lg:order-1">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2 flex items-center space-x-2">
              <span className="text-brand-green font-mono">{`> `}</span>
              <span>Professional Summary</span>
            </h2>
            <p className="text-slate-300 leading-relaxed text-base">
              {profileData.bio}
            </p>
          </div>

          {/* Pillars List */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white border-b border-slate-900 pb-2 flex items-center space-x-2">
              <span className="text-brand-green font-mono">{`> `}</span>
              <span>Core Pillars</span>
            </h2>

            <div className="space-y-6">
              {profileData.experience.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="border border-slate-800 bg-[#0c0f16]/40 rounded-xl p-6 hover:border-brand-green/40 hover:shadow-[0_0_15px_rgba(52,211,153,0.05)] transition-all flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6"
                  >
                    <div className="h-12 w-12 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0 border border-brand-green/20">
                      <Icon className="h-6 w-6 text-brand-green" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-white">
                        {card.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {card.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Availability Banner */}
          <div className="border border-brand-cyan/20 bg-brand-cyan/5 rounded-xl p-6 space-y-2">
            <span className="text-xs font-mono text-brand-cyan-light uppercase tracking-wider font-bold">Current Availability</span>
            <p className="text-sm text-slate-300 leading-relaxed">
              {profileData.availability}
            </p>
          </div>
        </section>

        {/* Right Column: Sticky Sidebar / Portrait + Glances */}
        <aside className="lg:col-span-4 space-y-8 order-1 lg:order-2">
          {/* Portrait Image */}
          <div className="relative group mx-auto lg:mx-0 max-w-sm rounded-xl overflow-hidden border border-slate-800 bg-slate-900 p-2 shadow-xl hover:border-brand-green/30 transition-all">
            <div className="aspect-square rounded-lg overflow-hidden bg-slate-950">
              <img
                src={roboticistPhoto}
                alt="Ariel Anders, PhD - Roboticist and DevAI Engineer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
              />
            </div>
            {/* Visual control dots layout */}
            <div className="absolute top-4 left-4 flex space-x-1.5 bg-slate-950/80 px-2 py-1.5 rounded-full backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            </div>
          </div>

          {/* At a Glance Box */}
          <div className="border border-slate-800 bg-[#0c0f16]/60 rounded-xl p-6 space-y-4">
            <h3 className="text-xs font-mono text-brand-green uppercase tracking-widest font-bold">
              At a Glance
            </h3>
            <div className="space-y-4">
              {profileData.details.map((detail, idx) => {
                const Icon = detail.icon;
                return (
                  <div key={idx} className="flex items-center justify-between border-b border-slate-900 pb-3 last:border-0 last:pb-0">
                    <span className="text-xs text-slate-500 font-mono flex items-center space-x-1.5">
                      <Icon className="h-3.5 w-3.5 text-slate-500" />
                      <span>{detail.label}</span>
                    </span>
                    {detail.url ? (
                      <a
                        href={detail.url}
                        className="text-sm font-semibold text-brand-cyan-light hover:text-white transition-colors flex items-center space-x-1"
                      >
                        <span>{detail.value}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-slate-300">
                        {detail.value}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Connect / Socials */}
          <div className="border border-slate-800 bg-[#0c0f16]/60 rounded-xl p-6 space-y-4">
            <h3 className="text-xs font-mono text-brand-green uppercase tracking-widest font-bold">
              Connect
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
                    className="flex items-center space-x-3 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-900/30 hover:bg-slate-900/60 p-3 rounded-lg transition-all"
                  >
                    <Icon className="h-4 w-4 text-brand-cyan-light" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default About;
