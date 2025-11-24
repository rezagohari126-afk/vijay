import React from 'react'
import Background from '../../../component/background'
import NavBar from '../../../component/navBar'
import Footer from '../../../component/footer'
import { RiShining2Fill } from "react-icons/ri";
import { PiListBulletsBold } from "react-icons/pi";
import { IoGrid } from "react-icons/io5";
import { HiViewGrid } from "react-icons/hi";
import { useState } from 'react';
import BoxAppStack from '../../../component/boxAppStack';

export default function Appstack() {
  const [active , setActive] = useState('list');

  const isGrid =()=>{
     setActive('grid')
  }
  const isList =()=>{
    setActive('list')
  }

  return (
   <>
      <Background></Background>
      <NavBar></NavBar>
       <div className="container mt-60 flex-col flex justify-center items-center gap-3">
                        <h2 className='font-Bold text-[32px]  bg-[linear-gradient(to_right,#224D88_0%,#A3387E_50%,#FA6E6E_100%)] bg-clip-text text-transparent'>App Stack</h2>
                        <p className="font-Regular text-center text-[15px] sm:text-[18px] dark:text-textDark max-w-[455px]">
                          Sharing my on-the-go app stack from working, managing, entertaining and more
                        </p>
                         <div className="max-w-[402px] h-5 flex flex-row gap-9 justify-center mt-7 ">
                                  <img src="../../public/images/left.png" alt="picture"  className='opacity-40 dark:invert dark:brightness-50'/>
                                  <div className="w-20 h-full flex flex-row justify-center items-center gap-2.5 py-2.5 *:dark:text-textDark  ">
                                     <RiShining2Fill className='w-2'></RiShining2Fill>
                                     <RiShining2Fill className='w-5'></RiShining2Fill>
                                     <RiShining2Fill className='w-2'></RiShining2Fill>
                                  </div>
                                  <img src="../../public/images/right.png" alt="picture" className='opacity-40 dark:invert dark:brightness-50' />
                        </div>
        </div>
        <div className="container flex justify-center mt-20">
            <div className=' flex flex-row items-center gap-4'>
                <span className='text-[rgba(48,52,77,20%)] dark:text-textDark font-Medium sm:text-[14px]'>Grid</span>
                 <div className='flex w-[76px] h-10 gap-1  items-center justify-center  flex-row rounded-[22px] p-0.5 bg-[rgba(74,87,77,8%)] dark:bg-[rgba(74,87,77,20%)] '>
                     <span className={`rounded-full w-9 h-9 flex justify-center items-center ${active==='grid' ? "bg-[linear-gradient(to_right,#F7BE2B_0%,#F537F9_100%)] text-[rgba(255,255,255)]" : "text-lightGray"}`} onClick={isGrid}>
                         <HiViewGrid className='w-5 h-5 '></HiViewGrid>
                     </span>
                     <span className={`rounded-full w-9 h-9 flex justify-center items-center ${active==='list' ? "bg-[linear-gradient(to_right,#F7BE2B_0%,#F537F9_100%)] text-[rgba(255,255,255)]" : "text-lightGray"}`} onClick={isList}>
                        <PiListBulletsBold className='w-5 h-5 '></PiListBulletsBold>
                     </span>

                 </div>
                 <span className='text-[rgba(48,52,77,20%)] dark:text-textDark font-Medium sm:text-[14px]'>List</span>
            </div>
        </div>
        <div className="container flex justify-center mt-10">
            <h2 className='text-title text-[14px] font-Bold tracking-[3px]'>
                APP AND GAMES
            </h2>
        </div>      
        <div className={` container mt-12 mb-30 transition-all delay-500 duration-500 ease-in  ${active === 'list' ? " flex justify-center" : "hidden"}`}>
            <div className="grid grid-cols-1 gap-3.5">
                <BoxAppStack src='public/images/figmaAppStack.png' title='Figma' caption='Figma is my design tool of choice. I do every design work from planning, ui design to creating beautiful illustrations' condition='Design'></BoxAppStack>
                <BoxAppStack src='public/images/cron.png' title='Cron' caption='Cron is the next-generation calendar for professionals and teams.' condition='Productivity'></BoxAppStack>
                <BoxAppStack src='public/images/spot.png' title='Spotify' caption='Spotify offers the best music discovery and recommendation app as well as podcast place.' condition='Entertainment'></BoxAppStack>
                <BoxAppStack src='public/images/notion.png' title='Notion' caption='Notion is an amazing app that helps me stay organized and on top of my tasks.' condition='Productivity'></BoxAppStack>
                <BoxAppStack src='public/images/discord.png' title='Discord' caption='The voice and text chat features are top-notch and the app is easy to use.' condition='Communication'></BoxAppStack>
                <BoxAppStack src='public/images/linear.png' title='Linear' caption='Figma is my design tool of choice. I do every design work from planning, ui design to creating beautiful illustrations' condition='Productivity'></BoxAppStack>
            </div>
        </div>
        <div className={` container mt-12 mb-30 transition-all delay-500 duration-500 ease-in  ${active === 'grid' ? "opacity-100 flex justify-center flex-col items-center pointer-events-auto" : "hidden"}`}>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
                 <img src="public/images/figmaAppStack.png" alt="appStack" className='w-[60px] h-[60px] rounded-xl'/>
                 <img src="public/images/cron.png" alt="appStack" className='w-[60px] h-[60px] rounded-xl'/>
                 <img src="public/images/image826.png" alt="appStack" className='w-[60px] h-[60px] rounded-xl'/>
                 <img src="public/images/image825.png" alt="appStack" className='w-[60px] h-[60px] rounded-xl'/>
                 <img src="public/images/image827.png" alt="appStack" className='w-[60px] h-[60px] rounded-xl'/>
                 <img src="public/images/discord.png" alt="appStack" className='w-[60px] h-[60px] rounded-xl'/>
                 <img src="public/images/linear.png" alt="appStack" className='w-[60px] h-[60px] rounded-xl'/>
                 <img src="public/images/image828.png" alt="appStack" className='w-[60px] h-[60px] rounded-xl'/>
                 <img src="public/images/notion.png" alt="appStack" className='w-[60px] h-[60px] rounded-xl'/>
                 <img src="public/images/image829.png" alt="appStack" className='w-[60px] h-[60px] rounded-xl'/>
                 <img src="public/images/image830.png" alt="appStack" className='w-[60px] h-[60px] rounded-xl'/>
                 <img src="public/images/spot.png" alt="appStack" className='w-[60px] h-[60px] rounded-xl'/>
                 <img src="public/images/image831.png" alt="appStack" className='w-[60px] h-[60px] rounded-xl'/>
                 <img src="public/images/ghost.png" alt="appStack" className='w-[60px] h-[60px] rounded-xl'/>
                 <img src="public/images/assasins.png" alt="appStack" className='w-[60px] h-[60px] rounded-xl'/>
                 
            </div>
            <h2 className='font-Bold text-title dark:to-titleDark mt-14'>DEVICES</h2>
            <div className="flex flex-row items-center justify-center flex-wrap gap-6 mt-10">
               <img src="public/images/mac.png" alt="devices" className='w-[60px] h-[60px]'/>
               <img src="public/images/ps5.png" alt="devices" className='w-[60px] h-[60px]'/>
               <img src="public/images/oculus-2.png" alt="devices" className='w-[60px] h-[60px]'/>
               <img src="public/images/iphone.png" alt="devices" className='w-[60px] h-[60px]'/>
               <img src="public/images/ipad.png" alt="devices" className='w-[60px] h-[60px]'/>
            </div>

        </div>
        <Footer></Footer>
      
   </>
  )
}
