import HeaderDown from "./HeaderDown";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import "./css/header.css";
import { useState, useEffect } from 'react';
import axios from "axios";

const Header = ({ isLoggedIn }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchHero = async (hero) => {
    try {
      const response = await axios.post(`http://localhost:3000/search/${encodeURIComponent(hero)}`);
      const data = await response.data;
      console.log(data);
      // sessionStorage.setItem('user', response.data.user);
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching for hero:', error);
      await setSearchResults([]);
    }
  };

  function handleSearch() {
    fetchHero(searchQuery);
  }

  useEffect(() => {
    fetchHero(searchQuery);
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const [active, setActive] = useState(true);
  const toggleBar = () => {
    setActive(!active);
    // console.log(active)
  };

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
            <img src="./src/assets/logoSpotlight.svg" alt="logo" className="w-[50px] m-[2rem]" />
          </Link>
        </div>
        <div className="search-icon-bar">
          <input type="search" id="searchbar" placeholder="Search for your superhero" className="w-[600px] rounded-s-lg h-[40px] m-[0.4rem]" value={searchQuery} onChange={handleInputChange} />
          <button type="button" onClick={handleSearch}> <SearchIcon /> </button>
        </div>
        <div className="dark-mode">
          <button type="button"> Dark Mode </button>
        </div>
        {console.log(isLoggedIn)}
        {!isLoggedIn ? (
          <div className="form">
            <Link to="/login">
              <button className="btn-action" type="button">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn-action" type="button">Register</button>
            </Link>
          </div>
        ) : (
          <div className="form">
          <Link to="/newhero">
            <button className="btn-action" type="button">Create Hero</button>
          </Link>
          <div>
            <p>prov</p>
          </div>
        </div>
        )}
      </nav>
      <HeaderDown active={active} />
      <div>
        {console.log(searchResults)}
        {searchResults.map((hero) => (
          <div key={hero}>
            <p>{hero.name}</p>
            <img src={hero.image.url} alt={hero.name} />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
