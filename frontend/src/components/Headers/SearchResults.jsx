import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Cards from "../CardsPage/Cards.jsx"
import axios from "axios";

const SearchResult = () => {
  const { nome } = useParams()
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await axios.post(
          `http://localhost:3000/search/${encodeURIComponent(nome)}`
        );
        const data = response.data; // Estrai i dati dalla risposta
        setSearchResults(data);
      } catch (error) {
        console.error("Error searching for hero:", error);
        setSearchResults([]);
      }
    };

    fetchHero();
  }, [nome]); // Aggiungi nome come dipendenza per richiamare la ricerca ogni volta che il parametro nome cambia

  return (
    <div className="flex justify-center items-center">
    {Object.values(searchResults).map((hero, i) => (
        <Link key={i} to={`/eroi/${hero.id}`}>
          <Cards
            size="small"
            sizeContainer="small"
            url={hero.image.url}
            name={hero.name}
          />
        </Link>
      ))}
    </div>
  );
};

export default SearchResult;
