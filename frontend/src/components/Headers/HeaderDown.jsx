import { Link } from "react-router-dom";
import "./headerdown.css"
import { useState, useEffect } from "react"

const HeaderDown = ({active}) => {
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    async function getCategories() {
      const response = await fetch("http://localhost:3000/genere");  
      const data = await response.json();
      // const categoriesSliced = data.slice(0, 10);
      setCategories(data); 
    }

    getCategories(); 
  }, [])

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={active ? "open" : "close"}>
      {/* {console.log(active)} */}
        <div>
         <ul id="submenu">
         <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cards">CardsPage</Link>
            </li>
                <li>
            <div className="dropdown" onClick={toggleDropdown}>
              <button>Genere</button>
              {isOpen && (
                <ul className="dropdown-menu">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link to={`/category/${encodeURIComponent(category)}`}>{category}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderDown;