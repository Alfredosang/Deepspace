"use client"
import React from 'react'
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowRight } from "react-icons/fa6"
import Link from 'next/link';

const Metalworks = () => {
    return (
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
                        <Image src="/assets/MWposter.png" width={524} height={524} alt="Metal works poster" />
                    </div>

                    <div className='w-[657px] md:ml-10'>
                        <div>
                            <p className='font-body font-[600] text-secondary-100 text-[16px]'>Our Services</p>
                            <h1 className='font-body font-[600] text-black text-[64px]'>Metal Work</h1>
                            <p className='font-body font-[600] text-black text-[16px] max-w-[533px]'>Are you Looking for expert fabrication and welding services to create machinery, tools, or custom parts? At DeepSpace Africa, we specialize in providing precise solutions tailored to your needs.</p>
                            <Link href='/workorderrequest'>
                                <button className='bg-secondary-100 w-[168px] h-[48px] rounded-[35px] flex justify-center mt-5'>
                                    <p className='text-white pt-3'>Request Now</p>
                                    <FaArrowRight className='text-white text-[18px] ml-2 mt-4' />
                                </button>
                            </Link>
                        </div>

                    </div>

                </div>

                <div className='flex flex-col md:flex-row max-w-[1261px] justify-center mx-auto'>
                    <div>
                        <Image src="/assets/ww.png" width={524} height={524} alt="Metal works poster" />
                    </div>

                    <div className='w-[657px] md:ml-10'>
                        <div>
                            <p className='font-body font-[600] text-secondary-100 text-[16px]'>Our Services</p>
                            <h1 className='font-body font-[600] text-black text-[64px]'>Wood Work</h1>
                            <p className='font-body font-[600] text-black text-[16px] max-w-[533px]'>Are you Looking for expert fabrication and Are you looking to transform your space with custom woodwork! At DeepSpace Africa, we turn your woodwork dreams into reality. Our skilled craftsmen are ready to create stunning pieces tailored to your vision.

                                From beautiful benches and tables to unique chairs, shelves, and wall art, we bring your designs to life with care and precision.</p>
                            <Link href='/workorderrequest'>
                                <button className='bg-secondary-100 w-[168px] h-[48px] rounded-[35px] flex justify-center mt-5'>
                                    <p className='text-white pt-3'>Request Now</p>
                                    <FaArrowRight className='text-white text-[18px] ml-2 mt-4' />
                                </button>
                            </Link>
                        </div>

                    </div>

                </div>

                <div className='flex flex-col md:flex-row max-w-[1261px] justify-center mx-auto'>
                    <div>
                        <Image src="/assets/3d.png" width={524} height={524} alt="Metal works poster" />
                    </div>

                    <div className='w-[657px] md:ml-10'>
                        <div>
                            <p className='font-body font-[600] text-secondary-100 text-[16px]'>Our Services</p>
                            <h1 className='font-body font-[600] text-black text-[64px]'>3D Printing</h1>
                            <p className='font-body font-[600] text-black text-[16px] max-w-[533px]'>Do you have a project in mind? Need custom gifts like keyholders, figurines, phone stands, or other 3D printed items in any quantity? Do you need to 3D print your school projects or broken machine parts? Our 3D printing services enable quick turnaround times, precise details, and cost-effective production.</p>
                            <Link href='/workorderrequest'>
                                <button className='bg-secondary-100 w-[168px] h-[48px] rounded-[35px] flex justify-center mt-5'>
                                    <p className='text-white pt-3'>Request Now</p>
                                    <FaArrowRight className='text-white text-[18px] ml-2 mt-4' />
                                </button>
                            </Link>
                        </div>

                    </div>

                </div>


            </Carousel>
        </div>
    )
}

export default Metalworks