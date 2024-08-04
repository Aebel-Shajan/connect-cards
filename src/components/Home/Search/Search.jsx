const Search = ( { setSearchValue } ) => {


  return 
    <div>
      <form>
        <intput className="search" type="text" placeholder="Search Card..." onChange={(event) => {setSearchValue(event.target.value)}} />
      </form>
    </div>;
};

export default Search;
