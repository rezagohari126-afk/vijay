import React from 'react'
import NavBar from '../../../component/navBar'
import Background from '../../../component/background'
import { RiShining2Fill } from "react-icons/ri";
import { PiPlanetBold } from "react-icons/pi";
import { FiTwitter } from 'react-icons/fi';
import NftCard from '../../../component/nftCard';
import Footer from '../../../component/footer';


export default function Nft() {


  return (
    <>
       <Background></Background>
       <NavBar></NavBar>
      <div className="container flex flex-col justify-center  items-center mt-[270px]">
          <img src="/images/robot.png" alt="robot" />
          <p className='text-lightGray font-Regular text-[24px] mt-[17px] dark:text-titleDark '>Welcom to</p>

          <p className='font-Bold text-[25px] sm:text-[32px] bg-[linear-gradient(to_right,#4AB1F1_0%,#566CEC_33%,#D749AF_66%,#FF7C51_100%)] bg-clip-text text-transparent'>metaverse of realvjy</p>

          <p className="font-Regular text-[15px] sm:text-[18px] max-w-[517px] text-center mt-2 dark:text-textDark ">My digital arts are also available to collect from various NFT platforms</p>

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
       <span className='flex flex-row gap-1 px-3 rounded-[21px] py-1.5 font-Medium text-base text-[#1C309D] bg-[linear-gradient(to_right,#C3C2FF_0%,#9DBEFF_100%)] '>


          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 15.06V13.806C24 13.69 23.888 13.606 23.778 13.638L17.856 15.35C17.824 15.358 17.796 15.376 17.774 15.4C17.1396 16.1008 16.6005 16.571 16.4578 16.6955L16.448 16.704C16.08 17.016 15.624 17.186 15.144 17.186H13V15H14.704C14.748 15 14.79 14.984 14.822 14.956L15.042 14.754C15.136 14.668 15.248 14.564 15.382 14.43C15.3933 14.4187 15.4047 14.4073 15.4162 14.3958C15.4867 14.3256 15.5621 14.2505 15.636 14.168C15.724 14.082 15.81 13.986 15.89 13.892C16.024 13.748 16.152 13.598 16.286 13.44C16.382 13.336 16.47 13.218 16.556 13.1C16.652 12.988 16.746 12.862 16.834 12.742C16.8666 12.6941 16.9013 12.6457 16.9367 12.5963C16.9708 12.5486 17.0057 12.5 17.04 12.45C17.104 12.354 17.168 12.252 17.222 12.156C17.39 11.896 17.532 11.618 17.652 11.34C17.707 11.2211 17.751 11.096 17.7937 10.9743C17.7992 10.9588 17.8046 10.9434 17.81 10.928C17.858 10.786 17.898 10.652 17.928 10.51C18 10.176 18.016 9.84398 17.984 9.51201C17.976 9.40802 17.968 9.30601 17.944 9.20998V9.19402C17.936 9.12601 17.92 9.05001 17.898 8.98001C17.826 8.656 17.714 8.332 17.572 8.014C17.524 7.89599 17.468 7.77599 17.414 7.66598C17.286 7.42802 17.152 7.19001 17 6.96C16.9695 6.91136 16.9357 6.86209 16.9021 6.8129C16.8762 6.77512 16.8503 6.73738 16.826 6.70001C16.7297 6.55141 16.6214 6.40816 16.5163 6.26917C16.4926 6.23791 16.4692 6.20686 16.446 6.17602C16.384 6.09458 16.3161 6.01314 16.2477 5.93116C16.2103 5.8863 16.1728 5.84127 16.136 5.79599C16.032 5.66998 15.93 5.54998 15.826 5.43201C15.454 5.01201 15.064 4.63198 14.716 4.30802C14.652 4.24399 14.582 4.18001 14.51 4.11798C14.24 3.87201 13.994 3.65801 13.788 3.49198C13.726 3.44424 13.6703 3.39721 13.6185 3.35344C13.5835 3.32387 13.5503 3.29579 13.518 3.26998C13.4546 3.22273 13.3996 3.18087 13.3537 3.14587C13.3258 3.1246 13.3012 3.10586 13.28 3.08998C13.264 3.078 13.246 3.06999 13.228 3.06398L13 3V1.11201C13 0.804009 12.876 0.528017 12.678 0.325998C12.48 0.123979 12.204 0 11.9 0C11.292 0 10.8 0.497996 10.8 1.11201V2.38399L10.686 2.35198L10.376 2.26399L10.094 2.186C10.0932 2.186 10.0924 2.18566 10.0914 2.18526C10.09 2.18469 10.0883 2.18401 10.086 2.18401H10.08L7.93999 1.60399C7.84603 1.578 7.766 1.68 7.81402 1.766L8.15602 2.39801C8.17546 2.44665 8.20011 2.4953 8.22543 2.54529C8.24175 2.57751 8.25835 2.61028 8.27403 2.64398C8.33001 2.75602 8.38603 2.87399 8.44002 2.992C8.48799 3.09599 8.53601 3.198 8.59203 3.30999C8.61561 3.36274 8.63964 3.41613 8.66403 3.47028C8.75336 3.66869 8.84729 3.87732 8.94 4.10202L8.94076 4.10382C9.02049 4.29322 9.10024 4.48263 9.17001 4.68C9.36199 5.178 9.54403 5.70999 9.70201 6.25601C9.7413 6.37805 9.7727 6.49618 9.80452 6.61589C9.81806 6.66684 9.83168 6.71807 9.84601 6.77001L9.86799 6.866C9.93201 7.12001 9.98799 7.372 10.028 7.62601C10.06 7.8 10.09 7.96598 10.106 8.134C10.13 8.32398 10.154 8.514 10.162 8.70398C10.178 8.87801 10.186 9.06 10.186 9.23399C10.186 9.678 10.146 10.106 10.052 10.51C10.0462 10.5316 10.0403 10.5535 10.0344 10.5755C10.008 10.6739 9.98067 10.776 9.94802 10.874C9.91837 10.9792 9.87997 11.0844 9.84008 11.1937C9.82613 11.2319 9.812 11.2706 9.798 11.31C9.7957 11.3162 9.79341 11.3223 9.79111 11.3285C9.76139 11.4086 9.73114 11.4902 9.694 11.57C9.49601 12.046 9.24999 12.52 8.99602 12.964C8.624 13.622 8.25002 14.2 7.988 14.572C7.97206 14.5959 7.95652 14.6186 7.94153 14.6406C7.92268 14.6681 7.90473 14.6944 7.88803 14.72C7.80601 14.836 7.89002 15 8.032 15H10.8V17.186H8.00003C7.24802 17.186 6.55203 16.76 6.21599 16.078C6.042 15.736 5.974 15.36 6.01402 14.992C6.02401 14.882 5.94199 14.778 5.82999 14.778H0.17403C0.0779956 14.778 0 14.856 0 14.952V15.068C0 18.676 2.914 21.6 6.51002 21.6H16.656C18.5579 21.6 19.6378 19.8669 20.6993 18.1634C20.9951 17.6886 21.2896 17.216 21.6 16.784C22.158 16.008 23.5 15.392 23.892 15.224C23.956 15.196 24 15.132 24 15.06Z" fill="currentColor"/>
<path d="M1.512 12.202L1.42799 12.334C1.35401 12.448 1.43599 12.6001 1.57598 12.6001H6.78399C6.842 12.6001 6.89599 12.572 6.928 12.524C6.996 12.4201 7.05998 12.312 7.11799 12.202C7.56802 11.446 7.96799 10.628 8.11399 10.024C8.45599 8.55605 7.726 6.19805 6.87998 4.30201C6.82401 4.17604 6.64998 4.16402 6.576 4.28004L1.512 12.202Z" fill="currentColor"/>

       </svg>  
            Opensea
       </span>


       <span className='flex flex-row items-center gap-1 px-3 rounded-[21px] py-1.5 font-Medium text-base text-[rgba(92,27,174,80%)] bg-[linear-gradient(to_right,#F0D6FF_0%,#E0D1FF_54%,#D3CDFF_100%)] '>


          <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4458 3.90482C15.4458 6.06139 13.6937 7.80964 11.5323 7.80964C9.371 7.80964 7.61889 6.06139 7.61889 3.90482C7.61889 1.74825 9.371 0 11.5323 0C13.6937 0 15.4458 1.74825 15.4458 3.90482Z" fill="#0A0A0D"/>
<path d="M15.9243 0.596806C15.9243 0.399042 16.085 0.238723 16.2832 0.238723H22.9139C23.1121 0.238723 23.2727 0.399042 23.2727 0.596807V7.19578C23.2727 7.39355 23.1121 7.55387 22.9139 7.55387H16.2832C16.085 7.55387 15.9243 7.39355 15.9243 7.19578V0.596806Z" fill="currentColor"/>
<path d="M4.09663 0.301321C4.05032 0.328647 4.01235 0.394275 3.9364 0.525531L0.114497 7.13065C0.0385489 7.2619 0.000574674 7.32753 1.12959e-05 7.38121C-0.000772012 7.45584 0.0392331 7.52498 0.104402 7.56162C0.151273 7.58797 0.227221 7.58797 0.379118 7.58797H8.02292C8.17482 7.58797 8.25077 7.58797 8.29764 7.56162C8.36281 7.52498 8.40281 7.45584 8.40203 7.38121C8.40146 7.32753 8.36349 7.2619 8.28754 7.13065L4.46564 0.525531C4.38969 0.394275 4.35172 0.328647 4.30541 0.301321C4.24102 0.263328 4.16101 0.263328 4.09663 0.301321Z" fill="currentColor"/>
          </svg>
        Foundation
       </span>


       <span className='flex flex-row items-center gap-1 px-3 rounded-[21px] py-1.5 font-Medium text-base text-[rgba(140,0,126,80%)] bg-[linear-gradient(to_right,#FBCEFF_0%,#FFD1D1_100%)] '>

              <svg width="18" height="20" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.72621 0.462673C10.0626 -0.154224 10.9375 -0.154224 11.2738 0.462673C11.9843 1.76577 13.0664 3.82357 14.0075 5.91849C12.782 6.0428 11.5677 6.20768 10.5 6.42637C9.43236 6.20768 8.21799 6.0428 6.99256 5.91849C7.93365 3.82358 9.01572 1.76577 9.72621 0.462673Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M5.67822 9.21314C6.02285 8.17822 6.4874 7.04301 6.99256 5.91849C4.70967 5.6869 2.38839 5.59609 0.905813 5.56048C0.203953 5.54362 -0.233516 6.30214 0.131997 6.90218C0.904085 8.16968 2.14328 10.1367 3.48507 12C2.14328 13.8633 0.904085 15.8303 0.131997 17.0978C-0.233516 17.6979 0.203954 18.4564 0.905813 18.4395C2.38839 18.4039 4.70967 18.3131 6.99256 18.0815C7.93365 20.1764 9.01572 22.2342 9.72621 23.5373C10.0626 24.1542 10.9375 24.1542 11.2738 23.5373C11.9843 22.2342 13.0664 20.1764 14.0075 18.0815C16.2904 18.3131 18.6116 18.4039 20.0942 18.4395C20.796 18.4564 21.2335 17.6979 20.868 17.0978C20.0959 15.8303 18.8567 13.8633 17.5149 12C18.8567 10.1367 20.0959 8.16968 20.868 6.90218C21.2335 6.30214 20.796 5.54363 20.0942 5.56048C18.6116 5.59609 16.2904 5.6869 14.0075 5.91849C14.5127 7.04304 14.9772 8.17828 15.3219 9.21322C15.0539 8.91068 14.7896 8.62932 14.5318 8.37545C13.7742 7.53144 12.7559 6.92663 11.6038 6.68796C11.2598 6.59317 10.8897 6.50618 10.5 6.42637C10.1103 6.50619 9.74016 6.59317 9.39616 6.68797C8.24411 6.92664 7.22587 7.53141 6.46824 8.37536C6.2105 8.62923 5.9462 8.9106 5.67822 9.21314ZM5.35419 10.2948C5.44388 9.95102 5.55316 9.58868 5.67822 9.21314C4.95519 10.0294 4.20535 10.9998 3.48507 12C4.20535 13.0002 4.95519 13.9706 5.67821 14.7868C6.02285 15.8218 6.48739 16.957 6.99256 18.0815C8.21799 17.9572 9.43236 17.7923 10.5 17.5736C11.5677 17.7923 12.782 17.9572 14.0075 18.0815C14.5127 16.957 14.9772 15.8217 15.3219 14.7868C16.0449 13.9705 16.7947 13.0002 17.5149 12C16.7947 10.9998 16.0449 10.0295 15.3219 9.21322C15.447 9.5889 15.5563 9.95137 15.646 10.2953C15.8229 10.8309 15.9188 11.4035 15.919 11.9984C15.919 11.999 15.919 11.9995 15.919 12C15.919 12.0005 15.919 12.001 15.919 12.0015C15.9188 12.5965 15.8229 13.1691 15.646 13.7047C15.5563 14.0486 15.447 14.4111 15.3219 14.7868C15.0539 15.0893 14.7896 15.3706 14.5319 15.6245C13.7742 16.4686 12.7559 17.0734 11.6037 17.3121C11.2598 17.4068 10.8896 17.4938 10.5 17.5736C10.1103 17.4938 9.74023 17.4068 9.39626 17.312C8.24415 17.0734 7.22586 16.4686 6.4682 15.6246C6.21047 15.3707 5.94618 15.0894 5.67821 14.7868C5.55315 14.4113 5.44388 14.049 5.35419 13.7052C5.17698 13.169 5.08106 12.5957 5.08106 12C5.08106 11.4043 5.17698 10.831 5.35419 10.2948Z" fill="currentColor"/>
</svg>
       Showtime
       </span>


       <span className='flex flex-row items-center gap-1 px-3 rounded-[21px] py-1.5 font-Medium text-base text-[rgba(204,61,0,80%)] bg-[linear-gradient(to_right,#FDE1BC_0%,#FFAEAE_100%)]' >
                 <svg width="18" height="13" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 3.06954e-10V17.16H7.08V11.28H15.2894C16.4295 11.28 16.92 12.0322 16.92 12.96V17.16H24V12.6831C24 9.24 21.9419 8.63069 21.12 8.4C22.3077 8.26948 23.7389 6.59065 23.7389 4.68C23.7389 1.56 21.6539 -2.52518e-05 18.5235 3.06954e-10H0ZM7.07016 6.55254V5.23887H15.8347C16.1974 5.23887 16.4915 5.53294 16.4915 5.8957C16.4915 6.25846 16.1974 6.55254 15.8347 6.55254H7.07016Z" fill="currentColor"/>
</svg>
       Showtime
       </span>
        
     </div>
     <div className="container mt-15 flex  justify-center items-center ">
       <div className="p-4 flex flex-col items-start gap-[15px] ">
           <img src="/images/Cover.png" alt="cover" className=''/>
        <p className='font-Bold dark:text-titleDark text-[16px] sm:text-[18px] text-left '>Lil frenz group</p>
        <p className='font-medium dark:text-textDark text-[15px] opacity-60 max-w-[660px] gap-[11px] '>
           A collection of dynamic NFTs. Totally driven by community and living on the Ethereum blockchain. On a mission to build the group of frenz in the metaverse with unique identity.
        </p>
         <div className="flex flex-row gap-4 ">
           <div className="flex flex-row gap-1 justify-center items-center">
               <span className='text-[20px] sm:text-[24px]  pt-0.5 gap-1 text-[orange]'>
                      <PiPlanetBold></PiPlanetBold>             
               </span>
                <p className='text-[20px] sm:text-[24px]  bg-linear-to-r from-orang via-violet to-blue bg-clip-text text-transparent'>Website</p>
           </div>
           <div className="flex flex-row gap-1 justify-center items-center">
                 <span className=' text-blue mt-1 text-[20px] sm:text-2xl'>
                        <FiTwitter></FiTwitter>
                 </span>
                 <p className='text-[20px] sm:text-[26px] 
                   bg-linear-to-r from-blue  to-turquoise bg-clip-text text-transparent'>tweet</p>
           </div>
         </div>

       </div>

     </div>
     <div className="container flex  justify-center  mt-14 ">
        <div className="grid grid-cols-2 md:grid-cols-3">
            <NftCard src='/images/nft1.png' condition='comming soon' title='LFG' price='0.7E'></NftCard>
            <NftCard src='/images/nft2.png' condition='sold' title='Skully' price='0.1E'></NftCard>
            <NftCard src='/images/nft3.png' condition='AUCTION' title='Magik Potions' price='0.2E'></NftCard>
            <NftCard src='/images/nft4.png' condition='sold' title='Figish' price='0.3E'></NftCard>
            <NftCard src='/images/nft5.png' condition='comming soon' title='Botos' price='0.4E'></NftCard>
            <NftCard src='/images/nft6.png' condition='comming soon' title='Primitivz Box' price='0.5E'></NftCard>
        </div>
     </div>

     <div className="container flex flex-col justify-center items-center mt-40 mb-20 gap-10">
        <img src="/images/Love.png" alt="love" className='dark:invert dark:brightness-200'/>
        <p className='max-w-[391px] h-[75px] font-Regular dark:text-textDark text-center sm:text-base tracking-[-2%]'>
           Thank you for all my collectors and welcome to <span className='font-Bold dark:text-titleDark'>discord </span> — for giveaways, announcements and friendly support
        </p>
     </div>
     <Footer></Footer>
    
    </>
  )
}
