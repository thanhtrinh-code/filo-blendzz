"use client";
import {motion} from 'framer-motion'
import React, {useEffect} from 'react'

export default function Video() {
    useEffect(() => {
        // Select all video elements
        const videos = document.querySelectorAll('video');
        videos.forEach((video) => {
          // Attempt to play the video, catching any errors
          video.play().catch((error) => {
            console.log('Autoplay error:', error);
          });
        });
    }, []); 
  return (
    <>
    <div className="w-full text-center text-2xl font-thin text-gray-800 mt-20 mb-8">
        <p>
            video blog
        </p>
    </div>
    <motion.div className="w-full flex flex-col lg:h-[40rem] lg:flex-row gap-8 px-5 lg:px-24 pb-10"
        initial={{
            opacity: 0,
            y: 30
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        }}
    >
        <div className="flex justify-center w-full h-[35rem] lg:h-full lg:w-1/3">
            <video className="w-full h-auto object-cover rounded-3xl shadow-lg" autoPlay muted playsInline loop>
                <source src="/video/video_1.mp4" type="video/mp4" />
            </video>
        </div>

        <div className="flex justify-center w-full h-[35rem] lg:h-full lg:w-1/3">
            <video className="w-full h-auto object-cover rounded-3xl shadow-lg" autoPlay muted playsInline loop>
                <source src="/video/video_2.mp4" type="video/mp4" />
            </video>
        </div>
        <div className="flex justify-center w-full h-[35rem] lg:h-full lg:w-1/3">
            <video className="w-full h-auto object-cover rounded-3xl shadow-lg" autoPlay muted playsInline loop>
                <source src="/video/video_3.mp4" type="video/mp4" />
            </video>
        </div>
    </motion.div>
    </>

  )
}
