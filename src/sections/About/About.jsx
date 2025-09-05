import React from 'react'
import './About.css';

 function About() {
    

    return (
        <>
            <section id='about' className="about">
                <div className="glow"></div>
               <div className="about-container">
                 <h1>About Me</h1>
                <p>I'm a self-driven Full Stack web developer with hands on skils,
                    trained through the Somakodi Software engineering  program, where I developed practical, hands-on experience building
                    production-ready web applications. My training emphasized both frontend and backend
                    development, real-world project work, and delivering great user experiences.
                </p>

                <h3>What I Do</h3>
                <p className="whatIDo">
                I build user-friendly web applications with a focus on clean, accessible interfaces and
                seamless UI/UX. I work across the stack — crafting responsive frontends with React and
                managing backend logic and data persistence using Python and PostgreSQL. My projects
                prioritize performance, maintainability, and an intuitive user experience.
                </p>
               </div>
                
            </section> 
        </>
    )
}

export default About;