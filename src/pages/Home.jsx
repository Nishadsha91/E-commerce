import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';


function Home(){

   const slides = [
    {
      image: "/baby/Momholding.jpg",
      title: "Shopping love, comfort, and care for your baby",
      subtitle: "Soft fabrics, cute designs, and perfect comfort for your little ones.",
      button: "Shop Now",
    },
    {
      image: "/baby/baby3.jpg",
      title: "Stylish & Soft Fabrics for Babies",
      subtitle: "Keep your baby cozy and trendy every day.",
      button: "Explore Collection",
    },
     {
      image: "/baby/baby5.jpg",
      title: "Cute Toy's for Little Ones",
      subtitle: "Caps, bibs, and more – perfect finishing touch.",
      button: "Shop Now",
    },
  ];

  // Current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-change slide every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [slides.length]);

  return (
    <>
    <div className="px-4 md:px-12 py-8 space-y-12">
      
      {/* Hero Section */}
    <section className="relative w-full h-80 md:h-[550px] rounded-xl overflow-hidden shadow-lg">

      <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-full object-cover"/>

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">

        <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 drop-shadow">{slides[currentSlide].title}</h1>

        <p className="text-sm md:text-lg text-gray-200 mb-4 max-w-xl drop-shadow">{slides[currentSlide].subtitle}</p>

        <Link to="/products" 
          className="inline-block bg-[#6C63FF] text-white px-5 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-[#574fd6] transition-colors"
        >
          {slides[currentSlide].button}
        </Link>
      </div>
    </section>

    <section className="text-center space-y-4 max-w-3xl mx-auto">
  <h2 className="text-2xl md:text-3xl font-semibold text-[#4b2990]">Welcome to Olea Baby Store</h2>
  <p className="text-gray-600">
    Discover the perfect blend of comfort, style, and love for your little ones. From soft cotton clothes to adorable toys and accessories, we bring carefully selected products that your baby (and you) will love!
  </p>
  <Link to="/about" className="inline-block bg-[#6C63FF] text-white px-6 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-[#574fd6] transition-colors">
    Learn More About Us
  </Link>
</section>



      <section>
        
  <h2 className="text-xl md:text-3xl font-semibold mb-15 text-[#4b2990] text-center">Shop by Category</h2>
  <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-center">

    <Link to="/clothes" className="bg-white rounded-lg shadow hover:shadow-md p-3 space-y-3">
      <img src="/baby/cloth.jpg" alt="Clothes" className="w-full h-75 object-cover rounded"/>
      <span className="font-medium text-gray-800">Clothes</span>
    </Link>

    <Link to="/toys" className="bg-white rounded-lg shadow hover:shadow-md p-3 space-y-3">
      <img src="/toys/toys.jpg" alt="Toys" className="w-full h-75 object-cover rounded"/>
      <span className="font-medium text-gray-800">Toys</span>
    </Link>

  </div>
</section>

      


<section className="bg-[#6C63FF] text-white rounded-xl shadow-lg p-6 text-center space-y-3">
  <h2 className="text-2xl md:text-3xl font-semibold">Ready to explore more?</h2>
  <p className="text-gray-100">Browse our full collection and find something special for your baby today.</p>
  <Link to="/products" className="inline-block bg-white text-[#6C63FF] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
    View All Products
  </Link>
</section>


      </div>
    
    </>
  );
};

export default Home;