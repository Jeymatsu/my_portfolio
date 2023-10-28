import { Link ,useLocation} from "react-router-dom";
import React from "react";
import { useState,useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"




const Navbar = ({ homeref, featuresRef, chooseUsRef, leadershipRef, faqRef,getAppRef }) => {
  
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  const handleToggle = () => {
    setToggle(!toggle);
  };

 
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const handleFeaturesClick = () => {
    handleItemClick('features');
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
    setToggle(false);
  
  };

  const handleAboutClick = () => {
    handleItemClick('about');
    chooseUsRef.current?.scrollIntoView({ behavior: 'smooth' });
    setToggle(false);
  };

  const handleButtontClick = () => {
    
    getAppRef.current?.scrollIntoView({ behavior: 'smooth' });
    setToggle(false);
  };

  const handleLeadershipClick = () => {
    handleItemClick('leadership');
    leadershipRef.current?.scrollIntoView({ behavior: 'smooth' });
    setToggle(false);
  };

  const handleFAQClick = () => {
    handleItemClick('faq');
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
    setToggle(false);
  };

  const handleHomeClick = () => {
    handleItemClick('home');
    homeref.current?.scrollIntoView({ behavior: 'smooth' });
    setToggle(false);
  };
  const handleContactClick = (itemName) => {
    setActiveItem(itemName);
    setToggle(false);
  };
 

  const location = useLocation();
  const activeLink = location.pathname.split('/')[1];
  const activeLinkContact = location.pathname.split('/contact')[1];
  return (
    <div>
    <nav className="h-[80px] w-full lg:px-20 2xl:px-72  fixed top-0 z-5 ">
      <div className="md:py-4  md:mx-20 lg:mx-20">

        
        <motion.div
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          initial={{ y: -65 }}
          animate={{ y: 0 }}
          className="flex justify-between items-center md:px-0 px-4"
        >
          <img src="https://p.kindpng.com/picc/s/394-3941580_portfolio-circle-hd-png-download.png" className="h-[58px]" />

          <div className="hidden md:flex items-center ">
          <ul className="flex gap-6">
      <li
        className={`font-Inter ${
          activeItem === 'home' && activeLink !== 'contact' ? 'text-[#4A58DC] hover:text-[#4A58DC] transition border-b-2 border-[#4A58DC]' : ''
        } cursor-pointer font-notosans text-base`}
        onClick={handleHomeClick}
      >
        <Link to="/">Home</Link>
      </li>
      <li
        className={`font-Inter ${
          activeItem === 'about' && activeLink !== 'contact' ? 'text-[#4A58DC] hover:text-[#4A58DC] transition border-b-2 border-[#4A58DC]' : ''
        } cursor-pointer font-notosans text-base`}
        onClick={handleAboutClick}
      >
        Skills
      </li>
      <li
        className={`font-Inter ${
          activeItem === 'features' && activeLink !== 'contact' ? 'text-[#4A58DC] hover:text-[#4A58DC] transition border-b-2 border-[#4A58DC]' : ''
        } cursor-pointer font-notosans text-base`}
        onClick={handleFeaturesClick}
      >
        Projects
      </li>
      <li
        className={`font-Inter ${
          activeItem === 'leadership' && activeLink !== 'contact' ? 'text-[#4A58DC] hover:text-[#4A58DC] transition border-b-2 border-[#4A58DC]' : ''
        } cursor-pointer font-notosans text-base`}
        onClick={handleLeadershipClick}
      >
        Testimonials
      </li>
     
    

    </ul>
          </div>

          <div className="flex justify-end">
      <button onClick={handleButtontClick} className="bg-[#2270e2] hidden md:block  text-white px-4 py-2 rounded-md">
       Hire Me
      </button>
    </div>



          <div className="md:hidden" onClick={handleClick}>
            <img src={toggle ? AiOutlineClose : AiOutlineMenu} />
          </div>
        </motion.div>

       


        {/* small screen */}
        <div
          className={
            toggle
              ? "absolute z-10 p-4  bg-white w-full  md:hidden "
              : "hidden"
          }
        >
          <ul>
            <li onClick={handleHomeClick}  className="p-4 hover:bg-gray-100">
            <Link to="/">Home</Link>
            </li>
            <li onClick={handleAboutClick} className="p-4 hover:bg-gray-100">
              Skills
            </li>
            <li onClick={handleFeaturesClick}  className="p-4 hover:bg-gray-100">
             Projects
            </li>
            <li onClick={handleLeadershipClick} className="p-4 hover:bg-gray-100">
            Testimonials
            </li>
          

            <button onClick={handleButtontClick} className="bg-[#4A58DC] w-full text-white px-4 py-4 rounded-md">
        Hire Me
      </button>
          </ul>
        </div>
      </div>
    </nav>

   

 </div>
    
    
  
  );
};

export default Navbar;



