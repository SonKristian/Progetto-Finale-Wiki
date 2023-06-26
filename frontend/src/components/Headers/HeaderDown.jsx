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
            {categories.map(
              categories => (
              <li key={categories}>
                  <Link to={`/category/${encodeURIComponent(categories)}`}>{categories}</Link>
              </li>
              )
            )}
        </ul>
      </div>
      </nav>
  )
}

export default HeaderDown