import React from 'react'
import {ABOUT_TEXT} from '../constants'
import profilePic2 from "../assets/prof-3.png"


const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>

        <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img src={profilePic2}  alt="" />
                </div>
            </div>


            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>About <span className='text-neutral-500'>Me</span> 
                </h1>
                <span>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{ABOUT_TEXT}</p>
                </span>
            </div>
            </div>
            

        </div>
    </div>
  )
}

export default About