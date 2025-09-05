import React from 'react'
import './Hero.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";   


 function Hero() {
    

    return (
        <>
            <section id="hero" className="hero">
                <div className="heroContainer">
                    <div className="heroContent">
                    <h3>Hello, my name is</h3>
                    <h1>Isack Das.</h1>
                    <h2>A fullstack Software Developer.</h2>
                    <p>Currently focused on building responsive web applications.</p>
                    </div>
                    <div className="profilePic"></div>
                    <ul className="socialIcons">
                        <li><a href=""><FaGithub /></a></li>
                        <li><a href=""><FaLinkedin /></a></li>
                        <li><a href=""><FaSquareXTwitter /></a></li>
                        <li><a href=""><MdOutlineMailOutline /></a></li>
                    </ul>
                    <div className="scrollDown"></div>
                </div>    
            </section>
        </>
    )
};

export default Hero;
