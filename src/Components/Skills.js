import React from "react";
import './Skills.css'; // Import the new CSS file

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-heading">Skills</h2>
            <div className="section-inner">
            <ul className="skills-list cards-stack">
                <li className="skill-item">
                    <h3 className="skill-title">Languages & Frameworks:</h3>
                    <p className="skill-description">Python · React · Flutter <br />
                        C · C++ · Java · JavaScript · Kotlin · MySQL · Dart · Firebase <br />
                        Majority of projects done with Python, React and flutter. Know the basics of all the mentioned languages and frameworks. </p>
                </li>
                <li className="skill-item">
                    <h3 className="skill-title">Tools & Technologies:</h3>
                    <p className="skill-description">Git · Windows · Linux · REST APIs <br />Efficient in using Git for version control and managing code repositories. Windows is my main platform for development, but I am also comfortable working on Linux. </p>
                </li>
                <li className="skill-item">
                    <h3 className="skill-title">Development Practices:</h3>
                    <p className="skill-description">Agile / Scrum <br />I know the fundamentals of Agile and Scrum methodologies, and have used them in team environment when working on my thesis project.</p>
                </li>
                <li className="skill-item">
                    <h3 className="skill-title">Technical Support & Systems:</h3>
                    <p className="skill-description">Built and configured custom desktop systems <br />Diagnosed and resolved hardware and OS-related issues <br />Provided technical support to users and colleagues</p>
                </li>
            </ul>
            </div>
        </section>
    );
}

export default Skills;