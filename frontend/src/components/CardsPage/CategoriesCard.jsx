import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import "./cards.css"

const CategoriesCard = () => {
    const [heroCat, setHeroCat] = useState([]); 
    const { nomecateg } = useParams()

    useEffect(() => {
      async function getCategories() {
        const response = await fetch(`http://localhost:3000/genere/${nomecateg}`);  
        const data = await response.json();
        // const categoriesSliced = data.slice(0, 10);
        setHeroCat(data); 
      }
  
      getCategories(); 
    }, [nomecateg])

  return (
    <div className="flex items-center justify-center flex-wrap">
    {heroCat.map((hero, i) => (
        <div key={i} className="small-container">
        <div className="small-card">
        <img src={hero.image.url} alt="" />
        <p className="text-white mt-2 text-center">{hero.name}</p>
        </div>
        </div>
    ))}
  </div>
  )
}

export default CategoriesCard