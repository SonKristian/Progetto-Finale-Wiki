import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Cards from "./Cards.jsx"
import "./css/cards.css";

const CategoriesCard = () => {
  const [heroCat, setHeroCat] = useState([]);
  const { nomecateg } = useParams();
  const [totalPages, setTotalPages] = useState(1);
  const { page } = useParams();
  const currentPageParam = parseInt(page) || 1;

  useEffect(() => {
    async function getCategories() {
      const response = await fetch(`http://localhost:3000/genere/${nomecateg}/page/${currentPageParam}`);
      const data = await response.json();
      setHeroCat(data);
      setTotalPages(data.totalPages);
    }

    getCategories();
  }, [nomecateg , currentPageParam]);

  const handlePageChange = (page) => {
    const nextPageUrl = `/genere/${nomecateg}/page/${page}`;
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
        {heroCat.map((hero, i) => (
          // display the cards for the current page
          <Link key={i} to={`/eroi/${hero.id}`}>
            <Cards size="small" sizeContainer="small" url={hero.image.url} name={hero.name}/>
          </Link>
        ))}
      </div>
      <div className="flex gap-8 ml-[5.5rem]">{renderPagination()}</div>
    </div>
  );
};

export default CategoriesCard;
