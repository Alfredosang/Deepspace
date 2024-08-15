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
        <div className='min-h-screen bg-gray-100'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Hero Section */}
                <div className='relative flex justify-center py-16'>
                    <div className='relative w-full max-w-screen-xl'>
                        <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden'>
                            <Image
                                src="/assets/incubator.jpeg"
                                fill
                                className="object-cover"
                                alt="About Us Hero Image"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div className='absolute bottom-10 left-5 sm:left-10 lg:left-15 z-50 max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]'>
                                <p className='font-semibold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight'>
                                    Deepspace Incubator
                                </p>
                                <p className='text-white text-sm sm:text-base lg:text-lg mt-2'>
                                    We offer a wide range of meticulously designed programs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className='flex flex-col lg:flex-row gap-7 justify-center'>
                    <div className='w-full lg:w-3/5'>
                        <p className='font-semibold text-secondary-100 text-sm'>Incubator</p>
                        <h1 className='font-semibold text-black text-2xl sm:text-3xl lg:text-4xl mt-2'>
                            What is Deepspace Incubator?
                        </h1>
                        <p className='text-black text-sm sm:text-base lg:text-lg mt-2 max-w-lg'>
                            Our Incubator gives access to resources to get your hardware startup/products through the survival stage and market stability. Product Incubation is a strategic approach to co-imagine and co-build products with members of the DeepSpace Community in pushing their already existing product, or innovation within the DeepSpace facility.
                        </p>
                        <button className='bg-secondary-100 w-40 h-12 rounded-full flex items-center justify-center mt-5'>
                            <p className='text-white text-sm sm:text-base'>Join Us Today</p>
                            <FaArrowRight className='text-white text-lg ml-2' />
                        </button>
                    </div>

                    <div className='w-full lg:w-2/5'>
                        <div className='relative w-full h-[200px] sm:h-[300px] md:h-[360px] bg-black rounded-lg overflow-hidden'>
                            <ReactPlayer
                                url='https://youtu.be/Et7TTfwvBFo?si=FfX9CmU_camj3ynr'
                                height='100%'
                                width='100%'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 mt-10'>
                <Projectgallery />
                <Blocksix />
            </div>
            <Footer />
        </div>
    )
}

export default Deephackerspace
