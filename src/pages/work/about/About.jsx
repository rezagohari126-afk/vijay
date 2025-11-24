import React from 'react'
import NavBar from '../../../component/navBar'
import Footer from '../../../component/footer'
import Background from '../../../component/background'
import { RiShining2Fill } from "react-icons/ri";

export default function About() {
  return (
    
    <>
       <Background></Background>
       <NavBar></NavBar>
       <div className="container flex justify-center items-center flex-col gap-7 p-6 mt-[250px] ">
         <h1 className='font-Bold text-5xl bg-[linear-gradient(to_right,#DC79FF_0%,#256BFA_100%)] bg-clip-text text-transparent '>About</h1>
         <p className='font-Regular text-[18px] sm:text-[25px] max-w-[731px] dark:text-textDark text-center '>It's not that difficult to find my contact information by searching realvjy. Know little more about me here</p>
         <div className="max-w-[402px] h-5 flex flex-row gap-9 justify-center ">
            <img src="/images/left.png" alt="picture"  className='opacity-60 dark:invert dark:brightness-200'/>
            <div className="w-20 h-full flex flex-row justify-center items-center gap-2.5 py-2.5 *:dark:text-textDark  ">
               <RiShining2Fill className='w-2'></RiShining2Fill>
               <RiShining2Fill className='w-5'></RiShining2Fill>
               <RiShining2Fill className='w-2'></RiShining2Fill>
            </div>
            <img src="/images/right.png" alt="picture" className='opacity-60 dark:invert dark:brightness-200' />
         </div>
       </div>
       <div className="container flex justify-center">
           <img src="/images/image742.png" alt="picture" className='inline-block w-full h-[300px] sm:h-[500px]' />
       </div>
       <div className="container -mt-5 sm:-mt-7">
           <h2 className='font-Bold text-center text-title dark:text-titleDark  tracking-[3px]  '>
              WHAT'S ON MY DESK
           </h2>
       </div>
       <div className="container mt-20  ">
         <p className='font-Regular text-[14px] sm:text-[18px] max-w-full dark:text-textDark'>
            I am a digital artist who has been bringing a little more color to the internet for years through my illustrations and designs. I help brands develop their visual identity and design language to make their products more appealing and accessible. Currently, building design tools and resources @overlayz. I also love sharing my learnings and open source design resources to assist my fellow designers, developers, and enthusiasts when possible.

         </p>
       </div>

       <div className="container mt-[82px]">
           <h2 className='font-Bold  text-title dark:text-titleDark tracking-[3px] uppercase  '>
              Current
           </h2>
           <p className='font-Regular max-w-full text-[14px] sm:text-[18px] dark:text-textDark mt-3.5'>
              Working as independent contractor to help brands with visuals and design ssystem. And most of time spending time at my studio buildding design tool and resources, Learning 3d, Experimenting in Figma, Exploring web3/NFT and Metaverse.
           </p>
       </div>
       <div className="container mt-[82px]">
           <h2 className='font-Bold  text-title dark:text-titleDark tracking-[3px] uppercase  '>
              Serious enquiry and awards
           </h2>
            <p className='font-Regular max-w-full text-[14px] sm:text-[18px] dark:text-textDark mt-3.5'>
               You can find me on everywhere with handle<span className='font-Bold'> @realvjy</span>. Also see all social links here <span className='font-Bold'>vjy.me/links</span>
           </p>
           <p  className='font-Regular max-w-full text-[14px] sm:text-[18px] dark:text-textDark mt-8'>
               For partnerships, collaborations, sponsorships, commissions, events, you can reach out to me at <span className='font-Bold'>hi@vjy</span>.me or <span className='font-Bold'>tweet</span>.
           </p>
           <p  className='font-Regular max-w-full text-[12px] sm:text-[16px] dark:text-textDark mt-8'>
              PS: I'll reply back to email in 1-2 working days.
           </p>
       </div>
       <div className="container mt-[65px]">
           <h2 className='font-Bold  text-title dark:text-titleDark tracking-[3px] uppercase mb-[35px] '>
              Interview & MENTIONS
           </h2>
           <p className='font-Regular max-w-full text-[14px] sm:text-[18px] dark:text-textDark mb-2.5'>
              My design journey as a product designer <span className='text-title dark:text-titleDark'>Medium</span>
           </p>
           <p className='font-Regular max-w-full text-[14px] sm:text-[18px] dark:text-textDark mb-2.5'>
              Pixar's Luca Illustration made in Figma  <span className='text-title dark:text-titleDark'>abduzeedo</span>
           </p>
           <p className='font-Regular max-w-full text-[14px] sm:text-[18px] dark:text-textDark mb-2.5'>
              Office Hours: Let's talk teams <span className='text-title dark:text-titleDark'>figma</span>
           </p>
       </div>
       <div className="container flex flex-col gap-6 sm:flex-row justify-center items-center mt-20 sm:mt-44 ">
          <img src="/images/7263.png" alt="comment" className=' w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[300px]  ' />
          <img src="/images/9262.png" alt="comment" className=' w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[300px] ' />
       </div>
        <div className="container mt-20 mb-[100px] sm:mb-[200px] ">
            <div className="m-auto flex  sm:flex-wrap flex-col justify-center items-center sm:flex-row md:justify-center md:items-center opacity-20 gap-[25px] sm:gap-15 ">
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
