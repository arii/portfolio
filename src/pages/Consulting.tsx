import React from 'react';
import {
  ArrowRight,
  Bot,
  Briefcase,
  Calendar,
  CheckCircle2,
  Compass,
  Cpu,
  FlaskConical,
  Mail,
  Search,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import SEO from '@/components/SEO';
import { FAQSection } from '@/components/about/FAQSection';
import {
  AUTHOR_EMAIL,
  getConsultingSchema,
  getFAQSchema,
  getPersonAndProfileSchema,
} from '@/utils/schema';
import {
  CONSULTING_CREDENTIALS,
  CONSULTING_CURRENT_BUILD,
  CONSULTING_FAQS,
  CONSULTING_INTRO,
  CONSULTING_SERVICES,
  ENGAGEMENT_FORMATS,
  SCHEDULING_URL,
  type ConsultingIconName,
} from '@/data/consulting';

const SERVICE_ICONS: Record<ConsultingIconName, LucideIcon> = {
  compass: Compass,
  bot: Bot,
  workflow: Workflow,
  search: Search,
  users: Users,
  cpu: Cpu,
};

const LINKEDIN_URL = 'https://www.linkedin.com/in/ariel-anders/';

const Consulting: React.FC = () => {
  const consultingSchemas = [
    getPersonAndProfileSchema('/consulting'),
    getConsultingSchema(),
    getFAQSchema(CONSULTING_FAQS, '/consulting'),
  ];

  return (
    <div className="space-y-8 sm:space-y-12">
      <SEO
        title="Robotics & AI Consulting"
        description="Robotics consultant Ariel Anders, PhD (MIT): navigation and localization reviews, motion-planning architecture, and technical diligence for robotics teams. Fixed-scope audits and advisory retainers."
        canonicalUrl="/consulting"
        jsonLd={consultingSchemas}
      />

      {/* Hero */}
      <header className="space-y-5 border-b border-line/20 pb-6 sm:pb-8">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent">
          Ariel Anders Consulting
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-text-main leading-tight text-balance">
          Robotics consulting for teams shipping autonomous systems
        </h1>
        <p className="text-text-body text-base sm:text-lg leading-relaxed max-w-3xl text-pretty">
          {CONSULTING_INTRO}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          {SCHEDULING_URL && (
            <a
              href={SCHEDULING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-text-main hover:bg-text-body text-bg px-6 py-3 text-sm font-bold shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-main min-h-[48px]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
          <a
            href={`mailto:${AUTHOR_EMAIL}?subject=Robotics%20consulting%20inquiry`}
            className={
              SCHEDULING_URL
                ? 'inline-flex items-center justify-center gap-2 rounded-md border border-border bg-transparent text-text-body hover:text-text-main hover:bg-surface-elevated px-6 py-3 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border min-h-[48px]'
                : 'inline-flex items-center justify-center gap-2 rounded-md bg-text-main hover:bg-text-body text-bg px-6 py-3 text-sm font-bold shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-main min-h-[48px]'
            }
          >
            <Mail className="w-4 h-4" />
            <span>Start with an email</span>
            {!SCHEDULING_URL && <ArrowRight className="w-4 h-4" />}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-transparent text-text-body hover:text-text-main hover:bg-surface-elevated px-6 py-3 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border min-h-[48px]"
          >
            <Briefcase className="w-4 h-4" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </header>

      {/* Credibility strip */}
      <section aria-label="Credentials">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CONSULTING_CREDENTIALS.map((credential) => (
            <li
              key={credential}
              className="flex items-center gap-2.5 rounded-xl border border-line/60 bg-surface/40 px-4 py-3"
            >
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm font-semibold text-text-main">{credential}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-text-main tracking-tight">
            What I help with
          </h2>
          <p className="text-sm sm:text-base text-text-dim leading-relaxed max-w-3xl">
            Six ways to use a decade of robotics — from MIT CSAIL research to
            Waymo planning to production forklifts — without hiring one.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONSULTING_SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.iconName];
            return (
              <article
                key={service.id}
                className="bg-surface/60 border border-line rounded-2xl p-6 space-y-3 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-text-main text-balance">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-text-body leading-relaxed text-pretty">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Engagement formats */}
      <section className="space-y-5">
        <h2 className="text-xl sm:text-2xl font-bold text-text-main tracking-tight">
          How engagements work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ENGAGEMENT_FORMATS.map((format, index) => (
            <article
              key={format.id}
              className="bg-surface-alt/40 border border-line/60 rounded-2xl p-6 space-y-3"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface border border-line text-sm font-black text-accent">
                {index + 1}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-text-main">
                {format.title}
              </h3>
              <p className="text-sm text-text-body leading-relaxed text-pretty">
                {format.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Currently building */}
      <section className="border border-accent/20 bg-accent/5 rounded-3xl p-6 sm:p-8 space-y-3">
        <span className="text-sm font-semibold text-text-main flex items-center space-x-1.5">
          <FlaskConical className="w-4 h-4 text-accent" />
          <span>Currently building</span>
        </span>
        <p className="text-sm text-text-body leading-relaxed max-w-3xl">
          {CONSULTING_CURRENT_BUILD}
        </p>
      </section>

      {/* FAQ */}
      <FAQSection faqs={CONSULTING_FAQS} />

      {/* Closing CTA */}
      <section className="bg-surface/60 border border-line rounded-3xl p-6 sm:p-10 text-center space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-text-main tracking-tight text-balance">
          Have a robot that works in the lab but not in the building?
        </h2>
        <p className="text-sm sm:text-base text-text-body leading-relaxed max-w-2xl mx-auto text-pretty">
          Tell me what it does, where it fails, and what you have tried. I will
          tell you honestly whether I can help — and what it would take.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
          {SCHEDULING_URL && (
            <a
              href={SCHEDULING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-text-main hover:bg-text-body text-bg px-6 py-3 text-sm font-bold shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-main min-h-[48px]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
          <a
            href={`mailto:${AUTHOR_EMAIL}?subject=Robotics%20consulting%20inquiry`}
            className={
              SCHEDULING_URL
                ? 'inline-flex items-center justify-center gap-2 rounded-md border border-border bg-transparent text-text-body hover:text-text-main hover:bg-surface-elevated px-6 py-3 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border min-h-[48px]'
                : 'inline-flex items-center justify-center gap-2 rounded-md bg-text-main hover:bg-text-body text-bg px-6 py-3 text-sm font-bold shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-main min-h-[48px]'
            }
          >
            <Mail className="w-4 h-4" />
            <span>{SCHEDULING_URL ? 'Or send an email' : `Email ${AUTHOR_EMAIL}`}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
