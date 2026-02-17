import React from "react";
import './Work.css'; // Import the new CSS file

function WorkExperience() {
    return (
        <section id="work" className="work-section">
            <h2 className="work-heading">Work Experience</h2>
            <div className="section-inner">
            <ul className="work-list cards-stack">
                <li className="work-item">
                    <h3 className="work-title">Internship</h3>
                    <p className="work-description">Company: Oulu University of Applied Sciences</p>
                    <p className="work-description">Year: 2025</p>
                    <p className="work-description">I did my internship at Oulu University of Applied Sciences in summer 2025. My main tasks were to create course material for third-year robotics course(raspberry pi, python, linux)
                        and enlarge the coding task pool for "Introduction to programming" course (C, node.js). Both tasks required creating introductory code snippets and writing instructions for the students to follow.</p>
                </li>
                <li className="work-item">
                    <h3 className="work-title">Cleaner</h3>
                    <p className="work-description">Company: Coor Service Management Oy</p>
                    <p className="work-description">Year: 2022 - </p>
                    <p className="work-description">I do regular and thorough cleanings at this firm with zero-hours contract.</p>
                </li>
                <li className="work-item">
                    <h3 className="work-title">Night Security/Location Unit/Runner</h3>
                    <p className="work-description">Company: Whatever pictures Oy</p>
                    <p className="work-description">Year: 2021 - 2025</p>
                    <p className="work-description">I've done some gigs for this company, mainly focusing on securing filming locations during the night, helping as a member of the location unit during filming and being a on-set runner.</p>
                </li>
                <li className="work-item">
                    <h3 className="work-title">Summer Jobs</h3>
                    <p className="work-description">Companies: A&A Palvelut Oy, Oulun Kaupunginteatteri Oy, Polar Electro Oy</p>
                    <p className="work-description">Year: 2014 - 2020</p>
                    <p className="work-description">I was cleaner at A&A palvelut in 2019, doing same things I do now at Coor. I was maintanence painter at Oulun teatteri in 2016. 
                        At Polar Electro, i was on preassembly team in 2014. The job included testing and assembling heart rate monitors.</p>
                </li>
            </ul>
            </div>
        </section>
    );
}

export default WorkExperience;