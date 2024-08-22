import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "./PersonalPage.css";
import ProjectSection from "./ProjectSection/ProjectSection";
import { getTypeStyle } from "../../utils/mappers";
import UserCardFront from "../../components/UserCard/UserCardFront/UserCardFront";
import UserCardBack from "../../components/UserCard/UserCardBack/UserCardBack";
import Navigation from "../../components/Navigation/Navigation";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const PersonalPage = ({ users }) => {
  let { userId } = useParams();
  const user = users.find((user) => user.name.toLowerCase() === userId);

  if (!user) {
    return <NotFoundPage />;
  }

  const color = getTypeStyle(user.type);

  return (
    <div
      className="personal-page-container"
      style={{ "--type-color-transparent": color["color"] + "88" }}
    >
      <Navigation />
      <button className="three-button">
        <Link to={`/${userId}/3d`} > Go 3d</Link>
      </button>

      <div className="user-info-container">
        <UserCardFront user={user} />
        <UserCardBack user={user} />
      </div>
      <ProjectSection links={user.links} />
    </div>
  );
};

PersonalPage.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PersonalPage;
