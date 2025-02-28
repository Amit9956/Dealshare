import React from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate()
  return (
    <div className='w-full h-screen '>
    <div className='w-[45%] h-[60%]  mx-auto  mt-[6%] flex items-center justify-center shadow-lg shadow-rose-700 bg-purple-500'>
    <div className='w-[38%] h-[95%] shadow-md shadow-white bg-[#1B1833]'>
    
    <p className='text-2xl font-semibold text-white text-center mt-20 '>WELCOME TO LOGIN</p>
    <p className='text-sm font-semibold mt-5 text-white text-center'>Login using social media to get quick access</p>
    <div className='w-[80%] flex flex-col gap-y-3 mt-6 mx-auto'>
    <button className='py-2 px-4 rounded-xl font-semibold text-white bg-blue-700'>Signin with facebook</button>
    <button className='py-2 px-4 rounded-xl font-semibold text-white bg-blue-400'>Signin with twitter </button>
    <button className='py-2 px-4 rounded-xl font-semibold text-white bg-red-600'>Signin with google</button>
    </div>

    </div>
    <div className='w-[55%] h-[95%] shadow-md shadow-black bg-white'>
    <p className='text-2xl font-bold  text-center mt-10'>Login to your account</p>
    <p className='text-xs text-center'>Don't have an account?<span className='text-blue-500'>Sign Up Free!</span> </p>
    <div className='w-[80%] mx-auto flex flex-col gap-y-3 mt-12'>
     <input type='text'  name='Email' placeholder='Email address' className='py-2 px-4 hover:border-red-700 hover:border-solid outline-none border border-x  shadow-md shadow-gray-400 bg-white'/>
     <input type='password'  name='Email' placeholder='Password' className='py-2 px-4 outline-none border hover:border-red-700 hover:border-solid border-x border-gray-500 shadow-md shadow-gray-400 bg-white'/>
    </div>
    <div className='w-[80%] mx-auto mt-6 flex justify-between '>
     <p className='text-sm hover:text-red-600 '><input type='checkbox' name='for checking' className=''/>Remember me</p>
     <p className='text-sm text-blue-400 hover:text-blue-700'>Forgot password?</p>
    </div>
    <button onClick={()=>navigate("/home")} className='py-2 w-[80%] mx-auto ml-10 mt-7 text-white font-semibold shadow-md hover:shadow-green-700 shadow-blue-800 px-4 rounded-sm  hover:bg-green-500 bg-blue-700'>Login to Email</button>
    </div>
    </div>
  </div>
  )
}

export default Login
