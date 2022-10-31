import React from 'react';
const School = require('../../assets/school.svg')
const Work = require('../../assets/computer.svg')

const icon = {
	height: '100%',
	width: '100%',
}

const SchoolIcon = <img style={icon} src={School} alt={'hand-drawn icon of graduation cap'}/>
const WorkIcon = <img style={icon} src={Work} alt={'hand-drawn icon of laptop'}/>

export const metier = {
	BOBA: {
		icon: SchoolIcon, 
		backgroundColor: '#92bcd0',
		description: 'Worked in Figma to create interactive prototypes. Implemented transitions, overlays and modals with smart animate and learned how to export assets for engineering and collaboration best practices within Figma.',
		position: 'Mobile UI/UX',
		place: 'Udemy',
		time: 'Jan 2021 - Mar 2021',
	},
	CRUNCH: {
		icon: WorkIcon, 
		backgroundColor: '#ce9742',
		description: 'Redesigned data layer, implemented TypeScript, migrated Angular1 code to React, and introduced new data visualization features across the app while maintaining unit and functional tests.',
		position: 'Frontend Developer',
		place: 'Crunch.io',
		time: 'Mar 2019 - Nov 2020',
	},
	BLOCK: {
		icon: WorkIcon, 
		backgroundColor: '#dcbf7c',
		description: "Developed client's fullstack web apps including a real-time crypto sentiment analysis platform and an oral hygiene mobile, tablet, and desktop sales funnel.",
		position: 'Web Developer',
		place: 'Block Party',
		time: 'Jan 2018 - Aug 2019',
	},
	FLATIRON: {
		icon: SchoolIcon, 
		backgroundColor: '#c2e3f3',
		description: 'Completed 700+ hours studying the software development cycle. Presented on computing algorithms, wrote 6 technical blogs, and built 5 projects (3 fullstack, 1 frontend, 1 backend) in 4 months.',
		position: 'Software Engineering' ,
		place: 'Flatiron School',
		time: 'Aug 2018 - Dec 2018',
	},
	TIGER: {
		icon: WorkIcon, 
		backgroundColor: '#c3ae86',
		description: 'Worked 1-on-1 with first-time entrepreneurs to develop cohesive, humanist-centered digital marketing strategies. Designed web templates, email and ad campaigns, and branding portfolios.',
		position: 'Creative Consultant',
		place: 'Tiger Space Digital',
		time: 'May 2016 - Aug 2018',
	},
	UH: {
		icon: SchoolIcon, 
		backgroundColor: '#add8da',
		description: 'Graduated in 3 years from C.T. Bauer Business Honors College with a specialization in Digital Marketing and certification in Global Research. Founding Ambassador of The Center for Diversity and Inclusion while a Residential Advisor and LGBTQA+ Ally.',
		position: 'Honors Marketing',
		place: 'University of Houston',
		time: 'Aug 2014 - May 2017',
	}
}