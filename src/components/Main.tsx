import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
// import Profile from '../assets/avatar/Profile.JPG'
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src='https://res.cloudinary.com/dhmncskt8/image/upload/v1734966935/mzhlak2i3hxa85lg8fa4.jpg' alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
          <a href="https://github.com/PraveenkumarRamar" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/praveenkumar-ramar/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Praveenkumar Ramar</h1>
          <p>Full Stack Engineer | React JS Developer | Web Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/PraveenkumarRamar" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/praveenkumar-ramar/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;