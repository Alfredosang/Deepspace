import Footer from '@/components/Footer'
import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"

const Community = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex justify-center py-16'>
                    <div className=''>
                        <div className='relative min-w-[400px] max-h-[700px]md:w-[900px] md:h-[500px]  lg:w-[1280px] lg:h-[400px] rounded-[100px]  '>
                            <Image src="/assets/abHero.jpeg" layout={'fill'} objectFit="cover" alt="About Us Hero Image" />



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

            </div>

            <Footer />
        </div>
    )
}

export default Community