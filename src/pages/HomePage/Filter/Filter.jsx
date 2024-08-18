import PropTypes from "prop-types";
import "./Filter.css";

const Filter = ({
  filterOptions,
  filterOptionsAmount,
  setFilterValue,
  defaultValue,
}) => {
  const filters = filterOptions.map((filterOption, index) => {
    let amountPrefix = <></>;
    if (filterOptionsAmount) {
      amountPrefix = filterOptionsAmount[index].toString() + "x  ";
    }
    return (
      <option key={filterOption} value={filterOption}>
        {amountPrefix}
        {filterOption}
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
  filterOptionsAmount: PropTypes.array,
  setFilterValue: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default Filter;
