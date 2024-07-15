import React from 'react'
import '../components/Navbar.css'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
// import { PiShoppingCart } from "react-icons/pi";

const Navbar = () => {
    return (
        <div>
            <nav className='flex  justify-between  px-7 md:px-32 items-center fixed z-10  h-[100px] bg-white w-full  mx-auto'>
                {/* <p className='font-bold font-body text-lg'>Deepspace</p> */}
                <Image src="/assets/deepspaceLogo.png" width={190} height={80} alt="Logo" />

                <ui className='hidden md:flex text-gray-500 text-sm list-none space-x-3 font-body'>
                    <li className='hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100'>About Us</li>
                    <li className='hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100'>Community</li>
                    <li className='flex justify-items-bottom hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100'><p>Programs</p> <IoIosArrowDown size={18} /></li>
                    <li className='hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100'>Shop</li>
                    <li className='hover:scale-105 duration-300 cursor-pointer hover:text-secondary-100'>Contact Us</li>


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