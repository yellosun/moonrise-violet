import {
  rr,
  grid,
  ceq,
  code,
  crunch,
  boba,
  awake,
  view,
  five,
} from "../../assets/projects";

export const projects = {
  RR: {
    id: "RR",
    name: "Recovery Roots",
    description:
      "Built ebook download and email sign up, admin blog management system with Markdown blog entry, and instagram profile parser.",
    img: rr,
    stack: ["Node", "React", "Redux", "TS"],
    actions: {
      view: {
        link: "https://pensive-murdock-7cfb25.netlify.app",
        img: view,
      },
      code: {
        link: "https://github.com/yellosun/recoveryroots",
        img: code,
      },
    },
  },
  CEQ: {
    id: "CEQ",
    name: "CryptoEQ",
    description:
      "Built crypto sentiment analysis desktop and mobile frontend, admin management platform, and telegram bot.",
    img: ceq,
    stack: ["React", "Redux", "JS", "Telegram Bot API"],
    actions: {
      view: {
        link: "https://www.cryptoeq.io/dashboard",
        img: view,
      },
      code: null,
    },
  },
  FIVE: {
    id: "FIVE",
    name: "Five",
    description:
      "Built customizable and adjustable grid to design and download block patterns with a palette selector.",
    img: five,
    stack: ["React", "Hooks", "Apollo/GraphQL", "TS", "Tailwind"],
    actions: {
      view: {
        link: "https://five.me/",
        img: view,
      },
    },
  },
  AWAKE: {
    id: "AWAKE",
    name: "Awake",
    description:
      "Built daily log entry and meditation timer with visually aggregated data, and mindfulness-based quotes API.",
    img: awake,
    stack: ["Ruby on Rails", "React", "Redux", "JS"],
    actions: {
      view: null,
      code: {
        link: "https://github.com/yellosun/awake-fe",
        img: code,
      },
    },
  },
  CRUNCH: {
    id: "CRUNCH",
    name: "Crunch.io",
    description:
      "Architected admin permissions and permissions editing modal series, and built dataset importer panels.",
    img: crunch,
    stack: ["React", "Redux Sagas", "Angular1", "TS", "Storybook"],
    actions: {
      view: {
        link: "https://crunch.io/powerful-survey-analytics/",
        img: view,
      },
      code: null,
    },
  },
  GRID: {
    id: "GRID",
    name: "Grid Designer",
    description:
      "Built customizable and adjustable grid to design and download block patterns with a palette selector.",
    img: grid,
    stack: ["React", "Hooks", "Context", "JS"],
    actions: {
      view: null,
      code: {
        link: "https://github.com/yellosun/gridesigner",
        img: code,
      },
    },
  },
  BOBA: {
    id: "BOBA",
    name: "BobaMe",
    description:
      "Designed and prototyped a San Francisco boba tea's mobile login, sign up, order, and checkout.",
    img: boba,
    stack: ["Figma", "Photoshop"],
    actions: {
      view: {
        link: "https://www.figma.com/proto/AMOnS6XG44jBzlYOnIlU6j/BobaMe?scaling=scale-down&page-id=0%3A1&node-id=134%3A6",
        img: view,
      },
      code: null,
    },
  },
};

// 'Built dataset importer panels and architected admin user and team permissions panels and permissions editing modal series.',
