import { ResumeProject } from './types';

export const projectsData: ResumeProject[] = [
  {
    title: "Accessible Tech: Boop Light Detector",
    description: "Developed 'Boop Light Detector' iOS app providing real-time audio pitch modulation and haptic feedback based on ambient light sensor data to assist visual impairment. Over 6,000 App Store downloads.",
    link: "https://apps.apple.com/app/boop-light-detector/id1527712398",
    metric: "6,000+ App Store Downloads",
    techStack: ["iOS", "Swift / Objective-C", "CoreAudio", "Haptic Engine"]
  },
  {
    title: "Campus Wellness: Light Therapy at MIT",
    description: "Secured grants from the MindHandHeart Innovation Fund to install light therapy lamps across 10+ MIT campus libraries to combat Seasonal Affective Disorder with public checkout infrastructure.",
    link: "https://mindhandheart.mit.edu/",
    metric: "10+ Library Installations",
    techStack: ["MindHandHeart Grant", "MIT Libraries", "Public Infrastructure"]
  },
  {
    title: "Lab Sustainability: Fume Hood Efficiency (LEAC)",
    description: "Awarded $5,000 MIT Green Labs Innovation Award. Built network-connected acoustic sensor monitoring systems to reduce energy waste across MIT labs.",
    link: "https://doi.org/10.1016/j.egyr.2018.09.008",
    metric: "$5,000 Grant Award",
    techStack: ["Sensors", "Acoustic Feedback", "Energy Monitoring", "Energy Reports '18"]
  }
];
