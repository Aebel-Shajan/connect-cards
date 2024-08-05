import PropTypes from "prop-types";
import markdownBadges from "../../../../assets/markdown-badges.json"
import "./UserSkills.css"

const UserSkills = ({ skills }) => {
  let skillComponents = [];
  for (let i = 0; i < 3; i++) {
    const skillName = skills[i]
    let skillBadge = (
      <div
        className="card-skill"
        key={`user skill${i}`}>
        {skillName}
      </div>
    )
    if (Object.keys(markdownBadges).includes(skillName)) {
      skillBadge = (
        <div
          className="card-skill"
          key={`user skill${i}`}>
          <div className="card-skill-overlay"></div>
          <img src={markdownBadges[skillName]} />
        </div>
      )
    }
    skillComponents[i] = skillBadge
  }

  return (
    <div className="card-skill-container">
      {skillComponents}
    </div>
  )
}

UserSkills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string)
}

export default UserSkills;