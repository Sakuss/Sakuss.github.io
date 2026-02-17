import React from "react";
import './Projects.css';
import image from '../kavely.png';
import image2 from '../chatbot.png';
import image3 from '../thesis.jpg';
import image4 from '../climate.png';
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
                    <p className="project-description">Bachelor’s thesis project focused on developing an autonomous robot system built on a client–server architecture. The robots acted as clients, 
                        sending sensor data to a server that handled navigation logic, tracked robot positions, and issued movement commands based on their current location and destination. 
                        Track navigation was performed using a line‑follower sensor, while NFC tags and an RFID reader enabled precise position updates. The robots could also capture images of obstacles, 
                        allowing the system to perform AI‑based object recognition and reroute them when the path was blocked. Developed as a full-stack project.</p>
                    <p className="project-description">My main areas of responsibility were developing the client side of the system and implementing the control logic for robot movement and sensor data processing.
                        I also contributed to the develompment of the control panel for monitoring and controlling the robots on server side.
                    </p>
                    <p className="project-tech">Technologies: Git · Python</p>
                    <a className="project-links" href="https://www.theseus.fi/bitstream/handle/10024/883462/Koberg_Loppukaarre_Suorajarvi.pdf?sequence=2&isAllowed=y" target="_blank" rel="noopener noreferrer"> 
                            <p>Link to thesis</p>
                    </a>
                </li>
                <li className="project-item">
                    <h3 className="project-title">
                        ContextualAI Chatbot (Product development project)
                    </h3>
                    <img src={image2} alt="Chatbot" className="project-picture" />
                    <p className="project-description">AI-powered chatbot that generates context-aware responses based on predefined content and user queries. OpenAI API was used for generating responses.
                        Frontend was developed using React Vite and backend using Python with fastAPI-library. Context and message history were stored in a MySQL database. Developed as a full-stack project.</p>
                    <p className="project-description">My main responsibility was designing and implementing the chatbot’s context‑handling system. This involved determining an efficient way to store large 
                        text datasets and creating a recursive retrieval method that allowed the chatbot to access only the relevant parts of the context instead of processing the entire dataset for every query.</p>
                    <p className="project-tech">Technologies: Git · MySQL · React Vite · Python</p>
                    <a className="project-links" href="https://github.com/Sakuss/YP2-Chatbot" target="_blank" rel="noopener noreferrer"> 
                            <p>Link to project</p>
                    </a>
                </li>
                <li className="project-item">
                    <h3 className="project-title">
                        Climate change visualization tool (Website)
                    </h3>
                    <img src={image4} alt="Climate" className="project-picture" />
                    <p className="project-description">Web application for visualizing climate change data. The frontend fetches the climate data from a MySQL database using Java Spring Boot backend and displays it as interactive charts.
                        The charts have multiple layout options and you can craft your own custom views. Site also includes login and signup functionality for saving custom views. Developed as a full-stack project.</p>
                    <p className="project-description">My main areas of responsibility were implementing user authentication and login functionality and creating four of the charts from the backend data.</p>
                    <p className="project-tech">Technologies: Git · MySQL · Java Spring Boot · React</p>
                    <a className="project-links" href="https://github.com/Sakuss/Climate-change-visualization-project" target="_blank" rel="noopener noreferrer"> 
                            <p>Link to project</p>
                    </a>
                </li>
                <li className="project-item">
                    <h3 className="project-title">
                        Walking game (Mobile App)
                    </h3>
                    <img src={image} alt="Kavelypeli" className="project-picture" />
                    <p className="project-description">Mobile application that tracks user steps and displays them to user. App also included achievements based on activity, statistics page, leaderboard and shop.
                        Step tracking was done with accelerometer and gyroscope sensors. User data was stored in Firebase and the app was developed using Flutter. Developed as a full-stack project.</p>
                    <p className="project-description">My main areas of responsibility were implementing the step tracking functionality, creating the achievements system and implementing user signup and login functionality.</p>
                    <p className="project-tech">Technologies: Flutter (Dart) · Firebase Authentication · Firebase Firestore · Git</p>
                    <a className="project-links" href="https://github.com/Sakuss/Kavelypeli" target="_blank" rel="noopener noreferrer">
                        <p>Link to project</p>
                    </a>
                </li>
            </ul>
            </div>
        </section>
    );
}

export default Projects;