import Cards from "./Cards.jsx";
import "./css/cardspage.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CardsPage = ({ isLoggedIn }) => {
  const [hero, setHero] = useState({});
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const storedToken = sessionStorage.getItem("jwtToken");
  const storedUser = sessionStorage.getItem("user");
  // Funzione per salvare l'ID dell'eroe nei preferiti dell'utente

  const addFavorites = async () => {
    console.log(id);
    try {
      const response = await axios.post(
        `http://localhost:3000/favorite/${storedUser}`,
        { id: id },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      console.log("Added to favorites", response);
      setFavorite(true); // Aggiorna il valore di favorite dopo l'aggiunta ai preferiti
    } catch (error) {
      console.error(error);
      setHero({});
    }
  };
  
  const removeFavorites = async () => {
    console.log(id);
    try {
      const response = await axios.delete(
        `http://localhost:3000/favorite/${storedUser}`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
            id: id,
          },
        }
      );
      console.log("Deleted from favorites", response);
      setFavorite(false); // Aggiorna il valore di favorite dopo la rimozione dai preferiti
    } catch (error) {
      console.error(error);
      setHero({});
    }
  };
  
  
  useEffect(() => {
    const getFavorites = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/favorite/${storedUser}`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
              id: id,
            },
          }
        );
        const data = response.data;
        console.log("data", data);
        const fav = data.filter((e) => e.id == id);
        console.log("fav", fav);
        if(fav.length!=0){
          setFavorite(true);
        }else{
        setFavorite(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getFavorites();
  }, [favorite]);
  

  useEffect(() => {
    async function getHero() {
      try {
        const response = await fetch(`http://localhost:3000/eroi/${id}`);
        const data = await response.json();
        setHero(data);
      } catch (error) {
        console.error("Error fetching hero:", error);
        setHero({});
      }
    }

    getHero();
  }, [id]);

  const toggleSection = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  return (
    <div className="flex justify-around mt-5 mb-[5rem] bg-slate-400">
      {/* left */}
      <div>
        <div className="flex justify-center items-center ml-[4rem] text-[30px]">
          {!isLoggedIn ? (
            <h2 className="font-extrabold text-3xl">{hero.name}</h2>
          ) : (
            <div className="flex items-center justify-around gap-[6.5rem] mt-2">
              <h2 className="font-extrabold text-3xl">{hero.name}</h2>
              <p
                className={`fav-icon ${favorite ? "fav-on" : "fav-off"}`}
                onClick={!favorite ? addFavorites : removeFavorites}
              >
                <FavoriteIcon />
              </p>
            </div>
          )}
        </div>
        {hero.image && <Cards size="big" url={hero.image.url} />}
      </div>
      {/* right */}
      <div className="mt-2 mr-[5rem]">
        <div className="flex justify-around gap-[4.2rem] text-[20px]">
          <div>
            <button
              className={`section-btn ${
                activeSection === "powerstat" ? "active" : ""
              }`}
              onClick={() => toggleSection("powerstat")}
            >
              powerstats
            </button>
            {activeSection === "powerstat" && (
              <div className="section-content">
                <div>
                  <h2>Intelligence</h2>
                  <meter
                    id="intelligence"
                    className="progressbar"
                    value={hero.powerstats && hero.powerstats.intelligence}
                    max="100"
                  ></meter>
                </div>
                <div>
                  <h2>Strength</h2>
                  <meter
                    id="strength"
                    className="progressbar"
                    value={hero.powerstats && hero.powerstats.strength}
                    max="100"
                  ></meter>
                </div>
                <div>
                  <h2>Speed</h2>
                  <meter
                    id="speed"
                    className="progressbar"
                    value={hero.powerstats && hero.powerstats.speed}
                    max="100"
                  ></meter>
                </div>
                <div>
                  <h2>Durability</h2>
                  <meter
                    id="durability"
                    className="progressbar"
                    value={hero.powerstats && hero.powerstats.durability}
                    max="100"
                  ></meter>
                </div>
                <div>
                  <h2>Power</h2>
                  <meter
                    id="power"
                    className="progressbar"
                    value={hero.powerstats && hero.powerstats.power}
                    max="100"
                  ></meter>
                </div>
                <div>
                  <h2>Combat</h2>
                  <meter
                    id="combat"
                    className="progressbar"
                    value={hero.powerstats && hero.powerstats.combat}
                    max="100"
                  ></meter>
                </div>
              </div>
            )}
          </div>

          <div>
            <button
              className={`section-btn ${
                activeSection === "biography" ? "active" : ""
              }`}
              onClick={() => toggleSection("biography")}
            >
              biography
            </button>
            {activeSection === "biography" && (
              <div className="section-content">
                <ul className="flex flex-col">
                  <li>
                    Full Name: {hero.biography && hero.biography["full-name"]}
                  </li>
                  <li>
                    Alter Egos: {hero.biography && hero.biography["alter-egos"]}
                  </li>
                  <li>
                    Aliases:{" "}
                    {hero.biography && hero.biography.aliases.join(", ")}
                  </li>
                  <li>
                    Place of Birth:{" "}
                    {hero.biography && hero.biography["place-of-birth"]}
                  </li>
                  <li>
                    First Appearance:{" "}
                    {hero.biography && hero.biography["first-appearance"]}
                  </li>
                  <li>
                    Publisher: {hero.biography && hero.biography.publisher}
                  </li>
                  <li>
                    Alignment: {hero.biography && hero.biography.alignment}
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div>
            <button
              className={`section-btn ${
                activeSection === "appearance" ? "active" : ""
              }`}
              onClick={() => toggleSection("appearance")}
            >
              appearance
            </button>
            {activeSection === "appearance" && (
              <div className="section-content">
                <ul className="flex flex-col">
                  <li>Gender: {hero.appearance && hero.appearance.gender}</li>
                  <li>Race: {hero.appearance && hero.appearance.race}</li>
                  <li>
                    Height:{" "}
                    {hero.appearance && hero.appearance.height.join(", ")}
                  </li>
                  <li>
                    Weight:{" "}
                    {hero.appearance && hero.appearance.weight.join(", ")}
                  </li>
                  <li>
                    Work:
                    {hero.work && hero.work.occupation}
                  </li>
                  <li>
                    Base:
                    {hero.work && hero.work.base}
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div>
            <button
              className={`section-btn ${
                activeSection === "connection" ? "active" : ""
              }`}
              onClick={() => toggleSection("connection")}
            >
              connections
            </button>
            {activeSection === "connection" && (
              <div className="section-content">
                <ul className="flex flex-col">
                  <li>
                    Group Affiliation:{" "}
                    {hero.connections && hero.connections["group-affiliation"]}
                  </li>
                  <li>
                    Relatives: {hero.connections && hero.connections.relatives}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
