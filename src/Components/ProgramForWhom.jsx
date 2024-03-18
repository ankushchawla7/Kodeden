import React from 'react'
import ProgramForWhomImg from '../assets/images/png/ProgramForWhom-img.png'

const ProgramForWhom = () => {
    return (
        <>
            <section className=' mt-12 lg:mt-[220px]'>
                <div className="max-w-[min(1140px,100%-24px)] mx-auto flex flex-wrap items-center justify-between">
                    <div className='ProgramForWhom-left-col lg:w-[42.808%] w-full mb-6 lg:mb-0'>
                        <img src={ProgramForWhomImg} alt="ProgramForWhom" className='w-full' />
                    </div>
                    <div className='ProgramForWhom-right-col lg:w-[48%] w-full'>
                        <h2 className=' text-[27px] lg:text-[50px]  font-medium text-[#E4E4E4] capitalize leading-[1.36] mb-[10px]'>Are You A Good Fit For Our Program?</h2>
                        <p className='text-[#E4E4E4] leading-[1.438]'>About Who The Program is For</p>
                        <p className='gradient-text leading-[1.438] font-semibold mt-5 mb-[10px]'>Our 6-Month Software Engeering Course is for individuals that...</p>
                        <p className='text-[#A2A2A2] leading-[1.438]'>Want to take action now but don't have years to waste in university Are extremely motivated and want to succeed Have dreamed of becoming a software engineer but don't have hundreds of thousands of dollars lying around</p>
                        <p className='gradient-text leading-[1.438] font-semibold mt-5 mb-[10px]'>It isn't for...</p>
                        <p className='text-[#a2a2a2] leading-[1.438]'>People that aren't self-starters People that don't have a sense of urgency to become a software engineeer People that aren't serious about fulfilling their dream</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProgramForWhom