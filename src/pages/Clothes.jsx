import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Clothes() {

  return (
    <div className="px-4 md:px-12 py-8 space-y-12">

      {/* Hero / Banner */}
      <section className="relative w-full h-60 md:h-[350px] rounded-xl overflow-hidden shadow-md">
        <img 
          src="/baby/Baby1.jpg" 
          alt="Baby clothes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow">
            Explore Cute & Cozy Clothes
          </h1>
          <p className="text-sm md:text-lg text-gray-200 drop-shadow">
            Hand-picked collection for boys & girls – comfort meets style!
          </p>
        </div>
      </section>

      

        
      {/* Boys Clothes */}
      <section>
        <h2 className="text-xl md:text-3xl font-semibold mb-6 text-[#4b2990] text-center">Boys Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4  ">


          <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">

            <div className="overflow-hidden rounded">
              <img 
                src="/products/boy1.jpg" 
                alt="Boy dress" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
             </div>
                <h3 className="text-gray-800 text-sm font-medium">Casual Boy Dress</h3>
               <p className="text-[#6C63FF] font-semibold text-sm">₹299</p>
               <Link to="/products/1" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/boy2.jpg" 
                alt="Boy dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Printed T-shirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹199</p>
            <Link to="/products/2" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div> 

          <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/boy3.jpg" 
                alt="Boy dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Printed T-shirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹199</p>
            <Link to="/products/2" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div> 

          <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/boy4.jpg" 
                alt="Boy dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Printed T-shirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹199</p>
            <Link to="/products/2" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div> 

          <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/boy5.jpg" 
                alt="Boy dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Printed T-shirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹199</p>
            <Link to="/products/2" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div> 

          <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/boy6.jpg" 
                alt="Boy dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Printed T-shirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹199</p>
            <Link to="/products/2" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div> 

          <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/boy7.jpg" 
                alt="Boy dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Printed T-shirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹199</p>
            <Link to="/products/2" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div> 

          <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/boy8.jpg" 
                alt="Boy dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Printed T-shirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹199</p>
            <Link to="/products/2" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div> 

          <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/boy9.jpg" 
                alt="Boy dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Printed T-shirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹199</p>
            <Link to="/products/2" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div> 

          <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/boy10.jpg" 
                alt="Boy dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Printed T-shirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹199</p>
            <Link to="/products/2" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div> 

          <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/boy11.jpg" 
                alt="Boy dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Printed T-shirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹199</p>
            <Link to="/products/2" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div> 

          <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/boy12.jpg" 
                alt="Boy dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Printed T-shirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹199</p>
            <Link to="/products/2" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div> 


        </div>
      </section>

      {/* Girls Clothes */}
      <section>
        <h2 className="text-xl md:text-3xl font-semibold mb-6 text-[#4b2990] text-center">Girls Collection</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/girl1.jpg" 
                alt="Girl dress" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Floral Dress</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹399</p>
            <Link to="/products/3" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/girl2.jpg" 
                alt="Girl dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Casual Top & Skirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹249</p>
            <Link to="/products/4" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div>

           <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/girl3.jpg" 
                alt="Girl dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Casual Top & Skirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹249</p>
            <Link to="/products/4" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div>

           <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/girl4.jpg" 
                alt="Girl dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Casual Top & Skirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹249</p>
            <Link to="/products/4" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div>

           <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/girl5.jpg" 
                alt="Girl dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Casual Top & Skirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹249</p>
            <Link to="/products/4" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div>

           <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/girl6.jpg" 
                alt="Girl dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Casual Top & Skirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹249</p>
            <Link to="/products/4" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div>

           <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/girl7.jpg" 
                alt="Girl dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Casual Top & Skirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹249</p>
            <Link to="/products/4" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div>

           <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/girl8.jpg" 
                alt="Girl dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Casual Top & Skirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹249</p>
            <Link to="/products/4" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div>

           <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/girl9.jpg" 
                alt="Girl dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Casual Top & Skirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹249</p>
            <Link to="/products/4" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div>

           <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/girl10.jpg" 
                alt="Girl dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Casual Top & Skirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹249</p>
            <Link to="/products/4" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div>

           <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/girl11.jpg" 
                alt="Girl dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Casual Top & Skirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹249</p>
            <Link to="/products/4" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div>

           <div className="bg-white rounded-lg shadow hover:shadow-lg p-3 space-y-2">
            <div className="overflow-hidden rounded">
              <img 
                src="/products/girl12.jpg" 
                alt="Girl dress 2" 
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-800 text-sm font-medium">Casual Top & Skirt</h3>
            <p className="text-[#6C63FF] font-semibold text-sm">₹249</p>
            <Link to="/products/4" className="block text-center bg-[#6C63FF] text-white rounded py-1 text-sm hover:bg-[#574fd6] transition-colors">View</Link>
          </div>

          


        </div>
      </section>
    </div>
  );
}

export default Clothes;
