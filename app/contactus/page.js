'use client';
import Footer from '@/components/Footer';
import React from 'react';
import Image from 'next/image';
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn, CiMail } from "react-icons/ci";
import ContactForm from '@/components/ContactForm';

const Contact = () => {
    return (
        <div>
            <div className='container mx-auto pt-[100px] md:pt-[130px]'>
                <div className='flex justify-center py-16'>
                    <div className='relative w-full h-[250px] sm:h-[400px] md:h-[400px] lg:h-[400px] rounded-[20px] overflow-hidden'>
                        <Image
                            src="/assets/cs.jpeg"
                            fill
                            className="object-cover"
                            alt="Contact Us Hero Image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className='absolute bottom-[10%] left-[10%] md:left-[15%] lg:left-[20%] z-50 max-w-[90%] md:max-w-[70%]'>
                            <p className='font-[600] text-[32px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-body text-white leading-tight'>
                                Contact Us
                            </p>
                            <p className='text-white font-body font-[400] text-[14px] sm:text-[16px] lg:text-[18px]'>
                                Reach out to us, as we’ll be looking forward to hearing from you.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap gap-7 justify-center mb-12'>
                    <div className='w-full sm:w-[48%] md:w-[40%] lg:w-[30%] shadow-lg rounded-lg space-y-10 p-8 sm:p-10'>
                        <div className='space-y-4'>
                            <p className='text-black font-body font-[600] text-[18px] sm:text-[20px]'>Call Us</p>
                            <p className='text-gray-500 font-body font-[400] text-[12px] sm:text-[14px]'>
                                You can reach out to our team from Mon to Fri at 8am to 4pm
                            </p>
                            <div className='flex items-center'>
                                <FiPhoneCall className='text-secondary-100' size={18} />
                                <p className='text-black font-body font-[500] text-[14px] sm:text-[16px] ml-3'>+234 803 777 4576</p>
                            </div>
                            <div className='w-full h-[0.4px] bg-secondary-100'></div>
                        </div>

                        <div className='space-y-4'>
                            <p className='text-black font-body font-[600] text-[18px] sm:text-[20px]'>Visit Us</p>
                            <p className='text-gray-500 font-body font-[400] text-[12px] sm:text-[14px]'>
                                Chat with us in person at our head office
                            </p>
                            <div className='flex items-center'>
                                <CiLocationOn className='text-secondary-100' size={30} />
                                <p className='text-black font-body font-[500] text-[14px] sm:text-[16px] ml-3'>
                                    Plot 1A Oluwalogbon House, Obafemi Awolowo Way, Alausa, Ikeja, Lagos State
                                </p>
                            </div>
                            <div className='w-full h-[0.4px] bg-secondary-100 mt-3'></div>
                        </div>

                        <div className='space-y-4'>
                            <p className='text-black font-body font-[600] text-[18px] sm:text-[20px]'>Message Us</p>
                            <p className='text-gray-500 font-body font-[400] text-[12px] sm:text-[14px]'>
                                Send us a message.
                            </p>
                            <div className='flex items-center'>
                                <CiMail className='text-secondary-100' size={20} />
                                <p className='text-black font-body font-[500] text-[14px] sm:text-[16px] ml-3'>
                                    Deepspace.africa@gmail.com
                                </p>
                            </div>
                            <div className='w-full h-[0.4px] bg-secondary-100 mt-3'></div>
                        </div>
                    </div>

                    <div className='w-full sm:w-[48%] md:w-[55%] lg:w-[60%]'>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
