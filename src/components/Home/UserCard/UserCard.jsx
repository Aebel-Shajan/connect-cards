import PropTypes from "prop-types";
import "./UserCard.css";
import UserSkills from "./UserSkills/UserSkills";
import TypeIcon from "./TypeIcon/TypeIcon";
import getTypeStyle from "../../../utils/TypeMapping";

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

TypesComponent.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
};

const MoveComponent = ({ move }) => {
  return (
    <div className="move-container">
      <TypesComponent types={move["type"]} />
      <div className="move-name">{move["name"]}</div>
    </div>
  );
};

MoveComponent.propTypes = {
  move: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.arrayOf(PropTypes.string),
  }),
};

const UserCard = ({ user, onClick }) => {
  const cardTypeStyle = getTypeStyle(user.type);
  return (
    <div
      className="card-container"
      style={{
        "--type-color-transparent": cardTypeStyle["color"] + "88",
      }}   >
      <div className="card-header-container">
        <div className="card-title">{user.name}</div>
        <TypeIcon typeStyle={cardTypeStyle} />
      </div>
      <div 
        className="card-image-container"
        onClick={onClick}>
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
  onClick: PropTypes.func,
};

export default UserCard;
