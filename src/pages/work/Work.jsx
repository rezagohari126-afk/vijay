import React from 'react'
import Footer from '../../component/footer'
import NavBar from '../../component/navBar'
import Background from '../../component/background'
import { RiShining2Fill } from 'react-icons/ri'
import Box from '../../component/box'

export default function Work() {
  return (
    <>git commit -m "Initial commit"
        <Background></Background>
        <NavBar></NavBar>
        <div className="container mt-60 flex-col flex justify-center items-center gap-3">
            <h2 className=' font-Bold text-[32px]  bg-[linear-gradient(to_right,#4AB1F1_0%,#566CEC_33%,#D749AF_66%,#FF7C51_100%)] bg-clip-text text-transparent'>
                Work
            </h2>
            <p className="font-Regular text-center text-[15px] sm:text-[18px] dark:text-textDark max-w-[455px]">
               Over the course of the year, I spent a significant amount of time creating resources and tools for the community and many project for brands.
            </p>
             <div className="max-w-[402px] h-5 flex flex-row gap-9 justify-center mt-7 ">
                      <img src="/images/left.png" alt="picture"  className='opacity-40 dark:invert dark:brightness-50'/>
                      <div className="w-20 h-full flex flex-row justify-center items-center gap-2.5 py-2.5 *:dark:text-textDark  ">
                         <RiShining2Fill className='w-2'></RiShining2Fill>
                         <RiShining2Fill className='w-5'></RiShining2Fill>
                         <RiShining2Fill className='w-2'></RiShining2Fill>
                      </div>
                      <img src="/images/right.png" alt="picture" className='opacity-40 dark:invert dark:brightness-50' />
            </div>
        </div>
          <div className="container  mt-10 mb-36 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 gap-6  ">
                   <Box src='/images/3dicons.png'  title='3dicons' caption='Beautifully crafted open source 3D icons' isCondition={true} typeCondition='UPDATE'></Box>
                   <Box src='/images/V5.png'  title='V5 UI Kit' caption='Open-source Figma UI Kit made for this website' isCondition={false} tipeCondition={false}></Box>
                   <Box src='/images/uihues.png'  title='UIHues' caption='Generate color palattes directly on figma' isCondition={true} typeCondition='NEW'></Box>
                   <Box src='/images/circle.png'  title='Overlayz' caption='My Dream Studio' isCondition={false} typeCondition={false}></Box>
                   <Box src='/images/uilogos.png'  title='uiLogos' caption='Add dummby logos to your design quickly' isCondition={false} typeCondition={false}></Box>
                   <Box src='/images/croods.png'  title='croods' caption='illustration system made for blush.design' isCondition={true} typeCondition='NEW'></Box>
                   <Box src='/images/lfg.png'  title='Lil Frenz Group' caption='Dynamic NFT collection on Blockchain' isCondition={true} typeCondition='NEW'></Box>
                   <Box src='/images/contra.png'  title='Contra' caption='Wireframe kit for figma' isCondition={true} typeCondition='UPDATE'></Box>
                   <Box src='/images/Uiprint.png'  title='UI Print' caption='Print template for the wireframe' isCondition={true} typeCondition='NEW'></Box>
           </div>
           <Footer></Footer>
    
    </>
  )
}
