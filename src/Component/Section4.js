import React from 'react'
import { useNavigate } from 'react-router-dom'

const Section4 = () => {

   const navigate = useNavigate()
  return (
    <div className='w-full h-full '>

        <div className='w-full h-full py-5'>
        <div className='flex justify-between'>
            <p className='text-2xl pl-3 py-5 font-bold'>Most Purchased</p>
            <p className='text-2xl pl-3 py-5 font-bold' onClick={()=>navigate("/view")}>View All</p>
        </div>

        <div className="w-[85vw] h-full overflow-x-auto  custom-scrollbar   py-5 mx-auto">
      <div className=" lg:w-[170vw]  w-[300vw]">
        <div className="lg:h-[43vh]  lg:w-full w-[400vw]  lg:gap-8 gap-5 bg-white  flex ">
          <div className="w-[23%]  lg:h-[40vh]  border border-gray-400 rounded-2xl ">
           <div className=" bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
              <img className="h-full" src="https://media.dealshare.in/img/offer/1731997878288:4107D94F0F_1.webp" />
           </div>
           <div className="h-[25%] ml-2 w-full">
            <p className="text-xs mt-2">Bail Kolhu Kachi Ghani Oil (Jar) - 5 Ltr </p>
            <div className="w-full h-full mt-1 justify-between  flex">
            <div>
            <p className="mt-2 text-gray-600 text-xs font-semibold">5 Ltr</p>
            <p className="text-green-600 font-bold ">₹869</p>
            <p className="line-through text-gray-600 text-xs font-semibold">₹930</p>
            </div>
            <div>
            <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">ADD</button>
            </div>
            </div>
            </div>
          </div>
          <div className="w-[23%] lg:h-[40vh] border border-gray-400 rounded-2xl ">
           <div className=" bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
              <img className="h-full lg:w-[75%] " src="https://media.dealshare.in/img/offer/1737452272494:5DCDFA1259_DEAL.webp" />
           </div>
           <div className="h-[25%] ml-2 w-full">
            <p className="text-xs mt-2">Surf Excel Wash Detergent - 3 Kg</p>
            <div className="w-full h-full mt-1 justify-between  flex">
            <div>
            <p className=" text-gray-600 text-xs font-semibold mt-2">3 Kg</p>
            <p className="text-green-600 font-bold ">₹319</p>
            <p className="line-through text-gray-600 text-xs font-semibold">₹390</p>
            </div>
            <div>
            <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">ADD</button>
            </div>
            </div>
            </div>
          </div>
          <div className="w-[23%] lg:h-[40vh] border border-gray-400 rounded-2xl ">
           <div className=" bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
              <img className="h-full " src="https://media.dealshare.in/img/offer/1737524780550:35FABFF015_1.webp" />
           </div>
           <div className="h-[25%] ml-2 w-full">
            <p className="text-xs mt-2">Nimantran Ghee</p>
            <div className="w-full h-full mt-1 justify-between  flex">
            <div>
            <p className="mt-2 text-gray-600 text-xs font-semibold">5 Ltr</p>
            <p className="text-green-600 font-bold ">₹869</p>
            <p className="line-through text-gray-600 text-xs font-semibold">₹930</p>
            </div>
            <div>
            <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">ADD</button>
            </div>
            </div>
            </div>
          </div>
          <div className="w-[23%] lg:h-[40vh] border border-gray-400 rounded-2xl ">
           <div className=" bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
              <img className="h-full " src="https://media.dealshare.in/img/offer/1737465609481:D7FD8E07D8_1.webp" />
           </div>
           <div className="h-[25%] ml-2 w-full">
            <p className="text-xs mt-2">Vaseline Moisturiser Lotion - 400 Ml </p>
            <div className="w-full h-full mt-1 justify-between  flex">
            <div>
            <p className="mt-2 text-gray-600 text-xs font-semibold">400 Ml</p>
            <p className="text-green-600 font-bold ">₹179</p>
            <p className="line-through text-gray-600 text-xs font-semibold">₹390</p>
            </div>
            <div>
            <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">ADD</button>
            </div>
            </div>
            </div>
          </div>
          <div className="w-[23%] lg:h-[40vh] border border-gray-400 rounded-2xl ">
           <div className=" bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
              <img className="h-full " src="https://media.dealshare.in/img/offer/1737524781646:F8CEC54FB5_1.webp" />
           </div>
           <div className="h-[25%] ml-2 w-full">
            <p className="text-xs mt-2">Pears Pure  - 125 Gm (Pack Of 3)</p>
            <div className="w-full h-full mt-1 justify-between  flex">
            <div>
            <p className="mt-2 text-gray-600 text-xs font-semibold">125 Gm</p>
            <p className="text-green-600 font-bold ">₹86</p>
            <p className="line-through text-gray-600 text-xs font-semibold">₹100</p>
            </div>
            <div>
            <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">ADD</button>
            </div>
            </div>
            </div>
          </div>
           <div className="w-[23%] lg:h-[40vh] border border-gray-400 rounded-2xl ">
           <div className=" bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
              <img className="h-full " src="https://media.dealshare.in/img/offer/1731997878288:4107D94F0F_1.webp" />
           </div>
           <div className="h-[25%] ml-2 w-full">
            <p className="text-xs mt-2">Bail Kolhu Kachi Ghani Oil (Jar) - 5 Ltr </p>
            <div className="w-full h-full mt-1 justify-between  flex">
            <div>
            <p className="mt-2 text-gray-600 text-xs font-semibold">5 Ltr</p>
            <p className="text-green-600 font-bold ">₹869</p>
            <p className="line-through text-gray-600 text-xs font-semibold">₹930</p>
            </div>
            <div>
            <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">ADD</button>
            </div>
            </div>
            </div>
          </div>
          <div className="w-[23%] lg:h-[40vh] border border-gray-400 rounded-2xl ">
           <div className=" bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
              <img className="h-full w-[75%] " src="https://media.dealshare.in/img/offer/1737452272494:5DCDFA1259_DEAL.webp" />
           </div>
           <div className="h-[25%] ml-2 w-full">
            <p className="text-xs mt-2">Surf Excel Wash Detergent - 3 Kg</p>
            <div className="w-full h-full mt-1 justify-between  flex">
            <div>
            <p className=" text-gray-600 text-xs font-semibold mt-2">3 Kg</p>
            <p className="text-green-600 font-bold ">₹319</p>
            <p className="line-through text-gray-600 text-xs font-semibold">₹390</p>
            </div>
            <div>
            <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">ADD</button>
            </div>
            </div>
            </div>
          </div>
          <div className="w-[23%] lg:h-[40vh] border border-gray-400 rounded-2xl ">
           <div className=" bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
              <img className="h-full " src="https://media.dealshare.in/img/offer/1737524780550:35FABFF015_1.webp" />
           </div>
           <div className="h-[25%] ml-2 w-full">
            <p className="text-xs mt-2">Nimantran Ghee</p>
            <div className="w-full h-full mt-1 justify-between  flex">
            <div>
            <p className="mt-2 text-gray-600 text-xs font-semibold">5 Ltr</p>
            <p className="text-green-600 font-bold ">₹869</p>
            <p className="line-through text-gray-600 text-xs font-semibold">₹930</p>
            </div>
            <div>
            <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">ADD</button>
            </div>
            </div>
            </div>
          </div>
          <div className="w-[23%] lg:h-[40vh] border border-gray-400 rounded-2xl ">
           <div className=" bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
              <img className="h-full " src="https://media.dealshare.in/img/offer/1737465609481:D7FD8E07D8_1.webp" />
           </div>
           <div className="h-[25%] ml-2 w-full">
            <p className="text-xs mt-2">Vaseline Moisturiser Lotion - 400 Ml </p>
            <div className="w-full h-full mt-1 justify-between  flex">
            <div>
            <p className="mt-2 text-gray-600 text-xs font-semibold">400 Ml</p>
            <p className="text-green-600 font-bold ">₹179</p>
            <p className="line-through text-gray-600 text-xs font-semibold">₹390</p>
            </div>
            <div>
            <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">ADD</button>
            </div>
            </div>
            </div>
          </div>
          <div className="w-[23%] lg:h-[40vh] border border-gray-400 rounded-2xl ">
           <div className=" bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
              <img className="h-full " src="https://media.dealshare.in/img/offer/1737524781646:F8CEC54FB5_1.webp" />
           </div>
           <div className="h-[25%] ml-2 w-full">
            <p className="text-xs mt-2">Pears Pure  - 125 Gm (Pack Of 3)</p>
            <div className="w-full h-full mt-1 justify-between  flex">
            <div>
            <p className="mt-2 text-gray-600 text-xs font-semibold">125 Gm</p>
            <p className="text-green-600 font-bold ">₹86</p>
            <p className="line-through text-gray-600 text-xs font-semibold">₹100</p>
            </div>
            <div>
            <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">ADD</button>
            </div>
            </div>
            </div>
          </div>
        </div>
       </div>
    </div>
        </div>
      
    </div>
  )
}

export default Section4