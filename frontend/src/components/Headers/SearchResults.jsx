import { useState, useEffect } from "react";
import axios from "axios";

const SearchResult = ({ searchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await axios.post(
          `http://localhost:3000/search/${encodeURIComponent(searchQuery)}`
        );
        const data = response.data
        setSearchResults(data);
      } catch (error) {
        console.error("Error searching for hero:", error);
        setSearchResults([]);
      }
    };

    fetchHero();
  }, [searchQuery]);

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
