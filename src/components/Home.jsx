import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  const handlePortfolio = () => {
    navigate("/portfolio");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Kadir Ramírez Rodríguez</h1>
        <h2>Front-end Developer</h2>
        <p>
            Experience in ReactJS, JavaScript, CSS, Bootstrap, API consumption. Specialized in creating dynamic, accessible and visually appealing user interfaces, combining a user-centered approach (UX/UI) with strong technical skills.
        <br />
        <br />
            I am a motivated professional, committed to continuous learning and always looking for new challenges that allow me to innovate, develop my skills and contribute to the success of the projects in which I participate.
        </p>
        <div className="buttons">
          <button className="portfolio-btn" onClick={handlePortfolio}>
            My Portfolio
          </button>
          <button className="contact-btn" onClick={handleContact}>
            Contact Me
          </button>
        </div>
        <div className="social-links">
          <a href="https://github.com/Kadramirez" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/kaddev97/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="home-image">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQG9vrzxF5j9LA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693323825657?e=2147483647&v=beta&t=dK6l-EActSVlYiIGTy4ehs27yP4yX9uafvLKQnbbl-M" alt="Hooded Person" />
      </div>
    </div>
  );
}

export default Home;
