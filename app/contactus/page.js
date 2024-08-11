'use client'
import Footer from '@/components/Footer'
import React from 'react'
import Image from 'next/image'
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import ContactForm from '@/components/ContactForm';

const Contact = () => {
    return (
        <div className=''>
            <div className='container mx-auto'>
                <div className='flex justify-center py-16'>
                    <div className=''>
                        <div className='relative w-[400px] max-h-[700px]md:w-[900px] md:h-[500px]  lg:w-[1280px] lg:h-[400px] rounded-[100px]  '>
                            <Image src="/assets/cs.jpeg" layout={'fill'} objectFit="cover" alt="About Us Hero Image" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>



                            <div className='absolute bottom-[10%] left-[150px] z-50 max-w-[706px] '>
                                <p className='font-[600] text-[80px] font-body  text-white leading-[80px]'>Contact Us</p>
                                <p className=' text-white max-w-[717px] font-body font-[400] text-[16px] '>  Reach out to us, as we’ll be looking forward to hear from you.</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='flex flex-wrap gap-7  justify-center mb-12'>
                    <div className='w-[350px] h-[600px] md:w-[525px] md:h-[491px] lg:w-[525px] lg:h-[491px] shadow-lg rounded-lg space-y-10 p-10' >
                        <div className='space-y-2'>
                            <p className=' text-black max-w-[717px] font-body font-[600] text-[20px] '>Call Us</p>
                            <p className=' text-gray  font-body font-[400] text-[12px] '>You reach out to our team from Mon to Fri at 8am to 4pm</p>
                            <div className='flex justify-start align-middle '>
                                <FiPhoneCall className='text-secondary-100' size={18} />
                                <p className=' text-black font-body font-[500] text-[16px] ml-3'>+234 803 777 4576</p>
                            </div>
                            <div className='w-[455px] h-[0.4px] bg-secondary-100 '></div>
                        </div>

                        <div className='space-y-2'>
                            <p className=' text-black max-w-[717px] font-body font-[600] text-[20px] '>Visit Us</p>
                            <p className=' text-gray  font-body font-[400] text-[12px] '>Chats with us in person at our head office</p>
                            <div className='flex justify-start align-middle'>
                                <CiLocationOn className='text-secondary-100' size={30} />
                                <p className=' text-black font-body font-[500] text-[16px] ml-3'>Plot 1A Oluwalogbon House, Obafemi Awolowo Way, Alausa, Ikeja, Lagos State</p>
                            </div>
                            <div className='w-[455px] h-[0.4px] bg-secondary-100 mt-3'></div>
                        </div>

                        <div className='space-y-2'>
                            <p className=' text-black max-w-[717px] font-body font-[600] text-[20px] '>Message Us</p>
                            <p className=' text-gray  font-body font-[400] text-[12px] '>Send us a message.</p>
                            <div className='flex justify-start align-middle'>
                                <CiMail className='text-secondary-100' size={20} />
                                <p className=' text-black font-body font-[500] text-[16px] ml-3'>Deepspace.africa@gmail.com</p>
                            </div>
                            <div className='w-[455px] h-[0.4px] bg-secondary-100 mt-3'></div>
                        </div>


                    </div>
                    <div>
                        <ContactForm />
                    </div>

                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Contact