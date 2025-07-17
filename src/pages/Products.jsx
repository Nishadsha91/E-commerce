import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState(''); 

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  //  Filter + search + sort 
  const filteredProducts = useMemo(() => {
    return products
      .filter(p => (category === 'all' || p.category === category) && p.name.toLowerCase().includes(search.toLowerCase()))


      .sort((a, b) => {
        if (sortOrder === 'asc') return a.price - b.price;
        if (sortOrder === 'desc') return b.price - a.price;
        return 0;
      });
  }, [products, search, category, sortOrder]);

  return (
    <div className="px-4 md:px-12 py-8 space-y-6 max-w-7xl mx-auto">

      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-[#4b2990]">All Products</h1>

      {/* Controls */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        <input
          type="text"
          
          className="border px-3 py-1 rounded w-70 "
          placeholder="Search products by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-3 py-1 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="boys">Boys Clothes</option>
          <option value="girls">Girls Clothes</option>
          <option value="toys">Toys</option>
         
        </select>

        <select
          className="border px-3 py-1 rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>

        <button
          onClick={() => { setSearch(''); setCategory('all'); setSortOrder(''); }}
          className="border px-3 py-1 rounded hover:bg-gray-100"
        >
          Reset
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img
                src={product.image || '/placeholder.jpg'}
                alt={`Image of ${product.name}`}
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">{product.name}</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹{product.price}</p>
            <Link
              to={`/products/${product.id}`}
              className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors"
            >
              View
            </Link>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
