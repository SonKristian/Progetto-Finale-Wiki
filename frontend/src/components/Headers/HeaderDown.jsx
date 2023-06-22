import { Link } from "react-router-dom";
import "./headerdown.css"

const HeaderDown = ({active}) => {
  // const [categories, setCategories] = useState([]); 

  // useEffect(() => {
  //   async function getCategories() {
  //     const response = await fetch("https://dummyjson.com/products/categories");  
  //     const data = await response.json();
  //     const categoriesSliced = data.slice(0, 10);
  //     setCategories(categoriesSliced); 
  //   }

  //   getCategories(); 
  // }, [])
  return (
    <nav className={active ? "close" : "open"}>
      {console.log(active)}
        <div id="header-down" className="bg-slate-800 text-white">
         <ul id="subemenu" className="gap-7">
         <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cards">CardsPage</Link>
            </li>
        </ul>
      </div>
      </nav>
  )
}

export default HeaderDown