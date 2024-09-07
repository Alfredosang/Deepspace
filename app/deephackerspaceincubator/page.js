'use client'
import Blocksix from '@/components/Blocksix'
import Footer from '@/components/Footer'
import Projectgallery from '@/components/Projectgallery'
import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"
import ReactPlayer from 'react-player'

const Deephackerspace = () => {
    return (
        <div>
            <div className='container mx-auto px-4 sm:px-6 '>
                {/* Hero Section */}
                <div className='relative flex justify-center pt-[150px] py-16'>
                    <div className='relative w-full h-[300px]  md:h-[400px] lg:h-[400px] rounded-[20px] overflow-hidden'>
                        <Image
                            src="/assets/incubator.jpeg"
                            fill
                            className="object-cover"
                            alt="Deep Hackerspace Hero Image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className='absolute bottom-[10%] left-[5%] sm:left-[10%] lg:left-[15%] z-10 max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]'>
                            <p className='font-body font-[600] text-[32px] sm:text-[48px] lg:text-[60px] xl:text-[80px] text-white leading-tight'>
                            Deepspace Incubator
                            </p>
                            <p className='text-white font-body font-[400] text-[14px] sm:text-[16px] lg:text-[18px]'>
                            We offer a wide range of meticulously designed programs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className='flex flex-wrap gap-7 justify-center py-8'>
                    <div className='w-full lg:w-[40%]'>
                        <p className='font-body font-[600] text-secondary-100 text-[16px]'>Incubator</p>
                        <h1 className='font-body font-[600] text-black text-[24px] sm:text-[32px] lg:text-[40px]'>
                        What is Deepspace Incubator?
                        </h1>
                        <p className='font-body font-[400] text-black text-[14px] sm:text-[16px] lg:text-[18px] max-w-[90%]'>
                        Our Incubator gives access to resources to get your hardware startup/products through the survival stage and market stability. Product Incubation is a strategic approach to co-imagine and co-build products with members of the DeepSpace Community in pushing their already existing product, or innovation within the DeepSpace facility.
                        </p>
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

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <Projectgallery />
                <Blocksix />
            </div>

            <Footer />
        </div>
    )
}

export default Deephackerspace
