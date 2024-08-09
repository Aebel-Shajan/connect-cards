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
import TypeIcon from "./TypeIcon/TypeIcon";

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

function getTypeStyle(typeName) {
  if (Object.keys(typeReference).includes(typeName.toLowerCase())) {
    return typeReference[typeName.toLowerCase()];
  }
  return typeReference["normal"];
}

const TypesComponent = ({ types }) => {
  return (
    <div className="move-type-container">
      {types.map((type, index) => {
        return (
          <TypeIcon key={`move type${index}`} typeStyle={getTypeStyle(type)} />
        );
      })}
    </div>
  );
};

const MoveComponent = ({ move }) => {
  return (
    <div className="move-container">
      <TypesComponent types={move["type"]} />
      <div className="move-name">{move["name"]}</div>
    </div>
  );
};

const UserCard = ({ user, onClick }) => {
  const cardTypeStyle = getTypeStyle(user.type);
  return (
    <div
      className="card-container"
      style={{
        "--type-color-transparent": cardTypeStyle["color"] + "88",
      }}
      onClick={onClick}
    >
      <div className="card-header-container">
        <div className="card-title">{user.name}</div>
        <TypeIcon typeStyle={cardTypeStyle} />
      </div>
      <div className="card-image-container">
        <img className="card-image" src={user.image} />
      </div>
      <div className="card-occupation-container">
        <div className="card-occupation">{user.occupation}</div>
      </div>
      <div className="card-description-container">
        {user.description.substring(0, 100)}
      </div>
      <div className="card-moves-container">
        {user.moves.map((move, index) => {
          return <MoveComponent key={`index${index}`} move={move} />;
        })}
      </div>
      <div className="card-skills-container">
        <UserSkills skills={user.skills} />
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
    skills: PropTypes.arrayOf(PropTypes.string),
    moves: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default UserCard;
