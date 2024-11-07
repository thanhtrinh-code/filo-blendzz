"use client";
import {motion} from 'framer-motion';
import React, { useState } from 'react';
import Slider from './Slider';
import PlayPauseButton from './PlayPauseButton';



export default function RightHero() {
    const [paused, setPaused] = useState(false);
    const [forward, setForward] = useState(false);
  return (
    <motion.div className="w-full lg:w-1/2 h-full flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    
    >
      {/* Brown background container */}
      <div className="bg-[#7B3F00] lg:h-[38rem] h-[30rem] w-[100%] lg:w-[35rem] rounded-2xl flex flex-col items-center justify-center pt-20 pb-5">
        <Slider paused={paused} forward={forward}/>
        <PlayPauseButton paused={paused} setPaused={setPaused} setForward={setForward}/>
        
        
      </div>

    </motion.div>
  )
}
