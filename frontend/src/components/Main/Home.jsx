import { Link } from "react-router-dom";
import { useState } from "react";
import Carousel from "../Carousel/Carousel.jsx";
import Cards from "../CardsPage/Cards.jsx";

const Home = () => {

  return (
    
    <div className="flex flex-col justify-center items-center">
      <Carousel />
      <div className="mt-[4rem]">
        <h2 className="font-black text-[32px]">Personaggi in evidenza</h2>
        </div>
      <div className="card-container">
        <Link to="/eroi/289">
        <Cards size="small" url="https://www.superherodb.com/pictures2/portraits/10/100/1284.jpg" sizeContainer="small"/>
        </Link>
        <Link to="/eroi/620">
        <Cards size="small" url="https://www.superherodb.com/pictures2/portraits/10/100/133.jpg" sizeContainer="small"/>
        </Link>
        <Link to="/eroi/213">
        <Cards size="small" url="https://www.superherodb.com/pictures2/portraits/10/100/835.jpg" sizeContainer="small"/>
        </Link>
        <Link to="/eroi/69">
        <Cards size="small" url="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg" sizeContainer="small"/>
        </Link>
        <Link to="/eroi/536">
        <Cards size="small" url="https://www.superherodb.com/pictures2/portraits/10/100/115.jpg" sizeContainer="small"/>
        </Link>
      </div>
    </div>
  );
};

export default Home;
