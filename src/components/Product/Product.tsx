import { ProductProps } from "./types";
import './styles.css';

function Product({name, price}: ProductProps) {
  return (
    <div className="product-card-container">
       <div>Product: {name}</div>
      <div>Price: {price}</div>
    </div>
    
  )
}

export default Product;