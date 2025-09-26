import roboticHand from "../assets/desktop/robotic-hand-third-section.png";
import smallRoboticHand from "../assets/mobile/small-image-robotic-hand.png";
import idea from "../assets/desktop/idea.png";
import funnel from "../assets/desktop/funnel.png";
import content from "../assets/desktop/content.png";
import stats from "../assets/desktop/stats.png";
import SVG from "../assets/desktop/Section5_Dots.svg";
import right from "../assets/desktop/right.png";

function Stepsection() {
  return (
    <section className="relative py-18 flex flex-col-1380 md:flex-row h-auto bg-no-repeat bg-cover bg-center bg-[#F5F5F5] mix-blend-colorburn" style={{ backgroundImage: `url(${SVG})` }}>
      <img src={roboticHand} className='hidden-1370px w-[calc(614px+5vw)] absolute bottom-0 left-0 z-10' alt="robotic hand" />
      <img src={smallRoboticHand} className='block md:hidden w-[calc(614px+5vw)]' alt="robotic hand" />

      <div className="w-full flex flex-col items-center justify-start z-20 py-3 px-3">
        <div className="w-full md:max-w-[700px] h-[80%] ml-0 md:ml-auto mr-0 md:mr-20 my-auto flex flex-col items-center gap-3">

          <div className="w-[100%] flex flex-col gap-5 text-center md:text-left">
            <h2 className="font-semibold text-2xl md:text-4xl text-balance">We used this exact prompt to spark the business that became Coachable... <br /> But the real secret wasn't the prompt itself.</h2>
            <h1 className="text-2xl md:text-[33px] font-bold text-[#2c6159] text-center md:text-left">IT WAS THE FIRST 10 DAYS OF EXECUTION</h1>
          </div>

          <div className="container flex flex-col items-center gap-5 rounded-2xl bg-[#1d4a43] p-5 md:p-10">
            <p className="text-xl md:text-2xl font-semibold text-white">Those 10 days took us from:</p>

            <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-7 md:grid-rows-1 items-center justify-items-center gap-0 md:gap-6">

              {/* Step 1 */}
              <div className="col-start-1 col-end-1 flex flex-col items-center">
                <img src={idea} width={100} alt="idea" />
                <p className="text-white mt-2 font-medium">IDEA</p>
              </div>

              {/* Arrow 1 */}
              <span className="col-start-2 col-end-3 w-12 md:w-20 rotate-0 flex justify-center">
                <img src={right} alt="arrow" />
              </span>

              {/* Step 2 */}
              <div className="col-start-3 col-end-4 flex flex-col items-center">
                <img src={funnel} width={100} alt="funnel" />
                <p className="text-white mt-2 font-medium">FUNNEL</p>
              </div>

              {/* Arrow 2 (mobile mai neeche aana chahiye, desktop mai inline) */}
              <span className="col-start-3 col-end-4 md:col-start-4 md:col-end-5 w-12 md:w-20 rotate-90 md:rotate-0 flex justify-center">
                <img src={right} alt="arrow" />
              </span>

              {/* Step 3 (mobile mai niche right side pe) */}
              <div className="col-start-3 col-end-4 md:col-start-5 md:col-end-6 row-start-3 row-end-4 md:row-start-1 md:row-end-1 flex flex-col items-center">
                <img src={content} width={100} alt="content" />
                <p className="text-white mt-2 font-medium">CONTENT</p>
              </div>

              {/* Arrow 3 (mobile mai left side pe ulta arrow, desktop mai inline) */}
              <span className="w-12 md:w-20 rotate-180 md:rotate-0 flex justify-center">
                <img src={right} alt="arrow" />
              </span>

              {/* Step 4 (mobile mai bottom-left pe, desktop mai end pe) */}
              <div className="col-start-1 col-end-2 md:col-start-7 md:col-end-8 row-start-3 row-end-4 md:row-start-1 md:row-end-1 flex flex-col items-center">
                <img src={stats} width={100} alt="sales" />
                <p className="text-white mt-2 font-medium text-center">FIRST SALES</p>
              </div>
            </div>

            <p className="text-sm md:text-xl text-white/80 font-semibold text-center">And we've broken them down step-by-step so you can do the same.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stepsection