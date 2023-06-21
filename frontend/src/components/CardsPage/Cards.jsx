import FavoriteIcon from '@mui/icons-material/Favorite';
import "./cards.css"

const Cards = () => {
   return (
    <div className='flex items-center justify-center'>
       <div className="card-home">
           <h2>title</h2>
           <p>price €</p>
           <img src="" alt=" " />
           <div className="flex items-end text-white">
           <p className='text-black'>description</p>
           <FavoriteIcon />
           </div>
           </div>
    </div>
   )
 }

export default Cards