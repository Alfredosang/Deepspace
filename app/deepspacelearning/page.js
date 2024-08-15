'use client';

import Blocksix from '@/components/Blocksix';
import Footer from '@/components/Footer';
import Projectgallery from '@/components/Projectgallery';
import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";
import ReactPlayer from 'react-player';
import Courses from '@/components/Courses';

const Deephackerspace = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className='relative container mx-auto px-4 pt-[150px] py-16'>
                <div className='relative w-full h-[300px] md:h-[400px] lg:h-[400px] rounded-[20px] overflow-hidden'>
                    <Image
                        src="/assets/learning.jpeg"
                        fill
                        className="object-cover"
                        alt="Deepspace Learning Hero Image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className='absolute bottom-[10%] left-[5%] sm:left-[10%] lg:left-[15%] z-10 max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]'>
                        <p className='font-body font-[600] text-[32px] sm:text-[48px] lg:text-[60px] xl:text-[80px] text-white leading-tight'>
                            Deepspace Learning
                        </p>
                        <p className='text-white font-body font-[400] text-[14px] sm:text-[16px] lg:text-[18px]'>
                            Where creative expressions know no bounds.
                        </p>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className='container mx-auto px-4 py-8'>
                <div className='flex flex-wrap gap-7 justify-center'>
                    <div className='w-full lg:w-[40%]'>
                        <p className='font-body font-[600] text-secondary-100 text-[16px]'>About</p>
                        <h1 className='font-body font-[600] text-black text-[24px] sm:text-[32px] lg:text-[40px]'>
                            What is Deepspace Learning?
                        </h1>
                        <div className='font-body font-[400] text-black text-[14px] sm:text-[16px] lg:text-[18px] max-w-[70%]'>
                            <p>
                                Position yourself to become a learned powerhouse in advanced digital
                                manufacturing skills. Engineers, architects, draftsmen, designers, advertisers, interior designers, or anyone
                                interested in acquiring skills in AutoCAD or whose job depends on drawings or
                                sketches to convey information or ideas.
                                Find below our target students:
                            </p>
                            <ul className='list-disc pl-5'>
                                <li>Engineering Students</li>
                                <li>Engineering Graduates</li>
                                <li>Engineering Emigrants</li>
                                <li>Mid-career Engineers</li>
                                <li>Industry 4.0 Entrepreneurs</li>
                            </ul>
                        </div>
                        <button className='bg-secondary-100 w-[168px] h-[48px] rounded-[35px] flex items-center justify-center mt-5'>
                            <p className='text-white'>Join Us Today</p>
                            <FaArrowRight className='text-white text-[18px] ml-2' />
                        </button>
                    </div>

                    <div className='w-full lg:w-[40%]'>
                        <div className='w-full h-[200px] sm:h-[300px] md:h-[360px] bg-black rounded-[24px] overflow-hidden'>
                            <ReactPlayer
                                url='https://youtu.be/Et7TTfwvBFo?si=FfX9CmU_camj3ynr'
                                height='100%'
                                width='100%'
                                className='react-player'
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Sections */}
            <div className='container mx-auto px-4 py-8'>
                <Courses />
            </div>
            <div className='container mx-auto px-4 py-8'>
                <Projectgallery />
                <Blocksix />
            </div>
            <Footer />
        </div>
    );
};

export default Deephackerspace;
