import { ResearchTool } from '@/types/research';

export const autonomousTools: ResearchTool[] = [
  {
    id: 'bwsi-racecar',
    taxonomyBucket: 'infrastructure',
    title: 'BeaverWorks Summer Institute: RACECAR',
    description: 'Autonomous miniature racecar curriculum covering computer vision, visual servoing, motion planning, and obstacle avoidance.',
    category: 'Robotics & Autonomy',
    status: 'Completed',
    tags: ['Robotics & Autonomy', 'Computer Vision', 'Visual Servoing', 'Motion Planning', 'Obstacle Avoidance']
  },
  {
    id: 'delivery-bots',
    taxonomyBucket: 'infrastructure',
    title: 'Delivery Bots (Multi-Robot Coordination under Uncertainty)',
    description: 'Decentralized multi-agent package delivery in dynamic human environments (RSS 2015 Best Paper Finalist & IJRR journal publication).',
    category: 'Robotics & Autonomy',
    status: 'Completed',
    tags: ['Robotics & Autonomy', 'Multi-Agent', 'RSS 2015 Finalist', 'IJRR']
  },
  {
    id: 'swag-grasping',
    taxonomyBucket: 'infrastructure',
    title: 'Learning Strategy for Whole-Arm Grasping (SWAG)',
    description: 'Master’s thesis utilizing reinforcement learning for bulky and irregular dynamic whole-arm manipulation.',
    category: 'Robotics & Autonomy',
    status: 'Completed',
    tags: ['Robotics & Autonomy', 'Reinforcement Learning', 'Manipulation', "Master's Thesis"]
  },
  {
    id: 'autonomous-drone-line-following',
    taxonomyBucket: 'infrastructure',
    title: 'Autonomous Drone Line Following',
    description: 'Feedback and control systems (16.31) with visual line tracking on a Parrot Rolling Spider drone.',
    category: 'Robotics & Autonomy',
    status: 'Completed',
    tags: ['Robotics & Autonomy', 'Control Systems', 'Computer Vision', 'Drones']
  },
  {
    id: 'boop-light-detector',
    taxonomyBucket: 'product',
    title: 'Boop Light Detector',
    description: 'iOS accessibility utility translating ambient light intensity into audible frequencies for visually impaired users (6,000+ downloads).',
    category: 'Accessibility & Mobile',
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
    status: 'Completed',
    tags: ['Robotics', 'Conference', 'Web Platform', 'MIT'],
    canonicalPath: '/research/robocon-mit',
    externalUrl: 'https://github.com/arii'
  },
  {
    id: 'cad-cam-dental-workflow',
    taxonomyBucket: 'product',
    title: 'CAD/CAM Robotic Dental Crowning Workflow',
    description: 'Robotic UI and verified experimental workflows for autonomous dental crowning.',
    category: 'Medical Robotics',
    status: 'Completed',
    tags: ['Robotics', 'Medical UI', 'CAD/CAM', 'Bionics Lab UCSC'],
    canonicalPath: '/research/cad-cam-dental-workflow',
    externalUrl: 'https://github.com/arii'
  }
];
