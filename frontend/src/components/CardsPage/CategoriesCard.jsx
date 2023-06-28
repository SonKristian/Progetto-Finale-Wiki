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
  //update the current page when a pagination button is clicked.

  const renderPagination = () => {
    const pagination = [];
  
    // Previous page button
    pagination.push(
      <button key="prev" className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1} >
       Prev
      </button>
    );
  
    // Current page button
    pagination.push(
      <button key={currentPage} className={`pagination-item active`}
        onClick={() => handlePageChange(currentPage)} >
        {currentPage}
      </button>
    );
  
    // Next page button
    pagination.push(
      <button key="next" className={`pagination-item ${currentPage === totalPages ? "disabled" : ""}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages} >
        Next
      </button>
    );
  
    return pagination;
  };

  return (
    <div className="categcard-container">
      <div className="flex items-center justify-center flex-wrap">
        {heroCat.slice(startIndex, endIndex).map((hero, i) => (
          // display the cards for the current page
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
      <div className="flex gap-8 ml-[5.5rem]">{renderPagination()}</div>
    </div>
  );
};

export default CategoriesCard;
