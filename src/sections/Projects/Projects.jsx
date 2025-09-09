import React from 'react'
import { FaGithub } from 'react-icons/fa';
import './Projects.css';
import shoezam from '../../assets/shoe-zam.png'

function Projects() {
    
    const project = [
        {
            title: "ShoeZam",
            description: "An online shoe store. Frontend built with HTML ,CSS and JavaScript. Backend built with Node.js, Express, PostgreSQL and Sequelize. Features include user authentication, product browsing, shopping cart, and order management.",
            link:"#",
            livedemo: "#",
            image: shoezam,
        },
        {
            title: "xDevs-code-hub",
            description: "A platform for developers to connect,share ideas, and publish their articles-from coding tutorials and project write-ups to industry insights. Built with React for the frontend and Node.js with Express for the backend.",
            link:"#",
            livedemo: "#",
            image: "project2.png",
        },
        {
            title: "Project 3",
            description: "Description of project 3.",
            link:"#",
            livedemo: "#",
            image: "project3.png",
        }
    ]

    return (
        <>
            <sections className="projects" id="projects">
                <div className="projects-container">
                <h1 className="section-title">My Projects</h1>
                <div className="my-projects">
<div className="box-container">
    {project.map((proj, index) => (
        <div className="box" key={index}>
            <img src={proj.image} alt={proj.title} className="project-image" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-links">
                <a className='icon' href={proj.link} target="_blank" rel="noopener noreferrer">  
                    <FaGithub />
                </a>
                <button><a href={proj.livedemo} target="_blank" rel="noopener noreferrer">Live Demo</a></button> 
            </div>
        </div>
    ))}
    

                </div>
                </div>
                </div>
            </sections>
        </>
    )
}

export default Projects;
