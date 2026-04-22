import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaGithub, FaBootstrap, FaFigma, 
  FaLinux, FaPython, FaNetworkWired 
} from 'react-icons/fa';

import { 
  SiCanva, SiInkscape, SiMongodb, SiRender, SiMysql 
} from 'react-icons/si';

import { MdOutlineDesignServices } from 'react-icons/md';
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
    <i className="devicon"><FaBootstrap /></i>

    {/* Languages & Databases */}
    <i className="devicon"><FaPython /></i>
    <i className="devicon"><SiMongodb /></i>
    <i className="devicon"><SiPostgresql /></i>
    <i className="devicon"><SiMysql /></i>

    {/* System & Networking */}
    <i className="devicon"><FaLinux /></i>
    <i className="devicon"><FaNetworkWired /></i>
    <i className="devicon"><SiRender /></i>

    {/* Design & UI/UX */}
    <i className="devicon"><MdOutlineDesignServices /></i>
    <i className="devicon"><FaFigma /></i>
    <i className="devicon"><SiCanva /></i>
    <i className="devicon"><SiInkscape /></i>

    {/* Tools & Version Control */}
    <i className="devicon"><BiLogoVisualStudio /></i>
    <i className="devicon"><FaGitAlt /></i>
    <i className="devicon"><FaGithub /></i>
    <i className="devicon"><SiPostman /></i>
                        </div>         
                    </div>
                </div>
            </sections>
            
        </>
    )
}
export default Skils;
