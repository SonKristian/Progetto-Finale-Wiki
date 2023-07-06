import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/headerdown.css";

const HeaderDown = ({ active }) => {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function getCategories() {
      const response = await fetch("http://localhost:3000/genere");
      const data = await response.json();
      setCategories(data);
    }

    getCategories();
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav className={active ? "open" : "close"}>
      <div>
        <div className="submenu">
          <div className="ml-5">
            <Link to="/home">Home</Link>
          </div>
          <div>
            <Link to="/eroi">All Heroes</Link>
          </div>
          <div className="headerdown" onClick={toggleDropdown}>
            <button id="list">Genere</button>
            {isOpen && (
              <ul className="dropdown">
                {categories.map((category) => (
                  <li key={category}>
                    <Link to={`/category/${encodeURIComponent(category)}`}>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderDown;
