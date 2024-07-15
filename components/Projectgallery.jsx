"use client"
import Slider from "react-slick";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Projectgallery = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };

    return (
        <div className="container mx-auto">
            <div className="mb-16">
                <div className="my-10">
                    <div className="">
                    <p className="text-secondary-100 font-body text-[16px] font-[600] text-center">Projects Done</p>
                    <h1 className="text-black font-body text-[40px] font-[700] text-center">Projects Gallery</h1>
                    </div>
                </div>


                <Slider {...settings}>
                    <div className="rounded-[12px] overflow-hidden w-[298px] h-[370px]">
                        <Image src="/assets/pg3.png" width={298} height={570} alt="Project image" style={{ objectFit: "cover" }} />
                    </div>
                    <div className="rounded-[12px] overflow-hidden w-[298px] h-[370px]">
                        <Image src="/assets/pg2.png" width={298} height={370} alt="Project image" />
                    </div>
                    <div className="rounded-[12px] overflow-hidden w-[298px] h-[370px]">
                        <Image src="/assets/pg3.png" width={298} height={370} alt="Project image" />
                    </div>
                    <div className="rounded-[12px] overflow-hidden w-[298px] h-[370px]">
                        <Image src="/assets/pg2.png" width={298} height={370} alt="Project image" />
                    </div>
                    <div className="rounded-[12px] overflow-hidden w-[298px] h-[370px]">
                        <Image src="/assets/pg4.png" width={298} height={370} alt="Project image" />
                    </div>
                    


                </Slider>
            </div>

        </div>
    )
}

export default Projectgallery