// import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import './App.css'

import { NavBar } from './Components/NavBar/NavBar.jsx'
import { Home } from './Page/Home/Home.jsx'
import { Cart } from './Page/Cart/Cart.jsx'
import { PlaceOrder } from './Page/PlaceOrder/PlaceOrder.jsx'

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}




export default App
