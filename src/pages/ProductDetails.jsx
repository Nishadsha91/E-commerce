import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartWishlistContext } from '../context/CartWishlistContext';
import { AuthContext } from '../context/AuthContext';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, addToWishlist } = useContext(CartWishlistContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error('Error fetching product:', err));
  }, [id]);

  if (!product) return <div className="p-8">Loading...</div>;

  //check login before adding to cart
  const handleAddToCart = () => {
    if (!user) {
      alert('Please login to add items to your cart.');
      navigate('/login');
      return;
    }
    addToCart(product);
  };

  // check login before adding to wishlist
  const handleAddToWishlist = () => {
    if (!user) {
      alert('Please login to add items to your wishlist.');
      navigate('/login');
      return;
    }
    addToWishlist(product);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4 bg-white rounded shadow mt-6">
      <img src={product.image} alt={product.name} className="w-full rounded shadow" />
      <h2 className="text-xl md:text-2xl font-semibold">{product.name}</h2>
      <p className="text-[#6C63FF] font-bold text-lg">₹{product.price}</p>
      <p className="text-gray-600">{product.description || 'No description available.'}</p>

      <button 
        onClick={handleAddToCart} 
        className="bg-blue-500 text-white px-2 py-1 rounded"
      >
        Add to Cart
      </button>

      <button 
        onClick={handleAddToWishlist} 
        className="bg-pink-500 text-white px-2 py-1 rounded ml-2"
      >
        Add to Wishlist
      </button>
    </div>
  );
}

export default ProductDetails;
