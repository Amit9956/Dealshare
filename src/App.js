import "./App.css";
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


function App() {
  return (<>
     
    <HomeNav/>

    <div className=" lg:pl-28 lg:w-[95%]">
    <Section1/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    <Section9/>
    <Section10/>
    <Section11/>
    <Section12/>
    </div>
    <Footer/>

    </>);
}

export default App;
