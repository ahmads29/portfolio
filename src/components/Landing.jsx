import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from "../assets/profilepic.jpeg"
import { motion } from 'framer-motion';
import ShinyText from './ShinyText';
import TrueFocus from './TrueFocus';




function Landing () {
    return(
        <>
        <motion.div
          className='landing-container'
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
        <div className="landing-details">
            <img src={profilePic} />
            <br/>
            {/* <h3 className='colored-title'>Ahmad Sharkawi</h3> */}
            <ShinyText text="Ahmad Sharkawi" disabled={false} speed={3} className='custom-class' />
            <br/>
            <br/>
            <TrueFocus 
              sentence="Software Engineer"
              manualMode={false}
              blurAmount={5}
              borderColor="#4f79c0"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
            
            <p>With a strong passion for technology and innovation</p>
            <div className='landing-btns'>
            <a href="https://drive.google.com/file/d/1ib0cpjlmz7MbjypAdYle-jyIVkn1m06q/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="https://www.linkedin.com/in/ahmadsharkawi/" target="_blank" rel="noopener noreferrer" className='social-icon'>
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
        </motion.div>
        </>
    )
}

export default Landing;
