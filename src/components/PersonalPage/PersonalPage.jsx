import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import "./PersonalPage.css";
import {} from "module";
import profileIcon from "../../assets/profile-icon.png";
import UserLinks from "./Links/UserLinks";
import { useEffect } from "react";


const PersonalPage = ({ users }) => {
  let { userId } = useParams();
  const user = users.find(user => user.name === userId);
 
  const links = user.links;
  console.log(links)

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
        <UserLinks links={links} />
      </div>
    </main>
  );
};


PersonalPage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.object).isRequired
  }),
};



export default PersonalPage;
