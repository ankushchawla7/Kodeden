import whoWeAreImg from '../assets/images/png/WhoWeAre-section-img.webp'
import PhoneCallIcon from './Icons'

const WhoWeAre = () => {
    return (
        <>
            <section className='mt-12 lg:mt-[200px]'>
                <div className="max-w-[min(1133.82px,100%-24px)] mx-auto pb-6 lg:pb-[122.06px]">
                    <h2 className='text-[27px] sm:text-[32px] md:text-[35px] lg:text-[50px] text-white text-center capitalize  leading-[1.38] font-medium  mb lg:mb-[73.79px]'>Who Are <span className='gradient-text bg-contain bg-gradient-to-br from-[#FF2801] to-[#FF6B0A]'> We </span>?</h2>
                    <div className='flex justify-between items-center flex-wrap flex-col-reverse lg:flex-row'>
                        <div className="WhoWeAre-left-col lg:w-[41.88%]  sm:w-[65%] max-lg:mx-auto">
                            <img src={whoWeAreImg} alt="Kody Doherty & Kolton Starr" className='w-full' />
                        </div>
                        <div className='"WhoWeAre-right-col lg:w-[44.3%] mb-6 lg:mb-0 flex flex-col items-center lg:block'>
                            <p className='text-white text-[14px] leading-[1.572]'>MEET YOUR INSTRUCTORS</p>
                            <h3 className='text-[24px] sm:text-[27px] md:text-[30px] font-medium text-white capitalize leading-[1.367] mb-[14px] mt-[6px]'>Hi, We’re Kody Doherty <span className='lg:block'></span> and Kolton Starr 👋</h3>
                            <p className='text-[#c6c6c6] leading-[1.625] text-center lg:text-start'>And we know firsthand that building a career as a software engineer without a computer science degree is possible. <span className='lg:block'></span>
                                We started where you are *right now*—without engineering degrees, a professional portfolio, or years of experience. <span className='lg:block'></span>
                                Then we climbed the ranks to hold senior positions at tech titans like Amazon, Apple, and the US government.<span className='lg:block'></span>
                                Throughout our careers, we’ve managed entire teams of engineers, directed $30 million program budgets, and built 2 successful tech startups (one that we sold).<span className='lg:block'></span>
                                Learning to code did more than add a few impressive lines to our resumes. It literally changed our lives…
                            </p>
                            <p className='gradient-text bg-contain bg-gradient-to-br from-[#FF2801] to-[#FF6B0A] leading-[1.438] mb-[50px] mt-[18px] font-semibold'>I want to live my dream now!</p>
                            <a href='/' className='button-gradient bg-gradient-to-br from-[#FF2801] to-[#FF6B0A] transition-all duration-300 ease-linear py-[15px]  px-6 text-white font-black uppercase text-[18px] inline-flex gap-[10px] items-center leading-[1.445] rounded-[2px] mx-auto'><PhoneCallIcon /> Book a Call NOW</a>

                        </div>
                    </div>
                </div>
                <div className='footer-line bg-[#535050] w-full h-[1px]'></div>
            </section>
        </>
    )
}

export default WhoWeAre