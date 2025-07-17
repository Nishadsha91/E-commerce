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

// import React from 'react';
// import { Facebook, Instagram, Mail, Phone } from 'lucide-react'; // optional, install lucide-react

// function Footer() {
//   return (
//     <footer className="bg-[#f3e8ff] text-gray-700 pt-10 pb-6 mt-10 rounded-t-3xl shadow-inner border-t-4 border-pink-300">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

//         {/* 🍼 Brand */}
//         <div>
//           <h4 className="text-xl font-semibold text-pink-600 mb-3">Olea Baby Store</h4>
//           <p className="text-sm text-gray-600 mb-2">
//             Clothes, toys, and accessories for your little ones.
//           </p>
//           <p className="text-sm text-gray-600">
//             Ponnani - Tirur Rd, Alathiyoor, Triprangode, Kerala 676102, India
//           </p>
//         </div>

//         {/* 📞 Contact */}
//         <div>
//           <h4 className="text-xl font-semibold text-pink-600 mb-3">Contact Us</h4>
//           <p className="flex items-center gap-2 text-sm text-gray-600 mb-1">
//             <Phone className="w-4 h-4 text-pink-500" />
//             <a href="tel:+91 9048995755" className="hover:text-pink-600">+91 9048995755</a>
//           </p>
//           <p className="flex items-center gap-2 text-sm text-gray-600">
//             <Mail className="w-4 h-4 text-pink-500" />
//             <a href="mailto:olentapparels@gmail.com" className="hover:text-pink-600">olentapparels@gmail.com</a>
//           </p>
//         </div>

//         {/* 🌸 Social (optional, looks modern) */}
//         <div>
//           <h4 className="text-xl font-semibold text-pink-600 mb-3">Follow Us</h4>
//           <div className="flex gap-4">
//             <a href="#" className="text-pink-500 hover:text-pink-600 transition">
//               <Facebook className="w-5 h-5" />
//             </a>
//             <a href="#" className="text-pink-500 hover:text-pink-600 transition">
//               <Instagram className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 border-t border-pink-200 pt-4 text-center text-xs text-gray-500">
//         &copy; {new Date().getFullYear()} Olea Baby Store. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// import React, { useState, useEffect } from 'react';

// // function Footer() {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [floatingElements, setFloatingElements] = useState([]);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //         }
// //       },
// //       { threshold: 0.1 }
// //     );

// //     const footerElement = document.querySelector('#animated-footer');
// //     if (footerElement) {
// //       observer.observe(footerElement);
// //     }

// //     // Generate floating elements
// //     const elements = [];
// //     for (let i = 0; i < 15; i++) {
// //       elements.push({
// //         id: i,
// //         left: Math.random() * 100,
// //         animationDelay: Math.random() * 20,
// //         duration: 15 + Math.random() * 10,
// //         opacity: 0.1 + Math.random() * 0.3,
// //         size: 20 + Math.random() * 30,
// //       });
// //     }
// //     setFloatingElements(elements);

// //     return () => observer.disconnect();
// //   }, []);

// //   const babyIcons = ['🍼', '🧸', '👶', '🎀', '🌟', '💕', '🦄', '🎈', '🧚', '⭐', '🌈', '🎁', '👑', '🎪', '🍭'];

// //   return (
// //     <footer 
// //       id="animated-footer"
// //       className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 text-gray-700 pt-16 pb-8 mt-10 overflow-hidden"
// //       style={{
// //         background: 'linear-gradient(135deg, #fdf2f8 0%, #f3e8ff 25%, #e0e7ff 50%, #ddd6fe 75%, #f3e8ff 100%)',
// //         borderRadius: '3rem 3rem 0 0',
// //         boxShadow: '0 -20px 40px rgba(124, 58, 237, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
// //       }}
// //     >
// //       {/* Floating Background Elements */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         {floatingElements.map((element) => (
// //           <div
// //             key={element.id}
// //             className="absolute animate-bounce"
// //             style={{
// //               left: `${element.left}%`,
// //               animationDelay: `${element.animationDelay}s`,
// //               animationDuration: `${element.duration}s`,
// //               opacity: element.opacity,
// //               fontSize: `${element.size}px`,
// //               animation: `float ${element.duration}s ease-in-out infinite`,
// //               animationDelay: `${element.animationDelay}s`,
// //             }}
// //           >
// //             {babyIcons[Math.floor(Math.random() * babyIcons.length)]}
// //           </div>
// //         ))}
// //       </div>

// //       {/* Animated Wave Effect */}
// //       <div className="absolute top-0 left-0 w-full overflow-hidden">
// //         <svg
// //           className="relative block w-full h-12"
// //           viewBox="0 0 1200 120"
// //           preserveAspectRatio="none"
// //         >
// //           <path
// //             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
// //             fill="rgba(255,255,255,0.1)"
// //           />
// //         </svg>
// //       </div>

// //       {/* Gradient Orbs */}
// //       <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
// //       <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

// //       <div className="relative z-10 max-w-6xl mx-auto px-6">
// //         {/* Main Content */}
// //         <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //           {/* Brand Section */}
// //           <div className="space-y-4">
// //             <div className="flex items-center gap-3 group">
// //               <div className="relative">
// //                 <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
// //                   O
// //                 </div>
// //                 <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-30 scale-150 animate-ping"></div>
// //               </div>
// //               <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //                 Olea Baby Store
// //               </h4>
// //             </div>
            
// //             <div className="space-y-3">
// //               <p className="text-gray-600 leading-relaxed flex items-center gap-2">
// //                 <span className="text-pink-500">✨</span>
// //                 Clothes, toys, and accessories for your little ones.
// //               </p>
// //               <div className="flex items-start gap-2 group">
// //                 <span className="text-purple-500 mt-1">📍</span>
// //                 <p className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300">
// //                   Ponnani - Tirur Rd, Alathiyoor, Triprangode, Kerala 676102, India
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Contact Section */}
// //           <div className="space-y-4">
// //             <h4 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
// //               <span className="text-2xl">💬</span>
// //               Get In Touch
// //             </h4>
            
// //             <div className="space-y-3">
// //               <div className="flex items-center gap-3 group">
// //                 <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
// //                   📞
// //                 </div>
// //                 <a 
// //                   href="tel:+91 9048995755" 
// //                   className="text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-105 font-medium"
// //                 >
// //                   +91 9048995755
// //                 </a>
// //               </div>
              
// //               <div className="flex items-center gap-3 group">
// //                 <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
// //                   ✉️
// //                 </div>
// //                 <a 
// //                   href="mailto:olentapparels@gmail.com" 
// //                   className="text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-105 font-medium"
// //                 >
// //                   olentapparels@gmail.com
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Decorative Separator */}
// //         <div className="my-12 flex items-center justify-center">
// //           <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-full max-w-md"></div>
// //           <div className="mx-6 flex space-x-2">
// //             <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
// //             <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
// //             <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
// //           </div>
// //           <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-full max-w-md"></div>
// //         </div>

// //         {/* Copyright */}
// //         <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
// //           <p className="text-gray-500 font-medium">
// //             © {new Date().getFullYear()} 
// //             <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold mx-1">
// //               Olea
// //             </span>
// //             • Made with 💖 for little angels
// //           </p>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// //           25% { transform: translateY(-20px) rotate(90deg); }
// //           50% { transform: translateY(-10px) rotate(180deg); }
// //           75% { transform: translateY(-30px) rotate(270deg); }
// //         }
// //       `}</style>
// //     </footer>
// //   );
// // }

// // export default Footer;
