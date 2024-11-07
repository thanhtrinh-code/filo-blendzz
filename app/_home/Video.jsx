"use client";
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
    <div className="w-full flex flex-col h-[25rem] lg:flex-row gap-10 mt-24 px-24">
        <div className="flex justify-center w-full h-full sm:w-1/3">
            <video className="w-full h-auto object-cover rounded-lg shadow-lg" autoPlay muted playsInline loop>
                <source src="/video/video_1.mp4" type="video/mp4" />
            </video>
        </div>
        
        <div className="flex justify-center w-full h-full sm:w-1/3">
            <video className="w-full h-auto object-cover rounded-lg shadow-lg" autoPlay muted playsInline loop>
                <source src="/video/video_2.mp4" type="video/mp4" />
            </video>
        </div>
        <div className="flex justify-center w-full h-full sm:w-1/3">
            <video className="w-full h-auto object-cover rounded-lg shadow-lg" autoPlay muted playsInline loop>
                <source src="/video/video_3.mp4" type="video/mp4" />
            </video>
        </div>
    </div>

  )
}
