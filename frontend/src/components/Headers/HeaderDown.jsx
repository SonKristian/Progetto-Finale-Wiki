import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/headerdown.css";

const HeaderDown = ({ active, isDark }) => {
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
      <div className={`nav-child ${isDark ? "dark-mode" : ""}`}>
        <div className="submenu">
          <div className="ml-5">
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/eroi/page/1">All Heroes</Link>
          </div>
          {/* {console.log("from Header down" + isDark)} */}
          <div className="headerdown" onClick={toggleDropdown}>
            <button id="list">Genere</button>
            {isOpen && (
              <ul className={`dropdown ${isDark ? "dark-mode" : ""}`}>
                {categories.map((category) => (
                  <li key={category}>
                    <Link to={`/category/${encodeURIComponent(category)}/page/1`}>
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
