import PropTypes from "prop-types";
import { FaHackerrank, FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaDiscord, FaLink } from "react-icons/fa";
import { CgPokemon } from "react-icons/cg";
import "./UserCard.css";
import markdownBadges from "../../../assets/markdown-badges.json"

const UserCard = ({ user }) => {
  return (
    <div className="card-container">
      <div className="card-header-container">
        <div className="card-title">
          {user.name}
        </div>
        <div className="card-type">
          {user.type[0]}
        </div>
      </div>
      <div className="card-image-container">
        <img className="card-image" src={user.image} />
      </div>
      <div className="card-occupation">
        {user.occupation}
      </div>
      <div className="card-description">
        {user.description.substring(0, 100)}
      </div>
      <UserLinks links={user.links} />
      <UserSkills skills={user.skills} />
    </div>
  );
};


const UserLinks = ({ links }) => {
  let linkComponents = [];
  const iconReference = {
    "linkedin": <FaLinkedin />,
    "github": <FaGithub />,
    "hackerrank": <FaHackerrank />,
    "instagram": <FaInstagram />,
    "facebook": <FaFacebook />,
    "discord": <FaDiscord />,
    "pokemon": <CgPokemon />
  }

  for (let i = 0; i < 3; i++) {
    const linkName = Object.keys(links)[i]
    let linkLogo = <FaLink />
    if (Object.keys(iconReference).includes(linkName.toLowerCase())) {
      linkLogo = iconReference[linkName.toLowerCase()];
    }
    linkComponents[i] = (
      <a
        className="card-link"
        href={links[linkName]}
        key={`link${i}`}
      >
        {linkLogo}
        {linkName}
      </a>
    )
  }

  return (
    <div className="card-link-container">
      {linkComponents}
    </div>
  )
}


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

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.string,
    occupation: PropTypes.string,
    description: PropTypes.string,
    links: PropTypes.object,
    skills: PropTypes.arrayOf(PropTypes.string),
  }),
};

UserLinks.propTypes = {
  links: PropTypes.object,
}

UserSkills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string)
}

export default UserCard;
