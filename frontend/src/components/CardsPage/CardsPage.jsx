import Cards from "./Cards.jsx"
import "./cardspage.css"
// import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const CardsPage = () => {
    const [hero, setHero] = useState([]); 
    const { id } = useParams()

    useEffect(() => {
        async function getHero() {
          const response = await fetch(`http://localhost:3000/eroi/${id}`);  
          const data = await response.json();
          // const categoriesSliced = data.slice(0, 10);
          setHero(data); 
          console.log("data " + data)
        }
    
        getHero(); 
      }, [])

  return (

    <div className="flex justify-around width-[100%] mt-5 mb-[5rem] back bg-slate-400">
        {/* left */}
        <div className="ml-5">
        <Cards size="big" />
        </div>
        {/* right */}        
        <div className="mt-2 mr-[5rem]">
                        <div className = "flex justify-around gap-[29.7rem] text-[30px]">
                            <h2 className="pr-[1rem]">{hero.name}</h2>
                            {/* <h2><FavoriteIcon /></h2> */}
                        </div>

                        <div className = "flex justify-around gap-[4.2rem] text-[20px]">
                            <button type = "button" className = "tab-head-single" data-id = "1">
                                <span>powerstats</span>
                            </button>
                            <button type = "button" className = "tab-head-single" data-id = "2">
                                <span>biography</span>
                            </button>
                            <button type = "button" className = "tab-head-single" data-id = "3">
                                <span>appearance</span>
                            </button>
                            <button type = "button" className = "tab-head-single" data-id = "4">
                                <span>connections</span>
                            </button>
                        </div>
                    </div>
    </div>
  )
}

export default CardsPage