import About from "@/components/About";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import GetStarted from "@/components/GetStarted";
import WhatsNew from "@/components/WhatsNew";


export default function Home() {
  return (
    <div className="overflow-hidden bg-primary-black" >
      <Navbar/>    
      <Hero/>
      <div className="relative">
        <About/>
        <div className="z-0 gradient-03"></div>
        <Explore/>
      </div>
      <div className="relative">
        <GetStarted/>
        <div className="z-0 gradient-04"></div>
        <WhatsNew/>
      </div>
      <div className="relative">
        Word
        <div className="z-0 gradient-05"></div>
        Insights
      </div>
      <div className="">
        Feedback
        <div className="z-0 footer-gradient"></div>
        Footer
      </div>
    </div>
  )
}
