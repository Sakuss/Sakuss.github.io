import React from "react";
import './Header.css';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#about">About me </a></li>
                    <li><a href="#education">Education </a></li>
                    <li><a href="#skills">Skills </a></li>
                    <li><a href="#projects">My projects</a></li>
                    <li><a href="#work">Work experience </a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;