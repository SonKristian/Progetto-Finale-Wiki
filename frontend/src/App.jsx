import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Headers/Header.jsx";
import Home from "./components/Main/Home.jsx"
import CardsPage from "./components/CardsPage/CardsPage.jsx"
import CategoriesCard from "./components/CardsPage/CategoriesCard.jsx"
import HeroCard from "./components/CardsPage/HeroCard.jsx"
import Footer from "./components/Footers/Footer.jsx";
import Login from "./components/Form/Login.jsx"
import Register from "./components/Form/Register.jsx"
import CreateHero from "./components/Form/CreateHero.jsx";
import ModifyHero from "./components/Form/ModifyHero.jsx";
import DeleteHero from "./components/Form/DeleteHero.jsx";
import Profile from "./components/Account/Profile.jsx";
import Favorites from "./components/Account/Favorites.jsx";
import SearchResult from "./components/Headers/SearchResults";
import NotFound from "./components/Loading/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('jwtToken');
    if (storedToken) {
      setIsLoggedIn(true);

    }
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/eroi/page/:page" element={<HeroCard />} />
       <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
       <Route path="/register" element={<Register />} />
       <Route path="/newhero" element={<CreateHero />} />
       <Route path="/modify/newhero/:id" element={<ModifyHero />} />
       <Route path="/delete/newhero/:id" element={<DeleteHero />} />
       <Route path="/profile" element={<Profile  setIsLoggedIn={setIsLoggedIn}/>} />
       <Route path="/results/:nome" element={<SearchResult />} />
       <Route path="/eroi/:id" element={<CardsPage isLoggedIn={isLoggedIn} />} />
       <Route path="/favorites/:username" element={<Favorites />} />
       <Route path="/category/:nomecateg/page/:page" element={<CategoriesCard />} />
       <Route path="/notfound" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
