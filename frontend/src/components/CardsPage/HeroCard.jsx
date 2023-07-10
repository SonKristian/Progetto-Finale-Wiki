import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "./Cards.jsx";
import "./css/cards.css";

const HeroCard = () => {
  const [allHeroes, setAllHeroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { page } = useParams();
  const currentPageParam = parseInt(page) || 1;

  const cardsPerPage = 24;
  const startIndex = (currentPageParam - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  useEffect(() => {
    async function getHeroes() {
      const response = await fetch(`http://localhost:3000/eroi/page/${currentPageParam}`);
      const data = await response.json();
      setAllHeroes(data);
      setTotalPages(Math.ceil(data.length / cardsPerPage));
    }

    getHeroes();
  }, [currentPageParam]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    const nextPage = currentPageParam + 1;
    setCurrentPage(nextPage);
    window.location.href = `http://localhost:3000/eroi/page/${nextPage}`;
  };

  const renderPagination = () => {
    const pagination = [];

    // Previous page button
    pagination.push(
      <button
        key="prev"
        className={`pagination-item ${currentPageParam === 1 ? "disabled" : ""}`}
        onClick={() => handlePageChange(currentPageParam - 1)}
        disabled={currentPageParam === 1}
      >
        Prev
      </button>
    );

    // Current page button
    pagination.push(
      <button
        key={currentPageParam}
        className={`pagination-item active`}
        onClick={() => handlePageChange(currentPageParam)}
      >
        {currentPageParam}
      </button>
    );

    // Next page button
    pagination.push(
      <button
        key="next"
        className={`pagination-item ${
          currentPageParam === totalPages ? "disabled" : ""
        }`}
        onClick={handleNextPage}
        disabled={currentPageParam === totalPages}
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
