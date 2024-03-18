import React from 'react'
import AboutSectionImg from '../assets/images/png/about-section-img.png'
import PhoneCallIcon from './Icons'

const About = () => {
    return (
        <>
            <section className=' mt-12 lg:mt-[149px]'>
                <div className="max-w-[min(1140px,100%-24px)] mx-auto">
                    <div className='flex items-center flex-wrap justify-between'>
                        <div className='about-left-col lg:w-[60%] mb-6 lg:mb-0'>
                            <h2 className=' text-[27px] lg:text-[50px] text-white capitalize leading-[1.38] font-medium'>What is KodeDen's <span className='gradient-text'> 6-Month </span> Software Engineering Course?</h2>
                            <ul className='text-[#a2a2a2] list-disc ps-[25px] flex flex-col gap-[10.6px]'>
                                <li>With 6-figure salaries, unlimited PTO, and the flexibility to work anywhere in the world—(or</li>
                                <li>simply pick your kids up from school), you want in.</li>
                                <li>But who has $25k+ to drop on a bootcamp?</li>
                                <li>Or semesters of free time to dedicate to going back to school?</li>
                                <li>Or YEARS to go through the trial and error involved in teaching yourself?</li>
                                <li>Heck, most people don’t even know where to start</li>
                                <li>If that's you, you’ve been dreaming of a high-paying tech career but paralyzed when it comes time to take action.</li>
                            </ul>
                            <p className='gradient-text font-semibold leading-[1.438] mt-2'>I want to Start My Software Engineering Journey!</p>
                            <div className=' mt-[50px] rounded-[2px]'>
                                <a href='/' className='button-gradient py-[15px]  px-6 text-white font-black uppercase text-[18px] inline-flex items-center leading-[1.445] rounded-[2px] mx-auto'><PhoneCallIcon /> Book a Call NOW</a>
                            </div>
                        </div>
                        <div className="about-right-col lg:w-[40%]">
                            <img src={AboutSectionImg} alt="about kodegen course" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About