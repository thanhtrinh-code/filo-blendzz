"use client"
import React from 'react'
import {motion} from 'framer-motion'

export default function AboutMe() {
  return (
    <motion.div
  className="w-full bg-inherit flex justify-center items-center pt-20 px-4 sm:px-8 lg:px-16"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
>
  <div className="max-w-2xl space-y-3 text-center">
    <h2 className="text-lg font-bold text-gray-800">About Me</h2>
    <p className="text-lg sm:text-xl lg:text-4xl text-gray-800 w-full sm:w-[35rem] font-bold mx-auto leading-snug">
      Filo Blendz: where every cut is crafted with <span className="italic font-light">precision</span>, and <span className="italic font-light">style</span>.
    </p>
    <p className="text-lg sm:text-[1.2rem] text-gray-600 w-full sm:w-[28rem] mx-auto py-3">
      Located in the heart of Kent, WA, Filo Blendz stays ahead of the curve with the latest hairstyle trends, delivering fresh, stylish cuts that turn heads.
    </p>
    <button className="px-6 py-3 mt-4 text-[#36210f] hover:text-white bg-inherit hover:bg-[#36210f] border border-[#36210f] transition duration-300 rounded-3xl">
      Learn More
    </button>
  </div>
</motion.div>

  )
}
