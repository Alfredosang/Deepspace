"use client"
import React from 'react';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6"
import ImageSlider from './ImageSlider'
// import '../styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const Hero = () => {




  return (
    <div className=' pt-[130px] md:pt-[170px]'>
      <div className='flex flex-col-reverse gap-3 md:gap-0 md:flex-col '>

        <div className=' md:mx-[150px] flex flex-col md:flex-row lg:flex-row justify-start gap-2 px-3 md:px-0'>
          <h1 className='font-body text-black font-[700] text-[24px]  md:text-[66px] lg:text-[66px] max-w-[610px] leading-[24px] md:leading-[80px] lg:leading-[80px]'>Where Imagination Sparks Innovation</h1>
          <div className='flex flex-col justify-end md:ml-7 lg:ml-7'>
            <p className='font-[400] font-body text-[16px] mb-5'>Ignite Your Creativity, Fuel Your Future</p>
            <div>
              <button className='bg-secondary-100 text-white w-[146px] h-[40px] md:h-[56px] md:w-[171px] rounded-[35px] flex justify-center items-center  space-x-2'><p>Start Now</p>
                <FaArrowRight className='text-white text-[14px] md:text-[24px] ' />
              </button>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div>

            <div className='bg-black w-[268px] h-[214px]  md:h-[483px] md:w-[900px] lg:w-[1336px]  rounded-r-[32px] mt-4 overflow-hidden '>


              <ImageSlider />



            </div>

          </div>

          <div className='w-[130px] h-[238px] md:h-[660px] md:w-[530px] lg:w-[530px] lg:h-[660px] bg-black rounded-l-[32px] overflow-hidden ml-3 md:ml-0'>
            <div className='relative w-full h-full'>

              <Image src="/assets/heroTwo.png" layout="fill" objectFit="cover" className="object-cover" alt="Hero Second image" />
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Hero