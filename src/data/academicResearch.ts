export interface AcademicPaper {
  id: string;
  title: string;
  type: string;
  year: string;
  authors: string[];
  venue: string;
  summary: string;
  tags: string[];
  link?: string;
  pdfUrl?: string;
  videoUrl?: string;
  playlistUrl?: string;
}

export const ACADEMIC_PAPERS: AcademicPaper[] = [
  {
    id: 'phd-thesis-2019',
    title: 'Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation (PhD Thesis)',
    type: 'Ph.D. Dissertation',
    year: '2019',
    authors: ['Ariel S. Anders'],
    venue: 'MIT CSAIL (advised by Leslie P. Kaelbling & Tomas Lozano-Perez)',
    summary: 'Focused on reliable robotic manipulation under pose uncertainty using conformant belief-state planning and fixture optimization, improving physical multi-step assembly success from 1.9% to 80.7%.',
    tags: ['Robotics', 'Manipulation', 'AI', 'TAMP', 'Conformant Planning'],
    link: 'https://dspace.mit.edu/handle/1721.1/122822',
    videoUrl: 'https://www.youtube.com/watch?v=omdHFeBBYZ0',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLEcASxU_mgVi6kMdElumAUh-gJW4wCOUV'
  },
  {
    id: 'masters-thesis-2014',
    title: 'Learning a Strategy for Whole-Arm Grasping',
    type: "Master's Thesis",
    year: '2014',
    authors: ['Ariel S. Anders'],
    venue: 'MIT CSAIL',
    summary: 'Developed reinforcement learning policies and sensorimotor frameworks for bimanual and whole-arm grasping of bulky, irregular objects under real-world clutter.',
    tags: ['Robotics', 'Manipulation', 'Reinforcement Learning', 'Whole-Arm Grasping'],
    link: 'https://dspace.mit.edu/entities/publication/ead0c10d-3401-46a1-bcc5-42f5a56fe0b8'
  },
  {
    id: 'icra-2018',
    title: 'Reliably Arranging Objects in Uncertain Domains',
    type: 'Conference Paper',
    year: '2018',
    authors: ['Ariel S. Anders', 'Leslie P. Kaelbling', 'Tomas Lozano-Perez'],
    venue: 'IEEE International Conference on Robotics and Automation (ICRA)',
    summary: 'Introduced an efficient belief-state planning algorithm that optimizes physical fixture placements to guarantee reliable object manipulation in uncertain physical environments.',
    tags: ['ICRA', 'Robotics', 'Manipulation', 'Uncertainty'],
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:MXK_kJrjxJIC',
    videoUrl: 'https://www.youtube.com/watch?v=so-9kkQXlxc',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLEcASxU_mgVi6kMdElumAUh-gJW4wCOUV'
  },
  {
    id: 'ijrr-2016',
    title: 'Policy Search for Multi-Robot Coordination under Uncertainty',
    type: 'Journal Paper (RSS Best Paper Finalist)',
    year: '2016',
    authors: ['C. Amato', 'G. Konidaris', 'A. Anders', 'G. Cruz', 'J.P. How', 'L.P. Kaelbling'],
    venue: 'The International Journal of Robotics Research (IJRR)',
    summary: 'Formulated scalable decentralized POMDP policy search methods for multi-robot team coordination under stochastic motion and communication uncertainty.',
    tags: ['IJRR', 'Multi-Robot', 'POMDP', 'Decentralized AI'],
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:zYLM7Y9cAGgC'
  },
  {
    id: 'isec-racecar-2017',
    title: 'Programming Self-Driving Race Cars at MIT BeaverWorks',
    type: 'Conference Paper',
    year: '2017',
    authors: ['S. Karaman', 'A. Anders', 'M. Boulet', 'J. Connor', 'K. Gregson', 'W. Guerra', 'et al.'],
    venue: 'IEEE Integrated STEM Education Conference (ISEC)',
    summary: 'Designed applied algorithmic robotics curriculum for 1/10th scale autonomous race cars, teaching perception, obstacle avoidance, and control.',
    tags: ['Self-Driving', 'ROS', 'Autonomy', 'Education'],
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:W7OEmFMy1HYC'
  }
];
