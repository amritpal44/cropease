import React from 'react'
import logo from "../assests/logo/cropease_logo.png"
import { Link } from 'react-router-dom'
import { NavbarLinks } from '../data/navbar-links'
// import { useSelector } from 'react-redux'

// import { ACCOUNT_TYPE } from '../../utils/constants'

// import {AiOutlineShoppingCart} from "react-icons/ai"
// import { FaBell } from "react-icons/fa";

// import ProfileDropdown from '../Core/Auth/ProfileDropdown'
// import { ScrollLink } from 'react-scroll'

const Navbar = () => {


  return (
    <div id='#navbar' className='z-20 bg-slate-950 font-clarity-city flex justify-between md:justify-evenly px-0 p-1 sm:p-2 md:px-7 sm:px-3'>
      
      <Link to={"/"}>
        <div className='flex  justify-center text-slate-200 text-2xl sm:text-3xl md:text-4xl gap-1 p-3'>
          <img src={logo} alt='healthease logo' className=" w-6 sm:w-6 md:w-10   max-w-[40px]" />

          <h1>ropEase</h1>
        </div>
      </Link>


      {/* LINKS */}
      <div className='hidden md:flex gap-8 text-slate-200 text-xl items-center'> 
        {
          NavbarLinks.map( (link, index) => (
            <Link to={link?.path} key={index}>
              <div> {link?.title} </div>
            </Link>
          ))
        }
      </div>

      {/* <div className='flex gap-2 sm:gap-4 p-2'>
      
        {token === null && (
          <Link to="/login">
            <button className=" bg-[#3d65ff] text-slate-200  md:text-lg font-medium  rounded-full px-[11px] sm:px-[22px] py-2 text-richblack-100 hover:-translate-y-[2px] ease-linear duration-200">
              Log in
            </button>
          </Link>
        )}
        {token === null && (
          <Link to="/signup">
            <button className="bg-transparent font-medium  md:text-lg  text-slate-200 border border-slate-200 rounded-full px-[10px] sm:px-[22px] py-2 cursor-pointer hover:-translate-y-[2px] hover:bg-slate-200 hover:text-slate-950 ease-linear duration-200">
              Sign up
            </button>
          </Link>
        )}
        {token !== null && (
          <ProfileDropdown/>
        )}
      </div> */}
    </div>
  )
}

export default Navbar