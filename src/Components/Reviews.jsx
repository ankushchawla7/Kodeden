import React from 'react'
import rossPic from '../assets/images/webp/Ross-pic.webp'
import lukePic from '../assets/images/webp/Luke-pic.webp'
import lesliePic from '../assets/images/webp/Leslie-pic.webp'
import PhoneCallIcon from './Icons'
import reviewersLinkdinIcon from '../assets/images/webp/reviewers-linkdin-icon.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowNext, ArrowPrev } from './Icons'

const Reviews = () => {
    const slider = React.useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '60px',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 2500,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    dots: true
                }
            },
        ]
    };

    return (
        <>
            <section className='mt-12 lg:mt-[208px]'>
                <div className="max-w-[min(1164px,100%-24px)] mx-auto">
                    <h2 className='text-white text-[27px] sm:text-[32px] md:text-[35px] lg:text-[50px] font-medium capitalize text-center'>What our <span className='gradient-text bg-contain bg-gradient-to-br from-[#FF2801] to-[#FF6B0A]'> students </span> are saying</h2>
                    <div className='reviews-card-section mt-6 lg:mt-[50px] relative '>
                        <Slider ref={slider}  {...settings} className='xl:flex gap-6'>
                            <div className='w-[32.5%] border-[0.75px] border-solid rounded-[2px] border-[#e4e4e4] ps-[11px] pe-[3px] pt-4 pb-[28.38px]'>
                                <p className='text-[24px] text-white mb-[5px]'>Ross O’Rourke Founder, iC-1 Solutions. CEO Agile Onboarding</p>
                                <p className='text-[#c6c6c6] leading-[1.625] pe-1 mb-[6px]'>Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper augue magna egestas sit tempus, cras. Mauris gravida elit eget mi et vitae viverra duis eget. Aliquam, quisque gravida est pretium suscipit vel. Non blandit eget tortor netus pellentesque mauris, diam. </p>
                                <a href="/" className='font-semibold text-[#f4f4f4] leading-[1.625] inline-block'>Read More...</a>
                                <div className='flex items-center justify-between pe-5 mt-5'>
                                    <div className='flex gap-[13.38px]'>
                                        <img src={rossPic} alt="Ross O'Rourke" className='w-[52.62px]' />
                                        <div className='d-flex flex-col items-start'>
                                            <p className='text-[20px] text-white leading-[1.45]'>Ross O’Rourke</p>
                                            <p className='text-[14px] leading-[1.45] text-[#c6c6c6]'>@Ross O’Rourke</p>
                                        </div>
                                    </div>
                                    <a href="/"><img src={reviewersLinkdinIcon} alt="linkdin-profile" className='w-[28px]' /></a>
                                </div>
                            </div>
                            <div className='w-[32.5%] border-[0.75px] border-solid rounded-[2px] border-[#e4e4e4] ps-[11px] pe-[3px] pt-4 pb-[28.38px]'>
                                <p className='text-[24px] text-white mb-[5px]'>“Luke O’Malley Tech Lead Agile Onboarding.”</p>
                                <p className='text-[#c6c6c6] leading-[1.625] pe-1 mb-[6px]'>I highly recommend kody Doherty. I have had the pleasure of working with him on variety of software projects over the past three years and his guidance has been intergral to my personal success. He is a driven, organized engineer who develops inspiring relationships with his students.  </p>
                                <a href="/" className='font-semibold text-[#f4f4f4] leading-[1.625] inline-block'>Read More...</a>
                                <div className='flex items-center justify-between pe-5 mt-5'>
                                    <div className='flex gap-[13.38px]'>
                                        <img src={lukePic} alt="Ross O'Rourke" className='w-[52.62px]' />
                                        <div className='d-flex flex-col items-start'>
                                            <p className='text-[20px] text-white leading-[1.45]'>Luke O’Malley</p>
                                            <p className='text-[14px] leading-[1.45] text-[#c6c6c6]'>@Luke O’Malley</p>
                                        </div>
                                    </div>
                                    <a href="/"><img src={reviewersLinkdinIcon} alt="linkdin-profile" className='w-[28px]' /></a>
                                </div>
                            </div>
                            <div className='w-[32.5%] border-[0.75px] border-solid rounded-[2px] border-[#e4e4e4] ps-[11px] pe-[3px] pt-4 pb-[28.38px]'>
                                <p className='text-[24px] text-white mb-[5px]'>Leslie Sage Director of Data Science at DevResults</p>
                                <p className='text-[#c6c6c6] leading-[1.625] pe-1 mb-[6px]'>I had the pleasure of working with Kolton in 2019. In a team of a dozen people, Kolton stood out for his curiosity and drive. He executed ambitious projects with efficiency and attention to detail. He executed ambitious projects with efficiency and attention to detail. </p>
                                <a href="/" className='font-semibold text-[#f4f4f4] leading-[1.625] inline-block'>Read More...</a>
                                <div className='flex items-center justify-between pe-5 mt-5'>
                                    <div className='flex gap-[13.38px]'>
                                        <img src={lesliePic} alt="Ross O'Rourke" className='w-[52.62px]' />
                                        <div className='d-flex flex-col items-start'>
                                            <p className='text-[20px] text-white leading-[1.45]'>Leslie Sage</p>
                                            <p className='text-[14px] leading-[1.45] text-[#c6c6c6]'>@Leslie Sage</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <div className='flex justify-center mt-[60px]'>
                            <a href='/' className='button-gradient bg-gradient-to-br from-[#FF2801] to-[#FF6B0A] transition-all duration-300 ease-linear py-[15px]  px-6 text-white font-black uppercase text-[18px] inline-flex items-center gap-[10px] leading-[1.445] rounded-[2px] mx-auto'><PhoneCallIcon /> Book a Call NOW</a>
                        </div>
                        <div onClick={() => slider?.current?.slickPrev()} className='absolute hidden lg:block lg:bottom-0 lg:left-[10%]   xxl:left-[-6%] xxl:top-[35%] cursor-pointer'><ArrowPrev /></div>
                        <div onClick={() => slider?.current?.slickNext()} className='absolute hidden lg:block lg:bottom-0 lg:right-[78%]  xxl:right-[-6%] xxl:top-[35%] cursor-pointer'><ArrowNext /></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reviews