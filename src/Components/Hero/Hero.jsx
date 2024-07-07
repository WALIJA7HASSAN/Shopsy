import React from 'react'
import img1 from '../../assets/hero/women.png'
import img2 from '../../assets/hero/sale.png'
import img3 from '../../assets/hero/shopping.png'
import Slider from "react-slick"
// adding dependencies in package json
// npm i react-slick and  npm i slick-carousel and then import in main jsx

const ImageList = [
  {
    id: 1,
    img:img1,
    title: "Upto 50% off on all Men's Wear",
    description:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam blanditiis itaque. Totam harum laborum libero iste. Sit, porro vitae.',
  },
  {
    id: 2,
    img:img2,
    title: "Upto 70% off on all Products Sale",
    description:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam blanditiis itaque. Totam harum laborum libero iste. Sit, porro vitae.',
  },
  {
    id: 3,
    img:img3,
    title: "Upto 70% off on all Women's Wear",
    description:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam blanditiis itaque. Totam harum laborum libero iste. Sit, porro vitae.',
  },
]

const Hero = ({handleOrderPopup}) => {
    const settings={
        dots:false,
        arrows:false,
        infinite:true,
        speed:800,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,
    }
  return (
    <div className=" relative overflow-hidden min-h-[550px] sm:h-svh bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* bg pattern */}
      <div className=" h-[700px] w-[700px] bg-moonstone/30   dark:bg-yinminblue absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 "></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0 ">
        <Slider {...settings}>
          {ImageList.map((item) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text xontent sextion */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-once="true"
                    data-aos-duration="500"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {item.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="500"
                    className="text-sm"
                  >
                    {item.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="500"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-2 px-4 rounded-full hover:scale-105"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* img sextion */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto lg:scale-125"
                      src={item.img}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero