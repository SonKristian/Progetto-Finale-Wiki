import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Headers/Header.jsx";
import Home from "./components/Main/Home.jsx"
import CardsPage from "./components/CardsPage/CardsPage.jsx"
import CategoriesCard from "./components/CardsPage/CategoriesCard.jsx"
import HeroCard from "./components/CardsPage/HeroCard.jsx"
import Footer from "./components/Footers/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/eroi" element={<HeroCard />} />
       <Route path="/eroi/:id" element={<CardsPage />} />
       <Route path="/category/:nomecateg" element={<CategoriesCard />} />
     </Routes>
      <Footer />
    </>
  );
}

export default App;
