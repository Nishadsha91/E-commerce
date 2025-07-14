// src/pages/Payment.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
    const sum = storedCart.reduce((acc, item) => acc + item.price, 0);
    setTotal(sum);
  }, []);

  const handlePayment = (e) => {
    e.preventDefault();
    // fake payment process
    alert("Payment successful! Thank you for your purchase.");
    localStorage.removeItem('cart'); // clear cart
    navigate('/'); // go to home or success page
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
                <span>{item.name}</span>
                <span>₹{item.price}</span>
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
        
       
        <button type="submit" className="w-full bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white py-2 rounded hover:shadow">
          Pay ₹{total}
        </button>
      </form>
    </div>
  );
}
