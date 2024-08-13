"use client"

import React from 'react'
import ReactPlayer from 'react-player'
import Image from 'next/image'
// import { CldVideoPlayer } from 'next-cloudinary';
// import 'next-cloudinary/dist/cld-video-player.css';




// import Image from 'next/image'

const Blockone = () => {
    return (
        <div className='pb-[70px] pt-[90px] md:pt-[170px] flex justify-center items-center'>
            <div className='bg-secondary-300 w-[345px] h-[600px]  md:w-[1280px] md:h-[488px] rounded-[30px] md:py-5'>
                <div className=' flex flex-col justify-center px-2 space-y-7 md:flex-row md:justify-center md:px-0 md:space-x-5 md:items-center'>

                    <div className='h-[264px] pt-16 md:pt-16 relative '>
                        <div className=''>
                            <p className='font-body font-[700] text-secondary-100 text-[38px] leading-[40px] md:text-[58px] md:leading-[70px] '>Deepspace <br /> Learning,</p>
                            <p className='font-body font-[600] text-primary text-[28px] leading-[40px] md:text-[48px] md:leading-[74px]  z-100 '>Where Education <br /> Knows No Bounds</p>
                        </div>
                        <div className='absolute bottom-[20px] left-[130px] md:bottom-[-32%] md:left-[60%] w-[120px] h-[58px] md:w-[192px] md:h-[85px] z-0'>
                            <div className='relative w-full h-full'>
                            <Image src="/assets/boundsIcon.png" layout="fill" objectFit="cover" className="object-cover" alt="Picture of bound Icon" />
                            </div>
                        </div>
                    </div>

                    <div className=' w-[320px] h-[280px]  md:w-[699px] md:h-[424px] bg-black rounded-[24px] justify-center items-center '>
                        <ReactPlayer url='https://youtu.be/Et7TTfwvBFo?si=FfX9CmU_camj3ynr' height='100%' width='100%' />
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Blockone