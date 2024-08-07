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
  console.log(links);
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

  const handleClick = (url) => {
    window.open(url);
  };

  for (let i = 0; i < 3; i++) {
    const linkName = Object.keys(links)[i];
    let linkLogo = <FaLink />;
    if (Object.keys(iconReference).includes(linkName.toLowerCase())) {
      linkLogo = iconReference[linkName.toLowerCase()];
    }
    linkComponents[i] = (
      <button
        className="buttons"
        key={`link${i}`}
        onClick={() => handleClick(Object.values(links)[i])}
      >
        {linkLogo}
        {linkName}
      </button>
    );
  }

  return <div className="card-link-container">{linkComponents}</div>;
};

UserLinks.propTypes = {
  links: PropTypes.array,
};

export default UserLinks;
