import React from 'react'

export default function footer() {
  return (
    <>

     <footer className='relative'>
         <div className='container relative m-10 flex flex-col justify-end items-end  w-full gap-[140px] '>
          
              <div className="flex flex-col max-w-[291px] min-h-[52px] gap-3 justify-center items-center mx-auto  ">
               <img src="../../../public/images/credit.png" alt="credit"/>
               <div className="flex md:flex-row max-w-[291px] min-h-4 gap-4 opacity-30 flex-wrap font-Medium text-[12px] ">
                  <span className='dark:invert dark:brightness-200'>version</span>
                  <span className='dark:invert dark:brightness-200'>uikit</span>
                  <span className='dark:invert dark:brightness-200'>bookshelf</span>
                  <span className='dark:invert dark:brightness-200'>stacks</span>
                  <span className='dark:invert dark:brightness-200'>supporters</span>
               </div>
              </div>
              <div className="relative  flex flex-row items-center justify-center gap-3 h-4 mx-auto ">
              <img src="../public/images/left.png" alt="footerImage" className='w-full sm:w-[147px]  dark:invert dark:brightness-200 h-3.5  absolute left-[-143px] sm:right-36' />
              <span className='opacity-40 font-Medium text-[12px] dark:invert dark:brightness-200'>stay hungry, stay foolish</span>
              <img src="../public/images/right.png" alt="footerImage" className='w-full sm:w-[147px] h-3.5  dark:invert dark:brightness-200 absolute right-[-143px] sm:left-36' />
              </div>
         
              
            
           </div>
              <div className="absolute bottom-0 left-1/2 -z-10 w-full sm:w-[300px] -translate-x-1/2  h-[130px] bg-linear-to-r from-cyan-400 via-fuchsia-400  to-yellow-400 opacity-100 rounded-[50px] blur-[110px]   ">
                
             </div>
     
        </footer>
     
    </>
   
  )
}
