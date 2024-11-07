"use client"
import React from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#36210f] text-white px-6 pt-16 pb-12 w-full mt-6 lg:mt-12">
      <div className="flex flex-col lg:flex-row justify-between font-serif text-[1.1rem] font-bold">
        {/* Contact Info Section */}
        <div className="w-full sm:w-1/3 flex flex-col gap-3">
          <p className="mb-4 text-4xl italic font-thin">Filo Blendzz</p>
          <div className="flex items-center mb-4">
            <FaPhone size={24} className="mr-2" />
            <p>(123) 345 - 2343</p>
          </div>
          <div className="flex items-center mb-4">
            <MdAlternateEmail size={24} className="mr-2" />
            <p>test@test.com</p>
          </div>
          <div className="flex items-center">
            <MdLocationOn size={24} className="mr-2" />
            <p>Kent, Washington, 98001</p>
          </div>
        </div>

        {/* Main Pages Section */}
        <div className='flex w-full lg:w-1/2 lg:flex-row flex-col text-center lg:text-left mt-12 lg:mt-0'>
          <div className="w-full lg:w-1/2">
            <p className="mb-6 text-2xl">Main Pages</p>
            <p className="mb-4">Home</p>
            <p className="mb-4">About</p>
            <p className="mb-4">Contact</p>
            <p className="mb-4">Services</p>
          </div>

          {/* Other Links Section */}
          <div className="w-full lg:w-1/2">
            <p className="mb-6 text-2xl mt-10 lg:mt-0">Other</p>
            <p className="mb-4">Gallery</p>
            <p className="mb-4">Shop</p>
            <p className="mb-4">Legal</p>
            <p className="mb-4">Feedback</p>
          </div>
        </div>
      </div>

  {/* Divider */}
  <div className="border-t border-white mt-8 mb-12"></div>

  {/* Footer Bottom */}
  <div className="text-left w-2/3 lg:w-full lg:text-center">
      <p className="mb-2">Copyright © 2024 Filo Blendzz. All rights reserved.</p>
      <p>Designed by Thanh Trinh</p>
  </div>
</footer>

  )
}
