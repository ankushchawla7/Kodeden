import PhoneCallIcon from './Icons'
import kodeDenGuaranteeImg from '../assets/images/png/KodedeGuarantee-img.webp'

const OurGuarantee = () => {
    return (
        <>
            <section className='mt-12 lg:mt-[200px]'>
                <div className="max-w-[min(1140px,100%-24px)] mx-auto">
                    <div className="flex items-center flex-wrap justify-between">
                        <div className="guarantee-left-col lg:w-[50.5%] mb-6 lg:mb-0 flex flex-col items-center lg:block">
                            <h2 className=' text-[27px] sm:text-[32px] md:text-[35px] lg:text-[50px] text-white capitalize leading-[1.44] font-medium mb-2'>our Guarantee</h2>
                            <p className='text-[#c6c6c6] text-[24px] leading-[1.75] mb-[18px] text-center lg:text-start'>If you decide coding isn’t right for you within 15 days of starting the program, we’ll give you your money back. </p>
                            <p className='gradient-text bg-contain bg-gradient-to-br from-[#FF2801] to-[#FF6B0A] font-semibold mb-[50px] leading-[1.438]'>I want to become a software engineer in 6 months!</p>
                            <a href='/' className='button-gradient bg-gradient-to-br from-[#FF2801] to-[#FF6B0A] transition-all duration-300 ease-linear py-[15px]  px-6 text-white font-black uppercase text-[18px] gap-[10px] inline-flex items-center leading-[1.445] rounded-[2px] mx-auto'><PhoneCallIcon /> Book a Call NOW</a>
                        </div>
                        <div className="guarantee-right-col lg:w-[33.86%] sm:w-[65%] max-lg:mx-auto w-full">
                            <img src={kodeDenGuaranteeImg} alt="kodeden-guarantee" className='w-full' />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default OurGuarantee