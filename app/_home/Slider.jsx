"use client";
import {motion} from 'framer-motion';
import Image from 'next/image';
import React from 'react';
export default function Slider({paused, forward}) {
  return (
    <div className='w-full h-full overflow-hidden flex items-center justify-center'>
    <motion.div
          className="flex space-x-4 w-[calc(5*15rem + 4*4rem)]"
          animate={{ x: paused ? "" : forward ? "50%" : "-50%" }}
          transition={{
            duration: 100, 
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(15)].map((_, i) => (
            <React.Fragment key={i}>
              {/* Carousel Item 1 */}
              <div className="w-[25rem] h-[25rem] relative">
                <Image
                  src="/profile/profile_1.jpeg"
                  alt="Profile of Filo Blendzz, a professional barber"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="rounded-2xl"
                />
              </div>

              {/* Carousel Item 2 */}
              <div className="w-[25rem] h-[25rem] relative">
                <Image
                  src="/profile/profile_2.jpeg"
                  alt="Another profile of Filo Blendzz"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="rounded-2xl"
                />
              </div>

              {/* Carousel Item 3 */}
              <div className="w-[25rem] h-[25rem] relative">
                <Image
                  src="/profile/profile_3.jpeg"
                  alt="Another profile of Filo Blendzz"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="rounded-2xl"
                />
              </div>
            </React.Fragment>
          ))}
        </motion.div>
        </div>
  )
}
