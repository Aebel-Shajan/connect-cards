import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Navigation.css";
import ConnectCardsLogo from "./ConnectCardsLogo/ConnectCardsLogo";
import { FaGithub } from "react-icons/fa";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav id="navbar">
      <div id="brand-container" onClick={() => navigate("/")}>
        <ConnectCardsLogo />
      </div>
      <div id="nav-links">
        <a
          className="nav-link"
          href="https://www.github.com/aebel-shajan/connect-cards"
        >
          <FaGithub />
        </a>
        <Link className="nav-link" to="/about-us">
          About
        </Link>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navigation;
