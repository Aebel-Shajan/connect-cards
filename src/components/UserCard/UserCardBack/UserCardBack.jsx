import PropTypes from "prop-types";
import "./UserCardBack.css";
import {getIconComponent} from "../../../utils/mappers";

const UserCardBack = ({ user }) => {
  let linkComponents = [];
  const linkNames = Object.keys(user.links)

  const handleClick = (url) => {
    window.open(url);
  };

  for (let i = 0; i < linkNames.length; i++) {
    const linkName = linkNames[i];
    linkComponents[i] = (
      <button
        className="link"
        key={`link${i}`}
        onClick={() => handleClick(user.links[linkName])}
      >
        {getIconComponent(linkName)}
        {linkName}
      </button>
    );
  }

  return <div className="link-container">{linkComponents}</div>;
};

UserCardBack.propTypes = {
  user: PropTypes.shape({
    links: PropTypes.object.isRequired
  }).isRequired,
};

export default UserCardBack;
