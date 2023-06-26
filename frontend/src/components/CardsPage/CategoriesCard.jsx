import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import "./cardspage.css"

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
    <div className="flex justify-center items-center">
        <ul>
    {heroCat.map((hero, i) => (
        <li key={i}>
        <img src={hero.image.url} alt="" />
        {hero.name}
        </li>
   
    ))}
    </ul>
  </div>
  )
}

export default CategoriesCard