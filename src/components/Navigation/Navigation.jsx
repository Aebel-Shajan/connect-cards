import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <ul id="navbar">
            <li>
              <Link className="navButton" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="navButton" to="/about-us">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
