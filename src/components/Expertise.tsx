import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React Js",
    "Redux",
    "Node Js",
    'Leaflet Js',
    'Vanilla Js',
    "JavaScript",
    "HTML5",
    "CSS3",
    "DOM",
    "OOP",
    "MongoDB",
    "MySql",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
];

const labelsThird = [
    "OpenAI",
    "Co-Pilot",

];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full Stack Web Development</h3>
                        <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                        <h3>Version Control & Collaboration</h3>
                        <p>
                            I specialize in using Git and GitHub to manage code efficiently, track changes, and collaborate seamlessly with teams to ensure smooth development processes.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>


                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>OpenAI & AI-Powered Solutions</h3>
                        <p>
                            Harness the power of OpenAI's state-of-the-art models to create intelligent and innovative solutions. I specialize in integrating OpenAI technologies to build applications that provide smarter insights and automate complex tasks.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;