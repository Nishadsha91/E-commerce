import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

function Toys() {
  const [products, setProducts] = useState([])
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err))

    const stored = JSON.parse(localStorage.getItem('wishlist')) || []
    setWishlist(stored)
  }, [])

  const addToWishlist = (product) => {
    let updated
    if (wishlist.find(item => item.id === product.id)) {
      updated = wishlist.filter(item => item.id !== product.id)
    } else {
      updated = [...wishlist, product]
    }
    setWishlist(updated)
    localStorage.setItem('wishlist', JSON.stringify(updated))
  }

  // Filter toys only
  const toys = products.filter(p => p.category === 'toys')

  return (
    <div className="px-4 md:px-12 py-8 space-y-12">

      {/* Hero section */}
      <section className="relative w-full h-60 md:h-[600px] rounded-xl overflow-hidden shadow-md">
        <img 
          src="/toys/kids.jpg"
          alt="Toys"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow">
            Discover Fun & Safe Toys
          </h1>
          <p className="text-sm md:text-lg text-gray-200 drop-shadow">
            Bring smiles and creativity with our adorable toy collection!
          </p>
        </div>
      </section>

      {/* Toys Collection */}
      <section>
        <h2 className="text-xl md:text-3xl font-semibold mb-6 text-[#4b2990] text-center">Toys Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {toys.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2 relative">
              
              <button 
                onClick={() => addToWishlist(product)}
                className="absolute top-55 right-5 text-[#6C63FF] hover:text-[#4b2990]"
              >
                <Heart 
                  fill={wishlist.find(item => item.id === product.id) ? '#ff0000' : 'none'}
                  stroke="#000000ff"
                  className="w-7 h-8"
                />
              </button>

              <div className="overflow-hidden rounded">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-gray-800 text-sm font-medium">{product.name}</h3>
              <p className="text-[#6C63FF] font-semibold text-sm">₹{product.price}</p>
              <Link to={`/products/${product.id}`} className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">
                View
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Toys
