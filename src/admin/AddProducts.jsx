import React, { useState } from 'react';
import Layout from '../components/admin/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/products', {
        ...product,
        price: parseFloat(product.price),
        stock: parseInt(product.stock)
      });
      navigate('/admin/products');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="w-full px-4 py-2 border rounded"
            value={product.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="w-full px-4 py-2 border rounded"
            value={product.category}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full px-4 py-2 border rounded"
            value={product.price}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            className="w-full px-4 py-2 border rounded"
            value={product.stock}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Product
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default AddProduct;
