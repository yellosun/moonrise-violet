const linkedin = require('../../assets/linkedin.svg')
const github = require('../../assets/github.svg')
const location = require('../../assets/location.svg')
const email = require('../../assets/email.svg')
const person = require('../../assets/person.svg')

export const icons = {
    PERSON: {
        icon: person,
        link: null,
        text: 'she/her',
        color: '#cadde2',
    },
    LOCATION: {
        icon: location,
        link: null,
        text: 'remote',
        color: '#96b7d6',
    },
    EMAIL: {
        icon: email,
        link: 'mailto:vltmxn@gmail.com',
        text: 'email',
        color: '#87b3ce',
    },
    GITHUB: {
        icon: github,
        link: 'https://github.com/yellosun',
        text: 'github',
        color: '#baa3d8',
    },
    LINKEDIN: {
        icon: linkedin,
        link: 'https://www.linkedin.com/in/violetmoon/',
        text: 'linkedin',
        color: '#a6abe7',
    },
}