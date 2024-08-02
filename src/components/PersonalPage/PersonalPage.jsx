import { useParams } from "react-router-dom";
import "./PersonalPage.css";

const PersonalPage = () => {
  let { userId } = useParams();
  const links = [
    "https://www.linkedin.com/feed/",
    "https://github.com/",
    "https://www.youtube.com/",
  ];

  const handleClick = (url) => {
    window.location.href = url;
  };

  const buttons = links.map((link) => (
    <button onClick={() => handleClick(link)}>Link</button>
  ));

  return (
    <div>
      <h1>{userId}&apos;s Personal Page</h1>
      <img
        className="profile-pic"
        src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png"
      />
      <div>{buttons}</div>
    </div>
  );
};

export default PersonalPage;
