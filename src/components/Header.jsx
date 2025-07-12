import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (

    <>

    <header className="flex justify-between items-center bg-white opacity-90 px-7 py-3 shadow-md border-b-4 border-[#c4b5fd] rounded-b-2xl sticky top-0 z-50">
      <div  className="flex items-center">
        <img src="/baby/Logobg.png" alt="Logo" className="h-10 mr-2" />
          
        
      </div>

  <nav className="hidden md:flex gap-4">
    <NavLink to="/" className={({ isActive }) =>`px-3 py-1 font-medium rounded-full transition-all duration-200 ${isActive ? 'bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white shadow-md': 'text-[#333] hover:text-[#7c3aed] hover:bg-[#f4f0ff]'}`}>
      Home
    </NavLink>
    <NavLink to="/clothes" className={({ isActive }) =>`px-3 py-1 font-medium rounded-full transition-all duration-200 ${isActive? 'bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white shadow-md': 'text-[#333] hover:text-[#7c3aed] hover:bg-[#f4f0ff]'}`}>     
     Clothes
    </NavLink>
    <NavLink to="/toys" className={({ isActive }) =>`px-3 py-1 font-medium rounded-full transition-all duration-200 ${isActive? 'bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white shadow-md': 'text-[#333] hover:text-[#7c3aed] hover:bg-[#f4f0ff]'}`}>
      Toys
    </NavLink>
    <NavLink to="/accessories" className={({ isActive }) =>`px-3 py-1 font-medium rounded-full transition-all duration-200 ${isActive? 'bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white shadow-md': 'text-[#333] hover:text-[#7c3aed] hover:bg-[#f4f0ff]'}`}>
      Accessories
    </NavLink>
    <NavLink to="/cart" className={({ isActive }) =>`px-3 py-1 font-medium rounded-full transition-all duration-200 ${isActive? 'bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white shadow-md': 'text-[#333] hover:text-[#7c3aed] hover:bg-[#f4f0ff]'}`}>
      Cart
    </NavLink>
      </nav>

      <div className="hidden md:flex gap-2">
        <NavLink to="/login"className="text-[#333] font-medium px-2 py-1 rounded hover:bg-[#ede9fe] hover:text-[#7c3aed] transition-colors">Login</NavLink>
        <NavLink to="/registration" className="text-[#333] font-medium px-2 py-1 rounded hover:bg-[#ede9fe] hover:text-[#7c3aed] transition-colors">Sign Up</NavLink>
      </div>
    </header>
    </>

  );
}
