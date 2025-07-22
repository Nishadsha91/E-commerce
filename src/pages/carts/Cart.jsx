import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Trash2, ChevronLeft, ShoppingCart } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';


function Cart() {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:3000/cart?userId=${user.id}`)
        .then(res => {
          setCart(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    } else {
      setCart([]);
      setLoading(false);
    }
  }, [user]);

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
      await axios.patch(`http://localhost:3000/cart/${id}`, { quantity: newQty });
      setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    } catch (err) {
      console.error('Update qty failed:', err);
      return false;
    }
  };

  const increaseQty = (id) => {
    const item = cart.find(i => i.id === id);
    if (item) {
      const newQty = (item.quantity || 1) + 1;
      updateQty(item.id, newQty);
    }
  };

  const decreaseQty = (id) => {
    const item = cart.find(i => i.id === id);
    if (item && (item.quantity || 1) > 1) {
      updateQty(id, item.quantity - 1);
    }
  };

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const shippingFee = totalAmount > 2000 ? 0 : 99;
  const grandTotal = totalAmount + shippingFee;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6C63FF]"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md">
          <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6">Please login to view your cart items</p>
          <Link 
            to="/login" 
            className="inline-block bg-[#6C63FF] hover:bg-[#4b2990] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-xl/30 text-center max-w-md">
          <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet</p>
          <Link 
            to="/products" 
            className="inline-block bg-[#6C63FF] hover:bg-[#4b2990] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Link to="/products" className="flex items-center text-[#6C63FF] hover:text-[#4b2990]">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Continue Shopping
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-[#4b2990] ml-6">Your Shopping Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="divide-y divide-gray-200">
                {cart.map(item => (
                  <div key={item.id} className="p-6 flex flex-col sm:flex-row">
                    <div className="flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="mt-4 sm:mt-0 sm:ml-6 flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                          <p className="mt-1 text-[#6C63FF] font-bold">₹{item.price}</p>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center">
                        <button 
                          onClick={() => decreaseQty(item.id)}
                          className="px-3 py-1 border border-gray-300 rounded-l-lg bg-gray-100 hover:bg-gray-200 text-gray-700"
                          disabled={(item.quantity || 1) <= 1}
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border-t border-b border-gray-300 bg-white text-center w-12">
                          {item.quantity || 1}
                        </span>
                        <button 
                          onClick={() => increaseQty(item.id)}
                          className="px-3 py-1 border border-gray-300 rounded-r-lg bg-gray-100 hover:bg-gray-200 text-gray-700"
                        >
                          +
                        </button>
                      </div>

                      <div className="mt-4 text-right">
                        <p className="text-gray-900 font-medium">
                          ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{totalAmount.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingFee === 0 ? 'FREE' : `₹${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-lg font-medium">Total</span>
                  <span className="text-lg font-bold text-[#6C63FF]">₹{grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6">
                <Link 
                  to="/payment" 
                  className="block w-full bg-[#6C63FF] hover:bg-[#4b2990] text-white py-3 px-4 rounded-lg font-medium text-center transition-colors shadow-md"
                >
                  Proceed to Checkout
                </Link>
              </div>

              <div className="mt-4 text-center text-sm text-gray-500">
                or{' '}
                <Link to="/products" className="text-[#6C63FF] hover:text-[#4b2990] font-medium">
                  Continue Shopping
                </Link>
              </div>
            </div>

            
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;