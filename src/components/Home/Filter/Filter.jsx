import "./Filter.css";

const Filter = ({ filterOptions, setFilterValue }) => {
  const filters = filterOptions.map((filterOption) => {
    return (
      <option key={filterOption} value={filterOption}>
        {" "}
        {filterOption}{" "}
      </option>
    );
  });

    return (  
        <>
        <section className="skillsFilter-container">
            <select className="filter-selection" 
                    defaultValue="select-skill" 
                    onChange={(event) => setFilterValue(event.target.value)} 
            >
                <option value={""}> All </option>
                {filters}
            </select>
        </section>
        </>
    );
}

export default Filter;

/* 
Jest
Git
*/
