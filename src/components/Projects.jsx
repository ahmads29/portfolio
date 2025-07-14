import { projects } from "../data/projectData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
export default function Projects() {
    return (
        <>
        <h3 className="Skills-title">Projects</h3>
        <div className="projects-wrapper">
            <div className="blurry-pulse pulse1"></div>
            <div className="blurry-pulse pulse2"></div>

            <div className="projects-container">
                {projects.map(project => (
                    <div key={project.id} className="project-item">
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
                ))}
            </div>
        </div>
        <hr />
        </>
    );
}
