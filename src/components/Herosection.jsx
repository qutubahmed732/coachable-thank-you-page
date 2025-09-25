import heroImage from "../assets/desktop/Hero-image.png";
import SVGFile from "../assets/desktop/Section1_DOts.svg";
import backgroundImage from "../assets/desktop/sec1.jpg";
import smallRobot from "../assets/mobile/Sec1.jpg";
import logo from "../assets/logo.png"

function Herosection() {



  return (
    <section className="relative w-full h-[100dvh] bg-center bg-cover bg-no-repeat overflow-x-hidden" style={{backgroundImage: `url(${backgroundImage})`, mixBlendMode: "multiply"}}>
      {/* Start of background style */}
      <div className="absolute z-20 lg:z-0 w-full h-full bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${SVGFile})`}}>
      </div>
      <div className="relative h-full w-full max-w-[1500px] xl:max-w-[100%] mx-auto">
        <img src={heroImage} className='hidden md:block w-[calc(614px+5vw)] xl:w-[40%] h-full absolute left-auto right-0 z-0 lg:z-20' alt="" />
        <img src={smallRobot} className='w-full h-full block md:hidden absolute right-0 z-0 lg:z-10' alt="" />
        {/* End of background style */}

        {/* Start of content  */}
        <div className="flex flex-col items-center justify-center max-w-5xl h-full relative z-20">
          <div className="flex flex-col gap-20 md:gap-10 pl-5 md:pl-15 lg:pl-30">
            <img src={logo} className="w-60 md:w-80 lg:w-100" alt="" />
            <div className="flex flex-col items-start gap-5 lg:gap-9 gap-above-1300">
              <p className="text-3xl md:text-4xl lg:text-5xl text-[#75fbb5] font-medium">THANK YOU</p>
              <h1 className='text-white text-4xl md:text-6xl font-above-1300 font-bold leading-10 md:leading-18 text-balance'>Your exact Coachable build prompt is on its way to your inbox...</h1>
              <h4 className='text-3xl md:text-5xl text-emerald-400 italic font-medium'>but before you dive in,<br /> read this carefully</h4>
            </div>
          </div>
        </div>
        {/* End of content */}

      </div>
    </section>
  )
}

export default Herosection;