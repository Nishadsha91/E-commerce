import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error('Error fetching product:', err))
  }, [id])

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const alreadyInCart = cart.find(item => item.id === product.id)
    if (alreadyInCart) {
      alert('Already in cart')
    } else {
      cart.push(product)
      localStorage.setItem('cart', JSON.stringify(cart))
      alert('Added to cart!')
    }
  }

  if (!product) return <div className="p-8">Loading...</div>

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4 bg-white rounded shadow mt-6">
      <img src={product.image} alt={product.name} className="w-full rounded shadow" />
      <h2 className="text-xl md:text-2xl font-semibold">{product.name}</h2>
      <p className="text-[#6C63FF] font-bold text-lg">₹{product.price}</p>
      {/* optional */}
      <p className="text-gray-600">{product.description || 'No description available.'}</p>
      <button
        onClick={handleAddToCart}
        className="px-4 py-2 bg-[#6C63FF] text-white rounded hover:bg-[#574fd6] transition-colors"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductDetails
