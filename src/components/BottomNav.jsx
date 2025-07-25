// Modern, rounded, fixed bottom navigation bar matching the site theme.
// Contains Home, Projects, Resume (with icons, animated, themed).
// Update the Resume link to your actual PDF in public/ if needed.
import { FaHome, FaFolderOpen, FaFileAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
// import './BottomNav.css';

const navItems = [
  { to: '/', label: 'Home', icon: <FaHome /> },
  { to: '/projects', label: 'Projects', icon: <FaFolderOpen /> },
  // Update the 'to' value below to your actual resume PDF path or external link
  { to: 'https://drive.google.com/file/d/1ib0cpjlmz7MbjypAdYle-jyIVkn1m06q/view?usp=drive_link', label: 'Resume', icon: <FaFileAlt />, external: true },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) =>
        item.external ? (
          <a
            key={item.to}
            href={item.to}
            className="nav-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </a>
        ) : (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              'nav-btn' + (isActive ? ' active' : '')
            }
            end={item.to === '/'}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        )
      )}
    </nav>
  );
} 
