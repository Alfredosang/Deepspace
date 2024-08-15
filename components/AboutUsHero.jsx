"use client";
// import Slider from "react-slick";
import React from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { BsPinAngleFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

const Aboutushero = () => {
    return (
        <div className=''>
            <div className='container mx-auto pt-[100px] md:pt-[150px] lg:pt-[200px] px-4 md:px-8 lg:px-0'>

                <div className='flex justify-center'>
                    <div className='w-full max-w-[1280px]'>
                        <div className='relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[30px] md:rounded-[50px] lg:rounded-[100px] overflow-hidden'>
                            <Image src="/assets/abHero.jpeg" layout={'fill'} objectFit="cover" alt="About Us Hero Image" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                            <div className='absolute bottom-[5%] left-[20px] md:left-[50px] lg:left-[150px] z-50'>
                                <p className='font-[600] text-[30px] md:text-[50px] lg:text-[80px] font-body text-white leading-[40px] md:leading-[60px] lg:leading-[80px]'>
                                    About Deep Space Africa
                                </p>
                                <p className='text-white max-w-[300px] md:max-w-[500px] lg:max-w-[600px] font-body font-[400] text-[12px] md:text-[14px] lg:text-[16px]'>
                                    We believe in the power of community and the importance of fostering connections among learners, educators, and industry professionals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center pt-[50px] md:pt-[80px] lg:pt-[100px] space-y-7 space-x-0 md:space-x-7'>
                    <div className='bg-white w-full max-w-[282px] h-auto p-5 rounded-[20px] shadow-lg flex justify-center'>
                        <p className='text-[24px] md:text-[36px] lg:text-[46px] text-secondary-100 font-[600] leading-[30px] md:leading-[40px] lg:leading-[50px] text-center'>
                            Our Mission & Vision
                        </p>
                    </div>
                    <div className='w-full max-w-[459px]'>
                        <p className='font-body font-[400] text-gray-500'>
                            <b>Our Mission:</b> At DeepSpace we serve as the Ground Zero for a new era of advanced manufacturing in Nigeria by facilitating the emergence of a tight-knit ecosystem that brings people, technology, cutting-edge IP, startups, funding, and advanced learning curricula together to bridge the manufacturing demand and supply gap in Nigeria and Africa.
                        </p>
                    </div>
                    <div className='w-full max-w-[459px]'>
                        <p className='font-body font-[400] text-gray-500'>
                            <b>And Our Vision:</b> Pioneering Nigeria's new era of tech-driven industrialization and advanced manufacturing.
                        </p>
                    </div>
                </div>

                <div className='mt-[50px] md:mt-[70px] lg:mt-[100px] flex flex-col'>
                    <h2 className='text-center font-body font-[600] text-[30px] md:text-[35px] lg:text-[40px] mb-8 md:mb-10 lg:mb-12'>
                        Who We Are
                    </h2>
                    <div className='flex flex-wrap justify-center gap-5 lg:gap-7'>
                        <div className='w-full max-w-[630px] h-auto border-[0.5px] border-red-400 rounded-[20px] p-5 md:p-7'>
                            <div className='flex mb-5'>
                                <div className='w-[40px] h-[40px] border-[0.5px] border-secondary-100 bg-red-50 rounded-md flex justify-center items-center'>
                                    <BsPinAngleFill className='text-secondary-100 text-[23px]' />
                                </div>
                                <p className='text-[16px] md:text-[18px] lg:text-[20px] font-body font-[700] ml-3'>
                                    We Are Makers
                                </p>
                            </div>
                            <p className='text-gray-500 font-body text-[14px] md:text-[16px]'>
                                We are builders and hobbyists; tinkerers and creators. We defend our rights to dream up and rapidly prototype new blueprints and products, textures, and colours. Our craft seamlessly blends together science, arts, and technology to make new things for the world and to allow people to interact with the world in newer and better ways.
                            </p>
                        </div>

                        <div className='w-full max-w-[630px] h-auto border-[0.5px] border-red-400 rounded-[20px] p-5 md:p-7'>
                            <div className='flex mb-5'>
                                <div className='w-[40px] h-[40px] border-[0.5px] border-secondary-100 bg-red-50 rounded-md flex justify-center items-center'>
                                    <BsPinAngleFill className='text-secondary-100 text-[23px]' />
                                </div>
                                <p className='text-[16px] md:text-[18px] lg:text-[20px] font-body font-[700] ml-3'>
                                    We Are Programmers & Engineers
                                </p>
                            </div>
                            <p className='text-gray-500 font-body text-[14px] md:text-[16px]'>
                                Who write code and algorithms spurred by our intense desire to create change. We recognize that the things that were once described as impossible have now become the mainstay of contemporary society because some hackers dared to write code that re-wired the world. It’s our day and our time, and we will write-code Africa into its rightful place in the world in no distant time.
                            </p>
                        </div>

                        <div className='w-full max-w-[630px] h-auto border-[0.5px] border-red-400 rounded-[20px] p-5 md:p-7'>
                            <div className='flex mb-5'>
                                <div className='w-[40px] h-[40px] border-[0.5px] border-secondary-100 bg-red-50 rounded-md flex justify-center items-center'>
                                    <BsPinAngleFill className='text-secondary-100 text-[23px]' />
                                </div>
                                <p className='text-[16px] md:text-[18px] lg:text-[20px] font-body font-[700] ml-3'>
                                    We Are Enablers
                                </p>
                            </div>
                            <p className='text-gray-500 font-body text-[14px] md:text-[16px]'>
                                Atlas said, "Give me a lever long enough and I will move the world." The DeepSpace ecosystem is easily defined as the Ecosystem of Enablers. We enable dreams; we enable creative work. We enable learning; we enable distribution. We enable building; we enable ethical capitalism. It is a no-brainer; our mission has clearly stated that anything that needs to be done for a new era of advanced manufacturing to commence in Nigeria is what we have taken upon ourselves to do!
                            </p>
                        </div>

                        <div className='w-full max-w-[630px] h-auto border-[0.5px] border-red-400 rounded-[20px] p-5 md:p-7'>
                            <div className='flex mb-5'>
                                <div className='w-[40px] h-[40px] border-[0.5px] border-secondary-100 bg-red-50 rounded-md flex justify-center items-center'>
                                    <BsPinAngleFill className='text-secondary-100 text-[23px]' />
                                </div>
                                <p className='text-[16px] md:text-[18px] lg:text-[20px] font-body font-[700] ml-3'>
                                    We Are Nurturers
                                </p>
                            </div>
                            <p className='text-gray-500 font-body text-[14px] md:text-[16px]'>
                                Knowing that an idea needs as much nurturing and nourishment as a child, DeepSpace Incubator exists to do just that. We have studied the concept of nourishing an idea to maturity by providing all the resources to ensure it becomes and remains a relevant entity in society. And just as Fairchild Semiconductors and 3M incubated some of the most life-changing innovations of the 20th century, DeepSpace’s incubator will nurture impact-driven startups to change the world, one geographical region at a time.
                            </p>
                        </div>
                    </div>

                    <div className='flex justify-center mt-12 md:mt-16 lg:mt-20'>
                        <div className='flex flex-col items-center w-full max-w-[1280px]'>
                            <h2 className='text-center font-body font-[600] text-[30px] md:text-[35px] lg:text-[40px] mb-8 md:mb-10 lg:mb-12'>
                                Why Choose Us?
                            </h2>

                            <div className='bg-primary w-full h-auto p-8 md:p-10 rounded-[20px] md:rounded-[25px] lg:rounded-[32px]'>
                                <h2 className='text-start text-white font-body font-[600] text-[28px] md:text-[36px] lg:text-[44px] max-w-[782px] leading-[36px] md:leading-[44px] lg:leading-[52px]'>
                                    We remove barriers and make learning available to everyone.
                                </h2>
                                <div className='flex flex-wrap gap-5 mt-4'>
                                    <p className='text-start text-white w-full max-w-[540px] font-body font-[400] text-[14px] md:text-[16px]'>
                                        With a team of dedicated educators, technologists, and industry experts, we aim to transform the way people learn, one course at a time.
                                    </p>

                                    <button className='bg-secondary-100 w-[150px] md:w-[169px] h-[40px] md:h-[44px] rounded-[25px] md:rounded-[35px] flex justify-between items-center px-3'>
                                        <p className='text-white font-body font-[700] text-[14px] md:text-[16px]'>
                                            Join Us Today
                                        </p>
                                        <FaArrowRight className='text-white text-[20px] md:text-[24px]' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex justify-center mb-16">
    <div className="my-10">
        <div className="mb-[70px]">
            <h1 className="text-black font-body text-[30px] md:text-[40px] font-[700] text-start">Meet Our Reliable Team</h1>
        </div>

        <div className="flex flex-wrap gap-5 justify-center md:justify-start">
            <div className="w-[250px] md:w-[308px]">
                <div className="overflow-hidden rounded-lg">
                    <Image src="/assets/RemiO.png" width={308} height={344} alt="Project image" style={{ objectFit: "cover" }} />
                </div>
                <div className="mt-4">
                    <p className="text-black font-body text-[20px] md:text-[24px] font-[600] text-start">Remi Odunsi</p>
                    <p className="text-black font-body text-[12px] md:text-[14px] font-[400] text-start">CEO</p>
                </div>
            </div>

            <div className="w-[250px] md:w-[308px]">
                <div className="overflow-hidden rounded-lg">
                    <Image src="/assets/Ken.png" width={308} height={344} alt="Project image" style={{ objectFit: "cover" }} />
                </div>
                <div className="mt-4">
                    <p className="text-black font-body text-[20px] md:text-[24px] font-[600] text-start">Kenneth Nwakanma</p>
                    <p className="text-black font-body text-[12px] md:text-[14px] font-[400] text-start">Chief Of Strategy & Growth</p>
                </div>
            </div>

            <div className="w-[250px] md:w-[308px]">
                <div className="overflow-hidden rounded-lg">
                    <Image src="/assets/Dupe.png" width={308} height={344} alt="Project image" style={{ objectFit: "cover" }} />
                </div>
                <div className="mt-4">
                    <p className="text-black font-body text-[20px] md:text-[24px] font-[600] text-start">Dupe Senami Olaoye</p>
                    <p className="text-black font-body text-[12px] md:text-[14px] font-[400] text-start">Head Of Business</p>
                </div>
            </div>

            <div className="w-[250px] md:w-[308px]">
                <div className="overflow-hidden rounded-lg">
                    <Image src="/assets/Peter.png" width={308} height={344} alt="Project image" style={{ objectFit: "cover" }} />
                </div>
                <div className="mt-4">
                    <p className="text-black font-body text-[20px] md:text-[24px] font-[600] text-start">Olatunde Peter Abe</p>
                    <p className="text-black font-body text-[12px] md:text-[14px] font-[400] text-start">Head Of Engineering</p>
                </div>
            </div>
        </div>
    </div>
</div>



            </div>
        </div>
    );
}

export default Aboutushero;
