import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Navigation.css";
import ConnectCardsLogo from "./ConnectCardsLogo/ConnectCardsLogo";
import { FaGithub, FaPlusCircle } from "react-icons/fa";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav id="navbar">
      <div id="brand-container" onClick={() => navigate("/")}>
        <ConnectCardsLogo />
      </div>
      <div id="nav-links">
        <Link className="nav-link" to="/add-card">
          <FaPlusCircle />
          &nbsp;&nbsp;Add Card
        </Link>
        <Link className="nav-link" to="/about-us">
          About
        </Link>
        <a
          className="nav-link"
          href="https://www.github.com/aebel-shajan/connect-cards"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navigation;
