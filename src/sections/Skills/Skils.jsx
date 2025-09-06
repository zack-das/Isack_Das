import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaBootstrap, FaFigma } from 'react-icons/fa';
import { SiPostgresql, SiPostman } from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";

import './Skills.css';

function Skils() {
    

    return (
        <>
            <sections className="skills" id="skills">
                <div className="skills-container">
                    <div className="skill">
                        <h3>Skills</h3>
                        <div className="techstack">
                            <i className="devicon"><FaHtml5 /></i>
                            <i className="devicon"><FaCss3Alt /></i>
                            <i className="devicon"><FaJs /></i>
                            <i className="devicon"><FaReact /></i>
                            <i className="devicon"><FaNodeJs /></i>
                            <i className="devicon"><FaGitAlt /></i>
                            <i className="devicon"><BiLogoVisualStudio /></i>
                            <i className="devicon"><FaGithub /></i>
                            <i className="devicon"><SiPostgresql /></i>
                            <i className="devicon"><FaBootstrap /></i>
                            <i className="devicon"><FaFigma /></i>
                            <i className="devicon"><SiPostman /></i>
                        </div>         
                    </div>
                </div>
            </sections>
            
        </>
    )
}
export default Skils;
