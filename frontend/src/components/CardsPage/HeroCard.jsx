import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "./Cards.jsx";
import "./css/cards.css";
import Loading from "../Loading/Loading.jsx";

const HeroCard = ({ isDark }) => {
  const [allHeroes, setAllHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const { page } = useParams();
  const currentPageParam = parseInt(page) || 1;

  useEffect(() => {
    async function getHeroes() {
      try {
        setLoading(true);
        setTimeout(async () => {
          const response = await fetch(
            `http://localhost:3000/eroi/page/${currentPageParam}`
          );
          const data = await response.json();
          setTotalPages(data.totalPages);
          setAllHeroes(data);
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        window.location.href = "/notfound";
      }
    }
    getHeroes();
  }, [currentPageParam]);

  const handlePageChange = (page) => {
    const nextPage = Math.min(page, totalPages);
    const nextPageUrl = `/eroi/page/${nextPage > 0 ? nextPage : 1}`;
    window.location.href = nextPageUrl;
  };

  const handleNextPage = () => {
    if (currentPageParam === totalPages) {
      return;
    }
    const nextPage = currentPageParam + 1;
    handlePageChange(nextPage);
  };

  const handlePrevPage = () => {
    if (currentPageParam === 1) {
      return;
    }
    const prevPage = currentPageParam - 1;
    handlePageChange(prevPage);
  };

  const renderPagination = () => {
    const pagination = [];

    // Previous page button
    pagination.push(
      <button
        key="prev"
        className={`pagination-item ${
          currentPageParam === 1 ? "disabled" : ""
        }`}
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
        <Loading
          loading={loading}
          url={"http://localhost:5173/src/assets/spider.gif"}
        />
        {Object.values(allHeroes).map((hero, i) => (
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
      <div className={`container-pag ${isDark ? "dark-mode" : ""}`}>
        {renderPagination()}
      </div>
    </div>
  );
};



export default HeroCard;
