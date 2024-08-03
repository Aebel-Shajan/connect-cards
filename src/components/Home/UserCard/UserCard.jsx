import PropTypes from "prop-types";
import { FaHackerrank, FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaDiscord, FaLink  } from "react-icons/fa";
import { CgPokemon } from "react-icons/cg";
import "./UserCard.css";

const UserCard = ({ user }) => {

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
  for ( let i = 0; i< 3; i++) {
    const linkName = Object.keys(user.links)[i]
    let linkLogo = <FaLink />
    if (Object.keys(iconReference).includes(linkName.toLowerCase())) {
      linkLogo = iconReference[linkName.toLowerCase()];
    }
    linkComponents[i] = (
      <a 
        className="card-link"
        href={user.links[linkName]}
        key={`link${i}`}
        >
          {linkLogo}
          {linkName}
      </a>
    )
  }


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
      <div className="card-link-container">
        {linkComponents}
      </div>
      <div className="card-skill-container">
        {user.skills.slice(0, 3).map((skill, index) => {
          return <div className="card-skill" key={`user ${user.name} skill${index}`}>{skill}</div>
        })}
      </div>
    </div>
  );
};

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

export default UserCard;
