import PropTypes from "prop-types";
import "./TextContainer.css";

const TextContainer = ({ children, className }) => {
  return <div className={`text-container ${className}`}>{children}</div>;
};

TextContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default TextContainer;
