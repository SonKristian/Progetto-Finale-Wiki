import FavoriteIcon from '@mui/icons-material/Favorite';
import "./cards.css"

const Cards = () => {
   return (
       <div className="card">
           <h2>title</h2>
           <p>price €</p>
           <img src="" alt=" " />
           <div className="flex items-end text-white">
           <p className='text-black'>description</p>
           <FavoriteIcon />
           </div>
           </div>
   )
 }

export default Cards