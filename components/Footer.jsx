import React from 'react'
import Image from 'next/image'
import {FaFacebookF} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {PiInstagramLogoFill} from "react-icons/pi"
import {FaTwitter} from "react-icons/fa"
import {FaArrowRight} from "react-icons/fa6"

const Footer = () => {
    return (
        <div className='h-[1266px] md:h-[746px] bg-primary'>
            <div className='container mx-auto '>
                <div className='flex flex-col mx-3 md:flex-row md:justify-center md:space-x-24 pt-[60px]'>
                    <div>
                        <p className='font-[700] text-secondary-100 text-[20px] md:text-[40px] lg:text-[60px] font-body max-w-[480px]'>Why Trust Us?</p>
                    </div>

                    <div className=' md:ml-10'>
                        <p className='text-[12px] md:text-[16px] md:text-lg font-[400] font-body text-white  max-w-[343px] md:max-w-[625px] lg:max-w-[625px]'>We’re a vibrant Lagos-based makerspace – the place where innovation thrives. A makerspace is where dreamers, creators, and inventors unite. Ready to turn your ideas into reality? Our hub offers STEM and robotics education for all, from kids to professionals.</p>

                        <div className='flex flex-wrap justify-start  gap-5 md:flex-row md:flex-wrap md:gap-4 animate-slideup my-5 max-w-[343px] md:max-w-[625px] lg:max-w-[625px]'>
                            <div className='border-[0.5px] border-gray-500 h-[40px] w-[129px] rounded-[59px]'>
                                <div className='flex justify-center gap-1'>
                                    <div>
                                        <Image src='/assets/tick.png' width={26} height={26} alt='Tick icon' className='pt-1' />
                                    </div>
                                    <p className='text-white font-body text-[10px] font-[400] pt-3'>Flexible Learning</p>
                                </div>
                            </div>

                            <div className='border-[0.5px] border-gray-500 h-[40px] w-[165px] rounded-[59px]'>
                                <div className='flex justify-center gap-1'>
                                    <div>
                                        <Image src='/assets/tick.png' width={26} height={26} alt='Tick icon' className='pt-1' />
                                    </div>
                                    <p className='text-white font-body text-[10px] font-[400] pt-3'>Continuous improvement</p>
                                </div>
                            </div>

                            <div className='border-[0.5px] border-gray-500 h-[40px] w-[144px] rounded-[59px]'>
                                <div className='flex justify-center gap-1'>
                                    <div>
                                        <Image src='/assets/tick.png' width={26} height={26} alt='Tick icon' className='pt-1' />
                                    </div>
                                    <p className='text-white font-body text-[10px] font-[400] pt-3'>Support For Success</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className='bg-secondary-100 w-[169px] h-[48px] rounded-[35px] flex justify-between px-2 pt-3'>
                                <p className='text-white font-body font-[700]'>Join Us Today</p>
                                <FaArrowRight className='text-white text-[24px] pt-1'/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-[100%] h-[0.5px] bg-white mt-16 mb-7 '></div>

                <div className='flex flex-wrap justify-start  gap-10 md:flex-row md:flex-wrap md:gap-[100px] animate-slideup mx-3'>
                    <div className='max-w-[343px] md:max-w-[386px]'>
                    <p className='font-bold font-body text-[20px] text-white mb-3'>Deepspace</p>
                    <p className='text-[12px] md:text-[14px] font-[400] font-body text-white '>We’re a vibrant Lagos-based makerspace – the place where innovation thrives. A makerspace is where dreamers, creators, and inventors unite. Ready to turn your ideas into reality? Our hub offers STEM and robotics education for all, from kids to professionals.</p>
                    </div>

                    <div className='space-y-2 w-[136px]'>
                        <p className='text-white font-[700] text-[20px] font-body'>Links</p>
                        <p className='text-white font-[400] text-[16px] font-body'>About Us</p>
                        <p className='text-white font-[400] text-[16px] font-body'>Our Service</p>
                        <p className='text-white font-[400] text-[16px] font-body'>Contact Us</p>
                        <p className='text-white font-[400] text-[16px] font-body'>Membership</p>
                        <p className='text-white font-[400] text-[16px] font-body'>Blog</p>
                    </div>


                    <div className='space-y-2 w-[136px]'>
                        <p className='text-white font-[700] text-[20px] font-body'>Socials</p>
                        <p className='text-white font-[400] text-[16px] font-body'>Instagram</p>
                        <p className='text-white font-[400] text-[16px] font-body'>Facebook</p>
                        <p className='text-white font-[400] text-[16px] font-body'>LinkedIn</p>
                    </div>

                    <div className='space-y-2 w-[138px]'>
                        <p className='text-white font-[700] text-[20px] font-body'>Get In Touch</p>
                        <p className='text-white font-[400] text-[16px] font-body'>+234 90 398 510 34</p>
                        <p className='text-white font-[400] text-[16px] font-body'>Info@assetium.com</p>
                    </div>

                    <div className='space-y-2 w-[238px]'>
                        <p className='text-white font-[700] text-[20px] font-body'>Newsletter</p>
                        <div className='border-[0.5px] border-white w-[268px] h-[40px] rounded-full flex justify-between align-middle pt-2 px-3 '><p className='text-white font-body '>Email Address</p>
                        <FaArrowRight className='text-white text-[24px] pt-1'/>
                        </div>

                    </div>


                    


                </div>

                <div className='w-[100%] h-[0.5px] bg-white mt-7 mb-7 '></div>

                <div className='mx-2 flex  flex-col justify-center md:flex-row md:justify-between '> 
                    <div><p className='font-body text-white text-[12px] md:text-[14px]'>Assetium Capital Management Ltd © 2023. All Rights Reserved.</p></div>
                    <div className='flex space-x-2'>
                        <FaFacebookF className='text-white md:text-[24px]'/>
                        <FaLinkedinIn className='text-white md:text-[24px]'/>
                        <PiInstagramLogoFill className='text-white md:text-[24px]'/>
                        <FaTwitter className='text-white md:text-[24px]'/>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer