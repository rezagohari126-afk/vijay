import React from 'react'
import { RiShining2Fill } from "react-icons/ri";

export default function nftCard({src,condition,title,price}) {
  return (
    <>
       <div className=" sm:w-56 sm:h-[296px] relative flex flex-col  p-3 gap-1.5 rounded-[13px] hover:bg-bgCard ">
          <div className="  sm:w-[200px] sm:h-[200px]">
             <img src={src} alt="" className='w-full h-full' />
             {condition === "comming soon" &&  <span className='inline-block absolute top-4.5 left-4.5 font-Bold text-amber-50 text-[7px] px-1 py-0.5 sm:text-[10px] sm:px-1.5 sm:py-px sm:min-w-[37px] sm:min-h-4 rounded-lg gap-2.5 bg-[linear-gradient(to_right,#4AB1F1_0%,#566CEC_33%,#D749AF_66%,#FF7C51_100%)]'>COMING SOON</span>}
              {condition === "sold" &&  <span className='inline-block absolute top-4.5 left-4.5 font-Bold text-amber-50 text-[7px] px-1 py-0.5 sm:text-[10px] sm:px-1.5 sm:py-px sm:min-w-[37px] sm:min-h-4 rounded-lg gap-2.5 bg-[#FF445E]'>SOLD</span>}
              {condition === "AUCTION" && <span className='inline-block absolute top-4.5 left-4.5 font-Bold text-amber-50 text-[7px] px-1 py-0.5 sm:text-[10px] sm:px-1.5 sm:py-px sm:min-w-[37px] sm:min-h-4 rounded-lg gap-2.5 bg-[rgba(0,0,0,70%)]'>AUCTION</span>}
            
          </div>


          <div className=" w-full sm:w-[200px] flex flex-col">
             <div className="flex flex-row items-center gap-1.5 dark:text-textDark text-lightGray font-Medium text-[11px] sm:text-[14px]">
                <span>single</span>
                <span > 
                    <RiShining2Fill className='w-2.5'></RiShining2Fill>
                </span>
                <span>rarible</span>
             </div>
             <h2 className='font-Bold dark:text-titleDark text-[14px] sm:text-base'>{title}</h2>

             <div className="flex flex-row items-center gap-1 text-[12px] sm:text-[16px]  dark:text-white ">
                <svg width="8" className=' opacity-70 dark:opacity-100' height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.68317 0L3.60266 0.273464V8.20805L3.68317 8.28837L7.36624 6.11127L3.68317 0Z" fill="currentColor"/>
                    <path d="M3.68317 0L0 6.11127L3.68317 8.28837L3.68317 4.43714L3.68317 0Z" fill="currentColor"/>
                    <path d="M3.68317 8.9857L3.63779 9.04103V11.8674L3.68317 11.9999L7.36849 6.80973L3.68317 8.9857Z" fill="currentColor"/>
                    <path d="M3.68317 11.9999V8.9857L0 6.80973L3.68317 11.9999Z" fill="currentColor"/>
                    <path d="M3.68317 8.28837L7.36624 6.11127L3.68317 4.43714L3.68317 8.28837Z" fill="currentColor"/>
                    <path d="M0 6.11127L3.68317 8.28837L3.68317 4.43714L0 6.11127Z" fill="currentColor"/>
                </svg>
                <span className='text-lightGray'>
                    {price}
                </span>
             </div>
          </div>
       </div>
    
    </>
  )
}
