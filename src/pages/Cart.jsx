import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const res = await axios.get('http://localhost:3000/cart');
      setCart(res.data);
    } catch (err) {
      console.error('Failed to load cart', err);
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${id}`);
      setCart(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      console.error('Remove item failed', err);
    }
  };

  const increaseQty = async (id) => {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    const newQty = item.quantity + 1;

    try {
      await axios.patch(`http://localhost:3000/cart/${id}`, { quantity: newQty });
      setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: newQty } : i));
    } catch (err) {
      console.error('Increase qty failed', err);
    }
  };

  const decreaseQty = async (id) => {
    const item = cart.find(i => i.id === id);
    if (!item || item.quantity <= 1) return;
    const newQty = item.quantity - 1;

    try {
      await axios.patch(`http://localhost:3000/cart/${id}`, { quantity: newQty });
      setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: newQty } : i));
    } catch (err) {
      console.error('Decrease qty failed', err);
    }
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <div className="p-8 text-center text-gray-600">Your cart is empty</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      {cart.map(item => (
        <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
          <div className="flex items-center space-x-4">
            <img src={item.image} alt={item.name} className="w-20 rounded" />
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-[#6C63FF] font-bold">₹{item.price}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={() => decreaseQty(item.id)} className="px-2 py-1 border rounded">-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)} className="px-2 py-1 border rounded">+</button>
          </div>
          <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
            Remove
          </button>
        </div>
      ))}

      <div className="flex justify-between items-center border-t pt-4 mt-4">
        <span className="font-semibold">Total:</span>
        <span className="text-[#6C63FF] font-bold">₹{totalAmount.toFixed(2)}</span>
      </div>

      <div className="mt-4">
        <Link to="/payment" className="block text-center bg-[#6C63FF] text-white rounded py-2 hover:bg-[#574fd6] transition-colors">
          Proceed to Payment
        </Link>
      </div>
    </div>
  );
}

export default Cart;
