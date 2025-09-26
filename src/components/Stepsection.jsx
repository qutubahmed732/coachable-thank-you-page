import roboticHand from "../assets/desktop/robotic-hand-third-section.png";
import smallRoboticHand from "../assets/mobile/small-image-robotic-hand.png";
import ideaIcon from "../assets/desktop/idea.png";
import funnelIcon from "../assets/desktop/funnel.png";
import contentIcon from "../assets/desktop/content.png";
import statsIcon from "../assets/desktop/stats.png";
import SVG from "../assets/desktop/Section5_Dots.svg";

function Stepsection() {
    return (
        <section className="relative py-18 flex flex-col-1380 md:flex-row h-auto bg-no-repeat bg-cover bg-center bg-[#F5F5F5] mix-blend-colorburn" style={{backgroundImage: `url(${SVG})`}}>
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

                        <div className="grid grid-cols-2 grid-rows-2 gap-5 md:flex md:gap-8">
                            <div className="flex flex-col items-center gap-2 h-full">
                                <img src={ideaIcon} className="w-20" alt="idea" />
                                <p className="text-white text-lg font-semibold">IDEA</p>
                            </div>

                            <div className="flex flex-col items-center gap-2 h-full">
                                <img src={funnelIcon} className="w-20" alt="funnel" />
                                <p className="text-white text-lg font-semibold">FUNNEL</p>
                            </div>

                            <div className="flex flex-col items-center gap-2 h-full">
                                <img src={contentIcon} className="w-20" alt="content" />
                                <p className="text-white text-lg font-semibold">CONTENT</p>
                            </div>

                            <div className="flex flex-col items-center gap-2 h-full">
                                <img src={statsIcon} className="w-20" alt="stats" />
                                <p className="text-white text-lg font-semibold text-center">FIRST SALES</p>
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