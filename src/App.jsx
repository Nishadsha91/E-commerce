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
import Accessories from './pages/Accessories'

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/cart' element={<Registration/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/clothes' element={<Clothes/>}/>
        <Route path='/toys' element={<Toys/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
      </Routes>
    <Footer/>
    
    </>
  )
}

export default App