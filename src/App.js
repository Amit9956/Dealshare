import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Details from "./Component/Details";
import Footer from "./Component/Footer";
import HomeNav from "./Component/HomeNav";
import Section1 from "./Component/Section1";
import Section10 from "./Component/Section10";
import Section11 from "./Component/Section11";
import Section12 from "./Component/Section12";
import Section3 from "./Component/Section3";
import Section4 from "./Component/Section4";
import Section5 from "./Component/Section5";
import Section6 from "./Component/Section6";
import Section7 from "./Component/Section7";
import Section8 from "./Component/Section8";
import Section9 from "./Component/Section9";
import Home from "./Home";
import About from "./Component/About";
import Login from "./Component/Login";
import PageNot from "./Component/PageNot";
import { PiChatSlash } from "react-icons/pi";
import Mobile from "./Component/Mobile";
import Item1 from "./Component/Item1";


function App() {

    return (

 
     
<BrowserRouter>
  <HomeNav />
 
  <Routes>

  <Route path="/" element={<Login/>}/>
  <Route path="/home" element={<Home/>}/>
    <Route path="/details" element={<Details />} />
    <Route path="/abouts"  element={<About />}/>
    <Route path="/all" element={<Mobile/>}/>
    <Route path="/view" element={<Item1/>}/>

    <Route path="*"  element={<PageNot />}/>
   
   
    
  </Routes>

  <Footer/>
</BrowserRouter> 

);
}

export default App;
