import React from 'react'
import logo from "../assets/Logo.png"
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>

        <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-30' src={logo} alt="" />
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
  <NavLink href='https://www.linkedin.com/in/muftimehedihasan' target='_blank' rel='noopener noreferrer'>
    <FaLinkedin />
  </NavLink>
  <NavLink href='https://github.com/muftimehedihasan' target='_blank' rel='noopener noreferrer'>
    <FaGithub />
  </NavLink>
  <NavLink href='https://www.facebook.com/muftimehedihasan?mibextid=ZbWKwL
' target='_blank' rel='noopener noreferrer'>
    <FaFacebook />
  </NavLink>
</div>


    </nav>
  )
}

export default Navbar