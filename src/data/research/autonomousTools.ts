import { ResearchTool } from '@/types/research';

export type DomainGroup = 'Autonomous Systems & Robotics' | 'Accessibility & Tools' | 'MIT Initiatives & Community';

export const autonomousTools: ResearchTool[] = [
  {
    id: 'bwsi-racecar',
    taxonomyBucket: 'infrastructure',
    title: 'BeaverWorks Summer Institute: RACECAR',
    description: 'Autonomous miniature racecar curriculum covering computer vision, visual servoing, motion planning, and obstacle avoidance.',
    category: 'Robotics & Autonomy',
    domainGroup: 'Autonomous Systems & Robotics',
    status: 'Completed',
    tags: ['Robotics', 'Computer Vision', 'Visual Servoing', 'Motion Planning', 'Obstacle Avoidance']
  },
  {
    id: 'autonomous-drone-line-following',
    taxonomyBucket: 'infrastructure',
    title: 'Autonomous Drone Line Following',
    description: 'Feedback and control systems (16.31) with visual line tracking on a Parrot Rolling Spider drone.',
    category: 'Robotics & Autonomy',
    domainGroup: 'Autonomous Systems & Robotics',
    status: 'Completed',
    tags: ['Robotics', 'Control Systems', 'Computer Vision', 'Drones']
  },
  {
    id: 'cad-cam-dental-workflow',
    taxonomyBucket: 'product',
    title: 'CAD/CAM Robotic Dental Crowning Workflow',
    description: 'Robotic UI and verified experimental workflows for autonomous dental crowning.',
    category: 'Medical Robotics',
    domainGroup: 'Autonomous Systems & Robotics',
    status: 'Completed',
    tags: ['Robotics', 'Medical UI', 'CAD/CAM', 'Bionics Lab UCSC'],
    canonicalPath: '/research/cad-cam-dental-workflow',
    externalUrl: 'https://github.com/arii'
  },
  {
    id: 'boop-light-detector',
    taxonomyBucket: 'product',
    title: 'Boop Light Detector',
    description: 'iOS accessibility utility translating ambient light intensity into audible frequencies for visually impaired users (6,000+ downloads).',
    category: 'Accessibility & Mobile',
    domainGroup: 'Accessibility & Tools',
    status: 'Completed',
    tags: ['iOS', 'Accessibility', 'Audio', 'Mobile'],
    canonicalPath: '/research/boop-light-detector',
    externalUrl: 'https://arii.github.io/boop/',
    sourceUrl: 'https://github.com/arii/boop'
  },
  {
    id: 'light-therapy-mit',
    taxonomyBucket: 'infrastructure',
    title: 'Light Therapy at MIT',
    description: 'Campus-wide seasonal affective disorder (SAD) wellness initiative funded by the MindHandHeart Innovation Fund.',
    category: 'Community Health & Wellness',
    domainGroup: 'MIT Initiatives & Community',
    status: 'Completed',
    tags: ['MindHandHeart', 'Community', 'Wellness', 'MIT'],
    canonicalPath: '/research/light-therapy-mit',
    externalUrl: 'https://arii.github.io/SAD/',
    sourceUrl: 'https://github.com/arii/SAD'
  },
  {
    id: 'leac-monitoring-software',
    taxonomyBucket: 'infrastructure',
    title: 'Lab Energy Assessment Center (LEAC) Monitoring Software',
    description: 'Network monitoring software and energy audit infrastructure for fume hood efficiency (MIT Green Labs Innovation Award).',
    category: 'Sustainability & Energy',
    domainGroup: 'MIT Initiatives & Community',
    status: 'Completed',
    tags: ['Sustainability', 'Hardware', 'Energy Audit', 'MIT Green Labs'],
    canonicalPath: '/research/leac-monitoring-software',
    externalUrl: 'https://github.com/arii'
  },
  {
    id: 'robocon-mit',
    taxonomyBucket: 'infrastructure',
    title: 'RoboCon MIT',
    description: 'Cross-departmental robotics research conference organization and web platform.',
    category: 'Robotics Community',
    domainGroup: 'MIT Initiatives & Community',
    status: 'Completed',
    tags: ['Robotics', 'Conference', 'Web Platform', 'MIT'],
    canonicalPath: '/research/robocon-mit',
    externalUrl: 'https://github.com/arii'
  }
];
