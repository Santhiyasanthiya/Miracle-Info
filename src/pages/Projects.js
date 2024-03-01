import React from 'react';
import { details } from '../portfolio';
import Project from './Project/Project';
import Fade from 'react-reveal/Fade';
import "./Projects.css"

const Projects = () => {
    return <section className="projects" id="projects">
        
        {details.map((prj) =>
            <Project key={prj.p1} title={prj.p2} desc={prj.p3} tech={prj.p4} />
        )}
    </section>
}

export default Projects 