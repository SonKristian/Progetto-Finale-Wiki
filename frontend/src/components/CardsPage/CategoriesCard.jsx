import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "./Cards.jsx";
import "./css/cards.css";
import Loading from "../Loading/Loading.jsx";

const CategoriesCard = ({ isDark }) => {
  const [heroCat, setHeroCat] = useState([]);
  const [loading, setLoading] = useState(false);
  const { nomecateg } = useParams();
  const [totalPages, setTotalPages] = useState(1);
  const { page } = useParams();
  const currentPageParam = parseInt(page) || 1;

  useEffect(() => {
    async function getCategories() {
      try {
        setLoading(true);
        setTimeout(async () => {
          const response = await fetch(
            `http://localhost:3000/genere/${nomecateg}/page/${currentPageParam}`
          );
          const data = await response.json();
          setHeroCat(data);
          setTotalPages(data.totalPages);
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
      // console.log("ciao")
    }
    getCategories();
  }, [nomecateg, currentPageParam]);

  const handlePageChange = (page) => {
    const nextPageUrl = `/category/${nomecateg}/page/${page}`;
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
        <Loading loading={loading} />
        {heroCat.map((hero, i) => (
          <Link key={i} to={`/eroi/${hero.id}`}>
            {/* {console.log(" map " + heroCat)} */}
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

export default CategoriesCard;
