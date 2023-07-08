
const SearchResult = ({ searchResults }) => {
    return (
      <div>
        {searchResults.map((hero) => (
          <div key={hero.id}>
            <p>{hero.name}</p>
            <img src={hero.image.url} alt={hero.name} />
          </div>
        ))}
      </div>
    );
  };

export default SearchResult;