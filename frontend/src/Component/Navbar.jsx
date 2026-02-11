import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="w-full sticky top-0 left-0 bg-black backdrop-blur-xl z-50  border-white/10 transition-all duration-300 shadow-[0_0_25px_8px_rgba(0,255,0,0.7)] backdrop-brightness-125">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        
     <img src="./logo.png" alt="logo" className="h-7"/>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium relative">

          {/* All Pages Dropdown */}
          <div className="relative cursor-pointer" onClick={() => setDropdown(!dropdown)}>
            <span className="hover:text-green-300 transition flex items-center gap-1 text-white">
              All Pages
              <span
                className="transition-transform duration-300 text-white "
                style={{ transform: dropdown ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                ▼
              </span>
            </span>

            {dropdown && (
              <ul
                className="absolute top-8 left-0 bg-black/80 backdrop-blur-md py-5 px-4 rounded-xl border border-black/10 shadow-lg w-130 grid gap-4 text-white 
                         transition-all duration-300 hover:shadow-[0_0_25px_8px_rgba(0,255,0,0.7)] hover:backdrop-brightness-125"
                style={{
                  gridTemplateRows: "repeat(3, auto)", // 3 rows
                  gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
                }}
              >
                {/* ROW 1 – 4 Items */}
                 <li className="hover:text-green-500 cursor-pointer whitespace-nowrap"><Link to="/nine">Error</Link></li>
                <li className="hover:text-green-500 cursor-pointer whitespace-nowrap"><Link to="/one">About</Link></li>
                <li className="hover:text-green-500 cursor-pointer whitespace-nowrap"><Link to="/seven">Services</Link></li>
                <li className="hover:text-green-500 cursor-pointer whitespace-nowrap"><Link to="/six">Service Details</Link></li>

                {/* ROW 2 – 4 Items */}
                <li className="hover:text-green-500 cursor-pointer whitespace-nowrap"><Link to="/three">Reviews</Link></li>
              
                   <li className="hover:text-green-500 cursor-pointer whitespace-nowrap"><Link to="/two">Blog</Link></li>
                   <li className="hover:text-green-500 cursor-pointer whitespace-nowrap"><Link to="/eight">Blog Details</Link></li> 
                    <li className="hover:text-green-500 cursor-pointer whitespace-nowrap"><Link to="/five">Privacy policy</Link></li>

                {/* ROW 3 – 3 Items */}
                <li className="hover:text-green-500 cursor-pointer whitespace-nowrap"><Link to="/four">Terms & Conditions</Link></li>
          <li className="hover:text-green-500  cursor-pointer whitespace-nowrap border-2 border-green-400 p-2 text-center rounded-2xl"><Link to="/">Home</Link></li>
         
       
               
              </ul>
            )}
          </div>

          <span className="hover:text-green-300 transition cursor-pointer"><a href="#services">Services</a></span>
          <span className="hover:text-green-300 transition cursor-pointer"> <a href="#test">Reviews</a></span>
          <span className="hover:text-green-300 transition cursor-pointer"><a href="#contact">Contact</a></span>

          {/* Download Button */}
<button className="relative px-5 py-2 bg-black text-white rounded-lg overflow-hidden">
  <span className="relative z-10">Download Map</span>

  {/* Animated inner border color */}
  <span className="absolute inset-0 rounded-lg pointer-events-none">
    <span
      className="absolute inset-0 rounded-lg"
      style={{
        background: "linear-gradient(90deg, #00ff00, transparent, #00ff00)",
        backgroundSize: "200% 100%",
        animation: "moveColor 2s linear infinite",
        mask: "repeating-conic-gradient(#fff 0deg 360deg) border-box",
        WebkitMask: "repeating-conic-gradient(#fff 0deg 360deg) border-box",
      }}
    ></span>
  </span>

  <style>{`
    @keyframes moveColor {
      0% { background-position: 0% 0%; }
      100% { background-position: 200% 0%; }
    }
  `}</style>
</button>


        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-3xl" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col bg-gray-600 backdrop-blur-md text-white py-4 space-y-4 text-center border-t border-black/10 animate-fadeIn">
          <li className="cursor-pointer"><a href="#home">Home</a></li>
          <li className="cursor-pointer"><a href="#services">Services</a></li>
          <li className="cursor-pointer"><a href="#test">Reviews</a></li>
          <li className="cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
