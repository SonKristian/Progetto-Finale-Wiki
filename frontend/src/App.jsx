import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Headers/Header.jsx";
import Home from "./components/Main/Home.jsx"
import CardsPage from "./components/CardsPage/CardsPage.jsx"
import Footer from "./components/Footers/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/cards" element={<CardsPage />} />
     </Routes>
      <Footer />
    </>
  );
}

export default App;
