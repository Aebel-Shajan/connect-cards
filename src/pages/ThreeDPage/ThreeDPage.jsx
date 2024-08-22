import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import NotFoundPage from "../NotFoundPage/NotFoundPage"
import Navigation from "../../components/Navigation/Navigation"
import { Canvas } from "@react-three/fiber";
import "./ThreeDPage.css"
import RotatingCard from "./RotatingCard/RotatingCard";
import { OrbitControls } from "@react-three/drei";

const ThreeDPage = ({ users }) => {
  let { userId } = useParams();
  const user = users.find((user) => user.name.toLowerCase() === userId);

  if (!user) {
    return <NotFoundPage />;
  }
  return (
    <div className="three-page-container">
      <Navigation />
      <div className="canvas-container">
        <Canvas  camera={{ position: [0, 0, 15] }}>
          <RotatingCard user={user}/>
          <OrbitControls enableRotate={true} />
        </Canvas>
      </div>

    </div>
  );
}

ThreeDPage.propTypes = {
  users: PropTypes.array.isRequired,
};

export default ThreeDPage;