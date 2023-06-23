import HeaderDown from "./HeaderDown"
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import "./header.css"
import { useState } from "react"

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

   
  const searchHero = async (hero) => {
    try {
      const response = await fetch(
        `https://superheroapi.com/api/235074712596162/search/name?q=${hero}`
      );
      const data = await response.json();
      console.log(data.results); // Assuming the response contains an array of results
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching for hero:', error);
      setSearchResults([]);
    }
  };

  const handleSearch = () => {
    searchHero(searchQuery);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  

const [active, setActive] = useState(true)
const toggleBar = () => {
    setActive(!active)
    // console.log(active)
}

  return (
    <header >
        <nav className="bg-slate-100 h-[60px] flex justify-between">
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
            <div className="search-icon-bar">
                <input type="search" id="searchbar" placeholder="     Search for your superhero" className="w-[600px] rounded-s-lg h-[40px] m-[0.4rem]" value={searchQuery} onChange={handleInputChange}/>
                <button className="btn-container" type="button" onClick={handleSearch} > <SearchIcon /> </button>
            </div>
            <div className="dark-mode">
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
        <HeaderDown active={active} />
    </header>
    
  )
}

export default Header