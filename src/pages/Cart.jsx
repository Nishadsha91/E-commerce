import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    // add quantity property if missing
    const cartWithQty = storedCart.map(item => ({ ...item, quantity: item.quantity || 1 }));
    setCart(cartWithQty);
  }, []);

  const updateCartInStorage = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    updateCartInStorage(updatedCart);
  };

  const increaseQty = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartInStorage(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    );
    updateCartInStorage(updatedCart);
  };

  // Calculate total
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) return (
    <div className="p-8 text-center text-gray-600">Your cart is empty</div>
  );

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
          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500 hover:text-red-700">
            Remove
          </button>
        </div>
      ))}

      {/* Total amount */}
      <div className="flex justify-between items-center border-t pt-4 mt-4">
        <span className="font-semibold">Total:</span>
        <span className="text-[#6C63FF] font-bold">₹{totalAmount.toFixed(2)}</span>
      </div>

      {/* Proceed to Payment */}
      <div className="mt-4">
        <Link to="/payment" className="block text-center bg-[#6C63FF] text-white rounded py-2 hover:bg-[#574fd6] transition-colors">
          Proceed to Payment
        </Link>
      </div>
    </div>
  );
}

export default Cart;
