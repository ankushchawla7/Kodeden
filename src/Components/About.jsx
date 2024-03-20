import aboutSectionImg from '../assets/images/png/about-section-img.webp'
import PhoneCallIcon from './Icons'
import aboutSectionVector from '../assets/images/png/about-section-vector.webp'

const About = () => {
    return (
        <>
            <section id='about' className=' mt-12 lg:mt-[149px]'>
                <div className="max-w-[min(1140px,100%-24px)] mx-auto relative">
                    <div className='flex items-center flex-wrap justify-between'>
                        <div className='about-left-col lg:w-[60%] mb-6 lg:mb-0 flex flex-col items-center lg:block'>
                            <h2 className=' text-[27px] sm:text-[32px] md:text-[35px] lg:text-[50px] text-center lg:text-start text-white capitalize leading-[1.38] font-medium mb-[7px]'>What is KodeDen's <span className='gradient-text bg-contain bg-gradient-to-br from-[#FF2801] to-[#FF6B0A]'> 6-Month </span> Software Engineering Course?</h2>
                            <ul className='text-[#a2a2a2] list-disc ps-[25px] flex flex-col gap-[10.6px]'>
                                <li>With 6-figure salaries, unlimited PTO, and the flexibility to work anywhere in the world—(or</li>
                                <li>simply pick your kids up from school), you want in.</li>
                                <li>But who has $25k+ to drop on a bootcamp?</li>
                                <li>Or semesters of free time to dedicate to going back to school?</li>
                                <li>Or YEARS to go through the trial and error involved in teaching yourself?</li>
                                <li>Heck, most people don’t even know where to start</li>
                                <li>If that's you, you’ve been dreaming of a high-paying tech career but paralyzed when it <span className='lg:block'></span> comes time to take action.</li>
                            </ul>
                            <p className='gradient-text bg-contain bg-gradient-to-br from-[#FF2801] to-[#FF6B0A] font-semibold leading-[1.438] mt-2'>I want to Start My Software Engineering Journey!</p>
                            <div className=' mt-6 md:mt-[50px] rounded-[2px]'>
                                <a href='/' className='button-gradient bg-gradient-to-br from-[#FF2801] to-[#FF6B0A] transition-all duration-300 ease-linear py-[15px]  px-6 text-white font-black uppercase text-[18px] inline-flex items-center leading-[1.445] gap-[10px] rounded-[2px] mx-auto'><PhoneCallIcon /> Book a Call NOW</a>
                            </div>
                        </div>
                        <div className="about-right-col lg:w-[40%] sm:w-[65%] max-lg:mx-auto">
                            <img src={aboutSectionImg} alt="about kodegen course" className='w-full' />
                        </div>
                    </div>
                    <img src={aboutSectionVector} alt="about-section-vector" className='absolute hidden 2xl:block w-[110.87px] start-[-13%] bottom-[16%]' />
                </div>
            </section>
        </>
    )
}

export default About