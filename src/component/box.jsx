import React from 'react'

export default function box({src,title,caption,isCondition,typeCondition}) {
  return (
    <div className='max-w-[221px] sm:w-56 sm:h-[302px] flex flex-col  items-start justify-center gap-2 px-3 pt-3 pb-4  rounded-2xl hover:bg-box dark:hover:bg-slate-900 '> 
         <div className="relative sm:w-[200px] sm:h-[200px] ">
            <img src={`${src}`} alt="box" className='w-full h-full rounded-xl  '/>
            {isCondition &&   <span className={`inline-block absolute top-2 left-2 font-Bold text-amber-50 text-[7px] px-1 py-0.5 sm:text-[12px] sm:px-1.5 sm:py-px sm:min-w-[37px] sm:min-h-4 rounded-lg gap-2.5 ${typeCondition==="NEW" ? "bg-linear-to-r from-blue via-violet to-orang " : 'bg-pink '}`}>{isCondition &&  typeCondition }</span>}
         </div>
         <div className="flex flex-col items-left w-200px">
             <p className='w-full md:w-full md:h-6 font-Bold text-[12px] sm:text-base dark:text-textDark text-left sm:text-left md:text-left'>
             {title}
         </p>
         <p className="font-Regular text-left text-[11px] dark:text-textDark sm:text-[13px] md:text-[15px] w-full min-h-[45px] opacity-60 sm:text-left md:text-left ">
           {caption}
         </p>
         </div>
        
    </div>
  )
}
