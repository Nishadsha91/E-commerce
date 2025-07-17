import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export const CartWishlistContext = createContext();

export const CartWishlistProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [wishlist, setWishlist] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    if (user) {
      loadCartCount(user.id);
      loadWishlist();
    } else {
      clearCartState();
      clearWishlist();
    }
  }, [user]);

  const loadCartCount = async (userId) => {
    try {
      const res = await axios.get(`http://localhost:3000/cart?userId=${userId}`);
      const count = res.data.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setCartCount(count);
    } catch (err) {
      console.error('Failed to load cart count', err);
      setCartCount(0);
    }
  };

  const addToCart = async (product) => {
    if (!user) {
      alert('Please login first!');
      return;
    }
    try {
      const res = await axios.get(`http://localhost:3000/cart?userId=${user.id}&id=${product.id}`);
      if (res.data.length > 0) {
        const existing = res.data[0];
        await axios.patch(`http://localhost:3000/cart/${existing.id}`, {
          quantity: (existing.quantity || 1) + 1
        });
      } else {
        await axios.post('http://localhost:3000/cart', {
          ...product,
          quantity: 1,
          userId: user.id
        });
      }
      loadCartCount(user.id);
    } catch (err) {
      console.error('Add to cart failed', err);
    }
  };

  const clearCart = async () => {
    if (!user) return;
    try {
      const res = await axios.get(`http://localhost:3000/cart?userId=${user.id}`);
      await Promise.all(res.data.map(item =>
        axios.delete(`http://localhost:3000/cart/${item.id}`)
      ));
      setCartCount(0);
    } catch (err) {
      console.error('Failed to clear cart', err);
    }
  };

  const clearCartState = () => {
    setCartCount(0);
  };

  const loadWishlist = () => {
    if (!user) {
      setWishlist([]);
      setWishlistCount(0);
      return;
    }
    const stored = JSON.parse(localStorage.getItem(`wishlist_${user.id}`)) || [];
    setWishlist(stored);
    setWishlistCount(stored.length);
  };

  const addToWishlist = (product) => {
    if (!user) {
      alert('Please login first!');
      return;
    }
    let updated;
    if (wishlist.find(item => item.id === product.id)) {
      updated = wishlist.filter(item => item.id !== product.id);
    } else {
      updated = [...wishlist, product];
    }
    setWishlist(updated);
    localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(updated));
    setWishlistCount(updated.length);
  };

  const removeFromWishlist = (id) => {
    if (!user) return;
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(updated));
    setWishlistCount(updated.length);
  };

  const clearWishlist = () => {
    setWishlist([]);
    setWishlistCount(0);
    if (user) localStorage.removeItem(`wishlist_${user.id}`);
  };

  return (
    <CartWishlistContext.Provider value={{
      wishlist, wishlistCount, addToWishlist, removeFromWishlist,
      cartCount, addToCart, loadCartCount,
      clearWishlist, clearCartState, clearCart
    }}>
      {children}
    </CartWishlistContext.Provider>
  );
};
