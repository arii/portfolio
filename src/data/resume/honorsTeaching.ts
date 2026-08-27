import { ResumeHonor, ResumeTeaching } from './types';

export const honorsData: ResumeHonor[] = [
  {
    title: "Robohub’s 30 Women in Robotics You Need to Know About",
    year: "2020",
    organization: "Robohub",
    link: "https://robohub.org/30-women-in-robotics-you-need-to-know-about-2020/"
  },
  {
    title: "MIT Graduate Women of Excellence",
    year: "2017",
    organization: "MIT Office of Graduate Education",
    link: "https://oge.mit.edu/community/gwmit/"
  },
  {
    title: "MIT Green Labs Innovation Award ($5,000 grant)",
    year: "2017",
    organization: "MIT Office of Sustainability",
    link: "https://sustainability.mit.edu/"
  },
  {
    title: "Beer Bots - CSAIL Research Highlights",
    year: "2015",
    organization: "MIT CSAIL",
    details: "Awarded 2nd place for interactive multi-robot demonstration."
  },
  {
    title: "UC Santa Cruz Regents Scholarship",
    year: "2008 – 2012",
    organization: "UC Santa Cruz"
  },
  {
    title: "UCEM at MIT Scholar (Inaugural Class)",
    year: "2015",
    organization: "University Center for Exemplary Mentoring at MIT"
  }
];

export const teachingData: ResumeTeaching[] = [
  {
    title: "Instructor, Dynamics (ENGR 2340)",
    period: "Fall 2017",
    details: "Olin College of Engineering. Served as instructor for core course covering particle/rigid body dynamics and linear systems theory. Delivered lectures, led labs, and integrated MATLAB and Box2D physics simulator into curriculum."
  },
  {
    title: "Technical Instructor & Lead Associate Instructor",
    period: "Summer 2016 – Summer 2017",
    details: "MIT Beaver Works Summer Institute (BWSI). Taught Autonomous Mini Grand Prix course (RACECAR platform running ROS) for high school students. Led associate instructors, created lab curriculum, and authored published Model AI visual servoing materials."
  },
  {
    title: "Graduate Teaching Assistant",
    period: "Spring 2015 – Spring 2017",
    details: "MIT EECS & AeroAstro. TA for Robotics: Science and Systems (6.141/16.405), Intro to EECS (6.01), and Introductory Analog Electronics Lab (6.101). Guided students in sensing, computation, kinematics, state estimation, and system modeling."
  },
  {
    title: "Undergraduate Teaching Assistant & ACE Co-leader",
    period: "Winter 2009 – Winter 2012",
    details: "UC Santa Cruz. Course TA for Math 2 Stretch (College Algebra for Calculus) and Math 2 & 3 (College Algebra & Pre-calculus). Co-led Academic Excellence (ACE) sections for Math 19B (Calculus) and taught Girls in Engineering robotics workshops."
  },
  {
    title: "Frederick C. Hennie III Teaching Award",
    period: "2017",
    details: "MIT EECS Department Award recognizing extraordinary dedication and excellence in instruction."
  }
];
