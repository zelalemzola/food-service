import { ArrowRightCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BlurFade from './ui/blur-fade'

const Why = () => {
  return (
    <div className='mx-5 md:mx-20 flex flex-col gap-5 items-start h-fit md:h-screen py-10'>
    <div className='flex flex-col md:flex-row items-start justify-between md:justify-normal'>
    
    <div className='flex flex-col gap-4 border-l-8 border-l-secondary  items-start pb-5 px-4 '>
     <BlurFade  delay={0.35} inView>
     <h1 className='text-3xl md:text-4xl text-[#141414] dark:text-white'>Why Tena Stands Out?</h1>
     </BlurFade>
     <BlurFade  delay={0.45} inView>
     <p className='text-gray-400 dark:text-gray-100 text-md w-full md:w-2/3'>
      At Tena Meaza Food Production, we are dedicated to bridging Ethiopia&apos;s rich agricultural heritage with modern food supply solutions. Our multicultural team works passionately to ensure a seamless connection between farmers, markets, and consumers.
     </p>
     </BlurFade>
     </div>
     <BlurFade  delay={0.45} inView>
     <Link href='/' className='rounded-full py-2 px-2 flex items-center gap-3 bg-primary text-white hover:shadow-2xl w-fit text-nowrap text-lg'>Read More <ArrowRightCircle/></Link>
     </BlurFade>
     </div>
     <div className="flex flex-col md:flex-row gap-6 items-center my-6">
      <BlurFade  delay={0.35} inView>
      <div className="flex flex-col items-center gap-4 hover:shadow-xl w-full  border shadow-lg rounded-2xl px-4 py-5">
        <Image src='/achievement.png' alt='Quality' width={100} height={100}/>
        <h2 className='text-2xl text-nowrap'>Quality Assurance</h2>
        <p className='text-gray-400 dark:text-gray-200 w-full text-center'>Our products are carefully sourced and meticulously processed.</p>
      </div>
      </BlurFade>
       <BlurFade  delay={0.45} inView>
      <div className="flex flex-col items-center gap-4 hover:shadow-xl w-full  border shadow-lg rounded-2xl px-4 py-5">
        <Image src='/options.png' alt='Quality' width={100} height={100}/>
        <h2 className='text-2xl text-nowrap'>Diverse options </h2>
        <p className='text-gray-400 dark:text-gray-200 w-full text-center'>Whether fresh, frozen, or processed, we cater to your every need.</p>
      </div>
      </BlurFade>
      <BlurFade  delay={0.55} inView>
      <div className="flex flex-col items-center gap-4 hover:shadow-xl w-full  border shadow-lg rounded-2xl px-4 py-5">
        <Image src='/planet.png' alt='Quality' width={100} height={100}/>
        <h2 className='text-2xl text-nowrap'>Sustainable Practices</h2>
        <p className='text-gray-400 dark:text-gray-200 w-full text-center'>Supporting local farmers and prioritizing eco-friendly methods.</p>
      </div>
      </BlurFade>
      
     </div>
    </div>
  )
}

export default Why