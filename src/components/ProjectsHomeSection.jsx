import { Link } from 'react-router-dom';
import { projects } from "../data/projectData";
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

export default function ProjectsHomeSection() {
  const topTwoProjects = projects.slice(0, 2);

  return (
    <motion.div
      className="home-projects-section"
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="colored-title">Featured Projects</h2>
      <motion.div
        className="home-projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18
            }
          }
        }}
      >
        {topTwoProjects.map((proj, i) => (
          <motion.div
            key={proj.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
            }}
          >
            <ProjectCard project={proj} />
          </motion.div>
        ))}
      </motion.div>
      <Link to="/projects" className="btn view-all-btn">View All Projects</Link>
      <hr />
    </motion.div>
  );
}
