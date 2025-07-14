import React from 'react'

function Footer() {
  return (
    // <footer className="bg-[#f3e8ff] text-gray-700 py-10 mt-10 rounded-t-2xl shadow-inner">
       <footer className="bg-[#f3e8ff] text-gray-700 pt-10 pb-6 mt-10 rounded-t-2xl shadow-inner">
         <div className="text-sm text-gray-500 text-center md:text-center">
          &copy; {new Date().getFullYear()} Olea. All rights reserved.
        </div>
        <br />
        <br />
        
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <h4 className="text-lg font-semibold mb-3">Olea Baby Store</h4>
          <p className="text-sm text-gray-600 mb-2">
            Clothes, toys, and accessories for your little ones.
          </p>
          <p className="text-sm text-gray-600">Ponnani - Tirur Rd, Alathiyoor, Triprangode, Kerala 676102,India</p>
        </div>

         <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-sm text-gray-600">Phone: <a href="tel:+91 9048995755" className="hover:text-[#7c3aed]">+91 9048995755</a></p>
          <p className="text-sm text-gray-600">Email: <a href="mailto:olentapparels@gmail.com" className="hover:text-[#7c3aed]">olentapparels@gmail.com</a></p>
        </div>

      </div>

     

       
      
    </footer>
  )
}

export default Footer