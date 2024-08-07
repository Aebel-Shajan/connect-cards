import { useParams } from "react-router-dom";
import "./PersonalPage.css";
import {} from "module";
import profileIcon from "../../assets/profile-icon.png";

const PersonalPage = () => {
  let { userId } = useParams();
  const links = [
    "https://www.linkedin.com/feed/",
    "https://github.com/",
    "https://www.youtube.com/",
  ];

  const handleClick = (url) => {
    window.open(url);
  };

  const buttons = links.map((link) => (
    <button className="buttons" onClick={() => handleClick(link)}>
      Link
    </button>
  ));

  return (
    <body className="body">
      <div className="header">
        <img className="profile-pic" src={profileIcon} />
        <h1 id="title">{userId}&apos;s Personal Page</h1>
      </div>
      <div>{buttons}</div>
    </body>
  );
};

export default PersonalPage;
