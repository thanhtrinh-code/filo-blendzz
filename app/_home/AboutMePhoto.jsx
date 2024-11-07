"use client";
import {motion} from 'framer-motion'
import Image from 'next/image';

export default function AboutMePhoto() {
  
  return (
    <motion.div
      className="w-full sm:px-10 h-screen flex flex-col sm:flex-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      >
      {/* Left Image */}
      <div className="w-full sm:w-1/2 h-full flex justify-center items-center sm:mb-0">
        <div className="h-[70%] lg:h-[80%] w-[70%] lg:w-[80%] relative">
          <Image
            src="/profile/profile_4.jpg"
            alt="Profile 4"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-3xl shadow-2xl"
            />
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full sm:w-1/2 h-full flex justify-center items-center">
        <div className="w-[90%] lg:w-2/4 relative h-full lg:h-[60%]">
          <Image
            src="/profile/profile_5.jpg"
            alt="Profile 5"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </div>
</motion.div>


  )
}
