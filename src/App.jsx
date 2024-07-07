import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Products from './Components/Products/Products.jsx'
// animation
import AOS from "aos";
import "aos/dist/aos.css"
import TopProducts from './Components/TopProducts/TopProducts.jsx';
import Banner from './Components/Banner/Banner.jsx';
import Email from './Components/Email/Email.jsx';
import Testimonial from './Components/Testimonial/Testimonial.jsx';
import Footer from "./Components/Footer/Footer.jsx"
import Popup from './Components/Popup/Popup.jsx';

const App = () => {
   const [orderPopup, setOrderPopup] = React.useState(false)

   const handleOrderPopup = () => {
     setOrderPopup(!orderPopup)
   }
  useEffect(()=>{
     AOS.init({
       offset: 100,
       duration: 800,
       easing: 'ease-in-sine',
       delay: 100,
     });
     AOS.refresh();
  },[])
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      {/* main dark mode class in index html and extend in config */}
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Email />
      <Products />
      <Testimonial />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App

// npm run build for build and deployment