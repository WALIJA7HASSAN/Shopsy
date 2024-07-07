import React from 'react'
import Footerimg from "../../assets/website/footer-pattern.jpg"
import Logo from "../../assets/logo.png"

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from 'react-icons/fa'
 
const FooterImg = {
  backgroundImage: `url(${Footerimg})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
}
const Footer = () => {
  return (
    <div style={FooterImg} className="grid place-items-center p-4">
      <div className="container text-white grid grid-cols-1 sm:grid-cols-3  sm:py-10 min-h-[500px] gap-4">
        {/* first */}
        <div className="p-4 pt-8 sm:p-0" data-aos="fade-up">
          {/* logo */}
          <div className=" flex gap-2 items-center">
            <img src={Logo} className="w-12" alt="" />
            <h3 className="text-2xl font-semibold">Shopsy</h3>
          </div>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
            beatae ea recusandae blanditiis veritatis.
          </p>
        </div>
        {/* second links */}
        <div
          className="p-4 grid grid-cols-2 mt-8 sm:p-0 sm:mt-0 gap-4"
          data-aos="fade-up"
        >
          {/* links */}
          <div className="">
            <h3 className="font-semibold text-xl">Important Links</h3>
            <ul className="flex flex-col gap-2 mt-2">
              <a href="#">
                <li className="hover:text-primary hover:translate-x-2 duration-200">
                  Home
                </li>
              </a>
              <a href="#">
                <li className="hover:text-primary hover:translate-x-2 duration-200">
                  About
                </li>
              </a>
              <a href="#">
                <li className="hover:text-primary hover:translate-x-2 duration-200">
                  Contact
                </li>
              </a>
              <a href="#">
                <li className="hover:text-primary hover:translate-x-2 duration-200">
                  Blog
                </li>
              </a>
            </ul>
          </div>
          {/* links */}
          <div className="">
            <h3 className="font-semibold text-xl"> Links</h3>
            <ul className="flex flex-col gap-2 mt-2">
              <a href="#">
                <li className="hover:text-primary hover:translate-x-2 duration-200">
                  Home
                </li>
              </a>
              <a href="#">
                <li className="hover:text-primary hover:translate-x-2 duration-200">
                  About
                </li>
              </a>
              <a href="#">
                <li className="hover:text-primary hover:translate-x-2 duration-200">
                  Contact
                </li>
              </a>
              <a href="#">
                <li className="hover:text-primary hover:translate-x-2 duration-200">
                  Blog
                </li>
              </a>
            </ul>
          </div>
        </div>
        {/* third */}
        <div
          className="px-4 py-8 pb-28 flex flex-col gap-4 sm:p-0"
          data-aos="fade-up"
        >
          {/* icons container */}
          <div className=" flex gap-3 text-3xl ">
            <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
            <FaFacebook className="cursor-pointer  hover:text-primary hover:scale-105 duration-200" />
            <FaLinkedin className="cursor-pointer  hover:text-primary hover:scale-105 duration-200" />
          </div>
          {/* address */}
          <div className=" flex gap-2 items-center">
            <FaLocationArrow />
            <p>Islamabad, Pakistan</p>
          </div>
          {/* phone */}
          <div className="flex gap-2 items-center">
            <FaMobileAlt />
            <p>+92 3123429817</p>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  )
}

export default Footer