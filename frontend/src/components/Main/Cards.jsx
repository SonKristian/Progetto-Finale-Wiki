import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cards = ({product}) => {
   return (
           <div key={product.id} className="card">
           <h2>{product.title}</h2>
           <p>{product.price} €</p>
           <img src={product.images[0]} alt=" " />
           <div className="add">
           <p>{product.description}</p>
           <ShoppingCartIcon />
           </div>
           </div>
   )
 }

export default Cards