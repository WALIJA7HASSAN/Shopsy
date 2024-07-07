import React from 'react'
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],


  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
            corrupti fuga nulla.
          </p>
        </div>

        {/* body section */}
        <div className="p-2">
          {/* slider */}
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div
                className="px-4 flex place-items-center "
                data-aos="zoom-out"
              >
                <div
                  className="bg-moonstone/30   p-4 grid place-items-center gap-6 rounded-md shadow-lg  my-2 text-center max-w-[400px] mx-auto hover:scale-105 hover:cursor-pointer duration-200 hover:bg-moonstone/100 hover:text-white group dark:hover:bg-moonstone/40 "
                  key={data.id}
                >
                  {/* img */}
                  <div className="h-20 w-20 mx-auto  ">
                    <img
                      className="w-full h-full rounded-full bg-cover"
                      src={data.img}
                      alt=""
                    />
                  </div>
                  <p className="text-gray-800  text-sm dark:text-gray-400 group-hover:text-gray-300">
                    "{data.text}"
                  </p>
                  <h3 className="text-xl font-semibold ">{data.name}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/*  */}
      </div>
    </div>
  )

}

export default Testimonial