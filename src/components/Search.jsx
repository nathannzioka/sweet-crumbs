function Search({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search pastries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;