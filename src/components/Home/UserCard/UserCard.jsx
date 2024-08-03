import PropTypes from "prop-types";
import "./UserCard.css";

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

      </div>
      <div className="card-links">

      </div>
      <div className="card-skills">

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
    links: PropTypes.arrayOf(PropTypes.string),
    skills: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default UserCard;
