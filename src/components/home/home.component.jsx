import { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import ProductsContext from '../../context/products'

export default function Home() {
  const navigate = useNavigate()
  const { productList } = useContext(ProductsContext)
  return (
    <div>
      <h1>Welcome to amazon</h1>
      <button
        onClick={() => {
          navigate('/home/catalogue')
        }}
      >
        Products
      </button>
      <Outlet></Outlet>
    </div>
  )
}
