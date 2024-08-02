import { useNavigate, Outlet } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="navbar">
        <button onClick={() => navigate("/")}>Home</button>
      </section>
      <Outlet />
    </>
  );
};

export default Navigation;
