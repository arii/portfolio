import { ResumeData } from './resumeTypes';
import { resumeExperience } from './resumeExperience';
import {
  resumeEducation,
  resumeProjects,
  resumeSkills,
} from './resumeEducationAndProjects';

export * from './resumeTypes';
export { resumeExperience } from './resumeExperience';
export {
  resumeEducation,
  resumeProjects,
  resumeSkills,
} from './resumeEducationAndProjects';

export const resumeData: ResumeData = {
  name: 'Ariel Anders, PhD',
  title: 'Senior Roboticist & DevAI Infrastructure Engineer',
  summary:
    'MIT PhD with expertise in autonomous navigation, motion planning, ROS 2, and agentic AI developer workflows. Former senior engineer at Waymo and Robust.AI, with proven success leading software architectures for autonomous vehicles and mobile robotics.',
  experience: resumeExperience,
  education: resumeEducation,
  projects: resumeProjects,
  skills: resumeSkills,
};
