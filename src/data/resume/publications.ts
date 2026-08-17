import { ResumePublication } from './types';

export const scholarUrl = "https://scholar.google.com/citations?user=iT6mJ3gAAAAJ";

export const publicationsData: ResumePublication[] = [
  {
    title: "Reliably Arranging Objects: A Conformant Planning Approach to Robot Manipulation",
    type: "PhD Dissertation",
    year: "2019",
    venue: "MIT DSpace",
    link: "https://dspace.mit.edu/handle/1721.1/122822"
  },
  {
    title: "Learning a Strategy for Whole-Arm Grasping",
    type: "Master's Thesis",
    year: "2014",
    venue: "MIT DSpace",
    link: "https://dspace.mit.edu/handle/1721.1/92629"
  },
  {
    title: "Peer-Reviewed Conference & Journal Papers",
    type: "ICRA, IJRR, APL, Energy Reports & ISEC",
    year: "2016 – 2018",
    venue: "IEEE ICRA (2018), IJRR (2016), Applied Physics Letters (2016), Energy Reports (2018), ISEC (2017)",
    link: scholarUrl
  }
];
