import React from 'react'
import { FaGithub } from 'react-icons/fa';

function Projects() {
    

    return (
        <>
            <sections className="projects" id="projects">
                <h2>Projects Worked on</h2>
                <div className="project-previews">
                    <div className="project">
                        <img src="project1.png" alt="Project 1" />
                        <h3>ShoeZam</h3>
                        <p>E-commerce website for shoes. 
                         Frontend built with HTML ,CSS and JavaScript.
                         Backend built with Node.js, Express, PostgreSQL and Sequelize.
                         Features include user authentication, product browsing, shopping cart, and order management.</p>
                         <div>
                         <button>Live Demo</button>
                         <button><FaGithub/></button>
                         </div>
                    </div>
                    <div className="project">
                        <img src="project2.png" alt="Project 2" />  
                        <h3>xDevs-code-hub</h3>
                        <p>A platform for developers to connect,share ideas, and publish their articles-from coding tutorials and project write-ups to industry insights.
                         Built with React for the frontend and Node.js with Express for the backend.
                        </p>
                         <div>
                         <button>Live Demo</button>
                         <button><FaGithub/></button>
                         </div>
                    </div>
                </div>
            </sections>
        </>
    )
}

export default Projects;
