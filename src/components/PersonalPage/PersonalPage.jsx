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

  const links = user?.links;
  console.log(user);
  return (
    <div className="container">
      <header>
        <img className="profile-pic" src={profileIcon} />
        <h1 id="title">{userId}&apos;s Personal Page</h1>
      </header>
      <section>
        <UserLinks links={links} />
      </section>
      <article>
        <UserCard user={user} />
      </article>
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
