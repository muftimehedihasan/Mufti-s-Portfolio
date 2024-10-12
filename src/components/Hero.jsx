import React from 'react'
import {HERO_CONTENT} from '../constants'
import profilePic from "../assets/prof.png"
import { motion } from "framer-motion"

// const container = (delay) => ({
//     hidden: {x: -100, opacity: 0},
//     visible: {
//         x: 0,
//         opacity: 1,
//         transition: {duration: 1.5, delay: delay}
//     }
// })

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>

            <div className='w-full lg:w-1/2'>
            <motion.div 
            
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col items-center lg:items-start'>
                <motion.h1 
                    //   whileInView={{ opacity: 1, x: 0 }}
                    //   initial={{ opacity: 0, x: -100 }}
                    //   transition={{ duration: 1.5 }}

                className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>Mufti Mehedi Hasan
                </motion.h1>
                <motion.span 
                    //   whileInView={{ opacity: 1, x: 0 }}
                    //   initial={{ opacity: 0, x: -100 }}
                    //   transition={{ duration: 1.5 }}
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Alim, Full Stack Web Developer</motion.span>
                <span>
                    <motion.p 
                        //   whileInView={{ opacity: 1, x: 0 }}
                        //   initial={{ opacity: 0, x: -100 }}
                        //   transition={{ duration: 1.5 }}
                    className='my-2 max-w-xl py-6 font-normal'>{HERO_CONTENT}</motion.p>
                </span>
            </motion.div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className='rounded-2xl'
                    src={profilePic}  alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero