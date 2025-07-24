import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col footer-contact">
          <h4>Ahmad Sharkawi</h4>
          <p className="footer-location">📍 Saida, Lebanon</p>
          <a href="mailto:ahmadsharkawi29@gmail.com" className="footer-email">ahmadsharkawi29@gmail.com</a>
          <p className="availability-glow">
            Available for positions, opportunities, and projects
          </p>
        </div>
        <div className="footer-col footer-social">
          <span className="footer-social-label">Connect:</span>
          <div className="footer-social-icons">
            <a
              href="https://www.linkedin.com/in/ahmadsharkawi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/ahmads29"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ahmad Sharkawi. All rights reserved.</p>
      </div>
    </footer>
  );
}
