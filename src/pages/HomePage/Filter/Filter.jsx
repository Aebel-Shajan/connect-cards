import PropTypes from "prop-types";
import "./Filter.css";

const Filter = ({ filterOptions, setFilterValue, defaultValue }) => {
  const filters = filterOptions.map((filterOption) => {
    return (
      <option key={filterOption} value={filterOption}>
        {" "}
        {filterOption}{" "}
      </option>
    );
  });

  return (
    <select
      className="filter-selection"
      defaultValue="select-skill"
      onChange={(event) => setFilterValue(event.target.value)}
    >
      <option value={""}> {defaultValue} </option>
      {filters}
    </select>
  );
};

Filter.propTypes = {
  filterOptions: PropTypes.array.isRequired,
  setFilterValue: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired
};

export default Filter;
