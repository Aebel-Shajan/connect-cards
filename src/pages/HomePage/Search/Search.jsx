import PropTypes from "prop-types";
import "./Search.css";

const Search = ({ setSearchValue }) => {
  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search"
        type="text"
        placeholder="Search Card..."
        onChange={handleInput}
      />
    </form>
  );
};

Search.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
};

export default Search;
