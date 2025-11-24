import React from 'react'
import NavBar from '../../../component/navBar'
import Background from '../../../component/background'
import { RiShining2Fill } from 'react-icons/ri'
import Footer from '../../../component/footer'

export default function Story() {
  return (
   <>
        <Background></Background>
        <NavBar></NavBar>
        <div className="container mt-60 flex-col flex justify-center items-center gap-3">
            <h2 className='font-Bold text-[32px]  bg-[linear-gradient(to_right,#8D2DE3_0%,#FF2497_100%)] bg-clip-text text-transparent'>Story</h2>
            <p className="font-Regular text-center text-[15px] sm:text-[18px] dark:text-textDark max-w-[468px]">
               Occasionally, I will share my processes and case studies. I usually publish on Medium or through Twitter threads. 
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
        <div className="container flex  flex-row justify-center items-center flex-wrap gap-4  mt-18">

             <span className='flex items-center flex-row gap-1 px-3 rounded-[21px] py-1.5 font-Medium text-base text-[#1C309D] bg-[linear-gradient(to_right,#C3C2FF_0%,#9DBEFF_100%)] '>
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
                  <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clipRule="evenodd" d="M9.66647 4.50065L7.27473 12.2503C7.2022 12.4854 6.99193 12.6508 6.747 12.6656C6.50201 12.6804 6.27353 12.5415 6.17339 12.3168L2.79007 4.72733V9.78467L4.27789 11.713C4.41549 11.8913 4.43992 12.1326 4.34086 12.3351C4.2418 12.5375 4.03651 12.6658 3.81163 12.6658H0.589507C0.364629 12.6658 0.159341 12.5375 0.0602814 12.3351C-0.0387786 12.1326 -0.014352 11.8913 0.123252 11.713L1.61107 9.78467V2.67844C1.61107 2.67007 1.61124 2.66175 1.61159 2.65347L0.19575 1.37915C0.0140019 1.21557 -0.0483307 0.956553 0.0390164 0.72786C0.126363 0.499173 0.345301 0.348167 0.589527 0.348167H5.07557C5.2599 0.34056 5.44031 0.42058 5.55822 0.566733C5.59327 0.609973 5.62235 0.65828 5.64419 0.710393L8.01893 5.84007L9.68893 0.42894C9.70233 0.38168 9.72147 0.33684 9.74553 0.295213C9.77727 0.240013 9.81733 0.19126 9.8634 0.150087C9.96767 0.0567401 10.1052 0 10.2559 0H15.4113C15.6458 0 15.858 0.139313 15.9517 0.3548C16.0455 0.570293 16.0029 0.820987 15.8434 0.99328L14.3898 2.56323V10.1033L15.8434 11.6732C16.0029 11.8455 16.0455 12.0962 15.9517 12.3117C15.858 12.5272 15.6458 12.6665 15.4113 12.6665H8.96713C8.74433 12.6665 8.54053 12.5405 8.44047 12.341C8.34033 12.1414 8.361 11.9023 8.49387 11.7229L9.66647 10.1399V4.50065ZM10.8455 10.3353V1.18221H14.0597L13.3683 1.92897C13.2671 2.0383 13.2108 2.18197 13.2108 2.33115V10.3353C13.2108 10.4845 13.2671 10.6282 13.3683 10.7375L14.0597 11.4843H10.1393L10.7292 10.6878C10.8047 10.5859 10.8455 10.4623 10.8455 10.3353ZM7.46527 7.45193C7.47593 7.475 7.48793 7.49707 7.50107 7.518L6.61109 10.4017L3.06099 2.43809C3.02727 2.36245 2.97807 2.29477 2.91658 2.23943L2.12879 1.53037H4.72395L7.46527 7.45193ZM1.79091 11.4836L2.20057 10.9526L2.61023 11.4836H1.79091Z" fill="#8C007E" fill-opacity="0.8"/>
                  </svg>
                Medium
              </span>
        </div>
        <div className="container flex flex-col items-center justify-center gap-8 mb-40 mt-28">
            <div className="text-left flex flex-col gap-2.5">
                <h2 className='font-Bold text-[15px] dark:text-titleDark sm:text-[18px] max-w-[496px]'>
                    Welcome to the Lil Frenz Group (LFG)
                </h2>
                <p className="font-Regular dark:text-textDark text-[14px] sm:text-base opacity-60 max-w-[496px]">
                   Lil Frenz Group is a dynamic NFT collection coming to Ethereum very soon. Lil Frenz started with this idea; Instead of generating
                </p>
                <p className='font-Medium dark:text-textDark opacity-30 text-[10px] sm:text-[13px]'>Aug 22, 2022 • Mirror</p>
            </div>
            <div className="text-left flex flex-col gap-2.5">
                <h2 className='font-Bold dark:text-titleDark text-[15px] sm:text-[18px] max-w-[496px]'>
                    Open-Source 3dicons Library: Case Study And Free Downloads
                </h2>
                <p className="font-Regular dark:text-textDark text-[14px] sm:text-base opacity-60 max-w-[496px]">
                  In this article, I describe my learning experiences during the design stages of creating the 3dicons image library (a free library
                </p>
                <p className='font-Medium dark:text-textDark opacity-30 text-[10px] sm:text-[13px]'>May 7, 2022 • Smashingmagzine</p>
            </div>
             
        </div>
        <Footer></Footer>
   </>
  )
}
