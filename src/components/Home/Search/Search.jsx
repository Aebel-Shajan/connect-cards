const Search = ( { setSearchValue } ) => {


  return (
    <div>
      <form>
        <input className="search"
                type="text" 
                placeholder="Search Card..." 
                onChange={(event) => {setSearchValue(event.target.value)}} 
        />
      </form>
    </div>
  );
};

export default Search;
