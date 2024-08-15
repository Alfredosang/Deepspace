"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <div className='container'>
            <nav className="flex justify-between items-center px-7 md:px-32 fixed z-[9999] h-[80px] md:h-[100px] bg-white w-full mx-auto">
                <Link href="/">
                    <Image src="/assets/deepspaceLogo.png" width={180} height={70} alt="Logo" />
                </Link>

                <ul className="hidden md:flex text-gray-500 text-sm list-none space-x-3 font-body">
                    <li className="hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100">
                        <Link href="/about">About Us</Link>
                    </li>
                    <li className="hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100">
                        <Link href="/community">Community</Link>
                    </li>
                    <li className="hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100">
                        <Popover>
                            <PopoverButton className="flex items-center border-[0px] outline-none">
                                Programs <IoIosArrowDown size={18} />
                            </PopoverButton>
                            <PopoverPanel className="absolute mt-3 bg-white shadow-lg rounded-xl p-4 h-[750px] w-[90vw] md:w-[400px] z-[10000]">
                                <div className='flex flex-col gap-5 space-y-[100px]'>
                                    {/* Program Links */}
                                    <div className="p-3">
                                        <Link href="/">
                                            <div className='flex flex-col w-[350px] md:w-[360px] h-[130px] rounded-[20px] px-[20px] py-[24px] border-[1px] group-hover:border-gray-200 group group-hover:h-[397px] duration-500 absolute hover:bg-red-50'>
                                                <div className='w-[310px] h-[30px] bg-black rounded-[4px] group-hover:h-[65px] overflow-hidden duration-500'>
                                                    <Image src="/assets/m1.png" width={310} height={152} style={{ objectFit: "contain" }} alt="Course picture" className='rounded-[4px]' />
                                                </div>
                                                <div className='pt-2'>
                                                    <p className='font-body font-[500] text-[16px] ml-2 group-hover:text-red-500'>Home</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>


                                    <div className="p-3">
                                        <Link href="/deephackerspace">
                                            <div className='flex flex-col w-[350px] md:w-[360px] h-[130px] rounded-[20px] px-[20px] py-[24px] border-[1px] group-hover:border-gray-200 group group-hover:h-[397px] duration-500 absolute z-100 hover:bg-red-50'>
                                                <div className='w-[310px] h-[30px] bg-black rounded-[4px] group-hover:h-[65px] overflow-hidden duration-500'>
                                                    <Image src="/assets/m2.png" width={310} height={152} style={{ objectFit: "contain" }} alt="Course picture" className='rounded-[4px]' />
                                                </div>
                                                <div className='pt-2'>
                                                    <p className='font-body font-[500] text-[16px] ml-2 group-hover:text-red-500'>Deep Hacker Space</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="p-3">
                                        <Link href="/deephackerspaceincubator">
                                            <div className='flex flex-col w-[350px] md:w-[360px] h-[130px] rounded-[20px] px-[20px] py-[24px] border-[1px] group-hover:border-gray-200 group group-hover:h-[397px] duration-500 absolute z-100 hover:bg-red-50'>
                                                <div className='w-[310px] h-[30px] bg-black rounded-[4px] group-hover:h-[65px] overflow-hidden duration-500'>
                                                    <Image src="/assets/m3.png" width={310} height={152} style={{ objectFit: "contain" }} alt="Course picture" className='rounded-[4px]' />
                                                </div>
                                                <div className='pt-2'>
                                                    <p className='font-body font-[500] text-[16px] ml-2 group-hover:text-red-500'>Deepspace Incubator</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="p-3">
                                        <Link href="/deepmarketspace">
                                            <div className='flex flex-col w-[350px] md:w-[360px] h-[130px] rounded-[20px] px-[20px] py-[24px] border-[1px] group-hover:border-gray-200 group group-hover:h-[397px] duration-500 absolute z-100 hover:bg-red-50'>
                                                <div className='w-[310px] h-[30px] bg-black rounded-[4px] group-hover:h-[65px] overflow-hidden duration-500'>
                                                    <Image src="/assets/m5.png" width={310} height={152} style={{ objectFit: "contain" }} alt="Course picture" className='rounded-[4px]' />
                                                </div>
                                                <div className='pt-2'>
                                                    <p className='font-body font-[500] text-[16px] ml-2 group-hover:text-red-500'>Deep Makerspace</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="p-3">
                                        <Link href="/deepspacelearning">
                                            <div className='flex flex-col w-[350px] md:w-[360px] h-[130px] rounded-[20px] px-[20px] py-[24px] border-[1px] group-hover:border-gray-200 group group-hover:h-[397px] duration-500 absolute z-100 hover:bg-red-50'>
                                                <div className='w-[310px] h-[30px] bg-black rounded-[4px] group-hover:h-[65px] overflow-hidden duration-500'>
                                                    <Image src="/assets/m4.png" width={310} height={152} style={{ objectFit: "contain" }} alt="Course picture" className='rounded-[4px]' />
                                                </div>
                                                <div className='pt-2'>
                                                    <p className='font-body font-[500] text-[16px] ml-2 group-hover:text-red-500'>Deepspace Learning</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                            </PopoverPanel>
                        </Popover>
                    </li>
                    <li className="hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100">
                        <Link href="/shop">Shop</Link>
                    </li>
                    <li className="hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100">
                        <Link href="/contactus">Contact Us</Link>
                    </li>
                </ul>

                <ul className="flex text-gray-500 text-sm list-none space-x-3 font-body">
                    <li className="hover:text-secondary-100 cursor-pointer">
                        <HiOutlineShoppingCart size={18} className='hidden md:inline' />
                        <span className="hidden md:inline">Cart</span>
                    </li>
                    <li className="hover:text-secondary-100 cursor-pointer hidden md:flex items-center">
                        <IoIosSearch size={18} />
                        <span>Search</span>
                    </li>
                    <li className="md:hidden cursor-pointer" onClick={toggleNav}>
                        {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </li>
                </ul>

                {/* Mobile Menu */}
                <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-transform transform ${navOpen ? 'translate-x-0' : 'translate-x-full'} z-[9998]`}>
                    <div className="bg-white w-64 h-full shadow-lg flex flex-col p-5">
                        <div className="flex justify-between items-center">
                            <Link href="/" onClick={toggleNav}>
                                <Image src="/assets/deepspaceLogo.png" width={150} height={60} alt="Logo" />
                            </Link>
                            <FaTimes size={24} className="cursor-pointer" onClick={toggleNav} />
                        </div>
                        <ul className="flex flex-col mt-10 space-y-4 text-gray-500 text-lg font-body">
                            <li>
                                <Link href="/about" onClick={toggleNav}>About Us</Link>
                            </li>
                            <li>
                                <Link href="/community" onClick={toggleNav}>Community</Link>
                            </li>
                            <li>
                                <Popover>
                                    <PopoverButton className="flex justify-between items-center outline-none w-full">
                                        Programs <IoIosArrowDown size={18} />
                                    </PopoverButton>
                                    <PopoverPanel className="mt-2 flex flex-col space-y-3">
                                        <Link href="/" onClick={toggleNav} className="ml-5 text-sm">
                                            Home
                                        </Link>
                                        <Link href="/deephackerspace" onClick={toggleNav} className="ml-5 text-sm">
                                            Deep Hacker Space
                                        </Link>
                                        <Link href="/deephackerspaceincubator" onClick={toggleNav} className="ml-5 text-sm">
                                            Deepspace Incubator
                                        </Link>
                                        <Link href="/deepmarketspace" onClick={toggleNav} className="ml-5 text-sm">
                                            Deep Makerspace
                                        </Link>
                                        <Link href="/deepspacelearning" onClick={toggleNav} className="ml-5 text-sm">
                                            Deepspace Learning
                                        </Link>
                                    </PopoverPanel>
                                </Popover>
                            </li>
                            <li>
                                <Link href="/shop" onClick={toggleNav}>Shop</Link>
                            </li>
                            <li>
                                <Link href="/contactus" onClick={toggleNav}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    );
}

export default Navbar;
