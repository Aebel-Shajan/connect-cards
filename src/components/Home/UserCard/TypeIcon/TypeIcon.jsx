import "./TypeIcon.css";
import PropTypes from "prop-types";

const TypeIcon = ({ typeStyle }) => {
  return (
    <div
      className="type-icon-container"
      style={{
        backgroundColor: typeStyle["color"],
      }}
    >
      {typeStyle["icon"]}
    </div>
  );
};

TypeIcon.propTypes = {
  typeStyle: PropTypes.shape({
    icon: PropTypes.element,
    color: PropTypes.string,
  }),
};

export default TypeIcon;
