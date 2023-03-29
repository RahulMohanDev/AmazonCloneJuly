import { useContext } from 'react'
import CartContext from '../../context/cart.context'

export default function Cart() {
  const { cart } = useContext(CartContext)
//   console.log(cartList);
  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <div>
          {cart.map((item) => {
            return <div>{item.title}</div>
          })}
        </div>
      )}
    </div>
  )
}
