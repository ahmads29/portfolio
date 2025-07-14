import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h4>Ahmad Sharkawi</h4>
          <p>+961 70078614</p>
          <p className="availability-glow">
            Available for positions, opportunities, and projects
          </p>
        </div>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/ahmad-sharkawi-a966152aa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/ahmads29"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ahmad Sharkawi. All rights reserved.</p>
      </div>
    </footer>
  );
}
