import React from 'react'
import Image from 'next/image';


export default function Navbar() {

  return (
    <nav className="bg-inherit p-7 flex items-center justify-between">
      <a href="/" className="relative w-24 h-10 md:h-12 lg:h-16">
        <Image
          src="/logo.svg"
          alt="Chic Sal logo"
          fill // New attribute to replace layout="fill"
          objectFit="contain" // Ensures the image scales within its container
          priority
        />
      </a>
      <div className='flex items-center gap-8'>
      <div className="hidden md:flex space-x-9 font-bold text-[1.15rem] text-[#36210f]">
        <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
        <a href="/services" className="hover:text-gray-900 transition-colors">Services</a>
        <a href="/about" className="hover:text-gray-900 transition-colors">About</a>
        <a href="/contact" className="hover:text-gray-900 transition-colors">Contact</a>
        <p className="hover:text-gray-900 transition-colors">Others</p>
      </div>
      <div className="hidden md:block">
        <button className="rounded-full bg-[#36210f] text-white py-[11px] px-[15px] font-bold transition-transform duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#4a3a2b] focus:ring-opacity-50 active:bg-[#3b2a1b]">
          Schedule Visit
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden">
        <button className="text-gray-700 focus:outline-none">Menu</button>
      </div>
      </div>
    </nav>
  );
}

