"use client"
import React from 'react'
import '../components/Navbar.css'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
// import { Popover, Transition } from '@headlessui/react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
// import { PiShoppingCart } from "react-icons/pi";

const Navbar = () => {

    // const [nav, setNav] = useState(false);
    return (
        <div>
            <nav className='flex  justify-between  px-7 md:px-32 items-center fixed z-10  h-[100px] bg-white w-full  mx-auto'>
                {/* <p className='font-bold font-body text-lg'>Deepspace</p> */}
                <Link href="/"><Image src="/assets/deepspaceLogo.png" width={190} height={80} alt="Logo" /></Link>

                <ui className='hidden md:flex text-gray-500 text-sm list-none space-x-3 font-body'>
                    <Link href="/about">
                        <li className='hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100'>About Us</li>
                    </Link>

                    <Link href="/community">
                        <li className='hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100'>Community</li>
                    </Link>
                    {/* <li className='flex justify-items-bottom hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100'><p>Programs</p> <IoIosArrowDown size={18} /></li> */}
                    <li>

                        <Popover>
                            <PopoverButton className=" relative border-[0px] outline-none flex justify-items-bottom hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100 ">
                                Programs <IoIosArrowDown size={18} />
                            </PopoverButton>
                            <PopoverPanel
                                transition
                                anchor="bottom"
                                className=" rounded-xl bg-white h-[750px] w-[400px] text-sm/6 transition duration-200 ease-in-out  pt-7"
                            >
                                <div className='flex flex-col gap-5 space-y-[100px]' >

                                    <div className="p-3">
                                        <Link href="/">
                                            <div className='flex flex-col w-[350px] md:w-[360px] h-[130px]  rounded-[20px] px-[20px] py-[24px] border-[1px] group-hover:border-gray-200 group group-hover:h-[397px] duration-500 absolute z-100 hover:bg-red-50'>

                                                <div className='w-[310px] h-[30px] bg-black rounded-[4px] group-hover:h-[65px] overflow-hidden duration-500'>
                                                    <Image src="/assets/m1.png" width={310} height={152} style={{ objectFit: "contain" }} alt="Course picture" className='rounded-[4px] ' />
                                                </div>


                                                <div className='pt-2'>
                                                    <p className='font-body font-[500] text-[16px] ml-2 group-hover:text-red-500'>Home</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="p-3">
                                        <Link href="/deephackerspace">
                                            <div className='flex flex-col w-[350px] md:w-[360px] h-[130px]  rounded-[20px] px-[20px] py-[24px] border-[1px] group-hover:border-gray-200 group group-hover:h-[397px] duration-500 absolute z-100 hover:bg-red-50'>

                                                <div className='w-[310px] h-[30px] bg-black rounded-[4px] group-hover:h-[65px] overflow-hidden duration-500'>
                                                    <Image src="/assets/m2.png" width={310} height={152} style={{ objectFit: "contain" }} alt="Course picture" className='rounded-[4px] ' />
                                                </div>


                                                <div className='pt-2'>
                                                    <p className='font-body font-[500] text-[16px] ml-2  group-hover:text-red-500'>Deep Hacker Space</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="p-3">
                                        <Link href="/deephackerspaceincubator">
                                            <div className='flex flex-col w-[350px] md:w-[360px] h-[130px]  rounded-[20px] px-[20px] py-[24px] border-[1px] group-hover:border-gray-200 group group-hover:h-[397px] duration-500 absolute z-100 hover:bg-red-50'>

                                                <div className='w-[310px] h-[30px] bg-black rounded-[4px] group-hover:h-[65px] overflow-hidden duration-500'>
                                                    <Image src="/assets/m3.png" width={310} height={152} style={{ objectFit: "contain" }} alt="Course picture" className='rounded-[4px] ' />
                                                </div>


                                                <div className='pt-2'>
                                                    <p className='font-body font-[500] text-[16px] ml-2  group-hover:text-red-500'>Deepspace Incubator</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="p-3">
                                        <Link href="/deepmarketspace">
                                            <div className='flex flex-col w-[350px] md:w-[360px] h-[130px]  rounded-[20px] px-[20px] py-[24px] border-[1px] group-hover:border-gray-200 group group-hover:h-[397px] duration-500 absolute z-100 hover:bg-red-50'>

                                                <div className='w-[310px] h-[30px] bg-black rounded-[4px] group-hover:h-[65px] overflow-hidden duration-500'>
                                                    <Image src="/assets/m5.png" width={310} height={152} style={{ objectFit: "contain" }} alt="Course picture" className='rounded-[4px] ' />
                                                </div>


                                                <div className='pt-2'>
                                                    <p className='font-body font-[500] text-[16px] ml-2  group-hover:text-red-500'>Deep Makerspace</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="p-3">
                                        <Link href="/deepspacelearning">
                                            <div className='flex flex-col w-[350px] md:w-[360px] h-[130px]  rounded-[20px] px-[20px] py-[24px] border-[1px] group-hover:border-gray-200 group group-hover:h-[397px] duration-500 absolute z-100 hover:bg-red-50'>

                                                <div className='w-[310px] h-[30px] bg-black rounded-[4px] group-hover:h-[65px] overflow-hidden duration-500'>
                                                    <Image src="/assets/m4.png" width={310} height={152} style={{ objectFit: "contain" }} alt="Course picture" className='rounded-[4px] ' />
                                                </div>


                                                <div className='pt-2'>
                                                    <p className='font-body font-[500] text-[16px] ml-2  group-hover:text-red-500'>Deepspace Learning</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </PopoverPanel>
                        </Popover>
                    </li>
                    <Link href="/shop"><li className='hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100'>Shop</li></Link>
                    <Link href="/contactus"><li className='hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100'>Contact Us</li></Link>



                </ui>
                <ui className='flex text-gray-500 text-sm list-none space-x-3 font-body'>
                    <li className=' duration-300 cursor-pointer hover:text-secondary-100'>
                        <div className='flex justify-items-center space-x-1 '>
                            <HiOutlineShoppingCart size={18} />
                            <p className='hidden md:flex'>Cart</p>
                        </div>

                    </li>
                    <li className=' duration-300 cursor-pointer hover:text-secondary-100'>



                        <div className='hidden md:flex justify-items-center space-x-1 '>
                            <IoIosSearch size={18} />
                            <p>
                                Search
                            </p>
                        </div>
                    </li>
                </ui>
            </nav>

        </div>
    )
}

export default Navbar