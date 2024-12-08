import { ArrowRight, ArrowRightCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BlurFade from './ui/blur-fade'

const Products = () => {
  return (
     <div className='mx-5 md:mx-20 flex flex-col gap-5 items-center h-fit md:h-screen py-10'>
    <div className='flex flex-col md:flex-row items-center justify-between md:justify-normal'>
    <div className='flex flex-col items-start gap-3  border-l-8 border-l-secondary pb-5 px-3'>
      <BlurFade  delay={0.35} inView>
     <h1 className='text-3xl md:text-4xl text-[#141414] dark:text-white '>Our Products</h1>
     </BlurFade>
     <BlurFade  delay={0.45} inView>
     <p className='text-gray-400 dark:text-gray-100 text-md w-full '>
        From Farm to Fork, We Deliver Excellence
     </p>
     </BlurFade>
     </div>
    
     </div>
     <div className="flex flex-col md:flex-row gap-6  my-6">
      <div className="flex flex-col items-center gap-4 hover:shadow-xl w-full   border shadow-lg rounded-2xl px-4 md:px-10 py-5">
        <Image src='/freshProduce.png' alt='Quality' width={120} height={120}/>
        <BlurFade  delay={0.55} inView>
        <h2 className='text-2xl text-nowrap'>Fresh Produce</h2>
        </BlurFade>
        <BlurFade  delay={0.65} inView>
        <p className='text-gray-400 dark:text-gray-200 w-full text-center text-nowrap'>Fresh Vegetables, Fruits, Herbs</p>
        </BlurFade>
      </div>
      <div className="flex flex-col items-center gap-4 hover:shadow-xl w-full   border shadow-lg rounded-2xl px-4 md:px-10  py-5">
        <Image src='/frozen.png' alt='Quality' width={120} height={120}/>
          <BlurFade  delay={0.75} inView>
        <h2 className='text-2xl text-nowrap'>Frozen Products</h2>
        </BlurFade>
          <BlurFade  delay={0.85} inView>
        <p className='text-gray-400 dark:text-gray-200 w-full text-center text-nowrap'>Frozen Vegetables, Fruits, Herbs</p>
         </BlurFade>
      </div>
      <div className="flex flex-col items-center gap-4 hover:shadow-xl w-full  border shadow-lg rounded-2xl px-4 md:px-10  py-5">
        <Image src='/cereal.png' alt='Quality' width={90} height={90}/>
          <BlurFade  delay={0.95} inView>
        <h2 className='text-2xl text-nowrap'>Cereals</h2>
        </BlurFade>
          <BlurFade  delay={1.05} inView>
        <p className='text-gray-400 dark:text-gray-200 w-full text-center'>Strained & Standard Grains</p>
        </BlurFade>
      </div>
      
     </div>
    </div>
  )
}

export default Products