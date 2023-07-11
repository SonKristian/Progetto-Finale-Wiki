import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "./Cards.jsx";
import "./css/cards.css";

const HeroCard = ({ isDark }) => {
  const [allHeroes, setAllHeroes] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const { page } = useParams();
  const currentPageParam = parseInt(page) || 1;


  useEffect(() => {
    async function getHeroes() {
      const response = await fetch(`http://localhost:3000/eroi/page/${currentPageParam}`);
      const data = await response.json();
      setAllHeroes(data);
      setTotalPages(data.totalPages);
      // console.log("num "+ data.totalPages)
    }

    getHeroes();
  }, [currentPageParam]);


  const handlePageChange = (page) => {
    const nextPageUrl = `/eroi/page/${page}`;
    window.location.href = nextPageUrl;
  };

  const handleNextPage = () => {
    const nextPage = currentPageParam + 1;
    handlePageChange(nextPage);
  };

  const handlePrevPage = () => {
    const prevPage = currentPageParam - 1;
    handlePageChange(prevPage);
  };

  const renderPagination = () => {
    const pagination = [];

    // Previous page button
    pagination.push(
      <button
        key="prev"
        className={`pagination-item ${currentPageParam === 1 ? "disabled" : ""}`}
        onClick={handlePrevPage}
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
      <div className={`container-pag ${isDark ? "dark-mode" : ""}`}>{renderPagination()}</div>
    </div>
  );
};

export default HeroCard;
