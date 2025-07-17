import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartWishlistContext } from '../context/CartWishlistContext';

export default function Payment() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const { clearCart } = useContext(CartWishlistContext);

  const loadCart = async () => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      try {
        const res = await axios.get(`http://localhost:3000/cart?userId=${currentUser.id}`);
        setCartItems(res.data);
        const sum = res.data.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
        setTotal(sum);
      } catch (err) {
        console.error('Failed to load cart', err);
      }
    } else {
      setCartItems([]);
      setTotal(0);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    try {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      const order = {
        id: Date.now(),
        userId: currentUser?.id || null,
        items: cartItems,
        total,
        date: new Date().toISOString()
      };

      await axios.post('http://localhost:3000/orders', order);

      await clearCart();  //  really deletes user's cart items from backend

      alert("Payment successful! Your order has been placed.");
      navigate('/');
    } catch (error) {
      console.error('Payment failed:', error.response || error.message || error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4 text-[#4b2990]">Payment</h2>

      <div className="bg-white rounded shadow p-4 mb-6">
        <h3 className="font-medium text-lg mb-2">Order Summary</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="space-y-1">
            {cartItems.map((item, idx) => (
              <li key={idx} className="flex justify-between text-gray-700">
                <span>{item.name} × {item.quantity || 1}</span>
                <span>₹{item.price * (item.quantity || 1)}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="border-t mt-2 pt-2 flex justify-between font-semibold">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>
      </div>

      <form onSubmit={handlePayment} className="space-y-4">
        <input type="text" placeholder="Full Name" required className="w-full border px-3 py-2 rounded" />
        <input type="text" placeholder="Address" required className="w-full border px-3 py-2 rounded" />
        <input type="text" placeholder="Phone Number" required className="w-full border px-3 py-2 rounded" />
        <button
          type="submit"
          className={`w-full bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white py-2 rounded hover:shadow ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={cartItems.length === 0}
        >
          Pay ₹{total}
        </button>
      </form>
    </div>
  );
}
