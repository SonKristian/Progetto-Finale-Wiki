import { useState, useEffect } from "react"
import "./cards.css"
import { Link } from "react-router-dom";

const HeroCard = () => {
    const [allHeroes, setAllHeroes] = useState([]); 

    useEffect(() => {
      async function getCategories() {
        const response = await fetch(`http://localhost:3000/eroi`);  
        const data = await response.json();
        setAllHeroes(data); 
      }
  
      getCategories(); 
    }, [])


  return (
    <div className="flex items-center justify-center flex-wrap">
    {allHeroes.map((hero, i) => (
      <Link key={i} to={`/eroi/${hero.id}`}>
        <div  className="small-container">
        <div className="small-card">
        <img src={hero.image.url} alt="" />
        <p className="text-white mt-2 text-center">{hero.name}</p>
        </div>
        </div>
      </Link>
    ))}
  </div>
  )
}

export default HeroCard;