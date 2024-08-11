"use client"
import Footer from '@/components/Footer'
import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"
// import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { FaArrowRight } from "react-icons/fa6"

const Community = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex justify-center py-16'>
                    <div className=''>
                        <div className='relative min-w-[400px] max-h-[700px]md:w-[900px] md:h-[500px]  lg:w-[1280px] lg:h-[400px] rounded-[100px]  '>
                            <Image src="/assets/comm.jpeg" layout={'fill'} objectFit="cover" alt="About Us Hero Image" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>



                            <div className='absolute bottom-[10%] left-[150px] z-50 max-w-[706px] '>
                                <p className='font-[600] text-[80px] font-body  text-white leading-[80px]'>Deep Space Community</p>
                                <p className=' text-white max-w-[717px] font-body font-[400] text-[16px] '>  We believe in the power of community and the importance of fostering connections among learners, educators, and industry professionals.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex justify-center p-7'>
                    <div className='flex flex-col gap-7'>
                        <div className='flex justify-center'>
                            <h2 className='text-center font-body font-[600] text-[48px] text-black max-w-[567px] leading-[58px]'>Powering Long Life Learning & Collaboration</h2>
                        </div>

                        <div className='flex justify-center'>
                            <p className='text-center font-body font-[400] text-[16px] text-black max-w-[1085px]'>Join a vibrant community of learners, educators, and enthusiasts dedicated to sharing knowledge, fostering growth, and achieving excellence together. Whether you're here to explore new subjects, enhance your skills, or connect with like-minded individuals, our community is your gateway to a world of opportunities and inspiration. Let's learn, grow, and succeed together!</p>
                        </div>

                        <div className='flex justify-center'>
                            <button className='bg-secondary-100 w-[169px] h-[48px] rounded-[35px] flex justify-between px-2 pt-3'>
                                <p className='text-white font-body font-[700]'>Join Us Today</p>
                                <FaArrowRight className='text-white text-[24px] pt-1' />
                            </button>
                        </div>
                    </div>


                </div>

                <div className='flex flex-wrap gap-7  my-16'>
                    <div className='bg-black w-[220px] h-[145px] rounded-md'></div>
                    <div className='flex flex-col gap-5 w-[220px] h-[145px]'>
                        <div className='bg-black w-[220px] h-[81px] rounded-md'></div>
                        <div className='bg-black w-[220px] h-[50px] rounded-md'></div>
                    </div>

                    <div className='bg-black w-[220px] h-[145px] rounded-md'></div>
                    <div className='flex flex-col gap-5 w-[220px] h-[145px]'>
                        <div className='bg-black w-[220px] h-[81px] rounded-md'></div>
                        <div className='bg-black w-[220px] h-[50px] rounded-md'></div>
                    </div>

                    <div className='bg-black w-[220px] h-[145px] rounded-md'></div>
                    <div className='flex flex-col gap-5 w-[220px] h-[145px]'>
                        <div className='bg-black w-[220px] h-[81px] rounded-md'></div>
                        <div className='bg-black w-[220px] h-[50px] rounded-md'></div>
                    </div>
                </div>

                <div className=''>

                </div>
                <div className='bg-red-50 p-7 rounded-lg'>
                    <div className=' container mx-auto'>
                        <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode={false}
                            className=""
                            containerClass="container"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            pauseOnHover
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 1024
                                    },
                                    items: 1
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 464,
                                        min: 0
                                    },
                                    items: 1
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 464
                                    },
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


                            <div className='flex flex-col md:flex-row max-w-[1261px] justify-center mx-auto'>
                                <div>
                                    <Image src="/assets/bm.png" width={524} height={524} alt="Metal works poster" />
                                </div>

                                <div className='w-[657px] md:ml-10 pt-16'>
                                    <div className='pt-16'>
                                        <p className='font-body font-[600] text-secondary-100 text-[16px]'>Our Membership Plan</p>
                                        <div className='flex align align-middle'>
                                            <h1 className='font-body font-[600] text-black text-[64px] max-w-[400px]'>Basic Membership</h1>
                                            <p className='font-body font-[600] text-secondary-100 text-[16px] md:pt-7'>1 MEMBER</p>
                                        </div>
                                        <p className='font-body font-[600] text-black text-[16px] max-w-[533px]'>All you need to do is to register then you are a part of us</p>

                                        <button className='bg-secondary-100 w-[168px] h-[48px] rounded-[35px] flex justify-center mt-5'>
                                            <p className='text-white pt-3'>Register Now</p>
                                            <FaArrowRight className='text-white text-[18px] ml-2 mt-4' />
                                        </button>
                                    </div>

                                </div>

                            </div>


                        </Carousel>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center my-20'>
                    <div className='flex flex-col'>
                        <h2 className='text-black font-body  text-[64px] font-[600] max-w-[533px]'>Our Upcoming Events</h2>
                        <p className='text-black font-body  text-[16px] font-[400] max-w-[533px]'>Join us for an exclusive learning event whether you're a beginner
                            looking to break into the field or aiming to sharpen your expertise,
                            this event has something for everyone.</p>
                    </div>

                    <div>
                        <Image
                            src="/assets/uee.png"
                            width={694}
                            height={524}
                            alt="Upcoming event poster"
                            className="w-full h-auto object-cover sm:w-1/2 md:w-2/3 lg:w-full"
                        />
                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Community