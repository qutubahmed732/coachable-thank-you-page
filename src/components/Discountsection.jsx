import discountSectionBackground from "../assets/desktop/sec4.jpg";
import leftHand from "../assets/desktop/section4_LeftHand.svg";
import rightHand from "../assets/desktop/section4_RightHand.svg";


function Discountsection() {
  return (
    <section className="relative w-full flex flex-col items-center gap-7 py-12 text-white bg-cover bg-center bg-no-repeat overflow-hidden" style={{backgroundImage: `url(${discountSectionBackground})`}}>
        <img className="absolute top-0 -left-50 right-auto w-100 md:w-150 h-full" src={leftHand} alt="left robotic hand" />
        <img className="absolute top-0 left-auto -right-50 w-100 md:w-150 h-full" src={rightHand} alt="right robotic hand" />
        <p className="text-3xl font-semibold text-center text-balance">Guides like this usually sell for 97+...</p>
        <h1 className="text-4xl md:text-6xl max-w-2xl font-bold text-center text-balance leading-tight">But today, you can grab it for just <span className="text-emerald-600">$27!</span></h1>

        {/* <button className="text-2xl md:text-3xl px-5 md:px-15 py-5 rounded-lg text-white font-semibold bg-gradient-to-b from-emerald-500 via-emerald-600 to-emerald-900 hover:from-emerald-900 hover:to-emerald-500 shadow-lg">Yes, Give Me The 10-Day Blueprint!</button> */}
        <button className="px-10 py-3 rounded-lg text-white font-semibold bg-gradient-to-b from-emerald-500 via-emerald-600 to-emerald-900 hover:from-emerald-900 hover:to-emerald-500 shadow-lg">Yes, Give Me The 10-Day Blueprint!</button>
    </section>
  )
}

export default Discountsection