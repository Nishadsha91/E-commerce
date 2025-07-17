import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function Cart() {
  const {user} = useContext(AuthContext)
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:3000/cart?userId=${user.id}`)
        .then(res => setCart(res.data))
        .catch(err => console.error(err));
    } else {
      setCart([]); // logout: clear items
    }
  }, [user]);

  if (!user) {
    return <div className="text-center mt-10 text-gray-600">You are not logged in. Please login to see your cart.</div>;
  }
  

  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${id}`);
      setCart(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      console.error('Remove item failed', err);
    }
  };

  const updateQty = async (id, newQty) => {
  if (newQty < 1) return;

  try {
    console.log(`PATCH /cart/${id} -> quantity:`, newQty);
    const res = await axios.patch(`http://localhost:3000/cart/${id}`, { quantity: newQty });
    console.log('Server responded:', res.data);
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  } catch (err) {
    console.error('Update qty failed:', err);
    // Prevent reload in error
    return false;
  }
};

  const increaseQty = (id) => {
  try {
    const item = cart.find(i => i.id === id);
    if (item) {
      const newQty = (item.quantity || 1) + 1;
      console.log('Increasing quantity:', item.id, 'to', newQty);
      updateQty(item.id, newQty);
    }
  } catch (err) {
    console.error('Error in increaseQty:', err);
  }
};


  const decreaseQty = (id) => {
    const item = cart.find(i => i.id === id);
    if (item && (item.quantity || 1) > 1) updateQty(id, item.quantity - 1);
  };

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

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
            <button type="button" onClick={() => decreaseQty(item.id)} className="px-2 py-1 border rounded">-</button>
            <span>{item.quantity || 1}</span>
            <button type="button" onClick={() => increaseQty(item.id)} className="px-2 py-1 border rounded">+</button>
          </div>
          <button type="button" onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
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
