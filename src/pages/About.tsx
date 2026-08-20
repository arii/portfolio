import React from 'react';
import roboticistPhoto from '@/assets/roboticist.jpg';
import { profileData } from '@/data/aboutData';
import { CareerHighlightsSection, AtAGlanceSidebar } from '@/components/about/AboutSections';

const About: React.FC = () => {
  return (
    <div className="space-y-8 sm:space-y-12">
      <header className="space-y-3 border-b border-line/20 pb-6 sm:pb-8">
        <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full text-xs text-accent font-semibold uppercase tracking-wider">
          <span>Biography</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-text-main leading-tight">
          {profileData.name}
        </h1>
        <p className="text-lg sm:text-xl text-accent font-bold tracking-tight">
          {profileData.role}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <section className="lg:col-span-8 space-y-8 sm:space-y-10 order-2 lg:order-1">
          <div className="space-y-6 bg-surface p-6 sm:p-8 rounded-3xl border border-line">
            <h2 className="text-xl sm:text-2xl font-bold text-text-main pb-3 border-b border-line/30">
              Biography
            </h2>
            <div className="space-y-4 text-text-body leading-relaxed text-sm sm:text-base">
              <p>
                {profileData.bio[0]}
              </p>
              <p>
                <strong className="font-bold text-text-main">Beyond the Code</strong>{" "}
                {profileData.bio[1]}
              </p>
            </div>
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

          <CareerHighlightsSection highlights={profileData.highlights} />
        </section>

        <aside className="lg:col-span-4 space-y-6 sm:space-y-8 order-1 lg:order-2">
          <div className="relative group mx-auto lg:mx-0 max-w-sm rounded-3xl overflow-hidden border border-line bg-surface transition-all duration-300">
            <div className="aspect-[4/3] sm:aspect-square max-h-72 sm:max-h-none w-full overflow-hidden">
              <img
                src={roboticistPhoto}
                alt="Ariel Anders, PhD - Roboticist and DevAI Engineer"
                className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <AtAGlanceSidebar details={profileData.details} />

          <div className="border border-line bg-surface p-6 rounded-3xl space-y-4">
            <h3 className="text-xs font-semibold text-accent uppercase tracking-widest flex items-center space-x-1.5 font-sans">
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
                    className="flex items-center space-x-3 text-text-dim hover:text-text-main border border-line bg-surface-alt hover:bg-line p-3.5 rounded-2xl transition-all min-h-[44px]"
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
