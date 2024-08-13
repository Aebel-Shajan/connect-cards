import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import "./PersonalPage.css";
import {} from "module";
import profileIcon from "../../assets/profile-icon.png";
import UserLinks from "./Links/UserLinks";
import MyProjects from "./MyProjects";

import UserCard from "../Home/UserCard/UserCard";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const PersonalPage = ({ users }) => {
  let { userId } = useParams();
  const user = users.find((user) => user.name.toLowerCase() === userId);

  if (!user) {
    return <NotFoundPage />;
  }

  const handleButton = () => {
    window.history.back();
  };

  const userName = user.name[0].toUpperCase() + user.name.substring(1);
  const links = user?.links;
  console.log(user);
  return (
    <div className="container">
      <header>
        <div className="button-container">
          <button id="back-button" onClick={handleButton}>
            Back
          </button>
        </div>
        <h1 id="title">{userName}&apos;s Personal Page</h1>
      </header>
      <div className="user-info-container">
        <UserCard user={user} />
        <UserLinks links={links} />
      </div>
      <MyProjects links={links} />
    </div>
  );
};

PersonalPage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

export default PersonalPage;
