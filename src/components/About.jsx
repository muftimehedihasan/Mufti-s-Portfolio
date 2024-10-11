import React from 'react'
import {ABOUT_TEXT} from '../constants'
import profilePic from "../assets/prof-3.png"
import { motion } from "framer-motion"


const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>

        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img src={profilePic}  alt="" />
                </div>
            </motion.div>


            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
            className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <h1 className='pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>About <span className='text-neutral-500'>Me</span> 
                </h1>
                <div>
                    <p className='my-2 max-w-xl py-6 font-normal'>{ABOUT_TEXT}</p>
                </div>
            </div>
            </motion.div>
            

        </div>
    </div>
  )
}

export default About