import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-item"
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #6a82fb33', y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
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
    </motion.div>
  );
}
