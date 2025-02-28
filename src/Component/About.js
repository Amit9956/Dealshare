import React from 'react'

const About = () => {
  return (
    <div className='w-[80%]  h-full flex flex-col shadow-xl shadow-gray-400 bg-white p-4 gap-y-3 mx-auto justify-center items-center '>
      <img className='w-[20%]' src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90'/>
      <p className='text-xl'>Missing Cart items?</p>
      <p className='text-xs'>Login to see the items you added previously</p>
      <button className='px-16 text-white  py-2 bg-orange-600 '>Login</button>
    </div>
  )
}

export default About
