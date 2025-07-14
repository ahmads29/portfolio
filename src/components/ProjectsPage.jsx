import { useState } from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import { projects } from "../data/projectData";
import ProjectCard from './ProjectCard';

export default function ProjectsPage() {
  const [search, setSearch] = useState('');

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="projects-page-container">
      <h1 className="gradient-title">All Projects</h1>
      <div className="projects-info">
        <FaProjectDiagram size={24} />
        <span>{projects.length} Projects Published</span>
      </div>
      <input
        type="search"
        placeholder="Search projects..."
        className="search-bar"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="projects-list">
        {filteredProjects.length ? (
          filteredProjects.map(proj => <ProjectCard key={proj.id} project={proj} />)
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
}
