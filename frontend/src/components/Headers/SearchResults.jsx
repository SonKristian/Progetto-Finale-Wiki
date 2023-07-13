import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Cards from "../CardsPage/Cards.jsx";
import axios from "axios";
import Loading from "../Loading/Loading.jsx";

const SearchResult = () => {
  const { nome } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [found, setFound] = useState(false)

  useEffect(() => {
    const fetchHero = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          `http://localhost:3000/search/${encodeURIComponent(nome)}`
        );
        const data = response.data; // Estrai i dati dalla risposta
        setSearchResults(data);
        setLoading(false);
        setFound(true)
      } catch (error) {
        console.error("Error searching for hero:", error);
        setLoading(false);
        setFound(false)
        if(!found) window.location.href = "/notfound" 
      }
    };

    fetchHero();
  }, [nome]); // Aggiungi nome come dipendenza per richiamare la ricerca ogni volta che il parametro nome cambia
 

  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <Loading loading={loading} />
      ) : (
        Object.values(searchResults).map((hero, i) => (
          <Link key={i} to={`/eroi/${hero.id}`}>
            <Cards
              size="small"
              sizeContainer="small"
              url={hero.image.url}
              name={hero.name}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default SearchResult;
2