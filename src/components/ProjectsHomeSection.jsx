import { Link } from 'react-router-dom';
import { projects } from "../data/projectData";
import ProjectCard from './ProjectCard';

export default function ProjectsHomeSection() {
  const topTwoProjects = projects.slice(0, 2);

  return (
    <div className="home-projects-section">
      <h2 className="colored-title">Featured Projects</h2>
      <div className="home-projects">
        {topTwoProjects.map(proj => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
      <Link to="/projects" className="btn view-all-btn">View All Projects</Link>
      <hr />
    </div>
  );
}
