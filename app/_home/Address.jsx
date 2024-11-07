"use client"
import {motion} from 'framer-motion'
import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Address() {
  return (
    <motion.div className="w-full px-6 mt-6"
        initial={{
            opacity: 0,
            y: 30,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        }}
    >
        <div className="flex flex-col lg:flex-row w-full bg-[#f3ebe5] px-6 
        justify-between rounded-lg shadow-lg pt-8 lg:pt-12 pb-6 lg:pb-12">
            <div className="space-y-5 lg:space-y-10 text-[#36210f] lg:pt-4 lg:pl-5">
                <p className="text-[1.9rem] lg:text-5xl font-serif font-semibold">Find me in Kent, WA</p>
                <p className="text-xl w-[9rem]">228 Washington Ave S, Kent, WA 98032</p>
                <div className="flex flex-col gap-1">
                    <p className="text-xl underline hover:cursor-pointer">
                        (123) 123 - 1234
                    </p>
                    <p>
                        <a href="mailto:test@test.com" className="text-xl underline hover:pointer">
                            test@test.com
                        </a>
                    </p>
                </div>
            </div>

            {/* Social Media Section */}
            <div className="flex gap-2 items-end pr-6 pt-10">
                <a href="https://www.instagram.com/jay_nuez/" className="text-2xl text-black p-3 border border-black rounded-full hover:bg-[#CD853F]">
                    
                    <BsInstagram size={24} />
                </a>
                <a href="https://www.instagram.com/jay_nuez/" className="text-2xl text-black p-3 border border-black rounded-full hover:bg-[#CD853F]">
                    <FaTiktok size={24} />
                </a>
                <a href="https://www.instagram.com/jay_nuez/" className="text-2xl text-black p-3 border border-black rounded-full hover:bg-[#CD853F]">
                    <FaSquareXTwitter size={24} />
                </a>
            </div>
        </div>
    </motion.div>
    )
}
