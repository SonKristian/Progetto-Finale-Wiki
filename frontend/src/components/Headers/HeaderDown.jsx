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
    <nav className="bg-slate-800 mb-7 text-white h-[30px] flex items-center justify-center">
      {/* {console.log(active)} */}
        <div className={active ? "open" : "close"}>
         <ul id="submenu">
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