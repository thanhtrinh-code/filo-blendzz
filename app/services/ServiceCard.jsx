import React from 'react'
import Image from 'next/image'

export default function ServiceCard({service}) {
  return (
    <div className='bg-[#e2dededb] rounded-3xl text-black flex flex-col lg:flex-row w-[90%] lg:w-[65%] h-[40rem] lg:h-[25rem]'>
          <div className='w-full lg:w-[40%] h-[25rem] lg:h-full p-5'>
            <div className='w-full h-full relative'>
            <Image 
              src={service.image}
              alt='Curly haircut'
              layout='fill'
              objectFit='cover'
              priority
              className='rounded-3xl'
            />
            </div>
          </div>
          <div className='w-full lg:w-[60%] p-6 flex flex-col justify-center gap-2 text-center lg:text-left'>
            <p className='text-2xl lg:text-4xl font-semibold '>{service.title}</p>
            <p className='text-lg font-thin w-full lg:w-[80%] leading-relaxed'>{service.description}</p>
            <div>
            <button className="px-6 py-3 mt-4 text-[#36210f] hover:text-white bg-inherit hover:bg-[#36210f] border border-[#36210f] transition duration-300 rounded-3xl">
              Book Now
            </button>
            </div>
          </div>
        </div>
  )
}
