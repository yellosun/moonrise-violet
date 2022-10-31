import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './About'
import Projects from './Projects'
import Work from './Work'
import Contact from './Contact'
import { routes } from '../Nav'

export default function Body() {
  return (
    <div style={container}>
        <Routes>
            <Route path={routes.CONTACT.route} element={<Contact />} />
            <Route path={routes.WORK.route} element={<Work />}/>
            <Route path={routes.PROJECTS.route} element={<Projects />}/>
            <Route path={routes.ABOUT.route} element={<About />}/>
        </Routes>
    </div>
  );
}

const container = {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll'
}