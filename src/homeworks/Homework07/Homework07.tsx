import { v4 } from "uuid";

import ProductCard from "../../components/Product/Product";
import { products } from "./data";
import './styles.css'
import { Product } from "./types";

function Homework07() {
  const productArray = products.map((item: Product) => {
    return <ProductCard
      key={v4()}
      name={item.name}
      price={item.price} />
  })

return (
    <div className='cards-wrapper'>
      <h1>Products</h1>
      {productArray}
    </div>
    
  )
}

export default Homework07
