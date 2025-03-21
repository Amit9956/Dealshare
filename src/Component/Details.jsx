import React from 'react'
import { FaRegHeart, FaShareAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoStarOutline } from 'react-icons/io5'
import { MdCompare } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

const Details = () => {

  const {state} =useLocation()
  
  console.log("this is my state",state)
  
  return (
    <div className='w-[90%] h-full mx-auto'>
     <div className='flex lg:flex-row flex-col w-auto h-full items-center'>
     <div className='lg:w-[30%] w-full h-full mt-10'>
       <img className='w-auto h-full' src={state?.data?.image}/>
     </div>
     <div className='lg:w-[35%] w-full '>
     <p className='text-2xl font-semibold hover:text-blue-600'>{state?.data?.cta?.ctaVal?.ctaParams?.collectionName}</p>
     <div className='flex mt-3 text-xl'>
     <IoStarOutline />
     <IoStarOutline />
     <IoStarOutline />
     <IoStarOutline />
     <IoStarOutline />
     </div>
    
     <p className='text-xl font-bold text-green-600 mt-3'>Rate</p>
     
     <p className='font-semibold '>₹190 <span className='line-through px-2'>M.R.P 380</span> <span className='px-2 py-1 rounded-xl text-white font-semibold bg-green-600'>50%</span> </p>
     <p className='text-xl font-bold mt-2'>COLOR</p>
     <div className='w-full h-auto  mt-3  gap-2 flex items-start'>
         <img className='w-[20%] border hover:scale-105 duration-150 border-orange-600 h-full' src='https://media.dealshare.in/img/offer/7E9D1C1BBA_1.webp'/>
         <img className='w-[20%] border hover:scale-105 duration-150 border-orange-600 h-full' src='https://media.dealshare.in/img/offer/7E9D1C1BBA_1.webp'/>
         <img className='w-[20%] border hover:scale-105 duration-150 border-orange-600 h-full' src='https://media.dealshare.in/img/offer/7E9D1C1BBA_1.webp'/>
     </div>

     <p className='font-bold mt-2'>KG</p>
     <p className='px-2 py-1 border mt-2 border-orange-700 w-10'>1Kg</p>
     <button className='px-3 py-2 text-xl font-bold bg-green-600 hover:scale-105 mt-5 rounded-xl text-white hover:bg-red-600'>ADD CART</button>  
     <button className='w-full mt-6 py-2 bg-gray-200 text-start rounded-xl pl-3'>Delivery Options: <FaLocationDot className='inline-block mb-1 lg:ml-32 ml-20'/><input className='' type='search' name='search' placeholder='enter pin code'/> </button>
     <div className='w-full flex justify-evenly bg-[#FEE2E2] items-center mt-4'>
          <div className='w-[33%] border flex  justify-center items-center flex-wrap  border-orange-500'>
          <img className='h-full w-[20%]  ' src='https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/Return-Exchangee.png'/>
          <p ><span className='font-semibold'>Replacement</span><br/><span className='pl-4'>in 7 Days</span></p>
          </div>
          <div className='w-[33%] border flex  justify-center items-center flex-wrap  border-orange-500'>
          <img className='  h-[5vh] w-[20%] ' src='https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/warrenty.png'/>
          <p><span className='font-semibold'>Warranty</span><br/>in 1 Year</p>
          </div>
          <div className='w-[33%] border flex  justify-center items-center flex-wrap  border-orange-500'>
          <img className='h-full w-[20%] ' src='https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/Gst-Invoice.png'/>
          <p><span className='font-semibold'>GST Invoice</span><br/>Available</p>
          </div>
        </div>
     </div>
    
     <div className='lg:w-[25%] w-full lg:ml-16  mt-5 '>
       <img src='https://img.freepik.com/premium-vector/no-data-found-empty-file-folder-concept-design-vector-illustration_620585-1698.jpg'/>
       <button className='w-full mt-4 py-2 bg-gradient-to-r from-rose-500 hover:text-red-700 hover:scale-95 to-purple-600 rounded-xl text-xl font-semibold text-white'>Buy Now</button>
       <button className='w-full py-2 mt-4 bg-gradient-to-r from-green-500 hover:text-red-700 to-purple-600 hover:scale-95 rounded-xl text-xl font-semibold text-white'>Add To Cart</button> 
       
       <div className='w-full mt-2 gap-2 text-red-500 lg:ml-0 ml-4 flex'>
        <button className='px-5 py-1 border rounded-md  text-sm  border-orange-400'><FaShareAlt className='inline-block'/> Share</button>
        <button  className='px-4 py-1 border rounded-md text-sm  border-orange-400'><MdCompare className='inline-block'/>Compare</button>
        <button  className='px-5 py-1 border rounded-md text-sm  border-orange-400'><FaRegHeart className='inline-block'/>Wishlist</button>
       </div>
      
     </div>

     
     


     </div>
      
    </div>
  )
}

export default Details
