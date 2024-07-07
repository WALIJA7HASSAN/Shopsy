import React from 'react'
import Banner from '../../assets/website/orange-pattern.jpg'

// passing styles as obj
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
}
const Email = () => {
  return (
    <div data-aos="zoom-in" className="p-10 my-4 " style={BannerImg}>
      <div className="grid place-items-center gap-4 max-w-[700px] mx-auto backdrop-blur-sm">
        <h3
          data-aos="fade-up"
          className="text-2xl sm:text-4xl text-center font-semibold text-white"
        >
          Get Notified About New Products
        </h3>
        <input
          data-aos="fade-up"
          type="email"
          placeholder="Enter your email"
          className="w-full p-3"
        />
      </div>
    </div>
  )
}

export default Email