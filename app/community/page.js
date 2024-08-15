"use client"
import Footer from '@/components/Footer'
import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"
// import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link'
// import { FaArrowRight } from "react-icons/fa6"

const Community = () => {
    return (
        <div>
            <div className='container mx-auto pt-[100px] md:pt-[150px] lg:pt-[200px] px-4 md:px-8 lg:px-0'>


                <div className='flex justify-center'>
                    <div className='w-full max-w-[1280px]'>
                        <div className='relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[30px] md:rounded-[50px] lg:rounded-[100px] overflow-hidden'>
                            <Image src="/assets/comm.jpeg" layout={'fill'} objectFit="cover" alt="About Us Hero Image" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                            <div className='absolute bottom-[5%] left-[20px] md:left-[50px] lg:left-[150px] z-50'>
                                <p className='font-[600] text-[30px] md:text-[50px] lg:text-[80px] font-body text-white leading-[40px] md:leading-[60px] lg:leading-[80px]'>
                                    Deep Space Community
                                </p>
                                <p className='text-white max-w-[300px] md:max-w-[500px] lg:max-w-[600px] font-body font-[400] text-[12px] md:text-[14px] lg:text-[16px]'>
                                    We believe in the power of community and the importance of fostering connections among learners, educators, and industry professionals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center p-7'>
                    <div className='flex flex-col gap-7'>
                        <div className='flex justify-center'>
                            <h2 className='text-center font-body font-[600] text-[32px] md:text-[48px] text-black max-w-[567px] leading-[38px] md:leading-[58px]'>
                                Powering Long Life Learning & Collaboration
                            </h2>
                        </div>

                        <div className='flex justify-center'>
                            <p className='text-center font-body font-[400] text-[14px] md:text-[16px] text-black max-w-[1085px]'>
                                Join a vibrant community of learners, educators, and enthusiasts dedicated to sharing knowledge, fostering growth, and achieving excellence together. Whether you're here to explore new subjects, enhance your skills, or connect with like-minded individuals, our community is your gateway to a world of opportunities and inspiration. Let's learn, grow, and succeed together!
                            </p>
                        </div>

                        <div className='flex justify-center'>
                            <button className='bg-secondary-100 w-[140px] md:w-[169px] h-[40px] md:h-[48px] rounded-[30px] md:rounded-[35px] flex justify-between px-2 pt-2 md:pt-3'>
                                <p className='text-white font-body font-[700]'>Join Us Today</p>
                                <FaArrowRight className='text-white text-[20px] pt-1' />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap gap-7 justify-center items-center  my-16'>
                    <div className='bg-black w-[220px] h-[145px] rounded-md overflow-hidden'>
                        <div className='relative w-full h-full'>
                            <Image src="/assets/herohero.png" layout="fill" objectFit="cover" className="object-cover" alt="" />
                        </div>

                    </div>
                    <div className='flex flex-col gap-5 w-[220px] h-[145px]'>
                        <div className='bg-black w-[220px] h-[81px] rounded-md overflow-hidden'>
                            <div className='relative w-full h-full'>

                                <Image src="/assets/workman.png" layout="fill" objectFit="cover" className="object-cover " alt="IM2" />
                            </div>
                        </div>
                        <div className='bg-black w-[220px] h-[50px] rounded-md overflow-hidden'>
                            <div className='relative w-full h-full'>

                                <Image src="/assets/workman2.png" layout="fill" objectFit="cover" className="object-cover " alt="IM2" />
                            </div>
                        </div>
                    </div>

                    <div className='bg-black w-[220px] h-[145px] rounded-md overflow-hidden'>
                        <div className='relative w-full h-full'>
                            <Image src="/assets/heroTwo.png" layout="fill" objectFit="cover" className="object-cover " alt="" />
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 w-[220px] h-[145px]'>
                        <div className='bg-black w-[220px] h-[81px] rounded-md overflow-hidden'>
                            <div className='relative w-full h-full'>

                                <Image src="/assets/workman2.png" layout="fill" objectFit="cover" className="object-cover " alt="IM2" />
                            </div>
                        </div>
                        <div className='bg-black w-[220px] h-[50px] rounded-md overflow-hidden'>
                            <div className='relative w-full h-full'>

                                <Image src="/assets/herohero.png" layout="fill" objectFit="cover" className="object-cover " alt="IM2" />
                            </div>
                        </div>
                    </div>

                    <div className='bg-black w-[220px] h-[145px] rounded-md overflow-hidden'>
                        <div className='relative w-full h-full'>

                            <Image src="/assets/workman.png" layout="fill" objectFit="cover" className="object-cover " alt="IM2" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 w-[220px] h-[145px]'>
                        <div className='bg-black w-[220px] h-[81px] rounded-md overflow-hidden'>
                            <div className='relative w-full h-full'>

                                <Image src="/assets/workman2.png" layout="fill" objectFit="cover" className="object-cover " alt="IM2" />
                            </div>
                        </div>
                        <div className='bg-black w-[220px] h-[50px] rounded-md overflow-hidden'>
                            <div className='relative w-full h-full'>

                                <Image src="/assets/heroTwo.png" layout="fill" objectFit="cover" className="object-cover " alt="IM2" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>

                </div>
                <div className='bg-red-50 p-7 rounded-lg'>
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
                            <div className='flex flex-col md:flex-row max-w-full mx-auto px-4'>
                                <div className='w-full md:w-1/2'>
                                    <Image
                                        src="/assets/bm.png"
                                        width={524}
                                        height={524}
                                        alt="Metal works poster"
                                        layout="responsive"
                                    />
                                </div>

                                <div className='w-full md:w-1/2 md:ml-10 pt-8 md:pt-16'>
                                    <div>
                                        <p className='font-body font-[600] text-secondary-100 text-[14px] md:text-[16px]'>Our Membership Plan</p>
                                        <div className='flex flex-col md:flex-row items-start md:items-center mt-4'>
                                            <h1 className='font-body font-[600] text-black text-[32px] md:text-[64px] max-w-full md:max-w-[400px]'>Basic Membership</h1>
                                            <p className='font-body font-[600] text-secondary-100 text-[14px] md:text-[16px] md:ml-6 md:pt-7'>1 MEMBER</p>
                                        </div>
                                        <p className='font-body font-[600] text-black text-[14px] md:text-[16px] mt-4 max-w-full md:max-w-[533px]'>
                                            All you need to do is to register then you are a part of us
                                        </p>
                                        <Link href='https://chat.whatsapp.com/HbHVCsEbS9p8TUmSh5IPw0'>
                                            <button className='bg-secondary-100 w-full md:w-[168px] h-[48px] rounded-[35px] flex justify-center mt-5'>
                                                <p className='text-white pt-3'>Register Now</p>
                                                <FaArrowRight className='text-white text-[18px] ml-2 mt-2 md:mt-3' />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row max-w-full mx-auto px-4'>
                                <div className='w-full md:w-1/2'>
                                    <Image
                                        src="/assets/T2.png"
                                        width={524}
                                        height={524}
                                        alt="Metal works poster"
                                        layout="responsive"
                                    />
                                </div>

                                <div className='w-full md:w-1/2 md:ml-10 pt-8 md:pt-16'>
                                    <div>
                                        <p className='font-body font-[600] text-secondary-100 text-[14px] md:text-[16px]'>Our Membership Plan</p>
                                        <div className='flex flex-col md:flex-row items-start md:items-center mt-4'>
                                            <h1 className='font-body font-[600] text-black text-[32px] md:text-[64px] max-w-full md:max-w-[400px]'>Standard Membership</h1>
                                            <p className='font-body font-[600] text-secondary-100 text-[14px] md:text-[16px] md:ml-6 md:pt-7'>1 MEMBER</p>
                                        </div>
                                        <p className='font-body font-[600] text-black text-[14px] md:text-[16px] mt-4 max-w-full md:max-w-[533px]'>
                                            All you need to do is to register then you are a part of us
                                        </p>
                                        <Link href='https://chat.whatsapp.com/HbHVCsEbS9p8TUmSh5IPw0'>
                                            <button className='bg-secondary-100 w-full md:w-[168px] h-[48px] rounded-[35px] flex justify-center mt-5'>
                                                <p className='text-white pt-3'>Register Now</p>
                                                <FaArrowRight className='text-white text-[18px] ml-2 mt-2 md:mt-3' />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row max-w-full mx-auto px-4'>
                                <div className='w-full md:w-1/2'>
                                    <Image
                                        src="/assets/T3.png"
                                        width={524}
                                        height={524}
                                        alt="Metal works poster"
                                        layout="responsive"
                                    />
                                </div>

                                <div className='w-full md:w-1/2 md:ml-10 pt-8 md:pt-16'>
                                    <div>
                                        <p className='font-body font-[600] text-secondary-100 text-[14px] md:text-[16px]'>Our Membership Plan</p>
                                        <div className='flex flex-col md:flex-row items-start md:items-center mt-4'>
                                            <h1 className='font-body font-[600] text-black text-[32px] md:text-[64px] max-w-full md:max-w-[400px]'>Premium Membership</h1>
                                            <p className='font-body font-[600] text-secondary-100 text-[14px] md:text-[16px] md:ml-6 md:pt-7'>3 MEMBERS</p>
                                        </div>
                                        <p className='font-body font-[600] text-black text-[14px] md:text-[16px] mt-4 max-w-full md:max-w-[533px]'>
                                            All you need to do is to register then you are a part of us
                                        </p>
                                        <Link href='https://chat.whatsapp.com/HbHVCsEbS9p8TUmSh5IPw0'>
                                            <button className='bg-secondary-100 w-full md:w-[168px] h-[48px] rounded-[35px] flex justify-center mt-5'>
                                                <p className='text-white pt-3'>Register Now</p>
                                                <FaArrowRight className='text-white text-[18px] ml-2 mt-2 md:mt-3' />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row max-w-full mx-auto px-4'>
                                <div className='w-full md:w-1/2'>
                                    <Image
                                        src="/assets/T4.png"
                                        width={524}
                                        height={524}
                                        alt="Metal works poster"
                                        layout="responsive"
                                    />
                                </div>

                                <div className='w-full md:w-1/2 md:ml-10 pt-8 md:pt-16'>
                                    <div>
                                        <p className='font-body font-[600] text-secondary-100 text-[14px] md:text-[16px]'>Our Membership Plan</p>
                                        <div className='flex flex-col md:flex-row items-start md:items-center mt-4'>
                                            <h1 className='font-body font-[600] text-black text-[32px] md:text-[64px] max-w-full md:max-w-[400px]'>Corporate Membership</h1>
                                            <p className='font-body font-[600] text-secondary-100 text-[14px] md:text-[16px] md:ml-6 md:pt-7'>5 MEMBERS</p>
                                        </div>
                                        <p className='font-body font-[600] text-black text-[14px] md:text-[16px] mt-4 max-w-full md:max-w-[533px]'>
                                            All you need to do is to register then you are a part of us
                                        </p>
                                        <Link href='https://chat.whatsapp.com/HbHVCsEbS9p8TUmSh5IPw0'>
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

                <div className='flex flex-wrap justify-center my-20 px-4'>
                    <div className='flex flex-col w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0'>
                        <h2 className='text-black font-body text-[32px] sm:text-[48px] lg:text-[64px] font-[600] max-w-full md:max-w-[533px]'>
                            Our Upcoming Events
                        </h2>
                        <p className='text-black font-body text-[14px] sm:text-[16px] font-[400] max-w-full md:max-w-[533px] mt-4'>
                            Join us for an exclusive learning event whether you're a beginner looking to break into the field or aiming to sharpen your expertise, this event has something for everyone.
                        </p>
                    </div>

                    <div className='w-full md:w-1/2 lg:w-1/2'>
                        <Image
                            src="/assets/uee.png"
                            width={694}
                            height={524}
                            alt="Upcoming event poster"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>


            </div>

            <Footer />
        </div>
    )
}

export default Community