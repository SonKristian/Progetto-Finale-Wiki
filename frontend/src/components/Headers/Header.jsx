// import HeaderDown from "./HeaderDown"
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import "./header.css"
import { useState } from "react"
import Sidebar from "../Main/Sidebar.jsx"
const Header = () => {
//   async function searchProducts(searchContent) { 
//   const response = await fetch(
//     `https://dummyjson.com/products/search?q=${searchContent}` 
//   );
//   const data = await response.json(); 
//   console.log(data.products)
//   return data.products; 
// }

// async function handleSearch() {  
//   const products = await searchProducts(search); 
//   // Search(products);
// }

const [active, setActive] = useState(false)
const toggleBar = () => {
    setActive(!active)
    // console.log(active)
}

  return (
    <header >
        <nav className="bg-slate-100 mb-5">
          <div className="ml-5 flex items-center">
            <Link to="#" onClick={toggleBar}>
            <MenuIcon />
            </Link>
          </div>
            <div className="flex items-center">
            <Link to="/">
            <img src=".\src\assets\logoSpotlight.svg" alt="logo" className="w-[50px] m-[2rem]"/>
            </Link>
            </div>
            <div className="search-icon-bar ">
                <input type="search" id="searchbar" placeholder="Search for your product" className="w-[600px] rounded-s-lg h-[40px] m-[0.4rem]" />
                <button className="btn-container" type="button" > <SearchIcon /> </button>
            </div>
            <div className="cart">
              <button className="btn-container" type="button"> Dark Mode </button>
            </div>
              <div className="form">
          <a href="login.html">
            <button className="btn-container-form" type="button">Login</button>
          </a>
          <a href="register.html">
            <button className="btn-container-form" type="button">Registrazioni</button>
          </a>
        </div>
        </nav>
        {/* <HeaderDown /> */}
        <Sidebar active={active}/>
    </header>
  )
}

export default Header