export interface ThesisEntry {
  id: string;
  degree: "Master's Thesis" | 'Ph.D. Thesis';
  category: string;
  year: string;
  institution: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  dspaceUrl: string;
  sourceRepoUrl?: string;
  advisor?: string;
}

export const mastersThesisData: ThesisEntry = {
  id: 'masters-thesis',
  degree: "Master's Thesis",
  category: 'ROBOTICS & EMBODIED AI',
  year: '2014',
  institution: 'MIT CSAIL',
  title: 'Learning a Strategy for Whole-Arm Grasping',
  subtitle: "MIT S.M. THESIS — COMPUTER SCIENCE & ARTIFICIAL INTELLIGENCE LABORATORY",
  description:
    'Investigated tactile-driven, sensorimotor reinforcement learning policies for bimanual and whole-arm grasping of bulky, irregular objects under real-world physical uncertainty. Formulated contact-rich control strategies that leverage compliant arm surfaces and multi-modal feedback to stabilize grasping without prior geometric part models.',
  imageSrc: '/assets/research/phd/sixblock.png',
  imageAlt: 'Robot manipulator executing whole-arm contact and grasping strategy on irregular objects',
  tags: [
    'Whole-Arm Grasping',
    'Bimanual Manipulation',
    'Reinforcement Learning',
    'Sensorimotor Control',
    'Tactile Feedback',
    'MIT CSAIL',
  ],
  dspaceUrl: 'https://dspace.mit.edu/entities/publication/ead0c10d-3401-46a1-bcc5-42f5a56fe0b8',
  advisor: 'Prof. Leslie Pack Kaelbling & Prof. Tomás Lozano-Pérez',
};
