import React from 'react'

export default function Profile() {
  return (
    <div className="w-full flex justify-center mt-20 px-5 lg:px-0">
        <div
            className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-lg"
            style={{
            backgroundImage: `url('/profile/profile_3.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '500px',
            }}
        >
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white font-serif">
            <p className="text-lg font-semibold mb-4 text-center">
                Professional Profile
            </p>
            <div className="space-y-2 text-7xl text-center">
                <p>
                <span className="font-semibold">100+ </span>
                <span className="text-lg text-gray-100"> Customers</span>
                </p>
                <p>
                <span className="font-semibold">5+ </span>
                <span className="text-lg text-gray-100"> Years Experience</span>
                </p>
                <p>
                <span className="font-semibold">1 </span>
                <span className="text-lg text-gray-100"> Amazing Location</span>
                </p>
            </div>
            </div>
        </div>
</div>


  )
}
