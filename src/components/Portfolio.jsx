import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../styles/Portfolio.css";
import { FaCode, FaBriefcase, FaCertificate } from "react-icons/fa";

const skills = [
  { name: "React JS", percentage: "90%" },
  { name: "JavaScript", percentage: "100%" },
  { name: "Node JS", percentage: "85%" },
  { name: "CSS", percentage: "100%" },
  { name: "Bootstrap", percentage: "100%" },
  { name: "SQL", percentage: "70%" },
  { name: "HTML", percentage: "100%" },
  { name: "Inglés", percentage: "60%" },
  { name: "Youtrack", percentage: "100%" },
  { name: "Photoshop", percentage: "90%" },
  { name: "Github", percentage: "100%" },
];

const projects = [
  { title: "Marketplace", description: "Online store focused on footwear, includes payment options with paypal and stripe", image: "https://media.licdn.com/dms/image/v2/D4E22AQHIY5l-9A-azw/feedshare-shrink_800/feedshare-shrink_800/0/1699903606182?e=1736985600&v=beta&t=lU80Fv_-1WcGna2sqdwoYfPqhINBEwS4BtAMWRkDLso" },
  { title: "Tic Tac Toe", description: "Classic game with an anime-focused environment, using ReactJS", image: "https://media.licdn.com/dms/image/v2/D4E22AQED8eSmjnyCRA/feedshare-shrink_800/feedshare-shrink_800/0/1699903798504?e=1736985600&v=beta&t=YrOKExwLxrVFOXKDHWjIAC9jPz82edpUqJQwXJPPeic" },
  { title: "Loan System", description: "Financial system, for managing customer lists and credits, includes financial control and reporting, graphics and more.", image: "https://media.licdn.com/dms/image/v2/D4E22AQFzs2VpaXTd4w/feedshare-shrink_800/feedshare-shrink_800/0/1725497348637?e=1736985600&v=beta&t=R9pikYJTDLj6xKBrCJ1BX3ijcRCOnrCCLeJK-hu1otc" },
];

const experiences = [
  { company: "Moovin Logistic", position: "Frontend developer", description: "Implement new functionalities on the client website and in the support center, optimize existing functions on these platforms, fulfill development tickets and technical support.", image: "https://feriadeempleo.ucr.ac.cr/wp-content/uploads/2024/08/logo-de-la-empresa-300x300.jpeg" },
  { company: "Bizquick", position: "Fullstack developer", description: "Frontend ticket resolution with technologies such as ReactJS and JavaScript, technical support ticket resolution through MySql queries", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJGyYCK8C6OxMXWvyYFPUZrpW96JABrzSKg&s" },
];

const certifications = [
  { title: "Design Sprint Professional Certification - DSPC™", link: "https://www.credly.com/badges/d78621bc-fe52-4971-9f0c-d804d8cc79c0/linked_in_profile" },
  { title: "JavaScript Algorithms and Data Structures", link: "https://www.freecodecamp.org/certification/Kaddev_/javascript-algorithms-and-data-structures-v8" },
  { title: "Responsive Web Design", link: "https://www.freecodecamp.org/certification/Kaddev_/responsive-web-design" },
  { title: "Scrum Foundation Professional Certification - SFPC™", link: "https://www.credly.com/badges/25a74e93-ffe8-495e-bd59-219af53ab440/linked_in_profile" },
];

function Portfolio() {
  return (
    <div className="portfolio-container">
         {/* Icono de Volver */}
      <div className="back-button">
        <Link to="/" className="back-link">
          <FaArrowLeft className="back-icon" /> Back to Home
        </Link>
      </div>
      {/* Skills Section */}
      <section className="skills-section">
        <h1><FaCode /> SKILLS</h1>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <span>{skill.name}</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: skill.percentage }}>
                  {skill.percentage}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h1><FaBriefcase /> PERSONAL PROJECTS</h1>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h1>
WORK EXPERIENCE</h1>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <img src={exp.image} alt={exp.company} />
              <h3>{exp.company}</h3>
              <p>{exp.position}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <h1><FaCertificate /> CERTIFICATIONS</h1>
        <ul>
          {certifications.map((cert, index) => (
            <li key={index}>
              <a href={cert.link} target="_blank" rel="noreferrer">{cert.title}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;
