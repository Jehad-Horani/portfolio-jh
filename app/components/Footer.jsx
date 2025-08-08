"use client";

import { Instagram, Linkedin, Mail , Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="flex flex-col items-center gap-4 bg-[#121212] py-6 px-12 max-md:px-6 text-white">
      <div className="flex gap-4 text-[#9CA3AF] text-[14px] max-md:text-[12px]">
        <a
          href="https://www.instagram.com/_jehad05_?igsh=dmQ0NHVjbTI1dGtt&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram jehad horani"
          className="hover:text-[#BE1E2D] transition-transform hover:scale-110 duration-300"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/jehad-alhourani-33909a2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn jehad horani"
          className="hover:text-[#BE1E2D] transition-transform hover:scale-110 duration-300"
        >
          <Linkedin size={20} />
        </a>

       
                  
            <a href="mailto:jehadhorani18@gmail.com" className="hover:text-[#BE1E2D] transition-transform hover:scale-110 duration-300">
              <Mail size={20} />
            </a>
      </div>

      <p className="text-[14px] max-md:text-[12px] text-[#9CA3AF]">
        © {new Date().getFullYear()} JHWebDev. All rights reserved.
           </p>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="text-[#9CA3AF] hover:text-[#BE1E2D] transition-colors duration-300 text-sm underline"
      >
        Back to top
      </button>
    </footer>
  );
}
