import PropTypes from "prop-types";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./PersonalPage.css";
import {} from "module";
import UserLinks from "./Links/UserLinks";
import MyProjects from "./MyProjects";
import getTypeStyle from "../../utils/TypeMapping";

import UserCard from "../Home/UserCard/UserCard";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Navigation from "../Navigation";
import { FaHome } from "react-icons/fa";


const PersonalPage = ({ users }) => {
  let { userId } = useParams();
  const user = users.find((user) => user.name.toLowerCase() === userId);

  if (!user) {
    return <NotFoundPage />;
  }


  const userName = user.name[0].toUpperCase() + user.name.substring(1);
  const color  = getTypeStyle(user.type);
  const links = user?.links;

  return (
    <div 
      className="personal-page-container" 
      style={{"--type-color-transparent": color["color"] + "88"}}>
      <div className="nav-container">
        <Navigation />
      </div>
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
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

export default PersonalPage;
