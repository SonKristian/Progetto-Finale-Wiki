import Cards from "./Cards.jsx";
import "./css/cardspage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardsPage = () => {
  const [hero, setHero] = useState({});
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState(null);

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
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <div className="flex justify-around width-[100%] mt-5 mb-[5rem] back bg-slate-400">
      {/* left */}
      <div className="ml-5">
        <div className="flex justify-center items-center ml-[4rem] text-[30px]">
          <h2 className=" font-extrabold">{hero.name}</h2>
        </div>
        {hero.image && <Cards size="big" url={hero.image.url} />}
      </div>
      {/* right */}
      <div className="mt-2 mr-[5rem]">
        <div className="flex justify-around gap-[4.2rem] text-[20px]">
          <div>
            <button
              className={`section-btn ${activeSection === "powerstat" ? "active" : ""}`}
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
              className={`section-btn ${activeSection === "biography" ? "active" : ""}`}
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
                Aliases: {hero.biography && hero.biography.aliases.join(", ")}
              </li>
              <li>
                Place of Birth:{" "}
                {hero.biography && hero.biography["place-of-birth"]}
              </li>
              <li>
                First Appearance:{" "}
                {hero.biography && hero.biography["first-appearance"]}
              </li>
              <li>Publisher: {hero.biography && hero.biography.publisher}</li>
              <li>Alignment: {hero.biography && hero.biography.alignment}</li>
            </ul>
              </div>
            )}
          </div>

          <div>
            <button
              className={`section-btn ${activeSection === "appearance" ? "active" : ""}`}
              onClick={() => toggleSection("appearance")}
            >
              appearance
            </button>
            {activeSection === "appearance" && (
              <div className="section-content">
              <ul className="flex flex-col">
              <li>
                Gender: {hero.appearance && hero.appearance.gender}
              </li>
              <li>
               Race: {hero.appearance && hero.appearance.race}
              </li>
              <li>
                Height: {hero.appearance && hero.appearance.height.join(", ")}
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
              className={`section-btn ${activeSection === "connection" ? "active" : ""}`}
              onClick={() => toggleSection("connection")}
            >
              connections
            </button>
            {activeSection === "connection" && (
              <div className="section-content">
              <ul className="flex flex-col">
              <li>
                Group Affiliation: {hero.connections && hero.connections["group-affiliation"]}
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
