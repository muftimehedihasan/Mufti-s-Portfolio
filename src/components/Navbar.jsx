import React from 'react'
import logo from "../assets/Logo.png"
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className='border-b border-neutral-700 pb-0.5 mb-20 flex items-center justify-between py-6'>
  <div className='flex flex-shrink-0 items-center flex-col'>
  <img className='mx-2 w-30' src={logo} alt="Logo" />
  {/* <hr className='w-3/4 border h-[1.5px] bg-white mt-2' /> */}
</div>


      <div className='m-8 flex items-center justify-center gap-4 text-2xl'> 


           {/* Resume Download Button with Custom Color */}
           <a href="/path/to/your/resume.pdf" download>
          <button 
            className='ml-6 bg-[#1B1B28] text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300'>
            Resume
          </button>
        </a>

        
        <a className='hover:bg-purple-700 transition duration-300 rounded' href='https://www.linkedin.com/in/muftimehedihasan' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin />
        </a>
        
        <a className='hover:bg-purple-700 transition duration-300 rounded-full' href='https://github.com/muftimehedihasan' target='_blank' rel='noopener noreferrer'>
          <FaGithub />
        </a>

        <a className='hover:bg-purple-700 transition duration-300 rounded-full' href='https://www.facebook.com/muftimehedihasan?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
          <FaFacebook />
        </a>
      </div>
    </nav>
  )
}

export default Navbar;