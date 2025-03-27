import { v4 } from "uuid";

import Product from "../../components/Product/Product";
import { products } from "./data";
import './styles.css'

function Homework07() {
  const productArray = products.map((item) => {
    return <Product
      key={v4()}
      name={item.name}
      price={item.price} />
  })

return (
    <div className='cards-wrapper'>
      {productArray}
    </div>
  )
}

export default Homework07
