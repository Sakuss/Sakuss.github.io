import React from "react";
import './Projects.css'; // Import the CSS file
import image from '../kavely.png';
import image2 from '../chatbot.png';
import image3 from '../thesis.jpg';
function Projects() {
    return (
        <section id="projects" className="projects-section">
            <h3 className="projects-heading">Projects</h3>
            <div className="section-inner">
            <ul className="projects-list cards-stack">
                <li className="project-item">
                    <h3 className="project-title">
                        Autonomous Driving System (Bachelor's Thesis)
                    </h3>
                    <img src={image3} alt="Thesis" className="project-picture" />
                    <p className="project-description">Bachelor’s thesis project focused on developing an autonomous robot system using a client–server architecture. 
                        The system enabled robots to navigate a track independently using sensor input and centralized control logic.
                        A line-following sensor was used for track navigation, while NFC tags combined with an RFID reader allowed the system to determine robot location and issue movement commands. 
                        The robots were also capable of capturing images of obstacles and using AI-based image analysis to identify objects blocking their path.</p>
                    <p className="project-description">My main areas of responsibility were developing the client side of the system and implementing the control logic for robot movement and sensor data processing.
                        I also contributed to the develompment of the control panel for monitoring and controlling the robots.
                    </p>
                    <p className="project-tech">Technologies: Git, Python</p>
                    <a className="project-links" href="https://www.theseus.fi/bitstream/handle/10024/883462/Koberg_Loppukaarre_Suorajarvi.pdf?sequence=2&isAllowed=y" target="_blank" rel="noopener noreferrer"> 
                            <p>Link to thesis</p>
                    </a>
                </li>
                <li className="project-item">
                    <h3 className="project-title">
                        Climate change visualization tool (Website)
                    </h3>
                    <p className="project-description">Web application for visualizing climate data through interactive charts. The frontend fetches data from a REST API backend and displays it as interactive charts. Developed as a full-stack project.</p>
                    <p className="project-description">My main areas of responsibility were implementing user authentication and login functionality and creating four of the charts from the backend data.</p>
                    <p className="project-tech">Technologies: Git, MySQL, Java Spring Boot, React</p>
                    <a className="project-links" href="https://github.com/Sakuss/Climate-change-visualization-project" target="_blank" rel="noopener noreferrer"> 
                            <p>Link to project</p>
                    </a>
                </li>
                <li className="project-item">
                    <h3 className="project-title">
                        Walking game (Mobile App)
                    </h3>
                    <img src={image} alt="Kavelypeli" className="project-picture" />
                    <p className="project-description">Mobile application that tracks user steps and rewards achievements based on activity. Step tracking was done with accelerometer and gyroscope sensors. User data was stored in Firebase
                        and the app was developed using Flutter. Developed as a full-stack project.</p>
                    <p className="project-description">My main areas of responsibility were implementing the step tracking functionality, creating the achievements system and implementing user signup and login functionality.</p>
                    <p className="project-tech">Technologies: Flutter (Dart), Firebase Authentication, Firebase Firestore, Git</p>
                    <a className="project-links" href="https://github.com/Sakuss/Kavelypeli" target="_blank" rel="noopener noreferrer">
                        <p>Link to project</p>
                    </a>
                </li>
                <li className="project-item">
                    <h3 className="project-title">
                        ContextualAI Chatbot (App)
                    </h3>
                    <img src={image2} alt="Chatbot" className="project-picture" />
                    <p className="project-description">AI-powered chatbot that generates context-aware responses based on predefined content and user queries. OpenAI API was used for generating responses.
                        Frontend was developed using React Vite and backend using Python with fastAPI-library. Context and message history were stored in a MySQL database. Developed as a full-stack project.</p>
                    <p className="project-description">My main areas of responsibility were implementing the contextual backend for the chatbot and innovating the system to generate more creative and varied responses.</p>
                    <p className="project-tech">Technologies: Git, MySQL, React Vite, Python</p>
                    <a className="project-links" href="https://github.com/Sakuss/YP2-Chatbot" target="_blank" rel="noopener noreferrer"> 
                            <p>Link to project</p>
                    </a>
                </li>
            </ul>
            </div>
        </section>
    );
}

export default Projects;