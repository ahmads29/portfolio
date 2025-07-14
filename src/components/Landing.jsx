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
            <a href="https://drive.google.com/file/d/1Bo1cDASIIfSm2HS31GmgbwxxB6GbrFWm/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="https://www.linkedin.com/in/ahmad-sharkawi-a966152aa/" target="_blank" rel="noopener noreferrer" className='social-icon'>
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/ahmads29" target="_blank" rel="noopener noreferrer" className='social-icon'> 
        <FaGithub size={24} />
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