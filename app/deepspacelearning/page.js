'use client'
import Blocksix from '@/components/Blocksix'
import Footer from '@/components/Footer'
import Projectgallery from '@/components/Projectgallery'
import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"
import ReactPlayer from 'react-player'
import Blocktwo from '@/components/Blocktwo'
import Courses from '@/components/Courses'

const Deephackerspace = () => {
    return (
        <div>
            <div className='container mx-auto'>

                <div className='flex justify-center py-16'>
                    <div className=''>
                        <div className='relative min-w-[400px] max-h-[700px]md:w-[900px] md:h-[500px]  lg:w-[1280px] lg:h-[400px] rounded-[100px]  '>
                            <Image src="/assets/learning.jpeg" layout={'fill'} objectFit="cover" alt="About Us Hero Image" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>



                            <div className='absolute bottom-[10%] left-[150px] z-50 max-w-[706px] '>
                                <p className='font-[600] text-[80px] font-body  text-white leading-[80px]'>Deepspace Learning</p>
                                <p className=' text-white max-w-[717px] font-body font-[400] text-[16px] '>  Were creative expressions knows no bounds.</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='flex flex-wrap gap-7 justify-center'>
                    <div className='w-[657px]'>
                        <div>
                            <p className='font-body font-[600] text-secondary-100 text-[16px]'>About</p>
                            <h1 className='font-body font-[600] text-black text-[40px]'>What is Deepspace Learning?</h1>
                            <div className='font-body font-[600] text-black text-[16px] max-w-[533px]'>

                                <p>Position yourself to become a learned powerhouse in advanced digital
                                    manufacturing skills.
                                    Engineers, architects, draftsmen, designers, advertisers, interior designers or anyone
                                    interested in acquiring skills in AutoCAD or whose job depends on drawings or
                                    sketches to convey information or ideas.
                                    Find below our target student:</p>


                                <ul className='list-disc'>
                                    <li>Engineering Students</li>
                                    <li>Engineering graduates</li>
                                    <li>Engineering Emigrants</li>
                                    <li>Mid-career Engineers</li>
                                    <li>Industry 4.0 entrepreneurs</li>
                                </ul>

                            </div>
                            <button className='bg-secondary-100 w-[168px] h-[48px] rounded-[35px] flex justify-center mt-5'>
                                <p className='text-white pt-3'>Join Us Today</p>
                                <FaArrowRight className='text-white text-[18px] ml-2 mt-4' />
                            </button>
                        </div>

                    </div>


                    <div>
                        <div className=' w-[380px] h-[300px]  md:w-[550px] md:h-[360px] bg-black rounded-[24px] '>
                            <ReactPlayer url='https://youtu.be/Et7TTfwvBFo?si=FfX9CmU_camj3ynr' height='100%' width='100%' />
                        </div>

                    </div>

                </div>

            </div>

            <div className=''>
                <Courses/>
            </div>
            <div className=' mx-auto'>

                <Projectgallery />
                <Blocksix />
            </div>
            <Footer />
        </div>
    )
}

export default Deephackerspace