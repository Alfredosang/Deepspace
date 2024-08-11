"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6"

const Hero = () => {




  return (
    <div className=' pt-[170px]'>
      <div className='flex justify-between'>
        <div>
          <div className='container md:mx-[150px] flex flex-col md:flex-row lg:flex-row justify-start gap-2'>
            <h1 className='font-body text-black font-[700] text-[24px]  md:text-[66px] lg:text-[66px] max-w-[610px] leading-[24px] md:leading-[80px] lg:leading-[80px]'>Where Imagination Sparks Innovation</h1>
            <div className='flex flex-col justify-end md:ml-7 lg:ml-7'>
              <p className='font-[400] font-body text-[16px] mb-5'>Ignite Your Creativity, Fuel Your Future</p>
              <div>
                <button className='bg-secondary-100 text-white w-[146px] h-[] md:h-[56px] md:w-[171px] rounded-[35px] flex justify-center align-items-middle pt-3 space-x-2'><p>Start Now</p>
                  <FaArrowRight className='text-white text-[24px] pt-1' />
                </button>
              </div>
            </div>
          </div>

          <div className='bg-black w-[300px] md:w-[900px] lg:w-[1336px] h-[483px] rounded-r-[32px] mt-4 ' style={{
            paddingBottom: '30px',
            position: 'relative'
          }}>

            <Carousel
              additionalTransfrom={0}
              // arrows
              autoPlay
              autoPlaySpeed={4000}
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
              {/* <div className='relative w-[300px] md:w-[900px] lg:w-[1336px] h-[483px]'>
                <Image  src="/assets/heroOne.png" layout={'fill'} objectFit="cover"  alt="Hero first image" /><p className='absolute text-white bottom-[10%] left-[150px] z-50  max-w-[600px] font-body font-[400] text-[14px] '>Innovation is about taking risks and embracing failure as a stepping stone to success. It requires curiosity, creativity, and a willingness to experiment. Innovation is not limited to technology or science; it can also be seen in art, design, business, and social change.</p>
              </div> */}

              <div className='relative w-[368px] h-[214px] md:w-[900px] lg:w-[1336px] md:h-[483px] lg:h-[483px] rounded-r-[32px] overflow-hidden'>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <Image src="/assets/heroOne.png" layout={'fill'} objectFit="cover" alt="Hero first image"  className='rounded-r-[32px]'/><p className='absolute text-white bottom-[10%] left-[150px] z-50  max-w-[600px] font-body font-[400] text-[14px] '>Innovation is about taking risks and embracing failure as a stepping stone to success. It requires curiosity, creativity, and a willingness to experiment. Innovation is not limited to technology or science; it can also be seen in art, design, business, and social change.</p>
              </div>

            </Carousel>

            {/* <div className='relative w-[268px] h-[214px] md:w-[900px] lg:w-[1336px] md:h-[483px] lg:h-[483px]'>
              <Image src="/assets/heroOne.png" layout={'fill'} objectFit="cover" alt="Hero first image" /><p className='absolute text-white bottom-[10%] left-[150px] z-50  max-w-[600px] font-body font-[400] text-[14px] '>Innovation is about taking risks and embracing failure as a stepping stone to success. It requires curiosity, creativity, and a willingness to experiment. Innovation is not limited to technology or science; it can also be seen in art, design, business, and social change.</p>
            </div> */}

          </div>

        </div>

        <div className='w-[95px] h-[238px] md:h-[660px] md:w-[530px] lg:w-[530px] lg:h-[660px] bg-black rounded-l-[32px] overflow-hidden '>
          <Image src="/assets/heroTwo.png" width={530} height={660}  objectFit="cover" alt="Hero Second image" />
        </div>

      </div>

    </div>
  )
}

export default Hero