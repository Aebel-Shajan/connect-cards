import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import "./PersonalPage.css";
import {} from "module";
import UserCard from "../Home/UserCard/UserCard";
import { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import { IoMdDownload } from "react-icons/io";
import { FaHome } from "react-icons/fa";

const PersonalPage = ({ users }) => {
  const navigate = useNavigate()
  let { userId } = useParams();
  const user = users.find((user) => user.name === userId);

  const ref = useRef(null)

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = `${user.name}-connect-card.png`
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
        alert("Failed to download. This is most likely caused by using external link as user card image.")
      })
  }, [ref])

  return (
    <div className="personal-page-container">
      <div className="background"></div>
      <div ref={ref}>
      {/* DOM nodes you want to convert to PNG */}
        <UserCard user={user} />
      </div>
      <div className="button-container">
        <button onClick={() => navigate(`/`)}>
        <FaHome /> See other cards
        </button>
        <button onClick={onButtonClick}>
          <IoMdDownload /> Download card
        </button>
      </div>
    </div>
  );
};

PersonalPage.propTypes = {
  users: PropTypes.array
};

export default PersonalPage;
