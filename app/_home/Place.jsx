"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import { motion } from 'framer-motion'


export default function Place() {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }
    function handleClick(){
        setIsHovered(hover => !hover);
    }

    return (
        <motion.div className="w-full h-[35rem] lg:h-[45rem] px-6 pt-12"
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: 'easeOut' },
                delay: 0.5,
            }}
        >
            <div
            className="w-full h-full relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {/* Framer Motion Image with smooth transition */}
            <motion.div
                className="w-full h-full absolute"
                initial={{ opacity: 1 }}
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                
            >
                <Image
                    src="/place/place_2.jpg"
                    alt="Outside"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="rounded-2xl object-cover"
                />
            </motion.div>

            <motion.div
                className="w-full h-full absolute"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <Image
                    src="/place/inside_1.jpeg"
                    alt="Inside"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="rounded-2xl object-cover"
                />
            </motion.div>
        </div>
        </motion.div>
    );
}
