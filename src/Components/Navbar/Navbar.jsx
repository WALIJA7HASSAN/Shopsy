import React from 'react'
import logo from '../../assets/logo.png'
// site: https://react-icons.github.io/react-icons/ and also in terminal run npm i react-icons
import { IoMdSearch } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'
import { FaCaretDown } from 'react-icons/fa'
import DarkMode from './DarkMode'

const Menu=[
  {
  id:1,
  name:"Home",
  link:"/#"
  },
  {
  id:2,
  name:"Top Rated",
  link:"/#services"
  },
  {
  id:3,
  name:"Kids Wear",
  link:"/#"
  },
  {
  id:3,
  name:"Mens Wear",
  link:"/#"
  },
  {
  id:3,
  name:"Electronics",
  link:"/#"
  },
]
const DropdownLinks=[
  {
  id:1,
  name:"Trending Products",
  link:"/#"
  },
  {
  id:2,
  name:"Top Rated",
  link:"/#"
  },
  {
  id:3,
  name:"Best Selling",
  link:"/#"
  },
]

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper */}
      <div className="bg-moonstone/30 dark:bg-yinminblue py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text3xl flex gap-2">
              <img src={logo} alt="logo" className="w-10 uppercase" />
              Shopsy
            </a>
          </div>
          {/*  */}
          <div className="flex items-center justify-end gap-4">
            {/* search bar */}
            <div className="flex justify-between items-center gap-4 ">
              <div className="group relative hidden sm:block">
                {/* primary color defined in config js */}
                <input
                  type="text"
                  placeholder="search"
                  id=""
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1
                 focus:border-primary 
                 dark:border-gray-500 dark:bg-gray-800"
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
            </div>
            {/* order button */}
            <button
              className="bg-gradient-to-r from-primary to-secondary dark:from-gray-950 dark:to-gray-700 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              onClick={() => handleOrderPopup()}
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* dark mode */}
            <div className="">
              <DarkMode />
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/* lower */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* simple drop down and links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2 ">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            {/* drop down list */}
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/*  */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar