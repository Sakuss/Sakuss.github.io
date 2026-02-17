import React from "react";
import './Skills.css';

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-heading">Skills</h2>
            <div className="section-inner">
            <ul className="skills-list cards-stack">
                <li className="skill-item">
                    <h3 className="skill-title">Programming languages</h3>
                    <p className="skill-description">Python · C · C++ · Java · JavaScript · HTML · CSS · Kotlin · Dart<br /> Most experienced in Python and know the basics of all the mentioned languages.</p>
                </li>
                <li className="skill-item">
                    <h3 className="skill-title">Frontend</h3>
                    <p className="skill-description">React · Flutter <br /> I have experience in building user interfaces with React and mobile applications with Flutter.</p>
                </li>
                <li className="skill-item">
                    <h3 className="skill-title">Backend & Databases</h3>
                    <p className="skill-description">Node.js · Firebase · MySQL · FastAPI · REST APIs <br />Backend development experience with Node.js, Firebase and FastAPI. Databases primarily done with MySQL.</p>
                </li>
                <li className="skill-item">
                    <h3 className="skill-title">Tools & Platforms</h3>
                    <p className="skill-description">Git · Windows · Linux<br />Efficient in using Git for version control and managing code repositories. Windows is my main platform for development, but I am also comfortable working on Linux. </p>
                </li>
                <li className="skill-item">
                    <h3 className="skill-title">Project Management</h3>
                    <p className="skill-description">Scrum<br />I have experience working in Scrum teams and managing projects using agile methodologies.</p>
                </li>
                <li className="skill-item">
                    <h3 className="skill-title">Technical Support & Systems</h3>
                    <p className="skill-description">Built and configured custom desktop systems. <br />Diagnosed and resolved hardware and OS-related issues. <br />Provided technical support to users and colleagues.</p>
                </li>
            </ul>
            </div>
        </section>
    );
}

export default Skills;