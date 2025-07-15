
// src/context/CartWishlistContext.jsx
import React, { createContext , useState,useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "./AuthContext";


export const CartWishlistContext = createContext();

export const CartWishlistProvider =({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);

  const addToCart = async (product) => {
    if (!isLoggedIn) {
      alert('Please log in first to add items to cart');
      return;
    }
    try {
      const newItem = { ...product, quantity: 1 };
      const res = await axios.post('http://localhost:3000/cart', newItem);
      setCart(prev => [...prev, res.data]);
    } catch (err) {
      console.error('Failed to add to cart:', err);
    }
  };

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist(prev => [...prev, product]);
    }
  };

  return (
    <CartWishlistContext.Provider value={{ cart, wishlist, addToCart, addToWishlist }}>
      {children}
    </CartWishlistContext.Provider>
  );
}

//   // addToCart logic
//   const addToCart = async (product) => {
//     try {
//       // Check if product already in cart
//       const res = await axios.get(`http://localhost:3000/cart?id=${product.id}`);
//       if (res.data.length > 0) {
//         const item = res.data[0];
//         // Update quantity
//         await axios.patch(`http://localhost:3000/cart/${item.id}`, {
//           quantity: item.quantity + 1
//         });
//       } else {
//         // Add with quantity 1
//         await axios.post(`http://localhost:3000/cart`, { ...product, quantity: 1 });
//       }
//       alert('Added to cart!');
//     } catch (err) {
//       console.error('Add to cart failed', err);
//       alert('Failed to add to cart');
//     }
//   };

//   // (Optional) addToWishlist logic if you want
//   const addToWishlist = (product) => {
//     let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//     if (!wishlist.find(item => item.id === product.id)) {
//       wishlist.push(product);
//       localStorage.setItem('wishlist', JSON.stringify(wishlist));
//       alert('Added to wishlist!');
//     } else {
//       alert('Already in wishlist!');
//     }
//   };

//   return (
//     <CartWishlistContext.Provider value={{ addToCart, addToWishlist }}>
//       {children}
//     </CartWishlistContext.Provider>
//   );
// }

