import { useState } from 'react';
import { Link } from "react-router-dom";
import HeaderDown from "./HeaderDown";
import DarkMode from "../DarkMode/DarkMode.jsx"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import SearchResult from './SearchResults';
import "./css/header.css";


const Header = ({ isLoggedIn, isDark }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Inizialmente impostato con il valore del parametro nome, se presente
  const storedName = sessionStorage.getItem('user');

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
    window.location.href = "/notfound";
    }else{ 
    window.location.href = `/results/${encodeURIComponent(searchQuery)}`;
    }
  };

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
      <nav id="navbar" className={`header-top ${isDark ? "dark-mode" : ""}`}>
        <div className="ml-5 flex items-center">
          <Link to="#" onClick={toggleBar}>
            <MenuIcon />
          </Link>
        </div>
        
        <div className="flex items-center">
        <Link to="/">
         <img
           src={isDark ? "http://localhost:5173/src/assets/negativeLogo.svg" : "http://localhost:5173/src/assets/logoSpotlight.svg"}
           alt="logo"
           className="w-[50px] m-[2rem]" />
        </Link>
        </div>
        
      <div className="search-icon-bar">
        <input
          type="search"
          id="searchbar"
          placeholder="Search for your superhero"
          className="w-[600px] rounded-s-lg h-[40px] m-[0.4rem]"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>
        {/* {console.log("from Header" + isDark)} */}
        <div className="flex items-center justify-center">
         <DarkMode />
        </div>
        {/* {console.log(isLoggedIn)} */}
        {!isLoggedIn ? (
          <div className="form">
            <Link to="/login">
              <button id="login" className={`btn-action ${isDark ? "dark-mode" : ""}`} type="button">Login</button>
            </Link>
            <Link to="/register">
              <button id="register" className={`btn-action ${isDark ? "dark-mode" : ""}`} type="button">Register</button>
            </Link>
          </div>
        ) : (
         <div className="form">
          <Link to={`/favorites/${storedName}`}>
            <button className={`btn-action ${isDark ? "dark-mode" : ""}`} type="button">Favorites</button>
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
       <SearchResult searchQuery={searchQuery} />
      </div>
    </header>
  );
};

export default Header;
