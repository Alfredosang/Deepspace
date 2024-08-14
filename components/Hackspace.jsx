import React from 'react'
import { FaArrowRight } from "react-icons/fa6"
import Image from 'next/image'
import { RiHourglass2Fill } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";

const Hackspace = () => {
    return (
        <div className='bg-primary h-[700px] md:h-[681px]'>
            <div className='container mx-auto align-middle'>
                <div className='flex flex-wrap-reverse pt-[100px] justify-center items-center'>


                    <div className='space-y-3 md:space-y-0'>
                        <p className='text-white font-body text-[16px] font-[500]'>Deep Hackerspace</p>
                        <h2 className='text-white font-body text-[24px] md:text-[60px] font-[700]'>Deep Hackerspace</h2>
                        <p className='text-white font-body text-[12px] md:text-[16px] font-[400] w-[335px] md:w-[587px]'>Deep MakerSpace is set to be the face of a new wave of innovation and
                            technology by creating a community where programmers, electronics, tinkerers,
                            and tech enthusiasts can meet to pursue their curiosity and build products.</p>

                        <button className='border-[0.5px] border-red-400 w-[155px] h-[56px] rounded-full flex justify-center items-center py-4  space-x-2 mt-3'><p className='text-white font-body font-[700] text-[16px] '>Sign In</p>
                            <FaArrowRight className='text-white text-[24px] pt-1' />
                        </button>

                    </div>


                    <div className=' relative flex gap-2 justify-center items-center mb-5' >
                        <div>
                            <div className='bg-black w-[218px] h-[170px] md:w-[350px] md:h-[271px] rounded-[16px] overflow-hidden border-solid border-secondary-100 border-[2px]'>
                                <div className='relative w-full h-full'>

                                    <Image src="/assets/IM1.jpeg" layout="fill" objectFit="cover" className="object-cover" alt="IM1" />
                                </div>
                            </div>
                            <div className='flex gap-2 pt-3'>
                                <div className='w-[107px] h-[25px] md:w-[170.2px] md:h-[40px] rounded-full border-solid border-white border-[2px] flex gap-2 items-center justify-center'>
                                    <div className=' w-[15px] h-[15px] md:w-[24px] md:h-[24px] bg-secondary-100 rounded-full flex items-center justify-center'>
                                        <RiHourglass2Fill className='text-white text-[10px] md:text-[15px]' />
                                    </div>
                                    <p className='text-white font-body text-[7px] md:text-[12px] font-[600]'>Deepspace Incubator</p>
                                </div>
                                <div className='bg-black w-[108px] h-[73px] md:w-[172px] md:h-[117px] rounded-[16px] overflow-hidden'>
                                    <div className='relative w-full h-full'>

                                        <Image src="/assets/IM2.jpeg" layout="fill" objectFit="cover" className="object-cover filter grayscale" alt="IM2" />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='flex flex-col gap-2 md:gap-4'>
                            <div className='bg-black w-[108px] h-[87px] md:w-[172px] md:h-[139px] rounded-[16px] overflow-hidden'>
                                <div className='relative w-full h-full'>

                                    <Image src="/assets/IM3.jpeg" layout="fill" objectFit="cover" className="object-cover filter grayscale" alt="IM3" />
                                </div>
                            </div>

                            <div className='w-[107px] h-[25px] md:w-[170.2px] md:h-[40px] rounded-full border-solid border-white border-[2px] flex gap-2 items-center justify-center'>
                                <div className=' w-[15px] h-[15px] md:w-[24px] md:h-[24px] bg-secondary-100 rounded-full flex items-center justify-center'>
                                    <LuSettings2 className='text-white text-[10px] md:text-[15px]' />
                                </div>
                                <p className='text-white font-body text-[7px] md:text-[12px] font-[600]'>Deep Space Learning</p>
                            </div>

                            <div className='bg-black w-[108px] h-[87px] md:w-[172px] md:h-[139px] rounded-[16px] overflow-hidden'>
                                <div className='relative w-full h-full'>

                                    <Image src="/assets/IM4.jpeg" layout="fill" objectFit="cover" className="object-cover filter grayscale" alt="IM4" />
                                </div>
                            </div>

                            <div className='w-[107px] h-[25px] md:w-[170.2px] md:h-[40px] rounded-full border-solid border-white border-[2px] flex gap-2 items-center justify-center'>
                                <div className=' w-[15px] h-[15px] md:w-[24px] md:h-[24px] bg-secondary-100 rounded-full flex items-center justify-center'>
                                    <LuSettings2 className='text-white text-[10px] md:text-[15px]' />
                                </div>
                                <p className='text-white font-body text-[7px] md:text-[12px] font-[600]'>Deep Makerspace</p>
                            </div>
                        </div>

                        <div className=' absolute top-[-10px] right-[120px] w-[107px] h-[25px] md:w-[170.2px] md:h-[40px] rounded-full border-solid bg-white border-secondary-100 border-[1px] flex gap-2 items-center justify-center'>
                            <div className='w-[15px] h-[15px] md:w-[24px] md:h-[24px] bg-secondary-100 rounded-full flex items-center justify-center'>
                                <LuSettings2 className='text-white text-[10px] md:text-[15px]' />
                            </div>
                            <p className='text-black font-body text-[7px] md:text-[12px] font-[600]'>Deep Makerspace</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Hackspace