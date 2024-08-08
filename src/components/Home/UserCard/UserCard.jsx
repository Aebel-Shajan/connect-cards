import PropTypes from "prop-types";
import "./UserCard.css";
import UserSkills from "./UserSkills/UserSkills";
import {
  FaBrain,
  FaCloud,
  FaDatabase,
  FaInfinity,
  FaReact,
  FaRegDotCircle,
  FaShieldAlt,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const UserCard = ({ user, onClick }) => {
  const typeReference = {
    data: {
      icon: <FaDatabase />,
      color: "#ffff80", // light yellow
    },
    backend: {
      icon: <FaGear />,
      color: "#FF8C00", // dark orange
    },
    frontend: {
      icon: <FaReact />,
      color: "#61DAFB", // react blue
    },
    devops: {
      icon: <FaInfinity />,
      color: "#FF4500", // orange-red
    },
    cybersecurity: {
      icon: <FaShieldAlt />,
      color: "#32CD32", // lime green
    },
    cloud: {
      icon: <FaCloud />,
      color: "#1E90FF", // dodger blue
    },
    ai: {
      icon: <FaBrain />,
      color: "#FF1493", // deep pink
    },
    normal: {
      icon: <FaRegDotCircle />,
      color: "#d3d3d3", // light grey
    },
  };

  let typeStyle = typeReference["normal"];
  if (Object.keys(typeReference).includes(user.type.toLowerCase())) {
    typeStyle = typeReference[user.type.toLowerCase()];
  }

  return (
    <div
      className="card-container"
      style={{
        "--type-color-transparent": typeStyle["color"] + "88",
      }}
      onClick={onClick}
    >
      <div className="card-header-container">
        <div className="card-title">{user.name}</div>
        <div className="card-type">{typeStyle["icon"]}</div>
      </div>
      <div className="card-image-container">
        <img className="card-image" src={user.image} />
      </div>
      <div className="card-occupation">{user.occupation}</div>
      <div className="card-description">
        {user.description.substring(0, 100)}
      </div>
      <UserSkills skills={user.skills} />
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
    skills: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default UserCard;
