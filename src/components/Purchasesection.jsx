import BackgroundSection3 from "../assets/desktop/sec3Background.jpg";
import SVGsection3 from "../assets/desktop/Section3_Dots.svg";
import tabletImage from "../assets/desktop/Section3TabletImage.png";

function Purchasesection() {
  return (
    <section className="relative w-full h-[fit-content] md:h-[100vh] py-10 flex flex-col md:flex-row items-center justify-center">
      <div className="absolute w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundSection3})` }}></div> {/* background image */}
      <div className="absolute w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${SVGsection3})` }}></div> {/* SVG background */}
      <div className="absolute w-full h-full bg-gradient-to-t from-emerald-600/20 to-transparent"></div> {/* gradient */}
      <div className="relative text-white w-[85%] h-[90%] flex flex-col md:flex-row items-center">
        <div className="flex flex-col items-center md:items-start gap-3">
          <h3 className="text-2xl text-emerald-400 font-semibold text-center md:text-left">FROM PROPMT TO PROFIT:</h3>
          <h1 className="text-5xl font-bold text-center md:text-left">Your 10-Day Blueprint</h1>
          <p className="text-balance text-emerald-50/70 text-center md:text-left max-w-4xl">The exact step-by-step playbook we followed in the first 10 days to launch Coachable and start generating profit - so you can copy it.</p>

          <div className="block md:hidden w-1/2 h-full">
            <img src={tabletImage} className="w-full h-full object-cover" alt="" />
          </div>

          <p className="italic text-2xl font-semibold text-emerald-50">Here's what's waiting for you:</p>
          <div className="border border-white w-[60%] mt-2"></div>

          <ul className="flex flex-col gap-2">
            <li><span className="font-bold text-emerald-300 pr-2">Day 1-2:</span> Lock in a faceless brand worth figures.</li>
            <li><span className="font-bold text-emerald-300 pr-2">Day 3-5:</span> Launch your first funnel: freebie - tripwrite - thank-you</li>
            <li><span className="font-bold text-emerald-300 pr-2">Day 6-7:</span> Automate and fire up your content engine.</li>
            <li><span className="font-bold text-emerald-300 pr-2">Day 8-10:</span> Drive traffic, track wins, and scale on repeat.</li>
          </ul>

          <h3 className="text-2xl max-w-3xl font-bold italic text-emerald-50 py-3 text-center md:text-left text-balance">Each day gives you one clear, simple step. Just copy what we did and execute.</h3>

          <button className="px-10 py-3 rounded-lg text-white font-semibold bg-gradient-to-b from-emerald-500 via-emerald-600 to-emerald-900 hover:from-emerald-900 hover:to-emerald-500 shadow-lg">Give Me The 10-Day Blueprint!</button>
        </div>

        <div className="hidden md:block w-1/2 h-full absolute left-auto right-0 hidden-1200px">
          <img src={tabletImage} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Purchasesection