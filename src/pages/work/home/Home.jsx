import './home.css'
import React from 'react'
import NavBar from '../../../component/navBar'
import Footer from '../../../component/footer'
import Background from '../../../component/background'
import Box from '../../../component/box'
import { FiTwitter } from 'react-icons/fi';

export default function Home() {
  return (
     <>
        <Background></Background>
        <NavBar></NavBar>
        <div className="container mt-[205px] mb-2.5 ">
           <div className="w-full min-h-64 p-4 flex flex-col justify-start  gap-4  ">
               <div className="w-[249px] h-[102px] gap-[15px] pb-3 flex flex-row items-center  ">
                   <div className="w-[90px] h-[90px] ">
                      <img src="/images/robot.png" alt="hexa" />
                   </div>
                   <div className="min-w-36 h-[50px] gap-5 flex flex-col text-left justify-center items-start ">
                      <p className='w-36 h-6 font-Bold text-[28px] dark:text-textDark whitespace-nowrap text-shadow-[1px_4px_0_rgba(0_0_0_/25%)]'>vijay verma</p>
                      <p className="w-[100px] h-[22px] text-gray text-base leading-[22px] font-Regular font-bold ">realvijy.eth</p>
                   </div>
               </div>
               <div className="min-w-[344px] min-h-6 gap-[9px] flex flex-row mb-1 flex-wrap  ">
                   <span className='font-Medium text-[18px] text-gray whitespace-nowrap'>Building what I love at</span>
                   <span className='font-Medium text-[18px] bg-linear-to-r from-blue via-violet to-orang bg-clip-text text-transparent '>@overlayz</span>
                   <span className='font-Medium text-[18px] text-gray'>studio</span>
                    
               </div>
                <p className="sm:w-[608px] md:w-[676px] min-h-25 sm:h-24 font-Regular text-base dark:text-textDark sm:text-[20px] leading-8 whitespace-normal shrink-0 my-1 ">
                   A design wizard voyaging into the metaverse. I tell the story through my design and illustrations. I spent most of my time designing for brands and creating open-source design resources.
                </p>
           </div>
        </div>
        <div className="container mt-15 flex flex-row items-center justify-center sm:justify-between flex-wrap gap-10 opacity-20  ">
           <img src="/images/figma.png" alt="" className='dark:invert dark:brightness-200' />
           <img src="/images/adobe.png" alt="" className='dark:invert dark:brightness-200' />
           <img src="/images/gaga.png" alt=""  className='dark:invert dark:brightness-200'/>
           <img src="/images/product.png" alt=""  className='dark:invert dark:brightness-200'/>
           <img src="/images/unknown.png" alt="" className='dark:invert dark:brightness-200' />
        </div>
        <div className="container mt-30 pl-2">
           <h2 className='font-Bold text-title dark:text-titleDark tracking-[3px] text-[14px] '>
              FEATURED PROJECTS
           </h2>
        </div>
        <div className="container  mt-10 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 gap-6  ">
           <Box src='/images/3dicons.png'  title='3dicons' caption='Beautifully crafted open source 3D icons' isCondition={true} typeCondition='UPDATE'></Box>
           <Box src='/images/V5.png'  title='V5 UI Kit' caption='Open-source Figma UI Kit made for this website' isCondition={false} tipeCondition={false}></Box>
           <Box src='/images/uihues.png'  title='UIHues' caption='Generate color palattes directly on figma' isCondition={true} typeCondition='NEW'></Box>
           <Box src='/images/circle.png'  title='Overlayz' caption='My Dream Studio' isCondition={false} typeCondition={false}></Box>
           <Box src='/images/uilogos.png'  title='uiLogos' caption='Add dummby logos to your design quickly' isCondition={false} typeCondition={false}></Box>
           <Box src='/images/croods.png'  title='croods' caption='illustration system made for blush.design' isCondition={true} typeCondition='NEW'></Box>
        </div>
         <div className="container  mt-12  ">
           <h2 className='font-Bold text-title dark:text-titleِDark tracking-[3px] text-[14px] '>
              RECENT STORIES
           </h2>
        </div>
        <div className="container mt-7">
          <p className='font-Bold text-[18px] dark:text-textDark '>Open-Source 3dicons Library: Case Study And Free Downloads Downloads</p>
        </div>
        <div className="container mt-2.5">
          <p className="font-Regular text-gray dark:text-grayDark text-[20px]">
             In this article, I describes his learning experiences during the design stages of creating his 3dicons image library (a free library for product screens, social media ...
          </p>
          <p className="mt-2 text-[13px] opacity-30 font-Medium">
             May 7, 2022 • Smashingmagzine
          </p>
        </div>
        <div className="container mt-16 overflow-y-hidden flex justify-center ">
           <div className="mx-0 inline-block md:w-[678px] md:h-[339px] hover:bg-box dark:hover:bg-slate-900 p-4 rounded-3xl ">
               <div className=" w-full h-full  flex flex-col sm:flex-row gap-6  justify-start items-start ">
                <div className="md:w-[314px] md:h-[229px] flex flex-col items-start gap-8">
                   <h2 className='font-bold text-[60px] 
                  bg-linear-to-r from-orang via-violet to-blue bg-clip-text text-transparent'>Say hi!</h2>
                  <p className='font-medium text-[21px] dark:text-textDark opacity-80 leading-8 text-[#22242C] '>
                     Want to create something awesome? Or, you have any query? Drop an email or tweet.
                  </p>
                  <div className="md:w-[237px] md:h-9  flex flex-row justify-between items-center gap-[60px] ">
                     <div className="w-[76px] h-9 pt-0.5 gap-1 flex flex-row justify-center items-center  ">
                         <span className=' text-blue mt-1 text-[20px] sm:text-2xl'>
                            <FiTwitter></FiTwitter>
                         </span>
                         <p className='text-[20px] sm:text-[26px] 
                  bg-linear-to-r from-blue  to-turquoise bg-clip-text text-transparent'>tweet</p>
                     </div>
                     <div className="w-30 h-9 flex flex-row gap-1 justify-center items-center">
                         <span className='text-[20px] sm:text-[24px]  pt-0.5 gap-1 text-[orange]'>
                            <FiTwitter></FiTwitter>
                         </span>
                         <p className='text-[20px] sm:text-[26px]  bg-linear-to-r from-orang via-violet to-blue bg-clip-text text-transparent'>hi@vjy.me</p>
                     </div>
                  </div>
                </div>
                  <img src="/images/Rectangle.png" alt="rectangle" className='md:w-[310px] md:h-[310px] md:translate-y-4 ' />
            </div>
           </div>
        </div>
        <div className="container mt-20 mb-[100px] sm:mb-[200px] ">
            <div className="m-auto flex flex-wrap flex-col justify-center items-center sm:flex-row md:justify-center md:items-center opacity-20 gap-[25px] sm:gap-15 ">
               <img src="/images/eversend.png" alt="#" className='w-[110px] h-[30px] sm:w-[130px] sm:h-[30px] dark:invert dark:brightness-200'/>
               <img src="/images/zomato.png" alt="#"  className='w-[110px] h-[30px] sm:w-[130px] sm:h-[30px] dark:invert dark:brightness-200'/>
               <img src="/images/feedly.png" alt="#" className='w-[110px] h-[30px] sm:w-[130px] sm:h-[30px] dark:invert dark:brightness-200' />
               <img src="/images/group.png" alt="#"  className='w-[110px] h-[30px] sm:w-[130px] sm:h-[30px] dark:invert dark:brightness-200'/>
               
            </div>
        </div>
        <Footer></Footer>
 

     </>
  )
}
