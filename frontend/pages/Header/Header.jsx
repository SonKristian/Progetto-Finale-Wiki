// import HeaderDown from "./HeaderDown"
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
//   async function searchProducts(searchContent) { 
//   const response = await fetch(
//     `https://dummyjson.com/products/search?q=${searchContent}` 
//   );
//   const data = await response.json(); 
//   console.log(data.products)
//   return data.products; 
// }

  return (
    <header>
        <nav className="bg-slate-950">
            <div className="flex items-center">
            <a href="">
            <img src="./img/logoSpotlight.svg" alt="logo" className="w-[70px] m-[2rem]"/>
          </a>
            </div>
            <div className="search-icon-bar "> 
                <input type="search" id="searchbar" placeholder="Search for your product" className="w-[600px] rounded-s-lg h-[40px] m-[0.4rem]"/>
                <button className="btn-container" type="button"><SearchIcon /></button>
            </div>
              <div className="form">
          <a href="login.html">
            <button className="btn-container-form" type="button">Login</button>
          </a>
          <a href="register.html">
            <button className="btn-container-form" type="button">Registrazioni</button>
          </a>
        </div>
        <div className="cart">
        <button className="btn-container" type="button">Dark Mode</button>
        </div>
        </nav>
    </header>

  )
}

export default Header