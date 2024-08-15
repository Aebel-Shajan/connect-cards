import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  
  return (
    <>
      <header>
      <nav>
        <ul id="navbar">
          <li>
            <Link id="homeButton" to="/">Home</Link>
          </li>
          <li>
            <Link id="aboutUsButton" to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
