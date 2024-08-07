import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import "./PersonalPage.css";
import {} from "module";
import profileIcon from "../../assets/profile-icon.png";
import UserLinks from "./Links/UserLinks";


const PersonalPage = ({ users }) => {
  let { userId } = useParams();

  // const user = users.find(user => user.name === userId);
  // console.log(user)
  // const links = user.links;

  // const handleClick = (url) => {
  //   window.open(url);
  // };

  // const buttons = links.map((link) => (
  //   <button className="buttons" onClick={() => handleClick(link)}>
  //     Link
  //   </button>
  // ));

  return (
     <main className="body">
      <div className="header">
        <img className="profile-pic" src={profileIcon} />
        <h1 id="title">{userId}&apos;s Personal Page</h1>
      </div>
      {/* <div>{buttons}</div> */}
      <div>
        {/* <UserLinks links={links} /> */}
      </div>
    </main>
  );
};


PersonalPage.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,  // Ensure id is included and required
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      type: PropTypes.string,
      occupation: PropTypes.string,
      description: PropTypes.string,
      skills: PropTypes.arrayOf(PropTypes.string),
      links: PropTypes.arrayOf(PropTypes.string).isRequired  // Ensure links is included and required
    })
  ).isRequired,
};



export default PersonalPage;
