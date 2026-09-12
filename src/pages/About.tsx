import React, { useEffect } from 'react';
import roboticistPhoto from '@/assets/roboticist.jpg';
import { profileData } from '@/data/aboutData';
import { CareerHighlightsSection, AtAGlanceSidebar } from '@/components/about/AboutSections';
import { FAQSection } from '@/components/about/FAQSection';
import { resolveAssetUrl } from '@/utils/asset';
import SEO from '@/components/SEO';
import { getPersonAndProfileSchema, getServiceSchema, getFAQSchema, getConsultingSchema } from '@/utils/schema';

const About: React.FC = () => {
  const aboutSchemas = [
    getPersonAndProfileSchema('/about'),
    getServiceSchema(),
    getFAQSchema(profileData.faqs),
    getConsultingSchema(),
  ];

  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [] as any[];
          const script = d.createElement("script");
          script.src = A;
          d.head.appendChild(script);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [] as any[];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initLoaded"]);
            return;
          }
          p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", "consulting", { origin: "https://cal.com" });

    const eventSlug = import.meta.env.VITE_CALCOM_EVENT_SLUG || "arielanders/consulting";

    Cal.ns.consulting("inline", {
      elementOrSelector: "#cal-inline-embed",
      calLink: eventSlug,
      layout: "month_view",
      config: {
        theme: "dark"
      }
    });

    Cal.ns.consulting("ui", {
      theme: "dark",
      styles: {
        branding: { brandColor: "#3b82f6" }
      },
      hideEventTypeDetails: false
    });
  }, []);

  return (
    <div className="space-y-8 sm:space-y-12">
      <SEO
        title="About & Background"
        description="Learn about Ariel Anders, PhD (MIT CSAIL): roboticist, AI software engineer, research background, current availability, and personal projects."
        canonicalUrl="/about"
        jsonLd={aboutSchemas}
      />
      <header className="space-y-3 border-b border-line/20 pb-6 sm:pb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-text-main leading-tight">
          About Ariel
        </h1>
        <p className="text-text-dim text-sm sm:text-base leading-relaxed">
          Robotics background, research history, and personal interests.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <section className="lg:col-span-8 space-y-8 sm:space-y-10 order-2 lg:order-1">
          <div className="space-y-6 bg-surface p-6 sm:p-8 rounded-3xl border border-line">
            <h2 className="text-xl sm:text-2xl font-bold text-text-main pb-3 border-b border-line/30">
              Biography
            </h2>
            <div className="space-y-4 text-text-body leading-relaxed text-sm sm:text-base">
              {profileData.bio.slice(0, -1).map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            <div className="mt-6 p-5 rounded-xl bg-surface-alt/50 border border-border/50">
              <h3 className="text-sm font-semibold text-text-main mb-3">🎨 Beyond the Code</h3>
              <div className="text-sm text-text-body leading-relaxed">
                {profileData.bio[profileData.bio.length - 1]}
              </div>
            </div>
          </div>

          <div className="border border-accent/20 bg-accent/5 rounded-3xl p-6 sm:p-8 space-y-3">
            <span className="text-sm font-semibold text-text-main flex items-center space-x-1.5">
              <span className="h-2 w-2 rounded-md bg-accent animate-pulse"></span>
              <span>Current Availability</span>
            </span>
            <p className="text-sm text-text-body leading-relaxed">
              {profileData.availability}
            </p>
          </div>

          <CareerHighlightsSection highlights={profileData.highlights} />

          {/* FAQ Section for Rich Search Snippets */}
          <FAQSection faqs={profileData.faqs} />

          {/* Cal.com Booking Section */}
          <section id="schedule" className="space-y-6 bg-surface p-6 sm:p-8 rounded-3xl border border-line">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-md bg-accent/10 text-accent mb-2">Advisory & Consulting</span>
            <h2 className="text-xl sm:text-2xl font-bold text-text-main pb-3 border-b border-line/30">
              Schedule a Consultation
            </h2>
            <p className="text-sm text-text-body leading-relaxed mb-6">
              Book a technical advisory session for agentic orchestration, robotics architecture, or system design.
            </p>

            {/* Added styling to Cal container to handle long lists in a grid layout */}
            <style>
              {`
                /* Target the scrollable internal container of Cal.com */
                .cal-embed-wrapper [data-testid="time-options"] {
                  display: grid !important;
                  grid-template-columns: repeat(2, 1fr) !important;
                  gap: 8px !important;
                  max-height: 380px !important;
                  overflow-y: auto !important;
                }

                @media (min-width: 640px) {
                  .cal-embed-wrapper [data-testid="time-options"] {
                    grid-template-columns: repeat(3, 1fr) !important;
                  }
                }
              `}
            </style>

            <div id="cal-inline-embed" className="cal-embed-wrapper" style={{ width: '100%', height: '100%', minHeight: '400px', overflow: 'hidden' }}></div>
          </section>
        </section>

        <aside className="lg:col-span-4 space-y-6 sm:space-y-8 order-1 lg:order-2">
          <div className="relative group mx-auto lg:mx-0 max-w-sm rounded-3xl overflow-hidden border border-line bg-surface transition-all duration-300">
            <div className="aspect-[4/3] sm:aspect-square max-h-72 sm:max-h-none w-full overflow-hidden">
              <img
                src={resolveAssetUrl(roboticistPhoto)}
                alt="Ariel Anders, PhD - Roboticist and DevAI Engineer"
                className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <AtAGlanceSidebar details={profileData.details} />

          <div className="border border-line bg-surface p-6 rounded-3xl space-y-4">
            <h3 className="text-sm font-semibold text-text-main flex items-center space-x-1.5 font-sans">
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
