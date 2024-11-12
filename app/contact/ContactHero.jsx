import React from 'react'

export default function ContactHero() {
  return (
    <div className="w-full flex justify-center text-black mt-4 lg:mt-16">
      <div className="flex justify-center items-center flex-col text-[#36210f] text-center
        gap-8 lg:gap-10
      ">
        <p className="text-4xl lg:text-7xl font-medium font-serif">
          I can cut a <span className="italic">variety</span> of haircut
        </p>
        <p className="text-[1.3rem] px-4 lg:px-0 lg:text-[1.6rem] w-full lg:w-[55%] font-semibold leading-relaxed font-sans" >
          I love getting to know my clients and definitely can suggest the haircut that will fit with your face shape or your lifestyle
        </p>
      </div>
  </div>
  )
}
