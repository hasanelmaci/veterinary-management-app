function SearchBar({ search }) {
  return (
    <div className="search-container">
      <input className="searchbar" placeholder="Search" onChange={(e) => search(e)} />
    </div>
  );
}

export default SearchBar;
