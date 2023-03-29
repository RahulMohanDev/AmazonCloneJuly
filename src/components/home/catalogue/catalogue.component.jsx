import { useContext } from 'react'
import ProductsContext from '../../../context/products'
import ProductCard from './productCard/productCard.component'

export default function Catalogue() {
  const { productList } = useContext(ProductsContext)
  return (
    <div>
      <h1>Here are all our products</h1>
      <div
        className={{
          display: 'flex',
        }}
      >
        {productList.map((product) => {
          return (
            <ProductCard
              id={product.id}
              title={product.title}
              image={product.image}
              price={product}
              key={product.id}
            ></ProductCard>
          )
        })}
      </div>
    </div>
  )
}
