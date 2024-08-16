import {
  FaBrain,
  FaCloud,
  FaDatabase,
  FaInfinity,
  FaReact,
  FaRegDotCircle,
  FaShieldAlt,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const TypeMapping = {
  data: {
    icon: <FaDatabase />,
    color: "#ffff80", // light yellow
  },
  backend: {
    icon: <FaGear />,
    color: "#FF8C00", // dark orange
  },
  frontend: {
    icon: <FaReact />,
    color: "#61DAFB", // react blue
  },
  devops: {
    icon: <FaInfinity />,
    color: "#FF4500", // orange-red
  },
  cybersecurity: {
    icon: <FaShieldAlt />,
    color: "#32CD32", // lime green
  },
  cloud: {
    icon: <FaCloud />,
    color: "#1E90FF", // dodger blue
  },
  ai: {
    icon: <FaBrain />,
    color: "#FF1493", // deep pink
  },
  normal: {
    icon: <FaRegDotCircle />,
    color: "#d3d3d3", // light grey
  },
};

function getTypeStyle(typeName) {
  const typeStyle = TypeMapping[typeName.toLowerCase().replaceAll(" ", "")];
  if (typeStyle) {
    return typeStyle;
  }
  return TypeMapping["normal"];
}

export default getTypeStyle;
