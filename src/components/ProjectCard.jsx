import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="project-item">
      <img src={project.img} alt={project.title} />
      <div className="project-details">
        <p>{project.date}</p>
        <h3>{project.title}</h3>
        <div className="project-links">
          <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
            <FaGithub /> Source
          </a>
          <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Website
          </a>
        </div>
      </div>
    </div>
  );
}
