import React from 'react'
import badge from "../assets/desktop/badge.png";
import lastSectionImage from "../assets/desktop/lastSectionImage.png";

function Guaranteesection() {
    return (
        <section className='relative w-full flex flex-row items-center justify-between py-15 border-b-7 border-b-emerald-600'>
            <div className="w-full md:w-[900px] flex flex-col items-start gap-5 pl-0 md:pl-30">
                <div className="flex flex-row items-start md:items-center gap-5">
                    <img className='w-20 md:w-40' src={badge} alt="" />
                    <div className="flex flex-col gap-5">
                        <div className="text-3xl md:text-6xl font-bold text-balance">Backed by our 7-day Guarantee</div>
                        <p className='text-xl text-balance'>If you don't feel like this saves you weeks of wasted trial and error, just let us know and we'll refund you</p>
                    </div>
                </div>
                <p className="text-2xl text-emerald-400 text-balance">DON'T JUST PASTE THE PROMPT AND HOPE FOR THE BEST.</p>
                <p className='text-3xl font-semibold text-balance'>Follow the exact 10 steps that turned it into a faceless cash machine - starting today</p>
                <button className="text-2xl px-10 py-5 rounded-lg text-white font-semibold bg-gradient-to-b from-emerald-500 via-emerald-600 to-emerald-900 hover:from-emerald-900 hover:to-emerald-500 shadow-lg">Yes, Give Me The 10-Day Blueprint!</button>
            </div>
            <img className='hidden-1200px absolute -z-10 top-0 left-auto right-0 w-190 h-full object-cover' src={lastSectionImage} alt="last section image" />
        </section>
    )
}

export default Guaranteesection