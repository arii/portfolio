import { ResumeData } from './types';
import { experienceData } from './experience';
import { educationData } from './education';
import { skillsData } from './skills';
import { projectsData } from './projects';
import { honorsData, teachingData } from './honorsTeaching';
import { publicationsData, scholarUrl } from './publications';

export * from './types';

export const resumeData: ResumeData = {
  name: "Ariel Anders, PhD",
  title: "Roboticist & Senior Software Engineer",
  summary: "Roboticist and Senior Software Engineer with an MIT CSAIL PhD and track record across Waymo, Robust.AI, and Civ Robotics. Specializing in onboard motion planning, reactive navigation, and state estimation, as well as multi-agent DevAI workflows and CI/CD automation.",
  scholarUrl,
  socials: [
    { label: "Google Scholar", url: scholarUrl, type: "scholar" },
    { label: "Email", url: "mailto:anders.ariel@gmail.com", type: "mail" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ariel-anders/", type: "linkedin" },
    { label: "GitHub", url: "https://github.com/arii", type: "github" }
  ],
  experience: experienceData,
  education: educationData,
  projects: projectsData,
  skills: skillsData,
  honors: honorsData,
  teaching: teachingData,
  publications: publicationsData
};
