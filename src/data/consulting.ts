/**
 * Consulting page content — single source of truth for services, engagement
 * formats, FAQs, and credibility lines. The Consulting page owns this copy;
 * teasers elsewhere (Home featured cards, footer) must stay short and never
 * repeat these sentences verbatim.
 */

export type ConsultingIconName =
  | 'compass'
  | 'bot'
  | 'workflow'
  | 'search'
  | 'users'
  | 'cpu';

export interface ConsultingService {
  id: string;
  title: string;
  description: string;
  iconName: ConsultingIconName;
}

export interface EngagementFormat {
  id: string;
  title: string;
  description: string;
}

export interface ConsultingFaq {
  question: string;
  answer: string;
}

export const CONSULTING_SERVICES: ConsultingService[] = [
  {
    id: 'nav-localization',
    title: 'Navigation & Localization Reviews',
    description:
      'ROS 2 navigation stacks, sensor fusion, and localization drift — the unglamorous work that decides whether a robot survives contact with the real world.',
    iconName: 'compass',
  },
  {
    id: 'motion-planning',
    title: 'Motion Planning & Decision-Making',
    description:
      'Onboard planning and behavior for autonomous systems, from pullover maneuvers to warehouse navigation.',
    iconName: 'bot',
  },
  {
    id: 'architecture',
    title: 'Autonomy Architecture & System Design',
    description:
      'How behavior, perception, and localization fit together. I led a 5-month navigation architecture redesign spanning all three at Robust.AI.',
    iconName: 'workflow',
  },
  {
    id: 'diligence',
    title: 'Technical Diligence',
    description:
      'Independent assessment for investors and acquirers: can this robotics stack actually do what the deck claims?',
    iconName: 'search',
  },
  {
    id: 'devai-infra',
    title: 'AI-Assisted Engineering',
    description:
      'Agentic CI/CD, RAG-grounded code review, and developer tooling that raise engineering throughput without cutting rigor.',
    iconName: 'cpu',
  },
  {
    id: 'fractional-leadership',
    title: 'Fractional Robotics Leadership',
    description:
      'Interim technical leadership for teams building their first real robot: stack choices, hiring plans, and the mistakes to skip.',
    iconName: 'users',
  },
];

export const ENGAGEMENT_FORMATS: EngagementFormat[] = [
  {
    id: 'audit',
    title: 'Technical Audit',
    description:
      'A 2–4 week deep dive into your navigation, localization, or planning stack. You get a written findings report: what is solid, what is fragile, and what to fix first.',
  },
  {
    id: 'retainer',
    title: 'Advisory Retainer',
    description:
      'Ongoing access as you build: architecture reviews, design-doc feedback, and a second pair of expert eyes on the hard calls.',
  },
  {
    id: 'calls',
    title: 'Diligence Calls',
    description:
      'One-off expert calls for investors and teams evaluating a robotics bet — scoped to your questions, no fluff.',
  },
];

export const CONSULTING_FAQS: ConsultingFaq[] = [
  {
    question: 'What does a robotics consultant do?',
    answer:
      'A robotics consultant is a senior engineer you borrow instead of hire. I review autonomy stacks, diagnose navigation and localization failures, advise on architecture decisions, and assess whether a robotics system is ready for the real world — then I hand you a plan your team can execute.',
  },
  {
    question: 'What kinds of robotics work do you take on?',
    answer:
      'Navigation, localization, motion planning, and decision-making for mobile robots and autonomous vehicles — plus AI-assisted engineering infrastructure (agentic CI/CD, automated code review) for robotics teams. If your robot works in the lab but not in the building, that is my specialty.',
  },
  {
    question: 'How much does a robotics consultant cost?',
    answer:
      'Audits are fixed-price per engagement; advisory is a monthly retainer. For calibration, PhD-level robotics consultants typically run a few hundred dollars an hour. Every engagement starts with a scoped quote, so there are no surprises.',
  },
  {
    question: 'Do you work remotely or on-site?',
    answer:
      'Both. I am based in San Francisco, work remotely worldwide, and travel for on-site audits and diligence in the Bay Area and beyond.',
  },
  {
    question: 'What stacks do you work with?',
    answer:
      'ROS 1 and ROS 2, C++, Python, behavior trees, task and motion planning, Docker, Linux, and AWS. The stack matters less than the problem — I start from your system as it exists today.',
  },
];

export const CONSULTING_CREDENTIALS: string[] = [
  'MIT PhD, Computer Science',
  'Ex-Waymo — Motion Planning',
  'First roboticist at Robust.AI',
  'Autonomous forklifts — Civ Robotics',
];

/**
 * Scheduling link for consulting calls (e.g. cal.com). Leave empty to hide
 * the "Book a call" buttons — the page falls back to email/LinkedIn CTAs.
 */
export const SCHEDULING_URL = 'https://cal.com/ariel-anders/20min';

export const CONSULTING_INTRO =
  'I am a robotics consultant — MIT PhD, ex-Waymo motion planning, first roboticist hired at Robust.AI. I help teams fix navigation and localization, review autonomy architectures, and diligence robotics bets.';

export const CONSULTING_CURRENT_BUILD =
  'Currently building in the open: a language-conditioned grasping pipeline — VLM grounding to SAM segmentation to grasp synthesis to motion planning, all in MuJoCo simulation.';
