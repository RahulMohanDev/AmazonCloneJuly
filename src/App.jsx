import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BaseComponent from './components/base/base.component'
import Home from './components/home/home.component'
import Cart from './components/cart/cart.component'
import Login from './components/login/login.component'
import Catalogue from './components/home/catalogue/catalogue.component'
import Products from './components/home/products/products.component'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseComponent />,
    children: [
      {
        path: 'home',
        element: <Home />,
        children: [
          {
            path: 'products/:id',
            element: <Products />,
          },
          {
            path: 'catalogue',
            element: <Catalogue/>,
          },
        ],
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login/>,
  },
])

export default function App() {
  return <RouterProvider router={router}></RouterProvider>
}
