"use client"
import {motion} from 'framer-motion'
import React from 'react'

const testomonies = [
    {
        comment: "Super chill guy. Had a great convo and got me cleaned up real nice! Got my beard perfectly done too!",
        name: "Jorge G",
    },
    {
        comment: "Amazing atmosphere, clean cut, chill and fun vibes. Would definitely recommend",
        name: "Lucas W",
    },
    {
        comment: "Great service and friendly. Got me right. Best cut I've gotten!!! Definitely would recommend",
        name: "Josue T",
    },
    {
        comment: "Top tier service. Highly recommend;)",
        name: "Caleb C",
    },
]
export default function Testimonial() {
  return (
    <motion.div className="w-full text-center overflow-hidden"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    }}>
        <h2 className="text-md font-bold text-gray-800 my-8">Testimonies</h2>
        <motion.div
            className="flex gap-10"
            animate={{ x: '-100%' }}
            transition={{
            duration: 260, // Adjust for desired speed
            repeat: Infinity,
            ease: 'linear',
            type: 'tween',
            }}
            style={{
            display: 'flex',
            width: 'max-content', // Make the container's width fit the total content width
            }}
        >
            {[...Array(10)].map((_, idx) => (
            <React.Fragment key={idx}>
                {testomonies.map((testomony, index) => (
                <div key={`set-${idx}-${index}`} className="flex flex-col justify-between max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl px-4">
                    <p className="text-2xl font-serif text-[#36210f]">
                    "
                    {testomony.comment}
                    "
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#36210f]">- {testomony.name}</p>
                </div>
                ))}
            </React.Fragment>
            ))}
        </motion.div>
</motion.div>

  )
}
