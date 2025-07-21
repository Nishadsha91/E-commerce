import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Truck, CheckCircle, Clock, XCircle, ShoppingBag, Home } from 'lucide-react';

const OrderPage = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?.id) return;

      try {
        const res = await axios.get(`http://localhost:3000/orders?userId=${user.id}`);
        setOrders(res.data.reverse()); // latest first
      } catch (err) {
        console.error('Failed to fetch orders', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-blue-500" />;
      default:
        return <ShoppingBag className="w-5 h-5 text-gray-500" />;
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center">
        <ShoppingBag className="w-12 h-12 text-gray-300 mb-4" />
        <p className="text-gray-500">Loading your orders...</p>
      </div>
    </div>
  );

  if (!orders.length) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
      <h3 className="text-xl font-medium text-gray-700 mb-2">No orders yet</h3>
      <p className="text-gray-500 mb-6">You haven't placed any orders with us</p>
      <Link 
        to="/products" 
        className="px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white rounded-lg shadow hover:shadow-md transition-all"
      >
        Start Shopping
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center">
            <ShoppingBag className="w-8 h-8 mr-3 text-purple-600" />
            Your Order History
          </h2>
          <Link 
            to="/" 
            className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
          >
            <Home className="w-5 h-5 mr-1" />
            Back Home
          </Link>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.orderId} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Order #{order.orderId}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Placed on {new Date(order.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-0 flex items-center">
                    {getStatusIcon(order.status)}
                    <span className={`ml-2 text-sm font-medium ${
                      order.status.toLowerCase() === 'delivered' ? 'text-green-600' :
                      order.status.toLowerCase() === 'shipped' ? 'text-blue-600' :
                      order.status.toLowerCase() === 'processing' ? 'text-yellow-600' :
                      order.status.toLowerCase() === 'cancelled' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h4 className="sr-only">Items</h4>
                  <ul className="divide-y divide-gray-200">
                    {order.items.map((item) => (
                      <li key={item.id} className="py-4 flex">
                        <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={item.image || '/placeholder-product.jpg'}
                            alt={item.name}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-4 flex-1 flex flex-col sm:flex-row justify-between">
                          <div>
                            <h5 className="text-base font-medium text-gray-900">{item.name}</h5>
                            <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
                          </div>
                          <p className="mt-2 sm:mt-0 text-base font-medium text-gray-900">
                            ₹{item.price.toFixed(2)}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {order.items.length} item{order.items.length > 1 ? 's' : ''}
                  </div>
                  <div className="text-lg font-bold text-gray-900">
                    Total: ₹{order.totalAmount.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;