export interface ResearchProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  publicationUrl?: string;
  conference?: string;
}

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: "learning-swag",
    title: "Learning SWAG (Master's Thesis)",
    subtitle: "Learning a Strategy for Whole Arm Grasping",
    description:
      "Explored reinforcement learning for dynamic whole-arm grasps using single and bimanual manipulation at MIT CSAIL.",
    imageSrc: "/assets/research/thesis_wordle.png",
    imageAlt: "Learning SWAG thesis wordle visualization",
    tags: ["Robotics", "Reinforcement Learning", "Manipulation", "MIT CSAIL"],
    publicationUrl: "http://dspace.mit.edu/handle/1721.1/91034"
  },
  {
    id: "delivery-bots",
    title: "Delivery Bots",
    subtitle: "Multi-Robot Project for Unpredictable Environments",
    description:
      "Multi-robot project for unpredictable environments presented at Robotics: Science and Systems (RSS 2015). Best paper finalist and extended for the International Journal of Robotics Research.",
    imageSrc: "/assets/research/beer.png",
    imageAlt: "Delivery Bots multi-robot collaboration setup",
    tags: ["Robotics", "Multi-Agent Systems", "RSS 2015", "IJRR"],
    publicationUrl: "http://news.mit.edu/2015/csail-delivery-robots-collaborate-0810",
    conference: "Robotics: Science and Systems (RSS 2015)"
  }
];
