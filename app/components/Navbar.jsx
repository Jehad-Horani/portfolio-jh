"use client";
import { useEffect } from "react";

import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Navbar() {


 useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once = يشتغل مرة واحدة
  }, []);


  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* يسار - اللوجو */}
        <div  data-aos="fade-down" className=" font-bold text-xl" >
          <Link href="/">Jehad Horani</Link>
        </div>

        {/* النص في المنتصف */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-white font-semibold text-lg md:flex items-center gap-6 hidden ">
          <Link  data-aos="fade-down"
                data-aos-delay="190" href="#Benefits" className="text-gray-300 hover:text-blue-500 transition">Benefits</Link>
          <Link  data-aos="fade-down"
                data-aos-delay="160" href="#projects" className="text-gray-300 hover:text-blue-500 transition">Projects</Link>
          <Link  data-aos="fade-down"
                data-aos-delay="130" href="#Process" className="text-gray-300 hover:text-blue-500 transition">Process</Link>
          <Link  data-aos="fade-down"
                data-aos-delay="100" href="#contact" className="text-gray-300 hover:text-blue-500 transition">Contact</Link>
          
        </div>

        {/* يمين - الروابط */}
        <div className="flex items-center gap-6">
        
          <a
            href="#contact"
            className="bg-gradient-to-br from-pink-500 to-purple-600  hover:scale-105 text-white px-4 py-2 rounded-lg transition"
            data-aos="fade-down"
                data-aos-delay="90"
          >
            Request Project
          </a>
        </div>
      </div>
    </nav>
  );
}
