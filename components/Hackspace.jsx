import React from 'react'
import { FaArrowRight } from "react-icons/fa6"

const Hackspace = () => {
    return (
        <div className='bg-primary h-[681px]'>
            <div className='container mx-auto align-middle'>
                <div className='flex pt-[100px] justify-center align-middle'>


                    <div>
                        <p className='text-white font-body text-[16px] font-[500]'>Deep Hackerspace</p>
                        <h2 className='text-white font-body text-[60px] font-[700]'>Deep Hackerspace</h2>
                        <p className='text-white font-body text-[16px] font-[400] max-w-[587px]'>Deep MakerSpace is set to be the face of a new wave of innovation and
                            technology by creating a community where programmers, electronics, tinkerers,
                            and tech enthusiasts can meet to pursue their curiosity and build products.</p>

                        <button className='border-[0.5px] border-red-400 w-[155px] h-[56px] rounded-full flex justify-center align-middle py-4  space-x-2 '><p className='text-white font-body font-[700] text-[16px] '>Sign In</p>
                            <FaArrowRight className='text-white text-[24px] pt-1' />
                        </button>

                    </div>


                    <div className=''>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Hackspace