import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import "./PersonalPage.css";
import {} from "module";
import profileIcon from "../../assets/profile-icon.png";
import UserLinks from "./Links/UserLinks";

const PersonalPage = ({ users }) => {
  let { userId } = useParams();
  const user = users.find((user) => user.name === userId);
  console.log(users);
  const links = user?.links;

  return (
    <div className="container">
      <header>
        <img className="profile-pic" src={profileIcon} />
        <h1 id="title">{userId}&apos;s Personal Page</h1>
      </header>
      <section>
        <UserLinks links={links} />
      </section>
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
