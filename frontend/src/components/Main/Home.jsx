// import { useEffect , useState } from "react"
import Carousel from "../Carousel/Carousel.jsx";
import Cards from "../CardsPage/Cards.jsx";

const Home = () => {
  // const [hero, setHerp] = useState([])
  // useEffect(() => {

  // async function fetchHero (){
  //     const res = await fetch("")
  //     const json = await res.json()
  //     const hero = json.hero
  //     setHero(hero)
  //  }

  //  fetchHero()
  //   }, []);

  return (
    // <div className="card-container">
    //       {products.map((product, index) => (
    //         <Cards key={index} product={product}/>
    //       ))}
    // </div
    <div className="flex flex-col justify-center items-center">
      <Carousel />
      <div className="mt-[4rem]">
        <h2 className="font-black text-[32px]">Personaggi in evidenza</h2>
        </div>
      <div className="card-container">
        <Cards size="small" url="https://www.superherodb.com/pictures2/portraits/10/100/1284.jpg" sizeContainer="small"/>
        <Cards size="small" url="https://www.superherodb.com/pictures2/portraits/10/100/133.jpg" sizeContainer="small"/>
        <Cards size="small" url="https://www.superherodb.com/pictures2/portraits/10/100/835.jpg" sizeContainer="small"/>
        <Cards size="small" url="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg" sizeContainer="small"/>
        <Cards size="small" url="https://www.superherodb.com/pictures2/portraits/10/100/115.jpg" sizeContainer="small"/>
        {/* {products.map((product, index) => (
          <Cards key={index} product={product} />
        ))} */}
      </div>
    </div>
  );
};

export default Home;
