import React from 'react'
import logo from "../assets/logo.png";

function Footer() {
    return (
        <footer className='bg-black flex flex-row items-center justify-between px-20 py-8 text-white'>
            <img className='block md:hidden mx-auto w-40' src={logo} alt="logo" />
            <div className="hidden md:flex gap-3"><img className='w-30' src={logo} alt="logo" /> | <span>COPYRIGHT 2025</span></div>
            <div className="hidden md:flex">ALL RIGHTS RESERVED</div>
        </footer>
    )
}

export default Footer