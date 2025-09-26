import React from 'react'
import badge from "../assets/desktop/badge.png";
import lastSectionImage from "../assets/desktop/lastSectionImage.png";

function Guaranteesection() {
    return (
        <section className='relative w-full flex flex-row items-center justify-between py-10 md:py-15 border-b-7 border-b-emerald-600 px-5'>
            <div className="w-full md:w-[900px] flex flex-col justify-center items-center md:items-start gap-5 pl-0 md:pl-30">
                <div className="flex items-center justify-center gap-5">
                    <img className='w-25 md:w-40' src={badge} alt="" />
                    <div className="flex flex-col gap-5">
                        <div className="text-4xl md:text-5xl font-bold text-balance">Backed by our 7-day Guarantee</div>
                        <p className='text-lg md:text-xl text-balance hidden md:block'>If you don't feel like this saves you weeks of wasted trial and error, just let us know and we'll refund you</p>
                    </div>
                </div>
                <p className='text-lg md:text-xl text-balance block md:hidden text-center'>If you don't feel like this saves you weeks of wasted trial and error, just let us know and we'll refund you</p>
                <p className="text-2xl text-emerald-400 text-center md:text-left">DON'T JUST PASTE THE PROMPT AND HOPE FOR THE BEST.</p>
                <p className='text-3xl font-semibold text-balance text-center md:text-left'>Follow the exact 10 steps that turned it into a faceless cash machine - starting today</p>
                {/* <button className="text-xl md:text-2xl px-10 py-5 rounded-lg text-white font-semibold bg-gradient-to-b from-emerald-500 via-emerald-600 to-emerald-900 hover:from-emerald-900 hover:to-emerald-500 shadow-lg">Yes, Give Me The 10-Day Blueprint!</button> */}
                <button className="px-10 py-3 rounded-lg text-white font-semibold bg-gradient-to-b from-emerald-500 via-emerald-600 to-emerald-900 hover:from-emerald-900 hover:to-emerald-500 shadow-lg">Yes, Give Me The 10-Day Blueprint!</button>
            </div>
            <div className="hidden-1200px absolute -z-10 top-0 left-auto right-0 h-full ">

            <img className='w-180 h-full object-cover' src={lastSectionImage} alt="last section image" />
            </div>
        </section>
    )
}

export default Guaranteesection