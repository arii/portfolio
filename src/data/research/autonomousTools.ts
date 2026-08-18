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
    id: 'accessible-tech-boop',
    taxonomyBucket: 'product',
    title: 'Accessible Tech (Boop iOS App)',
    description: 'Developed "Boop Light Detector" iOS app to assist people with vision impairment. Over 6000 downloads.',
    category: 'Mobile Application',
    status: 'Completed',
    tags: ['iOS', 'Accessibility', 'Mobile']
  },
  {
    id: 'campus-wellness',
    taxonomyBucket: 'infrastructure',
    title: 'Campus Wellness Initiative',
    description: 'Secured grants to install therapy lamps across MIT campus to combat Seasonal Affective Disorder (SAD).',
    category: 'Community Health',
    status: 'Completed',
    tags: ['Grants', 'Community', 'Wellness']
  },
  {
    id: 'lab-sustainability',
    taxonomyBucket: 'infrastructure',
    title: 'Lab Sustainability',
    description: 'Research on improving laboratory fume hood efficiency and safety feedback.',
    category: 'Hardware & Safety',
    status: 'Completed',
    tags: ['Sustainability', 'Hardware', 'Research']
  }
];
