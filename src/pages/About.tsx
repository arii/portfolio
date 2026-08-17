import React from 'react';
import { Briefcase, MapPin, Globe, Zap, ExternalLink } from 'lucide-react';
import roboticistPhoto from '@/assets/roboticist.jpg';

// Simple, beautiful, type-safe inline SVG icons for LinkedIn and GitHub

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

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
    bio: "I'm an MIT PhD and former senior engineer at Waymo and Robust.AI. My background is in robotics—specifically navigation, motion planning, and behavior systems. But recently, I've been focused on something slightly different: the developer experience. This portfolio is a deep dive into my work building AI-assisted engineering workflows, autonomous agents, and the infrastructure that supports them.",
    details: [
      { label: "Location", value: "San Francisco, CA", icon: MapPin },
      { label: "Portfolio", value: "View Portfolio", url: "#/research", icon: Globe },
      { label: "Resume", value: "View Resume", url: "#/resume", icon: Briefcase }
    ],
    experience: [
      {
        icon: Zap,
        title: "AI-Accelerated Rigor",
        content: "AI should raise the bar, not lower it. I develop agentic CI/CD workflows and automated code reviews to code-gen patches, resolve architecture guidelines, and triage and prevent technical debt faster."
      },
      {
        icon: Globe,
        title: "Reliable Robot Behavior",
        content: "Developing onboard motion planning, reactive social navigation, and behavior software across autonomous vehicles, indoor robots in unstructured environments, and robotic manipulation."
      },
      {
        icon: Briefcase,
        title: "Production Robot Software",
        content: "Authoring production-quality C++, Python, and ROS 2 software using Docker and AWS IoT to build automated pipelines and containerized robotics applications for high fleet uptime."
      }
    ],
    availability: "Open to Staff/Senior SWE roles, robotics contracts, and DevAI consulting — especially where robotics and AI-assisted engineering overlap.",
    socials: [
      { label: "Email", url: "mailto:anders.ariel@gmail.com", icon: MailIcon },
      { label: "LinkedIn", url: "https://linkedin.com/in/arielanders", icon: LinkedinIcon },
      { label: "GitHub", url: "https://github.com/arii", icon: GithubIcon }
    ]
  };

  return (
    <div className="space-y-12">
      {/* Header Profile Info */}
      <header className="space-y-4 border-b border-line/20 pb-8">
        <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 px-3 py-1 rounded-full text-xs text-accent font-semibold uppercase tracking-wider">
          <span>Biography</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-text-main leading-none">
          {profileData.name}
        </h1>
        <p className="text-xl text-accent font-bold tracking-tight">
          {profileData.role}
        </p>
      </header>

      {/* Main Grid: Info + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Bio Content + Experience Cards */}
        <section className="lg:col-span-8 space-y-10 order-2 lg:order-1">
          <div className="space-y-4 bg-surface p-6 sm:p-8 rounded-3xl border border-line">
            <h2 className="text-2xl font-bold text-text-main pb-3 border-b border-line/30">
              Professional Summary
            </h2>
            <p className="text-text-body leading-relaxed text-base">
              {profileData.bio}
            </p>
          </div>

          {/* Pillars List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-text-main pb-3 border-b border-line/30">
              Core Pillars
            </h2>

            <div className="space-y-6">
              {profileData.experience.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="border border-line bg-surface p-6 sm:p-8 rounded-3xl hover:border-accent transition-all flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-text-main tracking-wide">
                        {card.title}
                      </h3>
                      <p className="text-sm text-text-dim leading-relaxed">
                        {card.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


          {/* Removed Resume Scaffold Sections - Now available on Resume Page */}

          {/* Availability Banner */}
          <div className="border border-accent/20 bg-accent/5 rounded-3xl p-6 sm:p-8 space-y-3">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest flex items-center space-x-1.5">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span>Current Availability</span>
            </span>
            <p className="text-sm text-text-body leading-relaxed">
              {profileData.availability}
            </p>
          </div>
        </section>

        {/* Right Column: Sticky Sidebar / Portrait + Glances */}
        <aside className="lg:col-span-4 space-y-8 order-1 lg:order-2">
          {/* Portrait Image */}
          <div className="relative group mx-auto lg:mx-0 max-w-sm rounded-3xl overflow-hidden border border-line bg-surface p-2 transition-all duration-300">
            <div className="aspect-square rounded-2xl overflow-hidden bg-bg">
              <img
                src={roboticistPhoto}
                alt="Ariel Anders, PhD - Roboticist and DevAI Engineer"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>

          {/* At a Glance Box */}
          <div className="border border-line bg-surface p-6 rounded-3xl space-y-4">
            <h3 className="text-xs font-semibold text-accent uppercase tracking-widest flex items-center space-x-1.5 font-sans">
              <span className="h-1 w-1 bg-accent rounded-full"></span>
              <span>At a Glance</span>
            </h3>
            <div className="space-y-4">
              {profileData.details.map((detail, idx) => {
                const Icon = detail.icon;
                return (
                  <div key={idx} className="flex items-center justify-between border-b border-line/30 pb-3 last:border-0 last:pb-0">
                    <span className="text-xs text-text-dim flex items-center space-x-1.5">
                      <Icon className="h-4 w-4 text-text-dim" />
                      <span>{detail.label}</span>
                    </span>
                    {detail.url ? (
                      <a
                        href={detail.url}
                        className="text-sm font-bold text-accent hover:opacity-80 transition-opacity flex items-center space-x-1"
                      >
                        <span>{detail.value}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-text-main">
                        {detail.value}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Connect / Socials */}
          <div className="border border-line bg-surface p-6 rounded-3xl space-y-4">
            <h3 className="text-xs font-semibold text-accent uppercase tracking-widest flex items-center space-x-1.5 font-sans">
              <span className="h-1 w-1 bg-accent rounded-full"></span>
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
                    className="flex items-center space-x-3 text-text-dim hover:text-text-main border border-line bg-surface-alt hover:bg-line p-3.5 rounded-2xl transition-all"
                  >
                    <Icon className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-sm font-bold">{social.label}</span>
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
