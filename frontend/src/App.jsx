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
       <Route path="/home" element={<Home />} />
       <Route path="/eroi" element={<HeroCard />} />
       <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
       <Route path="/register" element={<Register />} />
       <Route path="/eroi/:id" element={<CardsPage />} />
       <Route path="/category/:nomecateg" element={<CategoriesCard />} />
     </Routes>
      <Footer />
    </>
  );
}

export default App;
