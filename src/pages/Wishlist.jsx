import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Trash } from 'lucide-react';
import { CartWishlistContext } from '../context/CartWishlistContext';

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(CartWishlistContext);

  return (
    <div className="px-4 md:px-12 py-8 space-y-8">
      <h1 className="text-2xl md:text-4xl font-bold text-[#4b2990] text-center">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600">Your wishlist is empty. Start exploring products!</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wishlist.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2 relative">
              
              {/* Remove button */}
              <button 
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-55 right-5 text-red-500 hover:text-red-700"
                title="Remove"
              >
                <Trash className="w-7 h-8"/>
              </button>

              <div className="overflow-hidden rounded">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-gray-800 text-sm font-medium">{item.name}</h3>
              <p className="text-[#6C63FF] font-semibold text-sm">₹{item.price}</p>

              <Link to={`/products/${item.id}`} className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">
                View Product
              </Link>

              {/* Optional: Add to Cart button later */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
