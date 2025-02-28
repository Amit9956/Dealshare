import React from "react";
import ".././App.css"


const Section1 = () => {

  

  const handleClick =()=>{


    console.log("click")

  

  }



  return (
    <div className="w-" >

    <div className="overflow-x-auto custom-scrollbar">
      <marquee scrollamount="40 ">
      <div className=" lg:w-[180vw] w-[500vw] lg:h-[100%] opacity-100  gap-4 py-10 flex ">
        <div>
          <img className="lg:h-[30vh] opacity-100 h-[25vh] w-[115vw]" src="https://images.dealshare.in/1738325332248Topdeals.png" />
        </div>
        <div>
          <img className="lg:h-[30vh] opacity-100 h-[25vh] w-[115vw]" src="https://images.dealshare.in/1738325343501NCR_LUC_RAJ.png" />
        </div>
        <div>
          <img className="lg:h-[30vh] opacity-100 h-[25vh] w-[115vw]" src="https://images.dealshare.in/1738325351179AllRegions-2.png" />
        </div>
        <div>
          <img  className="lg:h-[30vh] opacity-100 h-[25vh] w-[115vw]" src="https://images.dealshare.in/1738325359551AllRegions-1.png" />
        </div>
        <div>
          <img className="lg:h-[30vh] opacity-100 h-[25vh] w-[115vw]" src="https://images.dealshare.in/1738325367396AllRegions-3.png" />
        </div>
        <div>
          <img className="lg:h-[30vh] opacity-100 h-[25vh] w-[115vw]" src="https://images.dealshare.in/1738325378776All.png" />
        </div>
        <div>
          <img className="lg:h-[30vh] opacity-100 h-[25vh] w-[115vw]" src="https://images.dealshare.in/1738325387245AllRegions-4.png" />
        </div>``
        <div>
          <img className="lg:h-[30vh] opacity-100 h-[25vh] w-[115vw]" src="https://images.dealshare.in/1738325397823AllRegions.png" />
        </div>
        <div>
          <img className="lg:h-[30vh] opacity-100 h-[25vh] w-[115vw]" src="https://images.dealshare.in/1738325407805AllRegions-7.png" />
        </div>
        <div>
          <img className="lg:h-[30vh] opacity-100 h-[25vh] w-[115vw]" src="https://images.dealshare.in/1738325424897AllRegions-5.png" />
        </div>
        <div>
          <img className="lg:h-[30vh] opacity-100 h-[25vh] w-[115vw]" src="https://images.dealshare.in/1738325433746AllRegions-6.png" />
        </div>
        <div>
          <img className="lg:h-[30vh] opacity-100 h-[25vh] w-[115vw]" src="https://images.dealshare.in/1738325299234Fruits&Vegetables.png" />
        </div>
        <div>
          <img className="lg:h-[30vh] opacity-100 h-[25vh] w-[115vw]" src="https://images.dealshare.in/1738325378776All.png" />
        </div>
      </div>
      </marquee>
      </div>


      
      <div className="custom-scrollbar">
      <marquee scrollamount="35" direction="right">
      <div className="lg:w-[95%] w-[200vw] flex  lg:h-full h-[50%] py-5 mx-10">
        <div>
          <img className="lg:h-[15vh] lg:w-full w-[250vw] h-[10vh]" src="https://images.dealshare.in/1737032618443WhatsAppImage2025-01-16at6.33.08PM.webp" />
        </div>
        <div>
          <img className="lg:h-[15vh] lg:w-full w-[250vw] h-[10vh]" src="https://images.dealshare.in/1732807456060Salt1Kg_.webp" />
        </div>
        <div>
          <img  className="lg:h-[15vh] lg:w-full w-[250vw] h-[10vh]" src="https://images.dealshare.in/1737032618443WhatsAppImage2025-01-16at6.33.08PM.webp" />
        </div>
      </div>
      </marquee>
      </div>
      

        <div>
          <p className="text-2xl py-8 pl-3 font-bold">Monthly Big Savers</p>
        </div>
      <div className="w-[85vw] h-full overflow-x-auto  custom-scrollbar  py-5 mx-auto">
      <div className=" lg:w-[170vw]  w-[300vw]">
        <div className="lg:h-[43vh]  lg:w-full w-[400vw]  lg:gap-8 gap-5 bg-white  flex ">
          <div onClick={handleClick} className="w-[23%]  lg:h-[40vh]  border border-gray-400 rounded-2xl ">
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
  );
};

export default Section1;