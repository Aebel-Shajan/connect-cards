import PropTypes from "prop-types";

const UserCard = ({ user }) => {

  return (
    <div className="card-border">
      <div className="card-title">{user.name}</div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
};

export default UserCard;
