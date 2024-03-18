import React, { useState } from 'react'
import HeaderLogo from '../assets/images/svg/kodeden-logo.svg'
import { Sling as Hamburger } from 'hamburger-react'
import HeroImg from '../assets/images/png/hero-img.png'
import PhoneCallIcon, { InstagramIcon, LinkdinIcon, TelegramIcon, TwitterIcon } from './Icons'

const Header = () => {
    const [showNav, setShowNav] = useState(false)
    const [isOpen, setOpen] = useState(false)
    if (showNav === true) {
        document.body.classList.add("max-md:overflow-hidden")
    }
    else {
        document.body.classList.remove("max-md:overflow-hidden")
    }
    return (
        <>
            <header className='header-bg bg-cover bg-no-repeat bg-center min-h-screen pt-4 flex flex-col'>
                <nav>
                    <div className="max-w-[min(1140px,100%-24px)] mx-auto flex items-center justify-between">
                        <a href="/"><img src={HeaderLogo} alt="kodeden" className='h-[47px] w-[58px]' /></a>
                        <div className='flex items-center gap-[26px]'>
                            <ul className={`${showNav ? "start-0" : "start-[-100%]"} max-md:fixed max-md:bg-black max-md:w-full max-md:min-h-screen max-md:top-0 max-md:flex-col max-md:text-[25px] max-md:justify-center max-md:transition-all duration-200 ease-linear  text-[#A2A2A2] flex items-center gap-8`}>
                                <li><a href="/" className='font-medium nav_link transition-all duration-200 ease-linear'>Home</a></li>
                                <li><a href="/" className='font-medium nav_link transition-all duration-200 ease-linear'>About</a></li>
                                <li><a href="/" className='font-medium nav_link transition-all duration-200 ease-linear'>Program</a></li>
                                <li><a href="/" className='font-medium nav_link transition-all duration-200 ease-linear'>How it works</a></li>
                                <li><a href="/" className='font-medium nav_link transition-all duration-200 ease-linear'>FAQs</a></li>
                                <li className='hidden'><a href='/'>Get Started</a></li>
                            </ul>
                            <a href='/' className='text-[14px] font-black text-[#F4F4F4] py-3 px-6 rounded-[2px] button-gradient leading-[1.429]' >Get Started</a>
                        </div>
                        <div className='relative z-[1] md:hidden' onClick={() => setShowNav(!showNav)}><Hamburger toggled={isOpen} color='white' toggle={setOpen} /></div>
                    </div>
                </nav>
                <div className="hero-section flex flex-col grow lg:pt-[77px]">
                    <div className="max-w-[min(1140px,100%-24px)] mx-auto flex flex-col grow justify-around">
                        <div className="flex flex-col">
                            <h1 className='text-[36px] font-semibold text-center max-w-[1089px] leading-[1.167] mx-auto text-white uppercase'>Start the Mini-Course: <span className='gradient-text' > Rapidly Learning New Technical Skills </span></h1>
                            <p className='text-[24px] font-semibold text-[#E4E4E4] leading-[1.292] max-w-[683px] text-center uppercase mx-auto mt-5 mb-[28px]'>Learn All The Skills You Need To Become a Software Engineer!</p>
                        </div>
                        <img src={HeroImg} alt="codegen-course-video" className='max-w-[996px] w-full rounded-[24px] mx-auto' />
                    </div>
                </div>
            </header>
            <p className='text-[24px] text-center mx-auto uppercase leading-[1.292] mt-5 font-semibold text-white'>Become a <span className='gradient-text'> Software </span> Engineer Now!</p>
            <p className='text-center mx-auto text-[#c6c6c6] leading-[1.563] mt-[10px]'>No Math or Science Background Needed</p>
            <div className='flex justify-center mt-[35px] rounded-[2px]'>
                <a href='/' className='button-gradient py-[15px]  px-6 text-white font-black uppercase text-[18px] inline-flex items-center leading-[1.445] rounded-[2px] mx-auto'><PhoneCallIcon /> Book a Call NOW</a>
            </div>
            <div className='social-icon-container fixed  py-[18px] px-[7px] flex flex-col gap-[11.86px] rounded-e-[1.78px] start-[-100%] hover:start-0 transition-all duration-200 ease-linear bg-white top-[50%] translate-y-[-50%]'>
                <a href="https://twitter.com/?lang=en" target='blank'><TwitterIcon /></a>
                <a href="https://www.instagram.com/" target='blank'><InstagramIcon /></a>
                <a href="https://web.telegram.org/" target='blank'><TelegramIcon /></a>
                <a href="https://in.linkedin.com/" target='blank'><LinkdinIcon /></a>
            </div>
        </>
    )
}

export default Header