import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaArrowRight } from "react-icons/fa"
import { PiInstagramLogoFill } from "react-icons/pi"

const Footer = () => {
    return (
        <div className='bg-primary py-8 md:py-16'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row md:justify-between md:space-x-10'>
                    <div className='mb-8 md:mb-0'>
                        <p className='font-body font-[700] text-secondary-100 text-[24px] md:text-[40px] lg:text-[60px] max-w-full md:max-w-[480px]'>
                            Why Trust Us?
                        </p>
                    </div>

                    <div className='md:ml-10'>
                        <p className='text-[14px] md:text-[16px] lg:text-lg font-body text-white max-w-full md:max-w-[625px]'>
                            We’re a vibrant Lagos-based makerspace – the place where innovation thrives. A makerspace is where dreamers, creators, and inventors unite. Ready to turn your ideas into reality? Our hub offers STEM and robotics education for all, from kids to professionals.
                        </p>

                        <div className='flex flex-wrap gap-4 md:gap-6 mt-5'>
                            <div className='border-[0.5px] border-gray-500 h-[40px] w-auto md:w-[145px] rounded-full flex items-center justify-center'>
                                <Image src='/assets/tick.png' width={20} height={20} alt='Tick icon' />
                                <p className='text-white font-body text-[12px] md:text-[12px] ml-2'>Flexible Learning</p>
                            </div>

                            <div className='border-[0.5px] border-gray-500 h-[40px] w-auto md:w-[190px] rounded-full flex items-center justify-center'>
                                <Image src='/assets/tick.png' width={20} height={20} alt='Tick icon' />
                                <p className='text-white font-body text-[12px] md:text-[12px] ml-2'>Continuous improvement</p>
                            </div>

                            <div className='border-[0.5px] border-gray-500 h-[40px] w-auto md:w-[155px] rounded-full flex items-center justify-center'>
                                <Image src='/assets/tick.png' width={20} height={20} alt='Tick icon' />
                                <p className='text-white font-body text-[12px] md:text-[12px] ml-2'>Support For Success</p>
                            </div>
                        </div>

                        <button className='bg-secondary-100 w-full md:w-[169px] h-[48px] rounded-full flex items-center justify-between px-4 py-2 mt-5'>
                            <p className='text-white font-body font-[700]'>Join Us Today</p>
                            <FaArrowRight className='text-white text-[20px]' />
                        </button>
                    </div>
                </div>

                <div className='w-full h-[0.5px] bg-white my-8'></div>

                <div className='flex flex-col md:flex-row md:justify-between gap-8'>
                    <div className='max-w-full md:max-w-[386px]'>
                        <p className='font-body font-bold text-[20px] text-white mb-3'>Deepspace</p>
                        <p className='text-[14px] md:text-[16px] font-body text-white'>
                            We’re a vibrant Lagos-based makerspace – the place where innovation thrives. A makerspace is where dreamers, creators, and inventors unite. Ready to turn your ideas into reality? Our hub offers STEM and robotics education for all, from kids to professionals.
                        </p>
                    </div>

                    <div className='space-y-2'>
                        <p className='text-white font-[700] text-[20px] font-body'>Links</p>
                        <p className='text-white font-[400] text-[16px] font-body'>About Us</p>
                        <p className='text-white font-[400] text-[16px] font-body'>Our Service</p>
                        <p className='text-white font-[400] text-[16px] font-body'>Contact Us</p>
                        <p className='text-white font-[400] text-[16px] font-body'>Membership</p>
                        <p className='text-white font-[400] text-[16px] font-body'>Blog</p>
                    </div>

                    <div className='space-y-2'>
                        <p className='text-white font-[700] text-[20px] font-body'>Socials</p>
                        <p className='text-white font-[400] text-[16px] font-body'>Instagram</p>
                        <p className='text-white font-[400] text-[16px] font-body'>Facebook</p>
                        <p className='text-white font-[400] text-[16px] font-body'>LinkedIn</p>
                    </div>

                    <div className='space-y-2'>
                        <p className='text-white font-[700] text-[20px] font-body'>Get In Touch</p>
                        <p className='text-white font-[400] text-[16px] font-body'>+234 90 398 510 34</p>
                        <p className='text-white font-[400] text-[16px] font-body'>Info@assetium.com</p>
                    </div>

                    <div className='space-y-2'>
                        <p className='text-white font-[700] text-[20px] font-body'>Newsletter</p>
                        <div className='border-[0.5px] border-white w-full md:w-[268px] h-[40px] rounded-full flex items-center px-3'>
                            <p className='text-white font-body flex-grow'>Email Address</p>
                            <FaArrowRight className='text-white text-[20px]' />
                        </div>
                    </div>
                </div>

                <div className='w-full h-[0.5px] bg-white my-8'></div>

                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <p className='font-body text-white text-[12px] md:text-[14px]'>Assetium Capital Management Ltd © 2023. All Rights Reserved.</p>
                    <div className='flex space-x-2 mt-4 md:mt-0'>
                        <FaFacebookF className='text-white text-[20px] md:text-[24px]' />
                        <FaLinkedinIn className='text-white text-[20px] md:text-[24px]' />
                        <PiInstagramLogoFill className='text-white text-[20px] md:text-[24px]' />
                        <FaTwitter className='text-white text-[20px] md:text-[24px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
