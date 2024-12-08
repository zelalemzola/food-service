import Link from 'next/link';
import React from 'react'
import { ArrowRightCircle } from 'lucide-react'
import Image from 'next/image'
import BlurFade from './ui/blur-fade';
const Promise = () => {
  return (
    <div>
    <div className='mx-5 md:mx-20 flex flex-col gap-5 items-start h-fit md:h-screen py-10'>
    <div className=' '>
      
    <div className='border-l-8 border-l-secondary flex items-start flex-col gap-4 px-4 '>
        <BlurFade  delay={0.35} inView>
     <h1 className='text-3xl md:text-4xl text-[#141414] dark:text-white'>Our Promise to You</h1>
     </BlurFade>
       <BlurFade  delay={0.45} inView>
     <p className='text-gray-400 dark:text-gray-100 text-md w-full md:w-2/3'>
       At Tena Meaza, we go beyond food production; we deliver excellence and convenience. Here&apos;s what sets us apart
     </p>
     </BlurFade>
     </div>
     {/* <Link href='/' className='rounded-full py-2 px-2 flex items-center gap-3 bg-primary text-white hover:shadow-2xl w-fit text-nowrap text-lg '>Read More <ArrowRightCircle/></Link> */}
     </div>
     <div className="flex flex-col md:flex-row gap-6 items-center my-6">
        <BlurFade  delay={0.55} inView>
      <div className="flex flex-col items-center gap-4 hover:shadow-xl w-full  border shadow-lg rounded-2xl px-4 py-5">
        <Image src='/badge.png' alt='Quality' width={100} height={100}/>
        <h2 className='text-2xl text-nowrap'>High-Quality Products</h2>
        <p className='text-gray-400 dark:text-gray-200 w-full text-center'>Every item is carefully sourced and processed to ensure premium quality.</p>
      </div>
      </BlurFade>
          <BlurFade  delay={0.65} inView>
      <div className="flex flex-col items-center gap-4 hover:shadow-xl w-full  border shadow-lg rounded-2xl px-4 py-5">
        <Image src='/vegetables.png' alt='Quality' width={100} height={100}/>
        <h2 className='text-2xl text-nowrap'>Diverse Selections </h2>
        <p className='text-gray-400 dark:text-gray-200 w-full text-center'>Tailored to suit a variety of preferences and dietary needs.
</p>
      </div>
      </BlurFade>
       
         <BlurFade  delay={0.75} inView>
      <div className="flex flex-col items-center gap-4 hover:shadow-xl w-full  border shadow-lg rounded-2xl px-4 py-5">
        <Image src='/convenience.png' alt='Quality' width={100} height={100}/>
        <h2 className='text-2xl text-nowrap'>Convenience</h2>
        <p className='text-gray-400 dark:text-gray-200 w-full text-center'>Flexible delivery options and accessible pickup locations designed for your lifestyle.</p>
      </div>
      </BlurFade>
      
     </div>
    </div>
    </div>
  );
}

export default Promise