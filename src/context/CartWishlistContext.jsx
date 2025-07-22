import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      toast.error('Failed to load cart count');
      setCartCount(0);
    }
  };


  const addToCart = async (product) => {
    if (!user) {
      toast.error('Please login first!');
      return;
    }
    try {
      const res = await axios.get(`http://localhost:3000/cart?userId=${user.id}&id=${product.id}`);
      if (res.data.length > 0) {
        toast.error('Product already in cart!');
        return;
      }
      await axios.post('http://localhost:3000/cart', {
        ...product,
        quantity: 1,
        userId: user.id
      });
      loadCartCount(user.id);
      toast.success('Product added to cart!');
    } catch (err) {
      console.error('Add to cart failed', err);
      toast.error('Failed to add to cart.');
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
      toast.success('Your order placed successfully!');
    } catch (err) {
      toast.error('Failed to clear cart');
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
      toast.warning('Please login to use wishlist!');
      return;
    }

    let updated;
    if (wishlist.find(item => item.id === product.id)) {
      updated = wishlist.filter(item => item.id !== product.id);
      toast.info('Removed from wishlist');
    } else {
      updated = [...wishlist, product];
      toast.success('Added to wishlist!');
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
    toast.info('Removed from wishlist');
  };

  const clearWishlist = () => {
    setWishlist([]);
    setWishlistCount(0);
    if (user) localStorage.removeItem(`wishlist_${user.id}`);
    
  };

  return (
    <CartWishlistContext.Provider
      value={{
        wishlist,
        wishlistCount,
        addToWishlist,
        removeFromWishlist,
        cartCount,
        addToCart,
        loadCartCount,
        clearWishlist,
        clearCartState,
        clearCart
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
};
