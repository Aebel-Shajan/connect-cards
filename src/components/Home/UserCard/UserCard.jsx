import PropTypes from "prop-types";
import "./UserCard.css";
import UserSkills from "./UserSkills/UserSkills";
import UserLinks from "./UserLinks/UserLinks";

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
