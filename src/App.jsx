import React from 'react'

import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Header from './components/Header'
import Products from './pages/Products'
import Footer from './components/Footer'
import Clothes from './pages/Clothes'
import Toys from './pages/Toys'
import About from './pages/About'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Wishlist from './pages/wishlist'
import Payment from './pages/Payment'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header/>
    <main className='flex-1'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/clothes' element={<Clothes/>}/>
        <Route path='/toys' element={<Toys/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/payment' element={<Payment/>}/>
        

      </Routes>
      </main>
    <Footer/>
    
    </div>
  )
}

export default App