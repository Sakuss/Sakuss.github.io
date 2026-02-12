import React from "react";
import './Education.css';

function Education() {
    return (
        <section id="education" className="education-section">
            <h2 className="education-heading">Education</h2>
            <div className="section-inner">
            <ul className="education-list cards-stack">
                <li className="education-item">
                    <h3 className="education-title">Bachelor of Engineering in ICTs, Software Development</h3>
                    <p className="education-description">Institution: Oulu University of Applied Sciences</p>
                    <p className="education-description">Year: 2021 - 2025</p>
                    <p className="education-description"><a href="https://opintopolku.fi/koski/opinnot/8d161251f05042c69399edce933f92c0" target="_blank" className="academic-transcript-link" rel="noopener noreferrer">Academic Transcript</a></p>
                </li>
                <li className="education-item">
                    <h3 className="education-title">Matriculation Examination</h3>
                    <p className="education-description">Institution: Kempele High School</p>
                    <p className="education-description">Year: 2016 - 2019</p>
                </li>
            </ul>
            </div>
        </section>
    );
}

export default Education;