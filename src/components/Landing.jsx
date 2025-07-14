import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from "../assets/profilepic.jpeg"
function Landing () {
    return(
        <>
        <div className='landing-container'>
        <div className="landing-details">
            <img src={profilePic} />
            <h3 className='colored-title'>Ahmad Sharkawi</h3>
            <p>Software Engineer with a strong passion for technology and innovation</p>
            <div className='landing-btns'>
            <a href="">Resume</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='social-icon'> 
        <FaGithub size={24} />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className='social-icon'>
        <FaLinkedin size={24} />
      </a>
            </div>
            <p className='p-class'>Computer Engineering student at Beirut Arab University (BAU) with a strong focus on React, Next.js, and the MERN stack. Skilled in Laravel, MySQL, MongoDB, and a WordPress expert. Passionate about building scalable web applications and delivering optimized solutions across technologies.

</p>
<hr/>
        </div>
        </div>
        </>
    )
}

export default Landing;