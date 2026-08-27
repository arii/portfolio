import { ResearchTool } from '@/types/research';

export const autonomousTools: ResearchTool[] = [
  {
    id: 'duckietown',
    taxonomyBucket: 'infrastructure',
    title: 'MIT Duckietown (Autonomous Taxi Fleet)',
    description: 'An open-source, low-cost robotics education and research platform for autonomous driving, multi-agent fleet coordination, and lane tracking for rubber ducks.',
    category: 'Robotics & Autonomy',
    status: 'Completed',
    tags: ['Robotics & autonomy', 'Computer vision', 'Lane tracking', 'ROS', 'Multi-agent', 'MIT'],
    image: '/assets/research/duckietown.jpg',
    imageAlt: 'Duckietown autonomous vehicles and inaugural MIT 2.166 class',
    canonicalPath: '/research/duckietown',
    videoUrl: 'https://www.youtube.com/watch?v=rPpewHIF2KU',
    externalUrl: 'https://www.duckietown.org/'
  },
  {
    id: 'bwsi-racecar',
    taxonomyBucket: 'infrastructure',
    title: 'BeaverWorks Summer Institute (RACECAR)',
    description: 'I led instruction and developed curricula for autonomous miniature racecars with labs on visual servoing, motion planning, and ROS (ISEC 2017 & AAAI/EAAI Model AI Publication).',
    category: 'Education',
    status: 'Completed',
    tags: ['Robotics & autonomy', 'Computer vision', 'ISEC 2017', 'Visual servoing', 'Motion planning', 'ROS'],
    image: '/assets/research/bwsi-racecar/racecar_main.gif',
    imageAlt: 'Students programming miniature autonomous vehicles',
    canonicalPath: '/research/bwsi-racecar',
    videoUrl: 'https://www.youtube.com/watch?v=UjVatZ3NK5U',
    externalUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:W7OEmFMy1HYC'
  },
  {
    id: 'delivery-bots',
    taxonomyBucket: 'infrastructure',
    title: 'Delivery Bots (Multi-Robot Coordination under Uncertainty)',
    description: 'Decentralized multi-agent package delivery in dynamic human environments (RSS 2015 Best Paper Finalist & IJRR journal publication).',
    category: 'Robotics & Autonomy',
    status: 'Completed',
    tags: ['Robotics & autonomy', 'Multi-agent', 'IJRR Journal', 'RSS 2015 Finalist', 'POMDP'],
    image: '/assets/research/delivery-bots/coordination.gif',
    imageAlt: 'Decentralized multi-robot package delivery and coordination under uncertainty',
    canonicalPath: '/research/delivery-bots',
    externalUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NM6SfiEAAAAJ&citation_for_view=NM6SfiEAAAAJ:zYLM7Y9cAGgC'
  },
  {
    id: 'graduate-engineering-projects',
    taxonomyBucket: 'infrastructure',
    title: 'Graduate Engineering Projects',
    subtitle: 'MIT Advanced Systems',
    description: 'I built advanced graduate-level engineering systems at MIT spanning real-time computer vision control, ordinal machine learning ranking, and parameterized hardware accelerators.',
    category: 'Robotics & Hardware',
    status: 'Completed',
    tags: ['Robotics', 'Machine learning', 'Hardware acceleration', 'MIT'],
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
    description: 'I developed an iOS app for blind and visually impaired users to detect light levels (from daylight to lamps) and interpret values through sound.',
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
    description: 'I launched a campus-wide seasonal affective disorder (SAD) wellness initiative funded by the MindHandHeart Innovation Fund.',
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
    description: 'I created network monitoring software to analyze lab energy consumption as the Lead Technology Developer in collaboration with MIT Green Labs and MIT Sustainability.',
    category: 'Software',
    status: 'Completed',
    tags: ['Sustainability', 'Hardware', 'Energy audit', 'MIT Green Labs'],
    image: '/assets/research/leac.jpg',
    imageAlt: 'LEAC server network monitoring interface',
    canonicalPath: '/research/leac-monitoring-software',
    externalUrl: 'https://leac-mit.github.io/'
  },
  {
    id: 'robocon-mit',
    taxonomyBucket: 'infrastructure',
    title: 'RoboCon Technical Workshop Platform',
    description: 'I served as committee chairperson and lead web designer for the inaugural cross-departmental robotics workshop at MIT.',
    category: 'Web',
    status: 'Completed',
    tags: ['Robotics', 'Conference', 'Web platform', 'MIT'],
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
    description: 'I implemented robotic trajectory planning, 6-DOF manipulation, and dynamic registration for autonomous dental crowning and implant preparation with Dr. Jacob Rosen.',
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
    description: 'I built foundational undergraduate robotics and embedded hardware projects at UCSC—spanning CMPE 100 logic design, CMPE 121 microprocessor systems, CMPE 118 mechatronics, and custom microcontroller-based LED game side projects.',
    category: 'Robotics & Hardware',
    status: 'Completed',
    tags: ['Robotics', 'Mechatronics', 'Embedded systems', 'Digital logic', 'Microcontrollers', 'UCSC', 'Hardware'],
    image: '/assets/research/undergraduate-projects/flip_flop.gif',
    canonicalPath: '/research/undergraduate-projects'
  }
];
