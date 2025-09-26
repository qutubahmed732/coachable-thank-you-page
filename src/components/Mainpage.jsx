import logo from "../assets/Company_logo.png"
import Tick from "../assets/Tick_mark.png"
import { Star } from "lucide-react"
import Background from "../assets/desktop/Background.jpg";
import mobileBackground from "../assets/mobile/Background-small.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Mainpage() {
    const [image, setImage] = useState(Background)
    const [email, setEmail] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setImage(mobileBackground);
            } else {
                setImage(Background);
            }

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
        handleResize();
    }, []);

    const subscriptionHandler = (e) => {
        e.preventDefault();

        if (!email) return;

        setEmail("");
        navigate("/thank-you-page");
    };


    return (
        <>
            <section className="w-full h-[fit-content] lg:h-[100svh] flex items-center justify-between gap-10 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${image})` }}>
                <div className="p-5 lg:p-2 m-auto flex flex-col lg:flex-row justify-between gap-5 lg:gap-15 max-w-3xl lg:max-w-7xl">

                    <div className="w-full lg:w-1/2 flex flex-col items-start justify-between">
                        <div className="logo w-50 h-8 lg:w-75 lg:h-12 mx-auto lg:mx-0 my-7 lg:my-0">
                            <img src={logo} alt="coachable logo" />
                        </div>

                        <div className="text flex flex-col gap-3 lg:gap-4 text-pretty text-center lg:text-left">
                            <h1 className="text-[40px] lg:text-[60px] leading-10 lg:leading-15 font-bold">Build a $10 Million Faceless Brand</h1>
                            <p className="text-[#2c6159] text-2xl lg:text-3xl font-bold">STARTING WITH <span className="text-[#5bc68d]">ONE PROMPT</span></p>
                            <p className="text-lg lg:text-xl text-[#4d4d4d] text-balance pb-6 lg:pb-0">Get the exact prompt we used to design Coachable then use it to your own product ladder, funnel and 90-day plan.</p>
                        </div>

                        <div className="relative border-2 border-gray-200 rounded-2xl py-5 px-10 hidden lg:flex flex-col gap-3 before:absolute before:-top-7 before:right-10 before:w-15 before:h-15 before:rounded-full before:bg-[url('./assets/quotation.png')] before:bg-no-repeat before:bg-cover before:bg-center mt-5 lg:mt-0">
                            <header className="text-[#2c6159] flex gap-4">
                                <p className="text-2xl font-bold">Jordan M.</p>
                                <div className="flex items-center">
                                    <Star className="fill-[#5bc68d] text-[#5bc68d] size-5" />
                                    <Star className="fill-[#5bc68d] text-[#5bc68d] size-5" />
                                    <Star className="fill-[#5bc68d] text-[#5bc68d] size-5" />
                                    <Star className="fill-[#5bc68d] text-[#5bc68d] size-5" />
                                    <Star className="fill-[#5bc68d] text-[#5bc68d] size-5" />
                                </div>
                            </header>
                            <p className="text-sm text-stone-900 leading-relaxed font-semibold">&#34; This exact prompt completely transformed the way i approched building my online brand.
                                In less than 60 days, I went from zero direction to having a clear product ladder, automated funnel, and real sales coming in. Absolute game-changer! &#34;</p>
                        </div>
                    </div>

                    <form onSubmit={subscriptionHandler} className="relative bg-[#f2f2f2] rounded-3xl shadow-lg w-full lg:max-w-lg h-[fit-content] p-8 md:p-10">
                        <h2 className="text-lg md:text-2xl font-[url('../futura-pt-webfont/FuturaCyrillicMedium.woff')] font-semibold text-[#2c6159] leading-tight text-center">
                            Want the exact prompt that we used to build a $10 million Social Media
                            Business without showing face?
                        </h2>

                        <h1 className="mt-4 text-xl md:text-2xl font-[url('../futura-pt-webfont/FuturaCyrillicMedium.woff')] font-extrabold text-gray-900 text-center">
                            THE EXACT PROMPT <br /> THAT CREATED COACHABLE...
                        </h1>

                        <ul className="mt-6 space-y-2 text-gray-700 text-[12px] lg:text-sm">
                            <li className="flex items-start gap-3">
                                <img src={Tick} className="w-5" alt="" />
                                <span>Turns your niche + goals into a step-by-step launch plan</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <img src={Tick} className="w-5" alt="" />
                                <span>
                                    Includes revenue targets, content engine, and automation stack
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <img src={Tick} className="w-5" alt="" />
                                <span>
                                    Works for creators, agencies, and SaaS – no face needed
                                </span>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <input
                                type="email"
                                placeholder="@youremail@address.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full rounded-xl border-2 border-[#d4d4d4] bg-white/70 p-3 text-lg text-[#6b6b6b] focus:outline-none"
                            />
                            <button type="submit" className="mt-4 w-full rounded-xl bg-gradient-to-t from-[#2c6159] to-[#5bc68d] bg-[length:200%_200%] bg-top py-3 text-white font-semibold text-sm md:text-base shadow-md cursor-pointer hover:bg-bottom transition-all duration-100">
                                    Send me the exact prompt
                            </button>
                        </div>

                        {/* <div className="flex items-center gap-2 my-6">
              <span className="flex-1 h-px bg-gray-300"></span>
              <span className="text-gray-500 text-sm">OR</span>
              <span className="flex-1 h-px bg-gray-300"></span>
            </div> */}

                        {/* <button className="w-full flex items-center justify-center gap-3 border border-gray-300 bg-white/70 rounded-xl py-3 hover:bg-gray-50 transition cursor-pointer scale-100 active:scale-99">
              <img
                src={google}
                alt="Google"
                className="w-6 h-6"
              />
              <span className="text-gray-700 font-medium text-sm md:text-lg">
                Verify with Google
              </span>
            </button> */}
                    </form>

                    <div className="relative border-3 border-[#3b6d60] rounded-4xl py-5 px-5 flex lg:hidden flex-col gap-3 before:absolute before:-top-7 before:right-10 before:w-15 before:h-15 before:rounded-full before:bg-[url('./assets/quotation.png')] before:bg-no-repeat before:bg-cover before:bg-center mt-5 lg:mt-0">
                        <header className="text-[#2c6159] flex gap-4">
                            <p className="text-2xl text-[#8df3c0] font-bold">Jordan M.</p>
                            <div className="flex items-center">
                                <Star className="fill-[#8df3c0] text-[#8df3c0] size-5" />
                                <Star className="fill-[#8df3c0] text-[#8df3c0] size-5" />
                                <Star className="fill-[#8df3c0] text-[#8df3c0] size-5" />
                                <Star className="fill-[#8df3c0] text-[#8df3c0] size-5" />
                                <Star className="fill-[#8df3c0] text-[#8df3c0] size-5" />
                            </div>
                        </header>
                        <p className="text-sm text-green-50 text-balance">&#34; This exact prompt completely transformed the way i approched building my online brand.
                            In less than 60 days, I went from zero direction to having a clear product ladder, automated funnel, and real sales coming in. Absolute game-changer! &#34;</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Mainpage

