
import { skills } from "../data/skillsData.jsx";
function Skills () {
    return(
        <>
        <div className="skills-main-container">
        <h3 className="colored-title">Skills</h3>
        <div className="skills-container">
            {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                    
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                </div>
            ))}
        </div>
        <hr />
        </div>
        </>
    )
}

export default Skills;