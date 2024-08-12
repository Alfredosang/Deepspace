// components/ImageSlider.js

import Slider from "react-slick";
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const images = [
    {
      src: "/assets/herohero.png",
      alt: "Slide 1",
      text: "Innovation is about taking risks and embracing failure as a stepping stone to success. It requires curiosity, creativity, and a willingness to experiment. Innovation is not limited to technology or science; it can also be seen in art, design, business, and social change.",
    },

    {
        src: "/assets/herohero.png",
        alt: "Slide 1",
        text: "Innovation is about taking risks and embracing failure as a stepping stone to success. It requires curiosity, creativity, and a willingness to experiment. Innovation is not limited to technology or science; it can also be seen in art, design, business, and social change.",
      },

      {
        src: "/assets/herohero.png",
        alt: "Slide 1",
        text: "Innovation is about taking risks and embracing failure as a stepping stone to success. It requires curiosity, creativity, and a willingness to experiment. Innovation is not limited to technology or science; it can also be seen in art, design, business, and social change.",
      }

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="relative w-full h-[483px] ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[483px]">
            <div className="relative w-full h-full rounded-r-[32px] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="object-cover  rounded-[32px] overflow-hidden"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent  rounded-r-[32px] overflow-hidden"></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-r-[32px] overflow-hidden">
              <h2 className="absolute text-white bottom-[10%] left-[150px] z-50  max-w-[600px] font-body font-[400] text-[14px]">
                {image.text}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
