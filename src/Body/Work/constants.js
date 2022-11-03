import React from "react";
import { school, computer } from "../../assets/work";

const icon = {
  height: "100%",
  width: "100%",
};

const SchoolIcon = (
  <img style={icon} src={school} alt={"hand-drawn icon of graduation cap"} />
);
const WorkIcon = (
  <img style={icon} src={computer} alt={"hand-drawn icon of laptop"} />
);

const schoolBg = '#b6aaa0'
// const workBg = "#c4946d";
const workBg = "#c4946d57";

export const metier = {
  VILL: {
    icon: WorkIcon,
    location: "Albany, NY",
    backgroundColor: workBg,
    description:
      "Worked in Figma to create interactive prototypes. Implemented transitions, overlays and modals with smart animate and learned how to export assets for engineering and collaboration best practices within Figma.",
    position: "Senior Frontend Developer",
    place: "Supervillains.io",
    placeLink: "https://supervillains.io/",
    time: "Jun 2022 - Present",
  },
  ACC: {
    icon: WorkIcon,
    location: "Houston, TX",
    backgroundColor: workBg,
    description:
      "Architect frontend web solutions by determining best modules, frameworks, API layouts, and style implementation on a project by project basis, support, supervise, and assign project stories to junior frontend developers, learn new project-specific software to implement/refactor/modify new and existing features, and collaborate with design, project, and client teams to determine most efficient and feasible Agile project timelines.",
    position: "Lead Frontend Developer",
    place: "Accenture",
    placeLink: "",
    time: "Jun 2021 - Present",
  },
  BOBA: {
    icon: SchoolIcon,
    location: "Houston, TX",
    backgroundColor: schoolBg,
    description:
      "Worked in Figma to create interactive prototypes. Implemented transitions, overlays and modals with smart animate and learned how to export assets for engineering and collaboration best practices within Figma.",
    position: "Mobile UI/UX",
    place: "Udemy",
    placeLink: "https://www.udemy.com/certificate/UC-d23a4599-cc18-4f59-8161-c3458f23fa35/",
    time: "Jan 2021 - Mar 2021",
  },
  CRUNCH: {
    icon: WorkIcon,
    location: "San Francisco, CA",
    backgroundColor: workBg,
    description:
      "Redesigned data layer, implemented TypeScript, migrated Angular1 code to React, and introduced new data visualization features across the app while maintaining unit and functional tests.",
    position: "Frontend Developer",
    place: "YouGov/Crunch.io",
    placeLink: "https://crunch.io/",
    time: "Mar 2019 - Nov 2020",
  },
  BLOCK: {
    icon: WorkIcon,
    location: "Houston, TX",
    backgroundColor: workBg,
    description:
      "Developed client's fullstack web apps including a real-time crypto sentiment analysis platform and an oral hygiene mobile, tablet, and desktop sales funnel.",
    position: "Web Developer",
    place: "Block Party",
    placeLink: "",
    time: "Jan 2018 - Aug 2019",
  },
  FLATIRON: {
    icon: SchoolIcon,
    location: "Houston, TX",
    backgroundColor: schoolBg,
    description:
      "Completed 700+ hours studying the software development cycle. Presented on computing algorithms, wrote 6 technical blogs, and built 5 projects (3 fullstack, 1 frontend, 1 backend) in 4 months.",
    position: "Software Engineering",
    place: "Flatiron School",
    placeLink: "",
    time: "Aug 2018 - Dec 2018",
  },
  TIGER: {
    icon: WorkIcon,
    location: "Brooklyn, NY",
    backgroundColor: workBg,
    description:
      "Worked 1-on-1 with first-time entrepreneurs to develop cohesive, humanist-centered digital marketing strategies. Designed web templates, email and ad campaigns, and branding portfolios.",
    position: "Creative Consultant",
    place: "TigerSpace.Digital",
    placeLink: "",
    time: "May 2016 - Aug 2018",
  },
  UH: {
    icon: SchoolIcon,
    location: "Houston, TX",
    backgroundColor: schoolBg,
    description:
      "Graduated in 3 years from C.T. Bauer Business Honors College with a specialization in Digital Marketing and certification in Global Research. Founding Ambassador of The Center for Diversity and Inclusion while a Residential Advisor and LGBTQA+ Ally.",
    position: "Honors Marketing",
    place: "University of Houston",
    placeLink: "",
    time: "Aug 2014 - May 2017",
  },
};
