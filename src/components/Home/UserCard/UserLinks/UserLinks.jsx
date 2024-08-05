import PropTypes from "prop-types";
import {
  FaHackerrank,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaDiscord,
  FaLink,
} from "react-icons/fa";
import { CgPokemon } from "react-icons/cg";
import "./UserLinks.css";

const UserLinks = ({ links }) => {
  let linkComponents = [];
  const iconReference = {
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
    hackerrank: <FaHackerrank />,
    instagram: <FaInstagram />,
    facebook: <FaFacebook />,
    discord: <FaDiscord />,
    pokemon: <CgPokemon />,
  };

  for (let i = 0; i < 3; i++) {
    const linkName = Object.keys(links)[i];
    let linkLogo = <FaLink />;
    if (Object.keys(iconReference).includes(linkName.toLowerCase())) {
      linkLogo = iconReference[linkName.toLowerCase()];
    }
    linkComponents[i] = (
      <a className="card-link" href={links[linkName]} key={`link${i}`}>
        {linkLogo}
        {linkName}
      </a>
    );
  }

  return <div className="card-link-container">{linkComponents}</div>;
};

UserLinks.propTypes = {
  links: PropTypes.object,
};

export default UserLinks;
