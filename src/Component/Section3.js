import React from 'react'
import { useNavigate } from 'react-router-dom'

const Section3 = () => {

   const navigate = useNavigate()


   const handle1=()=>{

      navigate("/details")

   }
  return (
    <div className='w-full h-full mt-8'>
    <div >
        <img className='lg:w-[90%] pl-25 lg:h-[60%] h-[10%]' src='https://images.dealshare.in/1738326811475TopDeals(4).png'/>
    </div>
     
    <div className='overflow-x-auto custom-scrollbar'>
      <div className='lg:w-[90%] w-[200vw] overflow-hidden  h-[50%] flex gap-3 lg:py-5 py-8  mx-10'>
      <div>
      <img src='https://images.dealshare.in/1738655211755UP_Staple.png'/>
      </div>
      <div>
      <img src='https://images.dealshare.in/1738326013707UP_Staple-1.png'/>
      </div>
      <div>
      <img src='https://images.dealshare.in/1738326229902UP_Staple-2.png'/>
      </div>
      <div>
      <img src='https://images.dealshare.in/1738326591527UP_HomeCleaning.png'/>
      </div>
      <div>
      <img src='https://images.dealshare.in/1738326763552UP_Bath&Body.png'/>
      </div>
      <div>
      <img src='https://images.dealshare.in/1738327005958UP_SKinCare.png'/>
      </div>
      </div>
    </div>
   

    <div className='overflow-x-auto custom-scrollbar'>
    <div className='lg:w-[90%] w-[200vw] overflow-hidden h-[50%] flex gap-3 py-5  mx-10'>
    <div>
        <img src='https://images.dealshare.in/1738327165467UP_HotBeverage.png'/>
        </div>
        <div>
        <img src='https://images.dealshare.in/1738327557496UP_Noodles&Ketchup.png'/>
        </div>
        <div>
        <img src='https://images.dealshare.in/1738327669626UP_BreakfastNeeds.png'/>
        </div>
        <div>
        <img src='https://images.dealshare.in/1738327804418UP_Home&Kitchen.png'/>
        </div>
        <div>
        <img src='https://images.dealshare.in/1738327971212UP_CleaningAids.png'/>
        </div>
        <div>
        <img src='https://images.dealshare.in/1738328072977UP_Appliances.png'/>
        </div>
    </div>
    </div>

    <div>
        <img className='lg:w-[90%] lg:mt-0 mt-5  lg:ml-12 lg:h-[20vh] h-[10vh]' src='https://images.dealshare.in/1738326859616SeasonEssentialsstrip(2).png'/>
    </div>

    <div className=' h-full py-5'>
    <div className='flex justify-between'>
    <p className='text-2xl  pl-3 py-8 font-bold'>Most Loved</p>
    <p className='text-2xl   py-8 font-bold' onClick={()=>navigate("/all")}>See More</p>
    </div>

    <div className="w-[85vw] h-full overflow-x-auto  custom-scrollbar py-5 mx-auto">
      <div className=" lg:w-[170vw]  w-[300vw]">
        <div className="lg:h-[43vh]  lg:w-full w-[400vw]  lg:gap-8 gap-5 bg-white  flex ">
          <div className="w-[23%]  lg:h-[40vh]  border border-gray-400 rounded-2xl ">
           <div onClick={handle1} className=" bg-red-500 flex justify-center lg:h-[65%] rounded-t-2xl">
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

export default Section3
