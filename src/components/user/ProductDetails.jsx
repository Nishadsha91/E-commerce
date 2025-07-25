import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ShoppingCart, Heart, ChevronLeft, Star, Shield, Truck } from 'lucide-react';


import { toast } from 'react-toastify';
import { CartWishlistContext } from '../../context/CartWishlistContext';
import { AuthContext } from '../../context/AuthContext';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, addToWishlist, wishlist } = useContext(CartWishlistContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching product:', err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (!user) {
      toast.warning('Please login to add items to your cart.');
      navigate('/login');
      return;
    }
    addToCart({...product, quantity});
  };

  const handleAddToWishlist = () => {
    if (!user) {
      toast.warning('Please login to add items to your wishlist.');
      navigate('/login');
      return;
    }
    addToWishlist(product);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6C63FF]"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-medium text-gray-700">Product not found</h2>
          <button 
            onClick={() => navigate('/products')}
            className="mt-4 px-4 py-2 bg-[#6C63FF] text-white rounded-lg hover:bg-[#4b2990] transition-colors"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  // Sample product images (you would replace with your actual product images)
  const productImages = [
    product.image,
    '/products/boy1.jpg',
    '/baby/product-alt2.jpg',
    '/baby/product-alt3.jpg'
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-[#6C63FF] hover:text-[#4b2990] mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="ml-1">Back to products</span>
        </button>

        {/* Product Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            
            {/* Image Gallery */}
            <div>
              <div className="relative h-155 rounded-lg overflow-hidden mb-4">
                <img 
                  src={productImages[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-[#6C63FF] text-white text-xs font-bold px-3 py-1 rounded-full">
                    New Arrival
                  </span>
                )}
              </div>
              
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className={`w-5 h-5 ${star <= (product.rating || 4.5) ? 'fill-yellow-400 stroke-yellow-400' : 'stroke-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-sm ml-2">({product.reviews || 24} reviews)</span>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-[#6C63FF]">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
                )}
                {product.discount && (
                  <span className="bg-green-100 text-green-800 text-sm font-medium ml-2 px-2 py-0.5 rounded">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
              <p className="text-gray-700 mb-6">{product.description || 'No description available.'}</p>

              {/* Product Meta */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Truck className="w-5 h-5 text-[#6C63FF] mr-2" />
                  <span className="text-sm text-gray-600">Free shipping</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-[#6C63FF] mr-2" />
                  <span className="text-sm text-gray-600">1-year warranty</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center bg-[#6C63FF] hover:bg-[#4b2990] text-white py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={handleAddToWishlist}
                  className={`flex-1 flex items-center justify-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    wishlist.find(item => item.id === product.id) 
                      ? 'bg-pink-100 text-pink-700 border border-pink-300'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
                  }`}>
                  <Heart 
                    className={`w-5 h-5 mr-2 ${
                      wishlist.find(item => item.id === product.id) ? 'fill-pink-500 stroke-pink-500' : 'stroke-gray-500'
                    }`} 
                  />
                  {wishlist.find(item => item.id === product.id) ? 'In Wishlist' : 'Wishlist'}
                </button>
              </div>

              {/* Product Details */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Product Details</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><strong>Category:</strong> {product.category === 'boys' ? 'Boys Clothing' : 
                                              product.category === 'girls' ? 'Girls Clothing' : 'Toys'}</li>
                  <li><strong>Material:</strong> 100% Organic Cotton</li>
                  <li><strong>Age Range:</strong> 0-24 months</li>
                  <li><strong>Care Instructions:</strong> Machine wash cold, tumble dry low</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;