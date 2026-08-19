import React from 'react';
import { Cog } from 'lucide-react';

export interface PhilosophyPillar {
  title: string;
  description: string;
}

export interface PhilosophyCardProps {
  title?: string;
  pillars?: PhilosophyPillar[];
}

export const defaultPillars: PhilosophyPillar[] = [
  {
    title: 'AI-Accelerated Rigor',
    description:
      'AI should raise the bar, not lower it. I develop agentic CI/CD workflows and automated code reviews to code-gen patches, resolve architecture guidelines, and triage and prevent technical debt faster.',
  },
  {
    title: 'Reliable Robot Behavior',
    description:
      'Developing onboard motion planning, reactive social navigation, and behavior software across autonomous vehicles, indoor robots in unstructured environments, and robotic manipulation.',
  },
  {
    title: 'Production Robot Software',
    description:
      'Authoring production-quality C++, Python, and ROS 2 software using Docker and AWS IoT to build automated pipelines and containerized robotics applications for high fleet uptime.',
  },
];

export const PhilosophyCard: React.FC<PhilosophyCardProps> = ({
  title = 'Engineering Philosophy',
  pillars = defaultPillars,
}) => {
  return (
    <aside
      aria-label="Engineering Philosophy"
      className="flex flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl backdrop-blur-sm"
    >
      <div className="flex items-center gap-2.5 border-b border-slate-800/80 pb-4">
        <Cog className="h-5 w-5 text-amber-400 animate-spin-slow" />
        <h3 className="text-base font-semibold tracking-wide text-slate-100">
          {title}
        </h3>
      </div>

      <div className="space-y-5">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="space-y-1.5">
            <h4 className="text-sm font-semibold text-amber-400">
              {pillar.title}
            </h4>
            <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default PhilosophyCard;
