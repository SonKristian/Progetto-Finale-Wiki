// import { useEffect , useState } from "react"
import Carousel from "../Carousel/Carousel.jsx";
import Cards from "../CardsPage/Cards.jsx";

const Home = () => {
  // const [products, setProduct] = useState([])
  // useEffect(() => {

  // async function fetchProducts (){
  //     const res = await fetch("https://dummyjson.com/products")
  //     const json = await res.json()
  //     const products = json.products
  //     setProduct(products)
  //  }

  //  fetchProducts()
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
        <Cards size="small" sizeContainer="small"/>
        <Cards size="small" sizeContainer="small"/>
        <Cards size="small" sizeContainer="small"/>
        <Cards size="small" sizeContainer="small"/>
        <Cards size="small" sizeContainer="small"/>
        {/* {products.map((product, index) => (
          <Cards key={index} product={product} />
        ))} */}
      </div>
    </div>
  );
};

export default Home;
