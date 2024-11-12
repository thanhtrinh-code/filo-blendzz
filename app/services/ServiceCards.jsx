"use client";
import {motion} from 'framer-motion'
import React from 'react'
import ServiceCard from './ServiceCard'

export default function ServiceCards() {
  const services = [
    {
      title: 'Adult Haircut',
      image: '/work/cut_1.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, felis a pharetra luctus, ipsum velit pellentesque velit, in efficitur enim velit vel velit.',
    },
    {
      title: 'Kid Haircut',
      image: '/work/cut_2.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, felis a pharetra luctus, ipsum velit pellentesque velit, in efficitur enim velit vel velit.',
    },
    {
      title: 'Line up',
      image: '/work/cut_3.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, felis a pharetra luctus, ipsum velit pellentesque velit, in efficitur enim velit vel velit.',
      
    },
    {
      title: 'Adult Haircut and Beard',
      image: '/work/cut_4.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, felis a pharetra luctus, ipsum velit pellentesque velit, in efficitur enim velit vel velit.',
    }
  ]
  return (
    <motion.div className='w-full flex flex-col gap-10 justify-center items-center pt-16 mb-28'
    initial={{ opacity: 0,
      y: 30  }}
    animate={{ opacity: 1, y:0 }}
    >
      {services.map(service => (
        <ServiceCard service={service}/>
      ))}
    </motion.div>

  )
}
