import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import "./PersonalPage.css";
import {} from "module";
import UserLinks from "./Links/UserLinks";
import MyProjects from "./MyProjects";
import {getTypeStyle} from "../../utils/mappers";
import UserCard from "../Home/UserCard/UserCard";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Navigation from "../Navigation/Navigation";

const PersonalPage = ({ users }) => {
  let { userId } = useParams();
  const user = users.find((user) => user.name.toLowerCase() === userId);

  if (!user) {
    return <NotFoundPage />;
  }

  const color = getTypeStyle(user.type);
  const links = user.links;

  return (
    <div
      className="personal-page-container"
      style={{ "--type-color-transparent": color["color"] + "88" }}
    >
      <div className="nav-container">
        <Navigation />
      </div>
      <div className="user-info-container">
        <UserCard user={user} />
        <UserLinks links={links} />
      </div>
      <MyProjects links={links} />
    </div>
  );
};

PersonalPage.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PersonalPage;
