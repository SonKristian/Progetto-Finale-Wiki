import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import HeaderDown from "./HeaderDown";
import DarkMode from "../DarkMode/DarkMode.jsx"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import SearchResult from './SearchResults';
import "./css/header.css";

import axios from "axios";

const Header = ({ isLoggedIn, isDark }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const storedName = sessionStorage.getItem('user');

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
    window.location.href = "/results"
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
      <nav className="bg-[#E6E6E6] h-[60px] flex justify-between">
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
        {console.log("from Header" + isDark)}
        <div className="flex items-center justify-center">
         <DarkMode isDark={isDark} />
        </div>
        {/* {console.log(isLoggedIn)} */}
        {!isLoggedIn ? (
          <div className="form">
            <Link to="/login">
              <button id="login" className="btn-action" type="button">Login</button>
            </Link>
            <Link to="/register">
              <button id="register" className="btn-action" type="button">Register</button>
            </Link>
          </div>
        ) : (
         <div className="form">
          <Link to="/favorites">
            <button className="btn-action" type="button">Favorites</button>
          </Link>
          <div className="form">
          <div>
            <Link to="/profile">
              <img className="account" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4860795e-12c4-4bc2-bd7a-4b55c30df95c/df1xaqt-8b981017-0375-4035-a0cc-2909b6cbd42b.png/v1/fill/w_564,h_651/superhero_profile_by_alexbadass_df1xaqt-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUxIiwicGF0aCI6IlwvZlwvNDg2MDc5NWUtMTJjNC00YmMyLWJkN2EtNGI1NWMzMGRmOTVjXC9kZjF4YXF0LThiOTgxMDE3LTAzNzUtNDAzNS1hMGNjLTI5MDliNmNiZDQyYi5wbmciLCJ3aWR0aCI6Ijw9NTY0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.TaYbRw-y1YNwFB80EJz2xMPP3T13cjGdU7QuDmOo4CA" />
            </Link>
            </div>

            <div className="ml-[1rem]">
            <p>Welcome, <br />{storedName}</p>
            </div>
          </div>
        </div>
        )}
      </nav>
      <HeaderDown active={active} isDark={isDark}/>
      <div>
      {searchResults.length > 0 && <SearchResult searchResults={searchResults} />}
      </div>
    </header>
  );
};

export default Header;
