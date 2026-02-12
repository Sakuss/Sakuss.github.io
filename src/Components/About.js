import React from "react";
import './About.css';
import image from '../kuva1.png';

function About() {
    return (
        <section id="about">
            <div className="section-inner">
                <div className="about-section">
                    <img src={image} alt="Saku Suorajärvi" className="profile-picture" />
                    <h2 className="about-heading">Saku Suorajärvi</h2>
                    <p className="about-description">
                        I am a 25-year-old software development graduate from Oulu, Finland. My primary interests are in junior-level software development and testing. 
                        Through my studies and projects, I have developed practical experience in building 
                        web applications, working with APIs, and collaborating in team environments. I am eager to continue growing as a developer and contribute to meaningful software projects.
                    </p>
                    <div className="about-links">
                        <a href="https://github.com/Sakuss" target="_blank" rel="noopener noreferrer" className="about-link">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/saku-suoraj%C3%A4rvi-111bb6231/" target="_blank" rel="noopener noreferrer" className="about-link">
                            LinkedIn
                        </a>
                        <a href="mailto:saku.suorajarvi@hotmail.fi" className="about-link">Contact Me</a>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default About;