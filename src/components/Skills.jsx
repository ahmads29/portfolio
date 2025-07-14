
import { skills } from "../data/skillsData.jsx";
import { motion } from 'framer-motion';
function Skills () {
    return(
        <>
        <motion.div
          className="skills-main-container"
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
        <h3 className="colored-title">Skills</h3>
        <div className="skills-container">
            {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  whileHover={{ scale: 1.08, boxShadow: '0 4px 24px #6a82fb33' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                    
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                </motion.div>
            ))}
        </div>
        <hr />
        </motion.div>
        </>
    )
}

export default Skills;