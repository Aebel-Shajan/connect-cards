import PropTypes from "prop-types";
import "./UserLinks.css";
import getIconComponent from "../../../utils/IconMapping";

const UserLinks = ({ links }) => {
  let linkComponents = [];

  const handleClick = (url) => {
    window.open(url);
  };

  for (let i = 0; i < 3; i++) {
    const linkName = Object.keys(links)[i];
    linkComponents[i] = (
      <button
        className="link"
        key={`link${i}`}
        onClick={() => handleClick(links[linkName])}
      >
        {getIconComponent(linkName)}
        {linkName}
      </button>
    );
  }

  return (
    <div className="link-container">
      {linkComponents}
    </div>
  )
};

UserLinks.propTypes = {
  links: PropTypes.object,
};

export default UserLinks;
