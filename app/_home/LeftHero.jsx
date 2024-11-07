"use client";
import {motion} from 'framer-motion';

export default function LeftHero() {
  return (
    <motion.div 
        className="flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left space-y-10 pb-10 lg:pb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[1.2rem] lg:text-[2.5rem] font-bold text-gray-800 leading-relaxed">
          Elevate Your Look, Elevate Your Life,
          <br />
          with <span className="text-gray-500 italic font-thin font-serif">Filo Blendzz</span>, your local barber.
        </p>
        <p className="text-[1.1rem] lg:text-3xl text-gray-800 leading-relaxed font-medium font-sans">
          Your hair is an extension of who you are. Let me help you discover a style that complements your lifestyle and enhances your unique character.
        </p>
        <button className="px-6 py-3 mt-4 text-[#36210f] hover:text-white bg-inherit hover:bg-[#36210f] border border-[#36210f] transition duration-300 rounded-3xl">
          Book an Appointment Right Now
        </button>
      </motion.div>
  )
}
