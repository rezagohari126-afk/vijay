import React from 'react'

export default function boxAppStack({src,title,condition}) {
  return (
     <div className="flex flex-row items-center sm:w-[492px] sm:h-[124px] p-3 gap-4">
              <img src={src} alt="appstack" className='rounded-2xl' />

              <div className='flex flex-col gap-[5px]'>
                   <div className="flex flex-row items-center gap-2.5">
                       <h2 className='font-Bold text-base dark:text-titleDark'>{title}</h2>

                     {(condition === 'Design' || condition === 'Productivity') && (
                      <span className='rounded-lg min-w-[50px] px-1.5 py-px text-[11px] font-semibold h-4 bg-[linear-gradient(to_right,rgba(251,206,255,40%)_0%,rgba(255,209,209,40%)_100%)] dark:bg-[linear-gradient(to_right,rgba(251,206,255,90%)_0%,rgba(255,209,209,90%)_100%)] text-[rgba(140,0,126,80%)] text-center leading-4 '>
                      {condition}
                      </span>
                    )}

                    {condition === 'Entertainment' && (
                      <span className='rounded-lg min-w-[50px] px-1.5 py-px text-[11px] font-semibold h-4 bg-[linear-gradient(to_right,rgba(195,194,255,40%)_0%,rgba(157,190,255,40%)_100%)] dark:bg-[linear-gradient(to_right,rgba(195,194,255,90%)_0%,rgba(157,190,255,90%)_100%)] text-[rgba(92,27,174,80%)] text-center leading-4'>
                        {condition}
                      </span>
                    )}

                    {condition === 'Communication'  && (
                      <span className='rounded-lg min-w-[50px] px-1.5 py-px text-[11px] font-semibold h-4 bg-[linear-gradient(to_right,rgba(253,225,188,40%)_0%,rgba(255,174,174,40%)_100%)] dark:bg-[linear-gradient(to_right,rgba(253,225,188,90%)_0%,rgba(255,174,174,90%)_100%)] text-[rgba(204,61,0,80%)] text-center leading-4'>
                        {condition}
                      </span>
                      )}


                   </div>
                   <p className='opacity-60 font-Regular dark:text-textDark max-w-[260px] sm:max-w-[352px] text-[10px] sm:text-[14px] text-left'>
                      Figma is my design tool of choice. I do every design work from planning, ui design to creating beautiful illustrations
                   </p>
              </div>
        </div>
  )
}
