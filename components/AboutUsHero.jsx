"use client"
// import Slider from "react-slick";
import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { BsPinAngleFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6"

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
                        <div className='w-[630px] h-[300px] border-[0.5px] border-red-400 rounded-[20px] p-7'>
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

                        <div className='w-[630px] h-[300px] border-[0.5px] border-red-400 rounded-[20px] p-7'>
                            <div className='flex mb-5'>
                                <div className='w-[40px] h-[40px] border-[0.5px] border-secondary-100 bg-red-50 rounded-md flex justify-center align-middle pt-2'>
                                    <BsPinAngleFill className='text-secondary-100 text-[23px]' />
                                </div>
                                <p className='text-[20px] font-body font-[700] ml-3'>We Are Programmers & Engineers</p>
                            </div>
                            <p className='max-w-[582px] text-gray-500 font-body'>
                                who write code and algorithms spurred by our intense desire to create change. We recognize that the things that were once described as impossible have now become the mainstay of contemporary society because some hackers dared to write code that re-wired the world. It’s our day and our time and we will write-code Africa into its rightful place in the world in no distant time.
                            </p>
                        </div>

                        <div className='w-[630px] h-[300px] border-[0.5px] border-red-400 rounded-[20px] p-7'>
                            <div className='flex mb-5'>
                                <div className='w-[40px] h-[40px] border-[0.5px] border-secondary-100 bg-red-50 rounded-md flex justify-center align-middle pt-2'>
                                    <BsPinAngleFill className='text-secondary-100 text-[23px]' />
                                </div>
                                <p className='text-[20px] font-body font-[700] ml-3'>We Are Enablers</p>
                            </div>
                            <p className='max-w-[582px] text-gray-500 font-body'>
                                Atlas said, give me a lever long enough and I will move the world. The DeepSpace ecosystem is easily defined as the Ecosystem of Enablers. We enable dreams; we enable creative work. We enable learning; we enable distribution. We enable building; we enable ethical capitalism. It is a no-brainer; our mission has clearly stated that anything that needs to be done for a new era of advanced manufacturing to commence in Nigeria is what we have taken upon ourselves to do!
                            </p>
                        </div>

                        <div className='w-[630px] h-[300px] border-[0.5px] border-red-400 rounded-[20px] p-7'>
                            <div className='flex mb-5'>
                                <div className='w-[40px] h-[40px] border-[0.5px] border-secondary-100 bg-red-50 rounded-md flex justify-center align-middle pt-2'>
                                    <BsPinAngleFill className='text-secondary-100 text-[23px]' />
                                </div>
                                <p className='text-[20px] font-body font-[700] ml-3'>We Are Nurturers</p>
                            </div>
                            <p className='max-w-[582px] text-gray-500 font-body'>
                                Knowing that an idea needs as much nurturing and nourishment as a child, DeepSpace Incubator exists to do just that. We have studied the concept of nourishing an idea to maturity by providing all the resources to ensure it becomes and remains a relevant entity in society. And just as Fairchild Semiconductors and 3M incubated some of the most life-changing innovations of the 20th century, DeepSpace’s incubator will nurture impact-driven startups to change the world, one geographical region at a time.
                            </p>
                        </div>
                    </div>

                    <div className='flex justify-center'>

                        <div className='flex flex-col '>
                            <div>
                                <h2 className='text-center font-body font-[600] text-[40px] my-12'>Why Choose Us?</h2>
                            </div>

                            <div className='bg-primary w-[1280px] h-[489px] rounded-[32px] p-10'>

                                <h2 className='text-start text-white font-body font-[600] text-[44px] max-w-[782px] leading-[52px]'>We remove barriers and make learning available to everyone.</h2>
                                <div className='flex flex-wrap gap-5 mt-4'>
                                    <p className='text-start text-white w-[540px] font-body font-[400] text-[16px] '>With a team of dedicated educators, technologists, and industry experts, we aim to transform the way people learn, one course at a time.</p>

                                    <button className='bg-secondary-100 w-[169px] h-[44px] rounded-[35px] flex justify-between px-3 pt-2'>
                                        <p className='text-white font-body font-[700]'>Join Us Today</p>
                                        <FaArrowRight className='text-white text-[24px] pt-1' />
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="flex justify-center mb-16">
                        <div className="my-10">
                            <div className="mb-[70px]">
                                <h1 className="text-black font-body text-[40px] font-[700] text-start">Meet Our Realiable Team</h1>
                            </div>

                            <div className='flex flex-wrap gap-5'>


                                <div>
                                    <div className=" overflow-hidden ">
                                        <Image src="/assets/RemiO.png" width={308} height={344} alt="Project image" style={{ objectFit: "cover" }} />
                                    </div>
                                    <div>
                                        <p className='text-black font-body text-[24px] font-[600] text-start'>Remi Odunsi</p>
                                        <p className='text-black font-body text-[14px] font-[400] text-start'>CEO</p>

                                    </div>
                                </div>

                                <div>
                                    <div className=" overflow-hidden ">
                                        <Image src="/assets/Ken.png" width={308} height={344} alt="Project image" style={{ objectFit: "cover" }} />
                                    </div>
                                    <div>
                                        <p className='text-black font-body text-[24px] font-[600] text-start'>Kenneth Nwakanma</p>
                                        <p className='text-black font-body text-[14px] font-[400] text-start'>Chief Of Strategy & Growth</p>

                                    </div>
                                </div>

                                <div>
                                    <div className=" overflow-hidden ">
                                        <Image src="/assets/Dupe.png" width={308} height={344} alt="Project image" style={{ objectFit: "cover" }} />
                                    </div>
                                    <div>
                                        <p className='text-black font-body text-[24px] font-[600] text-start'>Dupe Senami Olaoye</p>
                                        <p className='text-black font-body text-[14px] font-[400] text-start'>Head Of Business</p>

                                    </div>
                                </div>

                                <div>
                                    <div className=" overflow-hidden ">
                                        <Image src="/assets/Peter.png" width={308} height={344} alt="Project image" style={{ objectFit: "cover" }} />
                                    </div>
                                    <div>
                                        <p className='text-black font-body text-[24px] font-[600] text-start'>Olatunde Peter Abe</p>
                                        <p className='text-black font-body text-[14px] font-[400] text-start'>Head Of Engineering</p>

                                    </div>
                                </div>




                            </div>
                        </div>

                    </div>





                </div>



            </div>
        </div>
    )
}

export default Aboutushero