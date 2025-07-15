import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import { CartWishlistContext } from '../context/CartWishlistContext';

export default function Header() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { cartCount, wishlistCount } = useContext(CartWishlistContext);

  return (
    <>
      <header className="flex justify-between items-center bg-white opacity-90 px-7 py-3 shadow-md border-b-4 border-[#c4b5fd] rounded-b-2xl sticky top-0 z-50">
        <div className="flex items-center">
          <img src="/baby/Logobg.png" alt="Logo" className="h-10 mr-2" />
        </div>

        <nav className="hidden md:flex gap-4">
          <NavLink to="/" className={({ isActive }) => `px-3 py-1 font-medium rounded-full transition-all duration-200 ${isActive ? 'bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white shadow-md' : 'text-[#333] hover:text-[#7c3aed] hover:bg-[#f4f0ff]'}`}>
            Home
          </NavLink>
          <NavLink to="/clothes" className={({ isActive }) =>`px-3 py-1 font-medium rounded-full transition-all duration-200 ${isActive ? 'bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white shadow-md' : 'text-[#333] hover:text-[#7c3aed] hover:bg-[#f4f0ff]'}`}>
            Clothes
          </NavLink>
          <NavLink to="/toys" className={({ isActive }) =>`px-3 py-1 font-medium rounded-full transition-all duration-200 ${isActive ? 'bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white shadow-md' : 'text-[#333] hover:text-[#7c3aed] hover:bg-[#f4f0ff]'}`}>
            Toys
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => `px-3 py-1 font-medium rounded-full transition-all duration-200 ${isActive ? 'bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white shadow-md'  : 'text-[#333] hover:text-[#7c3aed] hover:bg-[#f4f0ff]'}`}>
            Products
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `px-3 py-1 font-medium rounded-full transition-all duration-200 ${isActive ? 'bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white shadow-md' : 'text-[#333] hover:text-[#7c3aed] hover:bg-[#f4f0ff]'}`}>
            About
          </NavLink>
        </nav>

        <div className="hidden md:flex gap-3 text-[#333] items-center relative">
          <NavLink to="/wishlist" className="relative hover:text-[#7c3aed]">
            <Heart className="w-7 h-6" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#7c3aed] text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </NavLink>
          <NavLink to="/cart" className="relative hover:text-[#7c3aed]">
            <ShoppingCart className="w-7 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#7c3aed] text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </NavLink>

          {isLoggedIn ? (
            <button onClick={logout} className="px-3 py-1 rounded-full border border-[#a78bfa] text-[#7c3aed] text-sm font-medium hover:bg-[#f4f0ff] hover:shadow-md transition-all duration-200">
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login">
                <button className="px-3 py-1 rounded-full border border-[#a78bfa] text-[#7c3aed] text-sm font-medium hover:bg-[#f4f0ff] hover:shadow-md transition-all duration-200">
                  Login
                </button>
              </NavLink>
              <NavLink to="/registration">
                <button className="px-3 py-1 rounded-full bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white text-sm font-medium shadow hover:shadow-md transition-all duration-200">
                  Sign Up
                </button>
              </NavLink>
            </>
          )}
        </div>

        {/* hamburger menu ... (same as before) */}
         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#7c3aed] focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </header>

      {/* mobile menu ... (same as before) */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-1 bg-white shadow rounded-lg px-4 py-2">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block px-2 py-1 text-[#333] hover:text-[#7c3aed]">Home</NavLink>
          <NavLink to="/clothes" onClick={() => setIsMenuOpen(false)} className="block px-2 py-1 text-[#333] hover:text-[#7c3aed]">Clothes</NavLink>
          <NavLink to="/toys" onClick={() => setIsMenuOpen(false)} className="block px-2 py-1 text-[#333] hover:text-[#7c3aed]">Toys</NavLink>
          <NavLink to="/cart" onClick={() => setIsMenuOpen(false)} className="block px-2 py-1 text-[#333] hover:text-[#7c3aed]">Cart</NavLink>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className="block px-2 py-1 text-[#333] hover:text-[#7c3aed]">About</NavLink>

          <div className="flex flex-col gap-1 pt-2 border-t">
            {isLoggedIn ? (
              <button
                onClick={() => {
                    logout();
                     setIsMenuOpen(false);
                  }}

                className="block px-2 py-1 text-left text-[#333] hover:text-[#7c3aed]"
>
                Logout
              </button>
            ) : (
              <>
                <NavLink to="/login" onClick={() => setIsMenuOpen(false)} className="block px-2 py-1 text-[#333] hover:text-[#7c3aed]">Login</NavLink>
                <NavLink to="/registration" onClick={() => setIsMenuOpen(false)} className="block px-2 py-1 text-[#333] hover:text-[#7c3aed]">Sign Up</NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

