import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./cards.css";

const CategoriesCard = () => {
  const [heroCat, setHeroCat] = useState([]);
  const { nomecateg } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const cardsPerPage = 24;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  useEffect(() => {
    async function getCategories() {
      const response = await fetch(`http://localhost:3000/genere/${nomecateg}`);
      const data = await response.json();
      setHeroCat(data);
      setTotalPages(Math.ceil(data.length / cardsPerPage));
    }

    getCategories();
  }, [nomecateg]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(
        <button
          key={i}
          className={`pagination-item ${currentPage === i ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pagination;
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-wrap">
        {heroCat.slice(startIndex, endIndex).map((hero, i) => (
          <Link key={i} to={`/eroi/${hero.id}`}>
            <div className="small-container">
              <div className="small-card">
                <img src={hero.image.url} alt="" />
                <p className="text-white mt-2 text-center">{hero.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">{renderPagination()}</div>
    </div>
  );
};

export default CategoriesCard;
