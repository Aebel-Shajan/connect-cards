import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import "./PersonalPage.css";
import {} from "module";
import UserCard from "../Home/UserCard/UserCard";

const PersonalPage = ({ users }) => {
  let { userId } = useParams();
  const user = users.find((user) => user.name === userId);
  console.log(users);

  return (
    <div className="personal-page-container">
      <div className="background"></div>
      <UserCard user={user} />
    </div>
  );
};

PersonalPage.propTypes = {
  users: PropTypes.array
};

export default PersonalPage;
