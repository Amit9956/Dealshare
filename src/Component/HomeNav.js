import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa6";
const HomeNav = () => {
  return (
    <div className='lg:w-full sticky top-0 z-50  lg:h-full'>
    <div className='flex lg:flex-row flex-col  bg-white shadow-xl shadow-gray-300  lg:h-[15vh] h-[18vh] lg:px-40 lgpt-5 lg:w-full   gap-2 lg:py-5'>
        <div className='w-[20%] h-full lg:block hidden'>
            <img className='h-full' src='https://prod-web-static.dealshare.in/_next/static/media/dsFullLogo.38b04a09.svg' alt=""></img>
        </div>
        <div className='lg:w-[20%] w-full  lg:pt-5.5 '>
            <p className='font-bold'><IoLocationSharp className='inline-block' /> Delivering to <RiArrowDropDownLine  className='inline-block text-2xl' /></p>
            <p className='lg:pl-0 pl-3'>Sitapur Road, Abbas Nagar, Bakshi Ka Talab</p>
        </div>
        <div className=' lg:w-[46%] w-[95%] lg:mx-0 mx-3 relative lg:pt-5'>
            <CiSearch className='absolute text-2xl lg:top-8 top-3 left-2  text-gray-600' />
            <input className='w-full lg:bg-[#F4F4F4] bg:white border  outline-none border-[#959595] rounded-xl p-3 py-3  placeholder:px-5' type='Search' placeholder='Search for "sugar"'></input>
            <button className='px-2 py-2 bg-transparent border lg:hidden  absolute text-2xl  rounded-xl  lg:top-6 top-1  left-[88%]'><FaMicrophone className="" /></button>
        </div>
        <div className=' lg:block hidden  text-3xl  mt-8 gap-5 ml-5 '>
        <div className='flex gap-5 '>
        <LuLayoutDashboard  />
        <AiOutlineUser />
        <LiaShoppingBagSolid />
        </div>

        </div>
    </div>
</div>
  )
}

export default HomeNav
