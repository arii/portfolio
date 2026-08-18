import React from 'react';
import { MapPin, Globe, Briefcase, ExternalLink, GraduationCap, Award } from 'lucide-react';
import roboticistPhoto from '@/assets/roboticist.jpg';
import { MailIcon, LinkedinIcon, GithubIcon } from '@/components/SocialIcons';

const About: React.FC = () => {
  const profileData = {
    name: "Ariel Anders, PhD",
    role: "Senior roboticist · DevAI engineer",
    bio: "I'm an MIT PhD and former senior engineer at Waymo and Robust.AI. My background is in robotics—specifically navigation, motion planning, and behavior systems. Across my career at MIT CSAIL, Robust.AI, Waymo, and Civ Robotics, I've focused on bridging complex algorithmic reasoning with robust production software. Currently, I am applying robotics-grade software rigor to autonomous AI engineering agents and developer infrastructure.",
    details: [
      { label: "Location", value: "San Francisco, CA", icon: MapPin },
      { label: "PhD Focus", value: "Advised by Leslie Kaelbling & Tomas Lozano-Perez", icon: GraduationCap },
      { label: "Portfolio", value: "View Portfolio", url: "#/research", icon: Globe },
      { label: "Resume", value: "View Resume", url: "#/resume", icon: Briefcase },
      { label: "Publications", value: "View full publications & experience →", url: "#/resume", icon: Award }
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <section className="lg:col-span-8 space-y-10 order-2 lg:order-1">
          <div className="space-y-4 bg-surface p-6 sm:p-8 rounded-3xl border border-line">
            <h2 className="text-2xl font-bold text-text-main pb-3 border-b border-line/30">
              Professional Summary
            </h2>
            <p className="text-text-body leading-relaxed text-base">
              {profileData.bio}
            </p>
          </div>

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

        <aside className="lg:col-span-4 space-y-8 order-1 lg:order-2">
          <div className="relative group mx-auto lg:mx-0 max-w-sm rounded-3xl overflow-hidden border border-line bg-surface p-2 transition-all duration-300">
            <div className="aspect-square rounded-2xl overflow-hidden bg-bg">
              <img
                src={roboticistPhoto}
                alt="Ariel Anders, PhD - Roboticist and DevAI Engineer"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>

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
                    <span className="text-xs text-text-dim flex items-center space-x-1.5 shrink-0 mr-2">
                      <Icon className="h-4 w-4 text-text-dim" />
                      <span>{detail.label}</span>
                    </span>
                    {detail.url ? (
                      <a
                        href={detail.url}
                        className="text-xs sm:text-sm font-bold text-accent hover:opacity-80 transition-opacity flex items-center space-x-1 text-right"
                      >
                        <span>{detail.value}</span>
                        <ExternalLink className="h-3 w-3 shrink-0 ml-1" />
                      </a>
                    ) : (
                      <span className="text-xs sm:text-sm font-bold text-text-main text-right">
                        {detail.value}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

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
