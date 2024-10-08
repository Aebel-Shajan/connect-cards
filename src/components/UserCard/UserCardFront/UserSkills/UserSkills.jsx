import PropTypes from "prop-types";
import markdownBadges from "../../../../assets/data/markdown-badges.json";
import "./UserSkills.css";

const UserSkills = ({ skills }) => {
  let skillComponents = [];
  for (let i = 0; i < 3; i++) {
    const skillName = skills[i];
    let skillBadge = (
      <div className="card-skill" key={`user skill${i}`}>
        <div className="card-skill-text">{skillName}</div>
        <div className="card-skill-overlay"></div>
      </div>
    );
    if (Object.keys(markdownBadges).includes(skillName)) {
      skillBadge = (
        <div className="card-skill" key={`user skill${i}`}>
          <div className="card-skill-overlay"></div>
          <img className="card-skill-image" src={markdownBadges[skillName]} />
        </div>
      );
    }
    skillComponents[i] = skillBadge;
  }

  return skillComponents;
};

UserSkills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
};

export default UserSkills;
