"use client";
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
        <div className='container mx-auto p-5 md:p-10'>
            <div className='space-y-2'>
                <p className='font-body text-secondary-100 text-[16px] font-[500] text-center'>Our Deepspace Alumni</p>
                <p className='font-body text-black text-[28px] md:text-[40px] font-[700] text-center leading-tight md:leading-10'>Testimonials Say?</p>
            </div>
            <Slider {...settings}>
                <div className='mx-auto h-auto md:h-[392px] text-white'>
                    <div className='flex flex-col md:flex-row justify-center items-center md:items-start'>
                        <div className='w-full md:w-[550px] lg:w-[751px] bg-white rounded-xl shadow-lg p-5 space-y-4 mb-5 md:mb-0 md:mr-5'>
                            <p className='text-black font-body font-[700] text-[20px] md:text-[24px] leading-[28px] md:leading-[32px]'>Inspiring Learning Journey at Deepspace Learning</p>
                            <p className='text-black font-body font-[400] text-[14px] md:text-[16px] leading-relaxed'>I couldn't be more pleased with my experience at Deepspace Learning. The platform is user-friendly, and the course materials are top-notch. The instructors are not only knowledgeable but also incredibly supportive, making learning a truly enjoyable process. Whether you're looking to advance your career or simply expand your knowledge, Deepspace learning is the perfect place to start your educational journey.</p>
                            <div className='flex items-center space-x-2'>
                                <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                                    <Image src="/assets/alumini.jpg" width={40} height={40} objectFit="cover" alt="Alumni picture" />
                                </div>
                                <p className='font-body font-[600] text-[16px] text-black'>— Jane Doe, Satisfied Learner</p>
                            </div>
                        </div>
                        <div className='w-full md:w-[335px] h-[240px] md:h-[392px] bg-black rounded-xl overflow-hidden'>
                            <ReactPlayer url='https://youtu.be/Et7TTfwvBFo?si=FfX9CmU_camj3ynr' width='100%' height='100%' />
                        </div>
                    </div>
                </div>

                <div className='mx-auto h-auto md:h-[392px] text-white'>
                    <div className='flex flex-col md:flex-row justify-center items-center md:items-start'>
                        <div className='w-full md:w-[550px] lg:w-[751px] bg-white rounded-xl shadow-lg p-5 space-y-4 mb-5 md:mb-0 md:mr-5'>
                            <p className='text-black font-body font-[700] text-[20px] md:text-[24px] leading-[28px] md:leading-[32px]'>Inspiring Learning Journey at Deepspace Learning</p>
                            <p className='text-black font-body font-[400] text-[14px] md:text-[16px] leading-relaxed'>I couldn't be more pleased with my experience at Deepspace Learning. The platform is user-friendly, and the course materials are top-notch. The instructors are not only knowledgeable but also incredibly supportive, making learning a truly enjoyable process. Whether you're looking to advance your career or simply expand your knowledge, Deepspace learning is the perfect place to start your educational journey.</p>
                            <div className='flex items-center space-x-2'>
                                <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                                    <Image src="/assets/alumini.jpg" width={40} height={40} objectFit="cover" alt="Alumni picture" />
                                </div>
                                <p className='font-body font-[600] text-[16px] text-black'>— Jane Doe, Satisfied Learner</p>
                            </div>
                        </div>
                        <div className='w-full md:w-[335px] h-[240px] md:h-[392px] bg-black rounded-xl overflow-hidden'>
                            <ReactPlayer url='https://youtu.be/Et7TTfwvBFo?si=FfX9CmU_camj3ynr' width='100%' height='100%' />
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default Blocksix;
