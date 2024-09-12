'use client';

import Blocksix from '@/components/Blocksix';
import Footer from '@/components/Footer';
import Projectgallery from '@/components/Projectgallery';
import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";
import ReactPlayer from 'react-player';
import Courses from '@/components/Courses';
// import { FaArrowRight } from "react-icons/fa6"
// import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link'

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
                        <div className='font-body font-[400] text-black text-[14px] sm:text-[16px] lg:text-[18px] max-w-[90%]'>
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
                                url='https://www.youtube.com/watch?v=L0ZkrSagL9w'
                                height='100%'
                                width='100%'
                                className='react-player'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-red-50 p-16 '>
                    <div className=' container mx-auto'>
                        <Carousel
                            additionalTransfrom={0}
                            arrows={false}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            centerMode={false}
                            containerClass="container"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite={true}
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            pauseOnHover
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={{
                                desktop: {
                                    breakpoint: { max: 3000, min: 1024 },
                                    items: 1
                                },
                                tablet: {
                                    breakpoint: { max: 1024, min: 464 },
                                    items: 1
                                },
                                mobile: {
                                    breakpoint: { max: 464, min: 0 },
                                    items: 1
                                }
                            }}
                            rewind={false}
                            rewindWithAnimation={false}
                            rtl={false}
                            shouldResetAutoplay
                            showDots
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                        >
                            <div className='flex flex-col md:flex-row max-w-full mx-auto px-7'>
                                <div className='w-full md:w-1/2'>
                                    <Image
                                        src="/assets/DeepLearning1.png"
                                        width={524}
                                        height={524}
                                        alt="Metal works poster"
                                        layout="responsive"
                                    />
                                </div>

                                <div className='w-full md:w-1/2 md:ml-10 pt-8 md:pt-16'>
                                    <div>
                                        
                                        <div className='flex flex-col md:flex-row items-start md:items-center mt-4'>
                                            <h1 className='font-body font-[600] text-black text-[32px] md:text-[64px] max-w-full md:max-w-[400px] leading-tight'>3D FORGE: DESIGN & INNOVATION WORKSHOP</h1>
                                            
                                        </div>
                                        <p className='font-body font-[600] text-black text-[14px] md:text-[16px] mt-4 max-w-full md:max-w-[533px]'>
                                            All you need to do is to register then you are a part of us
                                        </p>
                                        <Link href='https://forms.gle/ugG4xt4o5sWDTFGP9'>
                                            <button className='bg-secondary-100 w-full md:w-[168px] h-[48px] rounded-[35px] flex justify-center mt-5'>
                                                <p className='text-white pt-3'>Register Now</p>
                                                <FaArrowRight className='text-white text-[18px] ml-2 mt-2 md:mt-3' />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row max-w-full mx-auto px-7'>
                                <div className='w-full md:w-1/2'>
                                    <Image
                                        src="/assets/DeepLearning2.png"
                                        width={524}
                                        height={524}
                                        alt="Metal works poster"
                                        layout="responsive"
                                    />
                                </div>

                                <div className='w-full md:w-1/2 md:ml-10 pt-8 md:pt-16'>
                                    <div>
                                        
                                        <div className='flex flex-col md:flex-row items-start md:items-center mt-4'>
                                            <h1 className='font-body font-[600] text-black text-[32px] md:text-[64px] max-w-full md:max-w-[400px] leading-tight'>HANDS ON CLAY WORKSHOP</h1>
                                            
                                        </div>
                                        <p className='font-body font-[600] text-black text-[14px] md:text-[16px] mt-4 max-w-full md:max-w-[533px]'>
                                            All you need to do is to register then you are a part of us
                                        </p>
                                        <Link href='https://forms.gle/ashgJ4LQFxwX19Cx9'>
                                            <button className='bg-secondary-100 w-full md:w-[168px] h-[48px] rounded-[35px] flex justify-center mt-5'>
                                                <p className='text-white pt-3'>Register Now</p>
                                                <FaArrowRight className='text-white text-[18px] ml-2 mt-2 md:mt-3' />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row max-w-full mx-auto px-7'>
                                <div className='w-full md:w-1/2'>
                                    <Image
                                        src="/assets/DeepLearning3.png"
                                        width={524}
                                        height={524}
                                        alt="Metal works poster"
                                        layout="responsive"
                                    />
                                </div>

                                <div className='w-full md:w-1/2 md:ml-10 pt-8 md:pt-16'>
                                    <div>
                                        
                                        <div className='flex flex-col md:flex-row items-start md:items-center mt-4'>
                                            <h1 className='font-body font-[600] text-black text-[32px] md:text-[64px] max-w-full md:max-w-[400px] leading-tight'>ANYONE CAN PAINT WORKSHOP</h1>
                                            
                                        </div>
                                        <p className='font-body font-[600] text-black text-[14px] md:text-[16px] mt-4 max-w-full md:max-w-[533px]'>
                                            All you need to do is to register then you are a part of us
                                        </p>
                                        <Link href='https://forms.gle/EXRE2soARU1FLu7j7'>
                                            <button className='bg-secondary-100 w-full md:w-[168px] h-[48px] rounded-[35px] flex justify-center mt-5'>
                                                <p className='text-white pt-3'>Register Now</p>
                                                <FaArrowRight className='text-white text-[18px] ml-2 mt-2 md:mt-3' />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            
                        </Carousel>

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
