import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer">
                        <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer">
                        <h2>InnoAdmin App</h2>
                    </a>
                    <p>
                        The InnoAdmin App is a powerful administrative tool designed for managing job postings and user data effectively.
                        Administrators can approve or reject job posts submitted by recruiters and have full visibility into job seeker and recruiter data.
                        This robust platform streamlines recruitment processes and ensures a seamless experience for both candidates and employers.
                    </p>
                </div>

                <div className="project">
                    <a href="https://hiring.innotrat.in/recruiters-dashboard" target="_blank" rel="noreferrer">
                        <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://hiring.innotrat.in/recruiters-dashboard" target="_blank" rel="noreferrer">
                        <h2>Innoview Recruiter App</h2>
                    </a>
                    <p>
                        The Innoview Recruiter App is a comprehensive platform designed to streamline the hiring process for job seekers and interns.
                        Recruiters can post jobs and internships, manage applications through an 8-stage process, shortlist candidates, and issue offer letters.
                        The app enhances efficiency and provides a seamless recruitment experience for both recruiters and candidates.
                    </p>
                </div>
                <div className="project">
                    <a href="https://heyraminfrastructure.com/" target="_blank" rel="noreferrer">
                        <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://heyraminfrastructure.com/" target="_blank" rel="noreferrer">
                        <h2>HeyRam Infrastructure Website</h2>
                    </a>
                    <p>
                        Designed and developed a modern, responsive website for HeyRam Infrastructure, a startup focused on software solutions. Built using React and Node.js, the site serves as a platform showcasing company services, career opportunities, and other key business information, enhancing user engagement and providing seamless navigation for potential clients.
                    </p>
                </div>

                <div className="project">
                    <a href="https://vmroutes.vmmaps.com/" target="_blank" rel="noreferrer">
                        <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://vmroutes.vmmaps.com/" target="_blank" rel="noreferrer">
                        <h2>VM Routes</h2>
                    </a>
                    <p>
                        Developed an advanced route tracking and vehicle allocation system for the ETA and distance-based routing of employees. Built using React, Node.js, and integrated with APIs to optimize vehicle assignments, real-time tracking, and route efficiency.
                    </p>
                </div>

                <div className="project">
                    <a href="https://www.vmmaps.com/" target="_blank" rel="noreferrer">
                        <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://www.vmmaps.com/" target="_blank" rel="noreferrer">
                        <h2>VM Maps</h2>
                    </a>
                    <p>
                        Developed an offline mapping application using Leaflet and React, enabling users to access interactive maps and navigate without internet connectivity. The platform provides robust navigation solutions for remote areas, supporting outdoor activities and fieldwork.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;