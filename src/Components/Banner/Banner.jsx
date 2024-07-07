import React from 'react'
import BannerImg from '../../assets/women/women2.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <div className="flex items-center justify-center py-12 sm:py-0 max-h-[550px] my-24">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* first img section */}
        <div className=" flex place-items-center">
          <img
            data-aos="zoom-in"
            src={BannerImg}
            alt=""
            className=" w-full h-full min-h-[300px] object-cover max-w-[350px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] max-h-[320px]"
          />
        </div>
        {/* content section */}
        <div className="flex flex-col gap-4">
          <h2 data-aos="fade-up" className="text-4xl font-bold">
            Winter Sale upto 50% Off
          </h2>
          <p data-aos="fade-up" className="text-sm text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            reiciendis inventore iste ratione ex alias quis magni at optio
          </p>

          <div className="flex flex-col gap-4">
            {/*  */}
            <div data-aos="fade-up" className=" flex items-center gap-4">
              <GrSecure className="bg-violet-100 dark:bg-violet-400 text-4xl h-12 w-12 shadow-sm p-4 rounded-full" />
              <p className="">Quality Products</p>
            </div>
            {/*  */}
            <div data-aos="fade-up" className="flex items-center gap-4">
              <IoFastFood className="bg-orange-100 dark:bg-orange-400 text-4xl h-12 w-12 shadow-sm p-4 rounded-full" />
              <p className="">Fast Delivery</p>
            </div>
            {/*  */}
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GiFoodTruck className="bg-green-100 dark:bg-green-400 text-4xl h-12 w-12 shadow-sm p-4 rounded-full" />
              <p className="">Easy Payment method</p>
            </div>
            {/*  */}
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GiFoodTruck className="bg-yellow-100 dark:bg-yellow-400 text-4xl h-12 w-12 shadow-sm p-4 rounded-full" />
              <p className="">Get Offers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner