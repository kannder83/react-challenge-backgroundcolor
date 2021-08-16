const SearchColor = ({ setColorBg }) => {
  return (
    <form className="box-search" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="search-color"
        onChange={(e) => setColorBg(e.target.value)}
        placeholder="Write a color name..."
      />
    </form>
  );
};

export default SearchColor;
