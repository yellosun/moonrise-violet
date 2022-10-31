import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement
}  from 'react-vertical-timeline-component';
import { metier } from './constants'
import 'react-vertical-timeline-component/style.min.css';
import './Work.css'

const TapeJpg = require('../../assets/tape.jpg')

export function TimelineElement({ icon, position, description, backgroundColor, place, time }) {
	return (
		<VerticalTimelineElement
			contentStyle={{...contentStyle, backgroundColor}}
		    contentArrowStyle={contentArrowStyle}
			iconStyle={iconStyle}
			icon={icon}
		>
			<div style={title}>{position}</div>
		    <div style={body}>{description}</div>
		    <div style={{display: 'flex'}}>
			    <div style={date}>{time}</div>
			    <div style={subTitle}>| {place}</div>
		    </div>
		</VerticalTimelineElement>
	)
}

export default function Work() {
  return (
    <div style={container}>
    	<VerticalTimeline>
    		{Object.values(metier).map((position) => {
    			return <TimelineElement {...position} />
    		})}
		</VerticalTimeline>
    </div>
  );
}

const container = {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 600,
    width: 800
}

const contentStyle = {
	boxShadow: 'rgb(0 0 0 / 14%) -1px 1px 10px 0.1px',
}

const contentArrowStyle = {
	borderRight: '7px solid  black',
	margin: '0 2px',
}


const iconStyle = {
	boxShadow: 'none',
	backgroundColor: 'white',
}

const title = {
	fontSize: 15,
	margin: '-15px -20px 0px',
	padding: '20px 20px 10px',
	background: `no-repeat url(${TapeJpg})`
}

const subTitle = {
	fontSize: 'inherit',
	fontWeight: 500,
	marginLeft: 5
}

const date = {
	marginBottom: 0
}

const body = {
	fontSize: 12,
	fontWeight: 500,
	margin: '10px 0',
	fontStyle: 'italic',
	color: 'rgba(0, 0, 0, 0.80)'
}
