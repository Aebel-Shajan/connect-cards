const Search = ({ setSearchValue }) => {
  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          placeholder="Search Card..."
          onChange={handleInput}
        />
      </form>
    </div>
  );
};

export default Search;
