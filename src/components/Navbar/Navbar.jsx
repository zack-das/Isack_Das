// Navbar.jsx
import { Link } from 'react-scroll';
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo scrolls back to Hero */}
      <h1>
        <Link 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="listItem"
        >
          Das
        </Link>
      </h1>

      <ul>
        <li>
          <Link 
            className="listItem" 
            to="about" 
            smooth={true} 
            duration={500} 
          >
            Me
          </Link>
        </li>
        <li>
          <Link 
            className="listItem" 
            to="skills" 
            smooth={true} 
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link 
            className="listItem" 
            to="projects" 
            smooth={true} 
            duration={500}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
