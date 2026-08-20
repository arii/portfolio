import { ResearchTool } from '@/types/research';

export const autonomousTools: ResearchTool[] = [
  {
    id: 'bwsi-racecar',
    taxonomyBucket: 'infrastructure',
    title: 'BeaverWorks Summer Institute (RACECAR)',
    description: 'Instructional curricula and course lead for autonomous miniature racecars utilizing visual servoing, motion planning, and ROS.',
    category: 'Education',
    status: 'Completed',
    tags: ['Robotics & Autonomy', 'Computer Vision', 'Visual Servoing', 'Motion Planning', 'ROS'],
    image: '/assets/research/bw.jpg',
    imageAlt: 'Students programming miniature autonomous vehicles',
    externalUrl: 'https://beaverworks.ll.mit.edu/CMS/bw/bwsi'
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
    id: 'autonomous-drone-line-following',
    taxonomyBucket: 'infrastructure',
    title: 'Drone Line Following Autonomous Controller',
    description: 'Feedback and Control Systems implementation using an onboard camera on a Rolling Spider Parrot drone to autonomously follow floor-marked paths.',
    category: 'Robotics',
    status: 'Completed',
    tags: ['Robotics & Autonomy', 'Control Systems', 'Computer Vision', 'Drones'],
    image: '/assets/research/drone.jpg',
    imageAlt: 'Parrot Rolling Spider Drone hovering over path',
    externalUrl: 'https://github.com/arii/FollowTheYellowBrickRoad'
  },
  {
    id: 'boop-light-detector',
    taxonomyBucket: 'product',
    title: 'Boop Light Detector',
    description: 'An iOS app developed for blind and visually impaired users to detect light levels (from daylight to router indicators) and interpret values through sound.',
    category: 'Software',
    status: 'Completed',
    metrics: '6,000+ Downloads',
    tags: ['iOS', 'Accessibility', 'Audio', 'Mobile'],
    image: '/assets/research/app_testing.jpg',
    imageAlt: 'User testing the Boop Light Detector mobile app',
    canonicalPath: '/research/boop-light-detector',
    externalUrl: 'http://arii.github.io/boop/',
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
    title: 'Lab Energy Assessment Center (LEAC)',
    description: 'Lead Technology Developer creating network monitoring software to analyze lab energy consumption in collaboration with MIT Green Labs and MIT Sustainability.',
    category: 'Software',
    status: 'Completed',
    tags: ['Sustainability', 'Hardware', 'Energy Audit', 'MIT Green Labs'],
    image: '/assets/research/leac.jpg',
    imageAlt: 'LEAC server network monitoring interface',
    canonicalPath: '/research/leac-monitoring-software',
    externalUrl: 'https://leac-mit.github.io/'
  },
  {
    id: 'robocon-mit',
    taxonomyBucket: 'infrastructure',
    title: 'RoboCon Technical Workshop Platform',
    description: 'Committee chairperson and lead web designer for the inaugural cross-departmental robotics workshop at MIT.',
    category: 'Web',
    status: 'Completed',
    tags: ['Robotics', 'Conference', 'Web Platform', 'MIT'],
    image: '/assets/research/robocon.jpg',
    imageAlt: 'RoboCon event portal showcase',
    canonicalPath: '/research/robocon-mit',
    externalUrl: 'http://robocon.mit.edu'
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
