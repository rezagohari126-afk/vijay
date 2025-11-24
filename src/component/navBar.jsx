import React from 'react'
import { LuSquareMenu } from 'react-icons/lu';
import { FaRegWindowClose } from 'react-icons/fa';
import { useState,useEffect } from 'react';
import {Link, Links,useLocation } from 'react-router'
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { RxTwitterLogo } from "react-icons/rx";
import { BsInstagram } from "react-icons/bs";
import { TbBrandLinkedin } from "react-icons/tb";


export default function NavBar() {
   // set show menu

   const [showMenu,setShowMenu] = useState(false);

   // end set show menu


   // set dark mode

   const [isDark,setIsDark] = useState(false);
   const [darkMode,setDarkMode]= useState(localStorage.getItem("theme")=== "dark")

   const showMenuHandler = () =>{
       setShowMenu(!showMenu)
   }
   const closeMenuHandler =() =>{
      setShowMenu(!showMenu)
   }
   
   useEffect(() => {
      if(darkMode){

         document.documentElement.classList.add("dark");
         localStorage.setItem("theme","dark");
      } else {
         document.documentElement.classList.remove("dark");
         localStorage.setItem("theme","light")
      }
   },[darkMode])

   // end set dark menu

   // active navBar
   
  const location = useLocation();
  const currentPath = location.pathname.replace("/", "") || "home";
  const pages = [
    { to: "/", label: "home", key: "home" },
    { to: "/nft", label: "nft", key: "nft" },
    { to: "/about", label: "about", key: "about" },
    { to: "/work", label: "work", key: "work" },
    { to: "/story", label: "story", key: "story" },
    { to: "/timeline", label: "timeline", key: "timeline" },
    { to: "/appstack", label: "appstack", key: "appstack" },
  ]

  return (
   
   <>
      {/* navbar Desktop */}
      
      <div className="container mt-10 absolute top-[15px] right-0 left-0">
          <nav className='w-full bg-white dark:bg-navDark rounded-xl has-[56px]  flex flex-row justify-between items-center p-4 pr-[25px]'>
              <div className="flex justify-center items-center gap-4 ">
                  <p className='relative font-Bold w-[70] h-[20] text-[20px] text-black dark:text-textDark after:content-[""] after:inline-block after:absolute after:left-0 after:bottom-1 after:w-[45px]  after:h-[2.8px] after:bg-linear-to-r after:from-blue-600 after:via-violet after:to-orang'>realvjy</p>
                  <ul className='hidden text-black  sm:flex justify-center items-center text-[12px] md:text-base font-Medium sm:gap-4 md:gap-6  '>
                    
                      {pages.map((item) => {
                         return(
                             <li key={item.key}>
                       <Link to={item.to}  className={`hover:bg-[linear-gradient(to_right,#F06844_0%,#EE4C54_25%,#D45E95_50%,#9C6CA6_75%,#6583C1_100%)] hover:bg-clip-text hover:text-transparent   ${currentPath === item.label ? "bg-[linear-gradient(to_right,#F06844_0%,#EE4C54_25%,#D45E95_50%,#9C6CA6_75%,#6583C1_100%)] bg-clip-text text-transparent" : "text-black dark:text-textDark "}`}>{item.label}</Link>
                        </li> 
                         )
                      })}
                  </ul>
              </div>
              <div className="flex text-black dark:text-textDark flex-row-reverse justify-center items-center w-[148px] h-[5] gap-3 ">
                 <span className='sm:hidden' onClick={showMenuHandler}>
                    <LuSquareMenu></LuSquareMenu>
                 </span>
                 <span onClick={()=>{
                    setIsDark(!isDark);
                    setDarkMode(!darkMode);
                 }}>
                    {isDark ? <FiSun className='w-4 h-4'></FiSun> : <FiMoon className='w-4 h-4'></FiMoon>}
                 </span>
                 <div className="flex flex-row justify-center items-center gap-5 px-3 py-0.5 text-black dark:text-textDark border-r border-r-black/20 ">
                    <BsInstagram className='w-4 h-4'></BsInstagram>
                    <RxTwitterLogo className='w-5 h-5'></RxTwitterLogo>
                    <TbBrandLinkedin className='w-5 h-5'></TbBrandLinkedin>
                 </div>
              </div>
          </nav>
      </div>

      {/* ending navbar desktop */}


       {/* menu mobile */}
      <div className={`fixed  top-0 h-full w-[250px] transition-all duration-300 delay-100 bg-pink-50 dark:bg-darkMain z-40 px-2 ${showMenu ? "left-0" : "left-[-250px] "}`}>
         
          {/* header menu mobile */}

           <div className="relative flex flex-row items-center w-full h-[110px] gap-4 border-b border-b-gray-300 dark:border-b-gray-700 ">
              <img src="../public/images/robot.png" alt="robot" className='w-[50px] h-[50px]' />
                <p className='relative font-Bold w-[70] h-[20] text-[20px] text-black dark:text-textDark after:content-[""] after:inline-block after:absolute after:left-0 after:bottom-1 after:w-[45px]  after:h-[2.8px] after:bg-linear-to-r after:from-blue-600 after:via-violet after:to-orang'>realvjy</p>
               <div className="absolute -z-10 top-0 right-0 left-0 w-full  h-full bg-linear-to-r from-cyan-400 via-fuchsia-400  to-yellow-400 opacity-30 rounded-[50px] blur-[20px]   "></div>
              <span className='absolute right-2 top-2 inline-block '>
                <FaRegWindowClose className='w-[25px] h-[25px] dark:text-textDark' onClick={closeMenuHandler}></FaRegWindowClose>
              </span>
           </div>

           {/* body menu */}

           <div className="w-full mt-[30px]">
                 <ul className=' text-base text-black  font-Medium gap-[15px]  flex flex-col items-start  '>
                        {pages.map((item) => {
                         return(
                             <li key={item.key}>
                       <Link to={item.to}  className={`hover:bg-[linear-gradient(to_right,#F06844_0%,#EE4C54_25%,#D45E95_50%,#9C6CA6_75%,#6583C1_100%)] hover:bg-clip-text hover:text-transparent  ${currentPath === item.label ? "bg-[linear-gradient(to_right,#F06844_0%,#EE4C54_25%,#D45E95_50%,#9C6CA6_75%,#6583C1_100%)] bg-clip-text text-transparent" : "text-black dark:text-textDark "}`}>{item.label}</Link>
                        </li> 
                         )
                      })}
                  </ul>
           </div>

           {/* ending menu mobail */}

      </div>
      
   </>
  )
}
