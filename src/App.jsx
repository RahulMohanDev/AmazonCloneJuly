import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BaseComponent from './components/base/base.component'
import Home from './components/home/home.componet'
import Cart from './components/cart/cart.componet'
import Login from './components/login/login.componen'

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
            path: 'product',
            element: <h1>The is product</h1>,
          },
          {
            path: 'catalog',
            element: <h1>The is catalog</h1>,
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
