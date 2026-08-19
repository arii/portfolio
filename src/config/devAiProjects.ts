export interface DevAiProject {
  id: string;
  title: string;
  category: "Software" | "Robotics" | "Education" | "Web";
  description: string;
  imageSrc: string;
  imageAlt: string;
  externalUrl?: string;
  metrics?: string;
}

export const DEVAI_PROJECTS: DevAiProject[] = [
  {
    id: "boop-light-detector",
    title: "Boop Light Detector",
    category: "Software",
    description:
      "An iOS app developed for blind and visually impaired users to detect light levels (from daylight to router indicators) and interpret values through sound.",
    imageSrc: "/assets/devai/app_testing.jpg",
    imageAlt: "User testing the Boop Light Detector mobile app",
    externalUrl: "http://arii.github.io/boop/",
    metrics: "6,000+ Downloads"
  },
  {
    id: "leac-energy-center",
    title: "Lab Energy Assessment Center (LEAC)",
    category: "Software",
    description:
      "Lead Technology Developer creating network monitoring software to analyze lab energy consumption in collaboration with MIT Green Labs and MIT Sustainability.",
    imageSrc: "/assets/devai/leac.jpg",
    imageAlt: "LEAC server network monitoring interface",
    externalUrl: "http://leac.mit.edu"
  },
  {
    id: "drone-line-following",
    title: "Drone Line Following Autonomous Controller",
    category: "Robotics",
    description:
      "Feedback and Control Systems implementation using an onboard camera on a Rolling Spider Parrot drone to autonomously follow floor-marked paths.",
    imageSrc: "/assets/devai/drone.jpg",
    imageAlt: "Parrot Rolling Spider Drone hovering over path",
    externalUrl: "https://github.com/arii/FollowTheYellowBrickRoad"
  },
  {
    id: "beaverworks-racecar",
    title: "BeaverWorks Summer Institute (RACECAR)",
    category: "Education",
    description:
      "Instructional curricula and course lead for autonomous miniature racecars utilizing visual servoing, motion planning, and ROS.",
    imageSrc: "/assets/devai/bw.jpg",
    imageAlt: "Students programming miniature autonomous vehicles",
    externalUrl: "https://beaverworks.ll.mit.edu/CMS/bw/bwsi"
  },
  {
    id: "robocon-mit",
    title: "RoboCon Technical Workshop Platform",
    category: "Web",
    description:
      "Committee chairperson and lead web designer for the inaugural cross-departmental robotics workshop at MIT.",
    imageSrc: "/assets/devai/robocon.jpg",
    imageAlt: "RoboCon event portal showcase",
    externalUrl: "http://robocon.mit.edu"
  }
];
