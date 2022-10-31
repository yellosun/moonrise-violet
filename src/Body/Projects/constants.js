const ceq = require('../../assets/ceq.jpg')
const crunch = require('../../assets/crunch.jpg')
const boba = require('../../assets/boba.jpg')
const awake = require('../../assets/awake.jpg')
const rr = require('../../assets/recoveryroots.svg')
const grid = require('../../assets/grid.svg')
const code = require('../../assets/code.svg')
const view = require('../../assets/view.svg')

export const projects = {
      CEQ: {
        id: 'CEQ',
        name: 'CryptoEQ',
        description: 'Built crypto sentiment analysis desktop and mobile frontend, admin management platform, and telegram bot.',
        img: ceq,
        stack: ['React', 'Redux', 'JavaScript'],
        actions: {
            view: {
                link: 'https://www.cryptoeq.io/dashboard',
                img: view
            },
            code: null
        },
    },
    GRID: {
        id: 'GRID',
        name: 'Grid Designer',
        description: 'Built customizable and adjustable grid to design and download block patterns with a palette selector.',
        img: grid,
        stack: ['React', 'Hooks', 'Context', 'JavaScript'],
        actions: {
            view: null,
            code: {
                link: 'https://github.com/yellosun/gridesigner',
                img: code
            }
        }
    },
    AWAKE: {
        id: 'AWAKE',
        name: 'Awake',
        description: 'Built daily log entry and meditation timer with visually aggregated data, and mindfulness-based quotes API.',
        img: awake,
        stack: ['Ruby on Rails', 'Node', 'React', 'Redux', 'JavaScript'],
        actions: {
            view: null,
            code: {
                link: 'https://github.com/yellosun/awake-fe',
                img: code
            }
        },
    },
    CRUNCH: {
        id: 'CRUNCH',
        name: 'Crunch.io',
        description: 'Architected admin permissions and permissions editing modal series, and built dataset importer panels.',
        img: crunch,
        stack: ['React', 'Sagas', 'Angular1', 'TypeScript'],
        actions: {
            view: {
                link: 'https://crunch.io/powerful-survey-analytics/',
                img: view
            },
            code: null
        },
    },
    BOBA: {
        id: 'BOBA',
        name: 'BobaMe',
        description: "Designed and prototyped a San Francisco boba tea's mobile login, sign up, order, and checkout.",
        img: boba,
        stack: ['Figma', 'Photoshop'],
        actions: {
            view: {
                link: 'https://www.figma.com/proto/AMOnS6XG44jBzlYOnIlU6j/BobaMe?scaling=scale-down&page-id=0%3A1&node-id=134%3A6',
                img: view
            },
            code: null
        },
    },
    RR: {
        id: 'RR',
        name: 'Recovery Roots',
        description: 'Built ebook download and email sign up, admin blog management system with Markdown blog entry, and instagram profile parser.',
        img: rr,
        stack: ['Node', 'React', 'Redux', 'TypeScript'],
        actions: {
            view: {
                link: 'https://pensive-murdock-7cfb25.netlify.app',
                img: view
            },
            code: {
                link: 'https://github.com/yellosun/recoveryroots',
                img: code
            }
        },
    },
}

// 'Built dataset importer panels and architected admin user and team permissions panels and permissions editing modal series.',