import { email, person, location, github, linkedin } from '../../assets/contact'

export const icons = {
    PERSON: {
        icon: person,
        link: null,
        text: 'she/they',
        color: '#e5ddd7',
        
    },
    LOCATION: {
        icon: location,
        link: null,
        text: 'remote',
        color: '#491510',
        
    },
    EMAIL: {
        icon: email,
        link: 'mailto:violetwmoon@gmail.com',
        text: 'email',
        color: 'darkgray',
        
    },
    GITHUB: {
        icon: github,
        link: 'https://github.com/yellosun',
        text: 'github',
        color: '#4d3036',
        
    },
    LINKEDIN: {
        icon: linkedin,
        link: 'https://www.linkedin.com/in/violetmoon/',
        text: 'linkedin',
        color: 'gray',
    },
}