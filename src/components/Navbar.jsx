import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";   
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Avatar from 'react-avatar';
import {useSelector, useDispatch} from 'react-redux'
import {setToggle} from '../redux/Features/ToggleSlice'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const toggler = useSelector(state=>state.Toggle.open)
  const dispatch = useDispatch()

  const handleClick = ()=>{
    dispatch(setToggle(toggler))

  }
  const LogohandleClick = ()=>{
    dispatch(setToggle(false))
  }
  return (
    <div className='flex justify-center fixed  w-full z-10 bg-white'>
    <div className='flex justify-between items-center px-5 w-full relative'>
        <div className="flex justify-center items-start gap-4 "> 
            <RxHamburgerMenu  size={"30px"} onClick={handleClick} className='cursor-pointer' />
            <Link to='/' onClick={LogohandleClick}><img src="https://www.shutterstock.com/image-vector/youtube-logo-social-media-icon-260nw-2310134969.jpg" alt="Youtube"  width={"115px"} height={'6px'} className='m-0 p-0'/></Link>
        </div>
        <div className='flex items-center w-[40%]' >
          <div className='w-[100%]  py-2 justify-center  my-3 px-4 border  border-gray-400 rounded-l-full'>
            <input type="text" placeholder='Search'  className='border:outline-none  w-full focus:outline-none'/>
          </div>
          <button className='rounded-3xl  w-[10%] rounded-l-none h-{42px} border border-gray-400 p-2 px-4' ><IoSearch size={"22px"}/></button>
        </div>
        <div className='flex items-center gap-4 mx-6'>
          <MdOutlineVideoCall size={"30px"}/>
          <IoMdNotificationsOutline size={"30px"}/>
          <Avatar src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' size={"35px"} round="30px"/>
        </div>
    </div>
    </div>
  )
}

export default Navbar
