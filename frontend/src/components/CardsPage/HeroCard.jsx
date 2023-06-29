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
