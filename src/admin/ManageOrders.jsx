import React, { useEffect, useState } from 'react';
import Layout from '../components/admin/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FiEdit, FiSearch, FiFilter } from 'react-icons/fi';

function ManageOrders() {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch orders and users
    Promise.all([
      axios.get("http://localhost:3000/orders"),
      axios.get("http://localhost:3000/users")
    ])
    .then(([ordersRes, usersRes]) => {
      setOrders(ordersRes.data);
      setUsers(usersRes.data);
    })
    .catch(err => console.error("Error fetching data", err));
  }, []);

  const getCustomerName = (userId) => {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'Unknown';
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = getCustomerName(order.userId).toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusOptions = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

  return (
    <Layout>
      <div className="p-2 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Order Management</h1>
            <p className="text-gray-600 mt-2">View and manage customer orders</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl  border border-gray-100 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by customer..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <div className="relative">
                <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex items-end">
              <span className="text-sm text-gray-500">
                {filteredOrders.length} orders found
              </span>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl shadow-xl/30 border border-gray-300 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th className="py-3 px-6 font-medium text-gray-700">Order ID</th>
                  <th className="py-3 px-6 font-medium text-gray-700">Customer</th>
                  <th className="py-3 px-6 font-medium text-gray-700">Total</th>
                  <th className="py-3 px-6 font-medium text-gray-700">Status</th>
                  <th className="py-3 px-6 font-medium text-gray-700">Date</th>
                  <th className="py-3 px-6 font-medium text-gray-700 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-800 font-medium">{order.id}</td>
                    <td className="py-4 px-6 text-gray-600">{getCustomerName(order.userId)}</td>
                    <td className="py-4 px-6 text-gray-800 font-medium">₹{order.total.toLocaleString()}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{new Date(order.date).toLocaleDateString()}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => navigate(`/admin/updateorder/${order.id}`)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        <FiEdit size={14} />
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredOrders.length === 0 && (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-gray-500">
                      No orders match your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ManageOrders;