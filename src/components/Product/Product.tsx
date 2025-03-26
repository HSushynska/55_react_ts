import { ProductProps } from "./types";
import './styles.css';

function Product({name, price}: ProductProps) {
  return (
    <div className="product-card-container">
      {name}: {price} euro
    </div>
  )
}

export default Product;