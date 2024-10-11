import React from 'react'
import logo from "../assets/Logo.png"
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className='border-b border-neutral-800 pb-0.5 mb-20 flex items-center justify-between py-6'>
  <div className='flex flex-shrink-0 items-center flex-col'>
  <img className='mx-2 w-30' src={logo} alt="Logo" />
  {/* <hr className='w-3/4 border h-[1.5px] bg-white mt-2' /> */}
</div>


      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/muftimehedihasan' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin />
        </a>
        
        <a href='https://github.com/muftimehedihasan' target='_blank' rel='noopener noreferrer'>
          <FaGithub />
        </a>

        <a href='https://www.facebook.com/muftimehedihasan?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
          <FaFacebook />
        </a>
      </div>
    </nav>
  )
}

export default Navbar;
