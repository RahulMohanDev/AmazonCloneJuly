import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsContext from "../../../context/products";

export default function Products() {
  const {id} = useParams();
  const {productList} = useContext(ProductsContext);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(()=>{
    setCurrentProduct(productList.find((product)=>product.id===Number(id)));
  },[id, productList]);

  return (
    <div>
        <h1>Product Details</h1>
        <div>
            <img src={currentProduct?.image} alt={currentProduct?.title} />
            <h2>{currentProduct?.title}</h2>
            <p>{currentProduct?.description}</p>
            <p>{currentProduct?.price}</p>
        </div>
    </div>
  );
}