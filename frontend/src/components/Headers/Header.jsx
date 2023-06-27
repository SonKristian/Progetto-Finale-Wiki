import HeaderDown from "./HeaderDown"
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import "./header.css"
import { useState, useEffect } from 'react';
import axios from "axios"

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

 const fetchHero = async (hero) => {
  try {
    const response = await axios.post(`http://localhost:3000/search/${encodeURIComponent(hero)}`);
    const data = await response.data;
    console.log(data)
    setSearchResults(data);
  } catch (error) {
    console.error('Error searching for hero:', error);
    await setSearchResults([]);
  }
};
  
    function handleSearch(){
      fetchHero(searchQuery);
    }

   useEffect(()=> {
   fetchHero(searchQuery);
   }, [searchQuery])

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery)
  };
  

const [active, setActive] = useState(true)
const toggleBar = () => {
    setActive(!active)
    // console.log(active)
}

  return (
    <header>
        <nav className="bg-slate-100 h-[60px] flex justify-between">
          <div className="ml-5 flex items-center">
            <Link to="#" onClick={toggleBar}>
            <MenuIcon />
            </Link>
          </div>
            <div className="flex items-center">
            <Link to="/home">
            <img src="./src/assets/logoSpotlight.svg" alt="logo" className="w-[50px] m-[2rem]"/>
            </Link>
            </div>
            <div className="search-icon-bar">
                <input type="search" id="searchbar" placeholder="Search for your superhero" className="w-[600px] rounded-s-lg h-[40px] m-[0.4rem]" value={searchQuery} onChange={handleInputChange}/>
                <button className="btn-container-input" type="button" onClick={handleSearch} > <SearchIcon /> </button>
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
        <div>
          {     console.log(searchResults)}
          {searchResults.map((hero)=> (
          <div key={hero}>
          <p>{hero.name}</p>
          <img src={hero.image.url} />
          </div>
        )
        )}
        </div>
    </header>
  )
}

export default Header