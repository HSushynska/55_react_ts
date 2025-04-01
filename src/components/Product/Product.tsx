import { useEffect } from "react";

import { ProductProps } from "./types";
import './styles.css';

function Product({name, price}: ProductProps) {
  //Unmouting - выполняем действие при размонтировании компонента Product
useEffect(()=>{
  return ()=>{
    console.log('Component will unmount'); 
  }
}, []);
  return (
    <div className="product-card-container">
       <div>Product: {name}</div>
      <div>Price: {price}</div>
    </div>
    
  )
}

export default Product;