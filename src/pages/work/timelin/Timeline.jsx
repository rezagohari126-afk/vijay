import React from 'react';
import NavBar from '../../../component/navBar'
import Footer from '../../../component/footer';
import Background from '../../../component/background';
import { RiShining2Fill } from "react-icons/ri";


export default function Timeline() {

  return (
   <>
      <Background></Background>
      <NavBar></NavBar>
       <div className="container mt-60 flex-col flex justify-center items-center gap-3">
                  <h2 className='font-Bold text-[32px]  bg-[linear-gradient(to_right,#DC36FA_0%,#A167EF_25%,#609FE4_50%,#3ABFDE_75%,#04D18E_100%)] bg-clip-text text-transparent'>Timeline</h2>
                  <p className="font-Regular text-center text-[15px] sm:text-[18px] dark:text-textDark max-w-[455px]">
                    The linear view of some milestones and notable moments that happened so far. Check other stuff on twitter or linkedin
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
        <div className="container flex  flex-row justify-center items-center flex-wrap gap-4  mt-18">

             <span className='flex items-center flex-row gap-1 px-3 rounded-[21px] py-1.5 text-base text-[#1C309D] bg-[linear-gradient(to_right,#C3C2FF_0%,#9DBEFF_100%)] '>
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M9.70707 0.253486C10.4049 -0.0280135 11.1695 -0.0765934 11.8956 0.11544C12.4815 0.270373 13.0159 0.574846 13.4544 0.995506C14.0099 0.781673 14.5375 0.490407 15.023 0.128387C15.2286 -0.0248868 15.508 -0.0336002 15.7227 0.106573C15.9375 0.24674 16.0419 0.506007 15.9843 0.755893C15.7555 1.74936 15.2922 2.66711 14.6365 3.42379C14.6495 3.5525 14.6562 3.68186 14.6566 3.81138V3.81329C14.6566 8.09253 12.7102 11.2373 9.89507 12.821C7.0898 14.3992 3.49906 14.3821 0.301907 12.5048C0.0598547 12.3627 -0.0543381 12.074 0.0249812 11.8047C0.104301 11.5355 0.356757 11.3548 0.637205 11.3666C1.83532 11.4169 3.0227 11.1489 4.09311 10.5919C3.00499 9.91667 2.23694 9.105 1.71374 8.23187C1.05135 7.1264 0.801507 5.95647 0.756267 4.90446C0.7111 3.85423 0.868973 2.9069 1.0356 2.22591C1.11924 1.88408 1.20598 1.60575 1.27269 1.41073C1.30905 1.30445 1.34739 1.19881 1.38985 1.09482L1.39066 1.09287C1.47699 0.886753 1.67481 0.740813 1.89737 0.71978C2.12169 0.698586 2.33948 0.802473 2.46417 0.99014C3.08816 1.92926 3.91977 2.6871 4.88245 3.19924C5.6667 3.61646 6.51909 3.86066 7.38853 3.92087C7.38853 3.12289 7.56973 2.35249 8.00473 1.67517C8.41707 1.03315 9.0098 0.534773 9.70707 0.253486ZM2.19627 2.63097C2.05917 3.22453 1.94165 4.00539 1.97806 4.85191C2.01678 5.7522 2.22872 6.71207 2.76275 7.60327C3.29372 8.4894 4.1632 9.3418 5.57327 10.0042C5.76958 10.0964 5.90235 10.2857 5.92219 10.5017C5.94203 10.7177 5.84596 10.928 5.66973 11.0545C4.83037 11.6567 3.89931 12.0908 2.92317 12.3419C5.1721 13.0438 7.44867 12.7941 9.29547 11.7552C11.6856 10.4105 13.4333 7.6988 13.4337 3.8144C13.4331 3.6527 13.4184 3.49149 13.3897 3.33287C13.3548 3.14003 13.4145 2.94215 13.5502 2.80073C13.7748 2.56659 13.9754 2.30923 14.1493 2.03311C13.9253 2.12868 13.697 2.21359 13.4649 2.28746C13.2266 2.36329 12.9661 2.28641 12.8073 2.09331C12.4816 1.69757 12.0532 1.42209 11.5829 1.29772C11.1131 1.17346 10.6187 1.20444 10.1646 1.3876C9.71007 1.57097 9.3138 1.89994 9.03367 2.33605C8.7534 2.77251 8.60467 3.29299 8.6114 3.82683L8.61153 3.83459L8.61147 4.54452C8.61147 4.87569 8.3478 5.14668 8.01673 5.15575C6.72927 5.19104 5.45508 4.88909 4.30808 4.27889C3.51658 3.85781 2.80333 3.2994 2.19627 2.63097Z" fill="#1C309D" fill-opacity="0.7"/>
                  </svg>
                Twitter
              </span>

             <span className='flex items-center flex-row gap-1 px-3 rounded-[21px] py-1.5 font-Medium text-base text-[rgba(92,27,174,80%)] bg-[linear-gradient(to_right,#F0D6FF_0%,#E0D1FF_54%,#D3CDFF_100%)]'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2.05907 0C0.92188 0 0 0.926467 0 2.06932C0 3.21217 0.92188 4.13864 2.05907 4.13864C3.19627 4.13864 4.11815 3.21217 4.11815 2.06932C4.11815 0.926467 3.19627 0 2.05907 0ZM1.14768 2.06932C1.14768 1.56347 1.55573 1.15339 2.05907 1.15339C2.56242 1.15339 2.97047 1.56347 2.97047 2.06932C2.97047 2.57517 2.56242 2.98525 2.05907 2.98525C1.55573 2.98525 1.14768 2.57517 1.14768 2.06932Z" fill="#5C1BAE" fill-opacity="0.8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9705 4.47787C9.63652 4.47787 8.35726 5.01041 7.41406 5.95833C6.47082 6.90627 5.94092 8.19187 5.94092 9.53247V14.7567C5.94092 15.0751 6.19784 15.3333 6.51476 15.3333H9.48519C9.80212 15.3333 10.0591 15.0751 10.0591 14.7567V9.53247C10.0591 9.28954 10.1551 9.05653 10.326 8.8848C10.4969 8.713 10.7287 8.61653 10.9705 8.61653C11.2122 8.61653 11.444 8.713 11.6149 8.8848C11.7859 9.05653 11.8819 9.28954 11.8819 9.53247V14.7567C11.8819 15.0751 12.1388 15.3333 12.4557 15.3333H15.4261C15.7431 15.3333 16 15.0751 16 14.7567V9.53247C16 8.19187 15.4701 6.90627 14.5269 5.95833C13.5837 5.01041 12.3044 4.47787 10.9705 4.47787ZM10.9705 5.63127C9.94092 5.63127 8.95359 6.04229 8.22559 6.77387C7.49759 7.50553 7.08859 8.4978 7.08859 9.53247V14.1799H8.91139V9.53247C8.91139 8.9836 9.12832 8.45727 9.51446 8.0692C9.90059 7.68113 10.4243 7.46313 10.9705 7.46313C11.5165 7.46313 12.0403 7.68113 12.4265 8.0692C12.8126 8.45727 13.0295 8.9836 13.0295 9.53247V14.1799H14.8523V9.53247C14.8523 8.4978 14.4433 7.50553 13.7153 6.77387C12.9873 6.04229 12 5.63127 10.9705 5.63127Z" fill="#5C1BAE" fill-opacity="0.8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.80088C0 5.48238 0.256917 5.22418 0.57384 5.22418H3.54431C3.86123 5.22418 4.11815 5.48238 4.11815 5.80088V14.7567C4.11815 15.0751 3.86123 15.3333 3.54431 15.3333H0.57384C0.256917 15.3333 0 15.0751 0 14.7567V5.80088ZM1.14768 6.3776V14.1799H2.97047V6.3776H1.14768Z" fill="#5C1BAE" fill-opacity="0.8"/>
                  </svg>
                Linkedin
              </span>

             <span className='flex items-center flex-row gap-1 px-3 rounded-[21px] py-1.5 font-Medium text-base text-[rgba(140,0,126,80%)] bg-[linear-gradient(to_right,#FBCEFF_0%,#FFD1D1_100%)]'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0C10.176 0 10.448 9.93411e-09 11.296 0.048C12.144 0.08 12.736 0.224 13.248 0.416C13.76 0.624 14.208 0.896 14.656 1.344C15.104 1.776 15.376 2.224 15.584 2.752C15.776 3.264 15.92 3.84 15.952 4.704C15.984 5.552 16 5.824 16 8C16 10.176 15.984 10.448 15.952 11.296C15.92 12.144 15.776 12.72 15.584 13.232C15.376 13.76 15.104 14.208 14.656 14.656C14.208 15.104 13.76 15.376 13.248 15.584C12.736 15.776 12.144 15.904 11.296 15.952C10.448 15.984 10.176 16 8 16C5.824 16 5.552 15.984 4.704 15.952C3.856 15.904 3.264 15.776 2.768 15.584C2.24 15.376 1.792 15.104 1.344 14.656C0.896 14.208 0.624 13.76 0.416 13.232C0.224 12.72 0.096 12.144 0.048 11.296C0.016 10.448 0 10.176 0 8C0 5.824 0.016 5.552 0.048 4.704C0.08 3.84 0.224 3.264 0.416 2.752C0.624 2.224 0.896 1.776 1.344 1.344C1.792 0.896 2.24 0.624 2.768 0.416C3.264 0.224 3.856 0.08 4.704 0.048C5.552 9.93411e-09 5.824 0 8 0ZM7.28 1.44C5.792 1.44 5.504 1.44 4.768 1.488C3.984 1.52 3.568 1.648 3.28 1.76C2.912 1.904 2.64 2.08 2.368 2.352C2.096 2.624 1.904 2.896 1.76 3.28C1.648 3.552 1.52 3.984 1.488 4.768C1.456 5.6 1.44 5.856 1.44 8C1.44 10.128 1.456 10.384 1.488 11.232C1.52 12 1.648 12.432 1.76 12.704C1.904 13.088 2.08 13.344 2.368 13.632C2.656 13.92 2.912 14.08 3.28 14.224C3.568 14.336 3.984 14.464 4.768 14.512C5.616 14.544 5.872 14.56 8 14.56C10.144 14.56 10.384 14.544 11.232 14.512C12.016 14.464 12.432 14.336 12.72 14.224C13.088 14.08 13.36 13.904 13.632 13.632C13.92 13.36 14.096 13.088 14.24 12.704C14.352 12.432 14.48 12 14.512 11.232C14.544 10.384 14.56 10.128 14.56 8C14.56 5.856 14.544 5.6 14.512 4.768C14.48 3.984 14.352 3.552 14.24 3.28C14.096 2.912 13.92 2.64 13.632 2.352C13.36 2.08 13.088 1.904 12.72 1.76C12.432 1.648 12.016 1.52 11.232 1.488C10.384 1.44 10.144 1.44 8 1.44C7.728 1.44 7.504 1.44 7.28 1.44ZM12.272 2.768C12.8 2.768 13.232 3.2 13.232 3.728C13.232 4.256 12.8 4.688 12.272 4.688C11.744 4.688 11.312 4.256 11.312 3.728C11.312 3.2 11.744 2.768 12.272 2.768ZM8 3.888C10.272 3.888 12.112 5.728 12.112 8C12.112 10.272 10.272 12.112 8 12.112C5.728 12.112 3.888 10.272 3.888 8C3.888 5.728 5.728 3.888 8 3.888ZM8 5.328C6.528 5.328 5.328 6.528 5.328 8C5.328 9.472 6.528 10.656 8 10.656C9.472 10.656 10.672 9.472 10.672 8C10.672 6.528 9.472 5.328 8 5.328Z" fill="currentColor"/>
                  </svg>

                Instagram

              </span>
        </div>
        <div className="container flex justify-center overflow-x-visible overflow-y-visible mt-16">
            <div className="w-[341px] border-l  border-l-[rgba(0,0,0,17%)] dark:border-l-[rgba(255,255,255,20%)]     overflow-y-visible text-left pl-[18px] pb-11 ">
                 <div>
                    <div className="flex flex-row items-center   relative  gap-2 after:absolute  overflow-y-visible after:content-(--date) sm:after:-left-[130px] after:left-[130px] after:font-semibold after:text-[9px] sm:after:text-[13px] dark:after:text-textDark before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-[rgba(206,200,204)]  before:absolute before:-left-[23.5px] -mt-2  " style={{ "--date": '"Sep 12, 2022"' }}>
                     <span className='rounded-lg bg-[linear-gradient(to_right,rgba(195,194,255,70%)_0%,rgba(157,190,255,60%)_100%)] text-[rgba(28,48,157)]  px-1.5 py-px  text-[11px] font-semibold'>twitter</span>
                     <span className='rounded-lg bg-[linear-gradient(to_right,rgba(195,194,255,70%)_0%,rgba(157,190,255,60%)_100%)] text-[rgba(28,48,157)] px-1.5 py-px  text-[11px] font-semibold'>figma</span>
                   </div>
                   <h2 className='font-Bold text-base dark:text-titleDark mt-3'>elemental - figma</h2>
                   <p className='font-Regular sm:text-[14px] opacity-60 max-w-[340px] dark:text-textDark mt-4'>The colors and overall poster really inspired me, so I created it in @figma over the weekend 😍</p>
                   <img src="public/images/timelineFigma.png" alt="figma" className='mt-4' />
                  </div>
               
                  <div className='mt-28'>
                    <div className="flex flex-row items-center relative gap-2 after:absolute  overflow-y-visible after:content-(--date) after:left-[130px] sm:after:-left-[130px] after:font-semibold after:text-[9px] sm:after:text-[13px] dark:after:text-textDark before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-[rgba(206,200,204)] before:absolute before:-left-[23.5px] -mt-2  " style={{ "--date": '"Sep 12, 2022"' }}>
                       <span className='rounded-lg bg-[linear-gradient(to_right,rgba(195,194,255,70%)_0%,rgba(157,190,255,60%)_100%)] text-[rgba(28,48,157)]  px-1.5 py-px  text-[11px] font-semibold'>twitter</span>
                       <span className='rounded-lg bg-[linear-gradient(to_right,rgba(195,194,255,70%)_0%,rgba(157,190,255,60%)_100%)] text-[rgba(28,48,157)] px-1.5 py-px  text-[11px] font-semibold'>figma</span>
                   </div>
                    <h2 className='font-Bold text-base dark:text-titleDark mt-3'>All Made in figma</h2>
                      <p className='font-Regular  sm:text-[14px] opacity-60 dark:text-textDark max-w-[340px] mt-4'>The colors and overall poster really inspired me, so I created it in @figma over the weekend 😍</p>
                    <img src="public/images/animations.png" alt="animation" className='mt-4'/>
                   
                  </div>

                  <div className='mt-25'>
                        <div className="flex flex-row items-center relative gap-2 after:absolute  overflow-y-visible after:content-(--date) after:left-[130px] sm:after:-left-[130px] after:font-semibold after:text-[9px] sm:after:text-[13px] dark:after:text-textDark before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-[rgba(206,200,204)] before:absolute before:-left-[23.5px] -mt-2  " style={{ "--date": '"Sep 12, 2022"' }}>
                             <span className='rounded-lg bg-[linear-gradient(to_right,rgba(195,194,255,70%)_0%,rgba(157,190,255,60%)_100%)] text-[rgba(28,48,157)]  px-1.5 py-px  text-[11px] font-semibold'>started</span>                    
                       </div>
                         <h2 className='font-Bold text-base dark:text-titleDark mt-2'>Overlayz</h2>
                         <p className='font-Regular sm:text-[14px] dark:text-textDark opacity-60 mt-2'>Setting my dream studio</p>
                  </div>

                  <div className='mt-25'>
                       <div className="flex flex-row items-center   relative  gap-2 after:absolute  overflow-y-visible after:content-(--date) after:left-[130px] sm:after:-left-[130px] after:font-semibold after:text-[9px] sm:after:text-[13px] dark:after:text-textDark before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-[rgba(206,200,204)] before:absolute before:-left-[23.5px] -mt-2  " style={{ "--date": '"Sep 12, 2022"' }}>
                             <span className='rounded-lg bg-[linear-gradient(to_right,rgba(208,249,190,70%)_0%,rgba(173,233,241,60%)_100%)] text-[rgba(29,162,114,80%)]  px-1.5 py-px  text-[11px] font-semibold'>WIP</span>                    
                       </div>
                        <h2 className='font-Bold text-base dark:text-titleDark mt-2'>Lil Frenz Group</h2>
                         <p className='font-Regular sm:text-[14px] dark:text-textDark opacity-60 max-w-[340px] mt-4'>The colors and overall poster really inspired me, so I created it in @figma over the weekend 😍</p>
                  </div>
            </div>
        </div>
        <div className="container flex justify-center mb-28 mt-16">
            <div className="w-[300px] h-[10] sm:w-[479px] sm:h-12 opacity-60 rounded-3xl px-5 py-3 dark:bg-grayDark bg-[rgba(48,52,77,20%)] border border-[rgba(0,0,0,5%)] flex justify-center items-center">
               <span className='font-Medium text-base sm:text-[18px] dark:text-textDark text-[rgba(48,52,77,20%)]'>
                   Loading...
               </span>
            </div>
        </div>
        <Footer></Footer>
   
   </>
  )
}
