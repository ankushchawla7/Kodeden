import { useState } from 'react'
import headerLogo from '../assets/images/svg/kodeden-logo.svg'
import heroSideVector from '../assets/images/webp/hero-side-vector.webp'
import PhoneCallIcon, { InstagramIcon, LinkdinIcon, TelegramIcon, TwitterIcon } from './Icons'
import coursesDemo from '../assets/video/courseDemo.mp4'
import close from '../assets/images/svg/close.svg'
import open from '../assets/images/svg/open.svg'


const Header = () => {
    const [showNav, setShowNav] = useState(false)
    if (showNav === true) {
        document.body.classList.add("max-md:overflow-hidden")
    }
    else {
        document.body.classList.remove("max-md:overflow-hidden")
    }
    const movement = () => {
        return (
            setShowNav(!showNav)
        )
    }
    const navLinks = [
        { title: 'Home', link: '/' },
        { title: 'About', link: '#about' },
        { title: 'Program', link: '#program' },
        { title: 'How it works', link: '#how_Works' },
        { title: 'FAQs', link: '#faq' }
    ]
    return (
        <>
            <header className='header-bg bg-[url("./assets/images/webp/header-bg.webp")] bg-cover bg-no-repeat bg-center  pt-4 flex flex-col'>
                <nav>
                    <div className="max-w-[min(1140px,100%-24px)] mx-auto flex items-center justify-between">
                        <a href="/"><img src={headerLogo} alt="kodeden" className='h-[47px] w-[58px]' /></a>
                        <div className='flex items-center gap-[26px]'>
                            <ul className={`${showNav ? "start-0" : "start-[-100%]"} max-md:fixed z-[2] max-md:bg-black max-md:w-full max-md:min-h-screen max-md:top-0 max-md:flex-col max-md:text-[25px] max-md:justify-center max-md:transition-all duration-300 ease-linear  text-[#A2A2A2] flex items-center gap-8`}>
                                {navLinks.map((e, index) => {
                                    return (
                                        <>
                                            <li key={index}><a onClick={movement} className='font-medium nav_link hover:bg-contain hover:bg-gradient-to-br from-[#ff2801] to-[#ff6b04] transition-all duration-300 ease-linear' href={e.link}>{e.title}</a></li>
                                        </>
                                    )
                                })}
                            </ul>
                            <a href='/' className=' bg-gradient-to-br from-[#FF2801] to-[#FF6B0A] transition-all duration-300 ease-linear text-[14px] font-black text-[#F4F4F4] py-3 px-6 rounded-[2px] button-gradient leading-[1.429]' >Get Started</a>
                        </div>
                        <div className='cursor-pointer relative z-[3] md:hidden' onClick={() => setShowNav(!showNav)}>{showNav ? <img src={close} alt='close' className='max-sm:h-[35px]' /> : <img src={open} alt='open' className='max-sm:h-[35px]' />}</div>
                    </div>
                </nav>
                <div className="hero-section flex flex-col grow pt-10 lg:pt-[77px]">
                    <div className="max-w-[min(1140px,100%-24px)] mx-auto flex flex-col relative  ">
                        <div className="flex flex-col">
                            <h1 className='text-[36px] font-semibold text-center max-w-[1089px] leading-[1.167] mx-auto text-white uppercase'>Start the Mini-Course: <span className='gradient-text bg-contain bg-gradient-to-br from-[#FF2801] to-[#FF6B0A]' > Rapidly Learning New Technical Skills </span></h1>
                            <p className=' text-[20px] sm:text-[24px] font-semibold text-[#E4E4E4] leading-[1.292] max-w-[683px] text-center uppercase mx-auto mt-5 mb-[28px]'>Learn All The Skills You Need To Become a Software Engineer!</p>
                        </div>
                        {/* <img src={heroImg} alt="codegen-course-video" className='xl:max-w-[996px] xl:w-full w-full md:w-[75%] rounded-[24px] mx-auto' /> */}
                        <video src={coursesDemo} muted controls className='xl:max-w-[996px] xl:w-full w-full md:w-[75%] rounded-[24px] mx-auto outline-none'></video>
                        <img src={heroSideVector} alt="vector-curve" className='absolute right-[-7%] hidden 2xl:block top-[20%] w-[110.87px]' />
                    </div>
                </div>
            </header>
            <div className='px-4'>
                <p className='text-[20px] sm:text-[24px] text-center mx-auto uppercase leading-[1.292] mt-5 font-semibold text-white'>Become a <span className='gradient-text bg-contain bg-gradient-to-br from-[#FF2801] to-[#FF6B0A]'> Software </span> Engineer Now!</p>
                <p className='text-center mx-auto text-[#c6c6c6] leading-[1.563] mt-[10px]'>No Math or Science Background Needed</p>
                <div className='flex justify-center mt-6 md:mt-[35px] rounded-[2px]'>
                    <a href='/' className='button-gradient bg-gradient-to-br from-[#FF2801] to-[#FF6B0A] transition-all duration-300 ease-linear py-[15px]  px-6 text-white font-black uppercase text-[18px] inline-flex gap-[10px] items-center leading-[1.445] rounded-[2px] lg:mx-auto'><PhoneCallIcon /> Book a Call NOW </a>
                </div>
            </div>
            <div className='social-icon-container fixed  z-[1] py-[18px] px-[7px] flex flex-col gap-[11.86px] rounded-e-[1.78px] start-[-11%] sm:start-[-6%] md:start-[-5%] lg:start-[-3.5%] xl:start-0 hover:start-0 transition-all duration-300 ease-linear bg-white top-[50%] translate-y-[-50%]'>
                <a href="https://twitter.com/?lang=en" target='blank'><TwitterIcon /></a>
                <a href="https://www.instagram.com/" target='blank'><InstagramIcon /></a>
                <a href="https://web.telegram.org/" target='blank'><TelegramIcon /></a>
                <a href="https://in.linkedin.com/" target='blank'><LinkdinIcon /></a>
            </div>
        </>
    )
}

export default Header