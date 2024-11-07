import React from 'react'

export default function Services() {
  return (
    <div className="w-full bg-inherit flex flex-col sm:flex-row justify-between px-6 pb-12 pt-8 lg:pt-0">
        {/* Left Section */}
        <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-lg font-bold text-gray-800">Services</h2>
            <p className="text-3xl sm:text-5xl pt-3 font-medium font-sans text-gray-900">
            I offer a wide range of haircut styles
            </p>
        </div>

        {/* Right Section (Button) */}
        <div className="flex justify-center sm:justify-start items-center">
            <button className="px-6 py-3 mt-4 text-[#36210f] hover:text-white bg-inherit hover:bg-[#36210f] border border-[#36210f] transition duration-300 rounded-3xl">
            See All
            </button>
        </div>
    </div>


  )
}
