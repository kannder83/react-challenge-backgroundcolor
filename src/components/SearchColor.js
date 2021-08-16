const SearchColor = ({ colorBg, setColorBg }) => {
  return (
    <form className="box-search" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="search-color"
        value={colorBg}
        onChange={(e) => setColorBg(e.target.value)}
        placeholder="Type a color name..."
      />
    </form>
  );
};

export default SearchColor;
