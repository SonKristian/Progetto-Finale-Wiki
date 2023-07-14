import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../CardsPage/Cards.jsx";
import Loading from "../Loading/Loading";
const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const storedToken = sessionStorage.getItem("jwtToken");
  const storedUser = sessionStorage.getItem("user");

  useEffect(() => {
    const getFavorites = async () => {
      try {
        setLoading(true);
        setTimeout(async () => {
        const response = await axios.get(
          `http://localhost:3000/favorite/${storedUser}`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );
        const data = response.data;
        setFavorites(data);
        console.log("get all favorites", response);
        console.log(data);
        setLoading(false);
        }, 3000);
      } catch (error) {
        console.error(error);
        setFavorites([]);
        window.location.href = "/notfound";
      }
    };
    getFavorites();
  }, []);

  return (
    <div className="flex items-center justify-center flex-wrap">
      {/* {console.log("fav", favorites)} */}
      <Loading loading={loading} url={"http://localhost:5173/src/assets/super.gif"} />
      {favorites.map((hero, i) => (
        <Link key={i} to={`/eroi/${hero.id}`}>
          {console.log("map", hero)}
          <Cards
            size="small"
            sizeContainer="small"
            url={hero.image}
            name={hero.name}
          />
        </Link>
      ))}
    </div>
  );
};

export default Favorites;
