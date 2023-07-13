import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Cards from "../CardsPage/Cards.jsx";
import axios from "axios";

const SearchResult = () => {
  const { nome } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [found, setFound] = useState(false);
  const [redirect, setRedirect] = useState(false); // Aggiunto stato per reindirizzamento

  useEffect(() => {
    const fetchHero = async () => {
      try {
        setTimeout(async () => {
          const response = await axios.post(
            `http://localhost:3000/search/${encodeURIComponent(nome)}`
          );
          const data = response.data;
          setSearchResults(data);
          setFound(true);
        }, 3000);
      } catch (error) {
        console.error("Error searching for hero:", error);
        setFound(false);
        if (!found) {
          setRedirect(true); // Imposta lo stato di reindirizzamento
        }
      }
    };

    fetchHero();
  }, [nome]);

  // Controllo per reindirizzamento
  // if (found) {
  //   window.location.href = "/notfound";
  //   return null; // Evita il rendering del componente quando si verifica il reindirizzamento
  // }

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
