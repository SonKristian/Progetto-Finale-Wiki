import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards.jsx";
import "./css/cards.css";

const HeroCard = () => {
  const [allHeroes, setAllHeroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const cardsPerPage = 24;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  useEffect(() => {
    async function getCategories() {
      const response = await fetch(`http://localhost:3000/eroi`);
      const data = await response.json();
      console.log(data);
      setTotalPages(Math.ceil(data.length / cardsPerPage));
      setAllHeroes(data);
    }

    getCategories();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pagination = [];

    // Previous page button
    pagination.push(
      <button
        key="prev"
        className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
    );

    // Current page button
    pagination.push(
      <button
        key={currentPage}
        className={`pagination-item active`}
        onClick={() => handlePageChange(currentPage)}
      >
        {currentPage}
      </button>
    );

    // Next page button
    pagination.push(
      <button
        key="next"
        className={`pagination-item ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    );

    return pagination;
  };

  return (
    <div className="categcard-container">
      <div className="flex items-center justify-center flex-wrap">
        {Object.values(allHeroes)
          .slice(startIndex, endIndex)
          .map((hero, i) => (
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
      <div className="flex gap-8 ml-[5.5rem]">{renderPagination()}</div>
    </div>
  );
};

export default HeroCard;
const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <div className="flex justify-around width-[100%] mt-5 mb-[5rem] back bg-slate-400">
      {/* left */}
      <div className="ml-5">
        <div className="flex justify-center items-center ml-[4rem] text-[30px]">
          <h2 className="font-extrabold">{hero.name}</h2>
        </div>
        {hero.image && <Cards size="big" url={hero.image.url} />}
      </div>
      {/* right */}
      <div className="mt-2 mr-[5rem]">
        <div className="flex justify-around gap-[4.2rem] text-[20px]">
          <details className={`point ${activeSection === "powerstat" ? "open" : "close"}`}>
            <summary onClick={() => toggleSection("powerstat")}>powerstats</summary>
            <div className="powerstats-container">
              {/* Contenuto delle powerstats */}
            </div>
          </details>

          <details className={`point ${activeSection === "biography" ? "open" : "close"}`}>
            <summary onClick={() => toggleSection("biography")}>biography</summary>
            <div className="flex flex-col items-center justify-center">
              {/* Contenuto della biography */}
            </div>
          </details>

          <details className={`point ${activeSection === "appearance" ? "open" : "close"}`}>
            <summary onClick={() => toggleSection("appearance")}>appearance</summary>
            <div className="flex flex-col">
              {/* Contenuto dell'appearance */}
            </div>
          </details>

          <details className={`point ${activeSection === "connection" ? "open" : "close"}`}>
            <summary onClick={() => toggleSection("connection")}>connections</summary>
            <div className="flex flex-col">
              {/* Contenuto delle connections */}
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};