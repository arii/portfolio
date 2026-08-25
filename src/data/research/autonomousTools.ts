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
    image: 'https://i.ytimg.com/vi/DUp9yURMo2c/hqdefault.jpg',
    imageAlt: 'Students programming miniature autonomous vehicles',
    canonicalPath: '/research/bwsi-racecar',
    videoUrl: 'https://www.youtube.com/watch?v=DUp9yURMo2c',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLEcASxU_mgVgnMZvVHgrTGFMUXze0MiOp',
    externalUrl: 'https://beaverworks.ll.mit.edu/CMS/bw/bwsi'
  },
  {
    id: 'delivery-bots',
    taxonomyBucket: 'infrastructure',
    title: 'Delivery Bots (Multi-Robot Coordination under Uncertainty)',
    description: 'Decentralized multi-agent package delivery in dynamic human environments (RSS 2015 Best Paper Finalist & IJRR journal publication).',
    category: 'Robotics & Autonomy',
    status: 'Completed',
    tags: ['Robotics & Autonomy', 'Multi-Agent', 'RSS 2015 Finalist', 'IJRR'],
    image: '/assets/research/beer.png',
    imageAlt: 'Autonomous delivery robots operating in dynamic human environment',
    canonicalPath: '/research/delivery-bots'
  },
  {
    id: 'graduate-engineering-projects',
    taxonomyBucket: 'infrastructure',
    title: 'Graduate Engineering Projects',
    subtitle: 'MIT Advanced Systems',
    description: 'A showcase of advanced graduate-level engineering systems developed at MIT spanning real-time computer vision control, ordinal machine learning ranking, and parameterized hardware accelerators.',
    category: 'Graduate Engineering',
    status: 'Completed',
    tags: ['Robotics', 'Machine Learning', 'Hardware Acceleration', 'MIT'],
    image: '/assets/research/drone_follow.gif',
    imageAlt: 'Parrot Rolling Spider Drone hovering over path',
    canonicalPath: '/research/graduate-engineering-projects',
    mediaLinks: [
      {
        type: 'video',
        label: 'Video Demo',
        url: 'https://www.youtube.com/watch?v=f5l8GA1PHm8'
      },
      {
        type: 'pdf',
        label: 'ML PDF Report',
        url: 'https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_ml.pdf'
      },
      {
        type: 'pdf',
        label: 'RSA PDF Report',
        url: 'https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_6375.pdf'
      }
    ]
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
    image: '/assets/research/light.jpg',
    imageAlt: 'Light therapy lamps installed across MIT campus locations',
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
    subtitle: 'UCSC Bionics Lab',
    description: 'Robotic trajectory planning, 6-DOF manipulation, and dynamic registration for autonomous dental crowning with Dr. Jacob Rosen.',
    category: 'Medical Robotics',
    status: 'Completed',
    tags: ['Robotics', 'Medical UI', 'CAD/CAM', 'Bionics Lab UCSC'],
    image: '/assets/research/dental.jpg',
    imageAlt: 'CAD/CAM Robotic Dental Crowning Workflow UI',
    canonicalPath: '/research/cad-cam-dental-workflow',
    pdfUrl: 'https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_dental.pdf',
    videoUrl: 'https://www.youtube.com/watch?v=tXif7xeZmGI',
    externalUrl: 'https://raw.githubusercontent.com/arii/arii.github.io/main/reports/report_dental.pdf'
  },
  {
    id: 'undergraduate-projects',
    taxonomyBucket: 'infrastructure',
    title: 'Undergraduate Engineering Projects',
    subtitle: 'UCSC Robotics & Hardware Systems',
    description: 'Archive of foundational undergraduate robotics and embedded hardware projects from UCSC—spanning CMPE 100 logic design, CMPE 121 microprocessor systems, CMPE 118 mechatronics, and custom microcontroller-based LED game side projects.',
    category: 'Robotics & Hardware',
    status: 'Completed',
    tags: ['Robotics', 'Mechatronics', 'Embedded Systems', 'Digital Logic', 'Microcontrollers', 'UCSC', 'Hardware'],
    image: '/assets/research/undergraduate-projects/flip_flop.gif',
    canonicalPath: '/research/undergraduate-projects'
  }
];
