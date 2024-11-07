"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'


export default function HairWork() {
  return (
    <motion.div className='w-full flex gap-9 px-6 md:px-10 pb-10 lg:flex-row flex-col'
  initial={{ opacity: 0, y: 30 }}
  whileInView={{
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
  }}
>
  {/* Fade Card */}
  <div className="w-full md:w-1/3 h-[30rem] bg-[#ebe0d6] rounded-xl shadow-lg flex flex-col items-center p-6">
    <div className="w-full h-[20rem] sm:w-[24rem] relative rounded-xl overflow-hidden mb-6">
      <Image
        src="/work/cut_1.jpeg"
        alt="Haircut 1"
        layout="fill"
        objectFit="cover"
        priority
        className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>
    <div className="w-full text-center">
      <h2 className="text-2xl font-semibold text-[#36210f] mb-2">Fade</h2>
      <p className="text-lg text-[#36210f]">
        Sharp, clean, and effortlessly cool – the fade haircut that defines your style.
      </p>
    </div>
  </div>

  {/* Taper Card */}
  <div className="w-full md:w-1/3 h-[30rem] bg-[#ebe0d6] rounded-xl shadow-lg flex flex-col items-center p-6">
    <div className="w-full h-[20rem] sm:w-[24rem] relative rounded-xl overflow-hidden mb-6">
      <Image
        src="/work/cut_2.jpeg"
        alt="Haircut 2"
        layout="fill"
        objectFit="cover"
        priority
        className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>
    <div className="w-full text-center">
      <h2 className="text-2xl font-semibold text-[#36210f] mb-2">Taper</h2>
      <p className="text-lg text-[#36210f]">
        Sharp, clean, and effortlessly cool – the fade haircut that defines your style.
      </p>
    </div>
  </div>

  {/* Another Fade Card */}
  <div className="w-full md:w-1/3 h-[30rem] bg-[#ebe0d6] rounded-xl shadow-lg flex flex-col items-center p-6">
    <div className="w-full h-[20rem] sm:w-[24rem] relative rounded-xl overflow-hidden mb-6">
      <Image
        src="/work/cut_3.jpeg"
        alt="Haircut 3"
        layout="fill"
        objectFit="cover"
        priority
        className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>
    <div className="w-full text-center">
      <h2 className="text-2xl font-semibold text-[#36210f] mb-2">Fade</h2>
      <p className="text-lg text-[#36210f]">
        Sharp, clean, and effortlessly cool – the fade haircut that defines your style.
      </p>
    </div>
  </div>
</motion.div>

  )
}
