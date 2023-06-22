import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import CardsPage from "../CardsPage/CardsPage.jsx";
import "./sidebar.css"

function Sidebar({active}) {
  return (
    <div>
    <div id="sidebar" className={active ? "open" : "close"}>
      {/* {console.log(active)} */}
      <span>{active} ao</span>
      <div className="flex mr-[3rem] pr-[3rem]">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cards">CardsPage</Link>
            </li>
          </ul>
      </div>
    </div>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<CardsPage />} />
        </Routes>
    </div>
  );
}

export default Sidebar;
