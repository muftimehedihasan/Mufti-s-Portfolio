import React from 'react'
import {RiReactjsLine} from "react-icons/ri";
import { FaLaravel, FaDatabase, FaJs, FaCss3Alt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { animate, motion } from "framer-motion";


const iconVariants = (duration) => ({
    initial: {y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }

    }
})


const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
           <motion.h1 
           
           whileInView={{ opacity: 1, y: 0 }}
           initial={{ opacity: 0, y: -100 }}
           transition={{ duration: 0.5 }}
           className='my-20 text-center text-4xl'>Technologies</motion.h1> 
           <motion.div 
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: -100 }}
           transition={{ duration: 1.5 }}
           
           className='flex flex-wrap items-center justify-center gap-4'>
    
           <motion.div 
           variants={iconVariants(2.5)}
           initial="intial"
           animate="animate"
           
           className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJs className='text-7xl text-yellow-400'/>
            </motion.div>
            
            <motion.div 
                 variants={iconVariants(3)}
                 initial="intial"
                 animate="animate"

            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
    
            <motion.div 
                 variants={iconVariants(4.5)}
                 initial="intial"
                 animate="animate"
            
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaCss3Alt className='text-7xl text-blue-400'/>
            </motion.div>
    
            <motion.div 
            
            variants={iconVariants(4)}
            initial="intial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaLaravel className='text-7xl text-red-500'/>
            </motion.div>
    
            <motion.div
                 variants={iconVariants(6)}
                 initial="intial"
                 animate="animate"

            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaDatabase className='text-7xl text-teal-600'/>
            </motion.div>
    
            <motion.div 
                 variants={iconVariants(4.5)}
                 initial="intial"
                 animate="animate"

            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaAws className='text-7xl text-orange-500' />
            </motion.div>
    
           </motion.div>

        </div>
      )
}

export default Technologies