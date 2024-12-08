import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BlurFade from './ui/blur-fade'

const Hero = () => {
  return (
    <div className='mx-5 md:mx-20 px-2 md:px-10  py-10 rounded-xl shadow-xl dark:shadow-md dark:shadow-primary flex items-center flex-col md:flex-row  md:h-[80vh] '>
      <div className="w-full md:w-[50%] flex-1 flex flex-col gap-2 md:gap-5 items-start">
        <BlurFade  delay={0.35} inView>
        <h1 className='text-3xl md:text-5xl text-[#141414] dark:text-white'><b className='text-primary'>Freshness You Can Taste, </b><br/> Quality You Can Trust</h1>
        </BlurFade>
        <BlurFade  delay={0.45} inView>
        <p className='text-md md:text-lg text-gray-400 dark:text-300 w-full md:w-2/3'>From Ethiopia&apos;s rich soil to your table, we bring the finest fruits, vegetables, and cereals – fresh, frozen, and always exceptional.</p>
       </BlurFade>

       <BlurFade  delay={0.55} inView>
        <Link href='/' className='bg-secondary dark:bg-secondary cursor-pointer text-white rounded-full rounded-br-none py-2 px-3 text-md md:text-lg hover:shadow-xl dark:hover:shadow-sm dark:hover:shadow-white'>Get Started</Link>
      </BlurFade>
      </div>
       <BlurFade  delay={0.45} inView>
      <Image src='/2.png' alt='grocery' width={400} height={400} className='hidden md:block object-cover -rotate-45 hover:rotate-0 transition-all ease-in-out duration-1000 -z-20'/>
       </BlurFade>

       <BlurFade  delay={0.45} inView>
      <Image src='/2.png' alt='grocery' width={250} height={250} className='block md:hidden object-cover -rotate-45  -mt-8 hover:rotate-0 transition-all ease-in-out duration-1000 -z-20'/>
      </BlurFade>
    </div>
  )
}

export default Hero