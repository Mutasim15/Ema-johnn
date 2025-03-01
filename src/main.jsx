import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Home from './components/Layout/Home.jsx';
import Order from './components/Order/Order.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import cartProductsLoader from './components/Loaders/cartProductsLoader.js';

const router=createBrowserRouter([
  {path:'/',
  element:<Home></Home>,
  children:[
    {
      path:'/shop',
      element:<Shop></Shop>
    },
    {
      path:'/orders',
      element:<Order></Order>,
      loader:cartProductsLoader
    },
    {
      path:'inventory',
      element:<Inventory></Inventory>
    },
    {
      path:'login',
      element:<Login></Login>
    }
  ]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
   
  </React.StrictMode>,
)
