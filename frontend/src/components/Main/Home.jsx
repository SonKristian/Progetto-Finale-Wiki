// import Cards from "./Cards";
// import { useEffect , useState } from "react"
import Carousel from "../Carousel/Carousel.jsx";
// import Footer from "../Footers/Footer.jsx";
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
    <>
      <Carousel />
      <div className="flex justify-center items-center mt-[2rem] text-[20px]">
        <h2>Personaggi in evidenza</h2>
        </div>
      <div className="card-container">
        <Cards size="small" />
        <Cards size="small"/>
        <Cards size="small"/>
        <Cards size="small"/>
        <Cards size="small"/>
        {/* {products.map((product, index) => (
          <Cards key={index} product={product} />
        ))} */}
      </div>
    </>
  );
};

export default Home;
