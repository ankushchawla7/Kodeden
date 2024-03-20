import fullStackIcon from '../assets/images/png/master-fullstack-icon.webp'
import portfolionIcon from '../assets/images/png/portfolio-icon.webp'
import techCarrierIcon from '../assets/images/png/tech-carrier-icon.webp'
import CourseVector from '../assets/images/png/course-vector.webp'

const SoftwareCourse = () => {
    return (
        <>
            <section className=' mt-12 lg:mt-[239px]'>
                <div className="max-w-[min(1140px,100%-24px)] mx-auto relative">
                    <h2 className='text-[27px] sm:text-[32px]  md:text-[35px] lg:text-[50px] text-white text-center capitalize leading-[1.38] font-medium'>“From Confused to Coder”: Kodeden's <span className='lg:block'></span> Exclusive 6-Month <span className='gradient-text bg-contain bg-gradient-to-br from-[#FF2801] to-[#FF6B0A]'> Software Engineering </span> Course </h2>
                    <p className='text-[#E4E4E4] text-center mx-auto leading-[1.438] mt-[7px] mb-[17px]'>Through twice-weekly live lectures and at-home exercises, you’ll:</p>
                    <p className='text-[#A2A2A2] lg:max-w-[641px] text-center lg:mx-auto leading-[1.438]'>Learn everything you need to know to break into tech from senior engineers with experience at Apple, Amazon, and the DOD.</p>
                    <div className='max-w-[941px] mx-auto flex items-center flex-wrap  gap-4 sm:gap-6 md:gap-0 max-md:justify-center justify-between mt-6 lg:mt-[88px]'>
                        <div className="fullstack-col  course-card group cursor-pointer md:w-[30%] sm:w-[47.5%] w-full border-[1px] border-solid ps-[12.53px] pb-[20.42px] h-full">
                            <div className='flex justify-end mb-[-70px]'>
                                <img src={fullStackIcon} alt="master-fullStack" className='h-[166.11px]' />
                            </div>
                            <div>
                                <p className='text-[30px]  leading-[1.6] font-semibold text-[#a2a2a2] mb-[5.37px]'>01</p>
                                <a href='/' className='text-[#E4E4E4] font-bold text-[18px] leading-[1.445]'>Master <span className='block'></span>Full-Stack Coding <span className=" inline-block before-arrow after:right-[-23px] after:content-beforeArrow after:absolute group-hover:after:right-[-30px] after:top-0 after:transition-all after:duration-200 after:ease-linear relative"> Skills</span>
                                </a>
                            </div>

                        </div>
                        <div className="portfolio-col course-card group cursor-pointer  course-card md:w-[30%] sm:w-[47.5%] w-full border-[1px] border-solid ps-[12.53px] pt-[16.54px] pb-[20.42px] h-full">
                            <div className='flex justify-end mb-[-50px]'>
                                <img src={portfolionIcon} alt="portfolio" className='h-[128.53px]' />
                            </div>
                            <div>
                                <p className='text-[30px]  leading-[1.6] font-semibold text-[#a2a2a2] mb-[5.37px]'>02</p>
                                <a href='/' className='text-[#E4E4E4] font-bold text-[18px] leading-[1.445]'>Build a <span className='block'></span>Standout <span className=" inline-block before-arrow after:right-[-23px] after:content-beforeArrow after:absolute group-hover:after:right-[-30px] after:top-0 after:transition-all after:duration-200 after:ease-linear relative"> Portfolio</span>
                                </a>
                            </div>

                        </div>
                        <div className="tech-carrier-col course-card group cursor-pointer md:w-[30%] sm:w-[47.5%] w-full border-[1px] border-solid ps-[12.53px] pb-[20.42px] h-full">
                            <div className='flex justify-end mb-[-49px]'>
                                <img src={techCarrierIcon} alt="tech-carrier" className='h-[144.32px]' />
                            </div>
                            <div>
                                <p className='text-[30px]  leading-[1.6] font-semibold text-[#a2a2a2] mb-[5.37px]'>03</p>
                                <a href='/' className='text-[#E4E4E4] font-bold text-[18px] leading-[1.445]'>Launch <span className='block'></span>Your Tech <span className=" inline-block before-arrow after:right-[-23px] after:content-beforeArrow after:absolute group-hover:after:right-[-30px] after:top-0 after:transition-all after:duration-200 after:ease-linear relative">Career</span>
                                </a>
                            </div>

                        </div>
                    </div>
                    <img src={CourseVector} alt="course-vector" className='absolute hidden 2xl:block w-[110.87px] right-[-7%] bottom-[10%]' />
                </div>
            </section>
        </>
    )
}

export default SoftwareCourse