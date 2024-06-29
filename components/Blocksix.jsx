"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player';
import Image from 'next/image';

const Blocksix = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='container mx-auto p-10'>
            <div className='space-y-2'>
                <p className='font-body text-secondary-100 text-[16px] font-[500] text-center'>Our Deepspace Alumni</p>
                <p className='font-body text-black text-[40px] font-[700] text-center leading-10'>Testimonials Says?</p>
            </div>
            <Slider {...settings}>
                <div className='mx-auto justify-items-center h-[800px] w-[390px] md:w-[1090px] md:h-[392px]  text-white'>
                    <div className='flex flex-col  justify-center align-middle md:flex-row md:justify-center md:align-top'>
                        <div className='w-[335px] h-[400px] mx-7 md:mx-0 md:w-[550px] md:h-[350px] md:my-5 lg:w-[751px] lg:h-[313px] bg-white  rounded-l-xl md:shadow-lg lg:my-10 md:px-7 md:py-5 space-y-4'>

                            <p className='text-black font-body font-[700] text-[24px] max-w-[328px] leading-[32px]'>Inspiring Learning Journey at Deepspace Learning</p>
                            <p className='text-black font-body font-[400] text-[14px] max-w-[611px]'>I couldn't be more pleased with my experience at Deepspace Learning. The platform is user-friendly, and the course materials are top-notch. The instructors are not only knowledgeable but also incredibly supportive, making learning a truly enjoyable process. Whether you're looking to advance your career or simply expand your knowledge, Deepspace learning is the perfect place to start your educational journey.</p>

                            <div className='flex align-middle space-x-2'>
                                <div className='w-[40px] h-[40px] rounded-full bg-black'>
                                    <Image src="/assets/alumini.jpg" width={40} height={40} style={{ objectFit: "cover" }} alt="Alumini picture" className='rounded-full ' />

                                </div>
                                <p className='font-body font-[600] text-[16px] text-black h-[40px] align-middle justify-center pt-2'>— Jane Doe, Satisfied Learner</p>
                            </div>
                        </div>
                        <div className=' w-[400px] md:w-[335px] h-[392px] bg-black '>
                            <ReactPlayer url='https://youtu.be/Et7TTfwvBFo?si=FfX9CmU_camj3ynr' height='100%' width='100%' />

                        </div>
                    </div>
                </div>


                <div className='mx-auto justify-items-center h-[800px] w-[390px] md:w-[1090px] md:h-[392px]  text-white'>
                    <div className='flex flex-col  justify-center align-middle md:flex-row md:justify-center md:align-top'>
                        <div className='w-[335px] h-[400px] mx-7 md:mx-0 md:w-[550px] md:h-[350px] md:my-5 lg:w-[751px] lg:h-[313px] bg-white  rounded-l-xl md:shadow-lg lg:my-10 md:px-7 md:py-5 space-y-4'>

                            <p className='text-black font-body font-[700] text-[24px] max-w-[328px] leading-[32px]'>Inspiring Learning Journey at Deepspace Learning</p>
                            <p className='text-black font-body font-[400] text-[14px] max-w-[611px]'>I couldn't be more pleased with my experience at Deepspace Learning. The platform is user-friendly, and the course materials are top-notch. The instructors are not only knowledgeable but also incredibly supportive, making learning a truly enjoyable process. Whether you're looking to advance your career or simply expand your knowledge, Deepspace learning is the perfect place to start your educational journey.</p>

                            <div className='flex align-middle space-x-2'>
                                <div className='w-[40px] h-[40px] rounded-full bg-black'>
                                    <Image src="/assets/alumini.jpg" width={40} height={40} style={{ objectFit: "cover" }} alt="Alumini picture" className='rounded-full ' />

                                </div>
                                <p className='font-body font-[600] text-[16px] text-black h-[40px] align-middle justify-center pt-2'>— Jane Doe, Satisfied Learner</p>
                            </div>
                        </div>
                        <div className=' w-[400px] md:w-[335px] h-[392px] bg-black '>
                            <ReactPlayer url='https://youtu.be/Et7TTfwvBFo?si=FfX9CmU_camj3ynr' height='100%' width='100%' />

                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default Blocksix