import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>

        <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt="" />
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub /> 
        <FaFacebook/>
        </div>

    </nav>
  )
}

export default Navbar