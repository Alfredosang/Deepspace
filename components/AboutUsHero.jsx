import React from 'react'
import Image from 'next/image';
import { BsPinAngleFill } from "react-icons/bs";

const Aboutushero = () => {
    return (
        <div className=''>
            <div className='container mx-auto pt-[200px]'>

                <div className='flex justify-center'>
                    <div className=''>
                        <div className='relative min-w-[400px] max-h-[700px]md:w-[900px] md:h-[500px]  lg:w-[1280px] lg:h-[400px] rounded-[100px]  '>
                            <Image src="/assets/abHero.jpeg" layout={'fill'} objectFit="cover" alt="About Us Hero Image" />



                            <div className='absolute bottom-[10%] left-[150px] z-50 max-w-[706px] '>
                                <p className='font-[600] text-[80px] font-body  text-white leading-[80px]'>About Deep Space Africa</p>
                                <p className=' text-white max-w-[600px] font-body font-[400] text-[16px] '> We believe in the power of community and the importance of fostering connections among learners, educators, and industry professionals.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex flex-wrap justify-center pt-[100px] space-y-7 space-x-7'>
                    <div className='bg-white w-[282px] h-[205px] rounded-[20px] shadow-lg flex justify-center py-5'>
                        <p className='text-[46px] text-secondary-100 font-[600] max-w-[242px] leading-[50px]'>Our Mission & Vision</p>
                    </div>
                    <div>
                        <p className='max-w-[459px] font-body font-[400] text-gray-500'> <b >Our Mission:</b> At DeepSpace we serve as the Ground Zero for a new era of advanced manufacturing in Nigeria by facilitating the emergence of a tight-knit ecosystem that brings people, technology, cutting-edge IP, startups, funding, and advanced learning curricula together to bridge the manufacturing demand and supply gap in Nigeria and Africa.</p>
                    </div>
                    <div>
                        <p className='max-w-[459px] font-body font-[400] text-gray-500'>
                            <b>And Our Vision:</b> Pioneering Nigeria's new era of tech-driven industrialization and advanced manufacturing.
                        </p>
                    </div>
                </div>


                <div className='mt-[100px] flex flex-col '>
                    <h2 className='text-center font-body font-[600] text-[40px] mb-12'>Who We Are</h2>
                    <div className='flex flex-wrap justify-center gap-7'>
                        <div className='w-[630px] h-[254px] border-[0.5px] border-red-400 rounded-[20px] p-12'>
                            <div className='flex mb-5'>
                                <div className='w-[40px] h-[40px] border-[0.5px] border-secondary-100 bg-red-50 rounded-md flex justify-center align-middle pt-2'>
                                    <BsPinAngleFill className='text-secondary-100 text-[23px]' />
                                </div>
                                <p className='text-[20px] font-body font-[700] ml-3'>We Are Makers</p>
                            </div>
                            <p className='max-w-[582px] text-gray-500 font-body'>
                            We are builders and hobbyists; tinkerers and creators. We defend our rights to dream up and rapidly prototype new blueprints and products, textures and colours. Our craft seamlessly blends together science, arts, and technology to make new things for the world and to allow people to interact with the world in newer and better ways.
                            </p>
                        </div>

                        <div className='w-[630px] h-[254px] border-[0.5px] border-red-400 rounded-[20px] p-12'>
                            <div className='flex mb-5'>
                                <div className='w-[40px] h-[40px] border-[0.5px] border-secondary-100 bg-red-50 rounded-md flex justify-center align-middle pt-2'>
                                    <BsPinAngleFill className='text-secondary-100 text-[23px]' />
                                </div>
                                <p className='text-[20px] font-body font-[700] ml-3'>We Are Makers</p>
                            </div>
                            <p className='max-w-[582px] text-gray-500 font-body'>
                            We are builders and hobbyists; tinkerers and creators. We defend our rights to dream up and rapidly prototype new blueprints and products, textures and colours. Our craft seamlessly blends together science, arts, and technology to make new things for the world and to allow people to interact with the world in newer and better ways.
                            </p>
                        </div>

                        <div className='w-[630px] h-[254px] border-[0.5px] border-red-400 rounded-[20px] p-12'>
                            <div className='flex mb-5'>
                                <div className='w-[40px] h-[40px] border-[0.5px] border-secondary-100 bg-red-50 rounded-md flex justify-center align-middle pt-2'>
                                    <BsPinAngleFill className='text-secondary-100 text-[23px]' />
                                </div>
                                <p className='text-[20px] font-body font-[700] ml-3'>We Are Makers</p>
                            </div>
                            <p className='max-w-[582px] text-gray-500 font-body'>
                            We are builders and hobbyists; tinkerers and creators. We defend our rights to dream up and rapidly prototype new blueprints and products, textures and colours. Our craft seamlessly blends together science, arts, and technology to make new things for the world and to allow people to interact with the world in newer and better ways.
                            </p>
                        </div>

                        <div className='w-[630px] h-[254px] border-[0.5px] border-red-400 rounded-[20px] p-12'>
                            <div className='flex mb-5'>
                                <div className='w-[40px] h-[40px] border-[0.5px] border-secondary-100 bg-red-50 rounded-md flex justify-center align-middle pt-2'>
                                    <BsPinAngleFill className='text-secondary-100 text-[23px]' />
                                </div>
                                <p className='text-[20px] font-body font-[700] ml-3'>We Are Makers</p>
                            </div>
                            <p className='max-w-[582px] text-gray-500 font-body'>
                            We are builders and hobbyists; tinkerers and creators. We defend our rights to dream up and rapidly prototype new blueprints and products, textures and colours. Our craft seamlessly blends together science, arts, and technology to make new things for the world and to allow people to interact with the world in newer and better ways.
                            </p>
                        </div>




                    </div>
                </div>



            </div>
        </div>
    )
}

export default Aboutushero