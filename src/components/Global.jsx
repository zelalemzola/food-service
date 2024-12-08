import Image from 'next/image'
import React from 'react'
import BlurFade from './ui/blur-fade'

const Global = () => {
  return (
    <div className='mx-5 md:mx-20 py-10 flex  flex-col items-center  md:flex-row gap-5 md:gap-0'>
        <div className='flex-1 w-full md:w-1/2 flex items-center justify-center'>
          <BlurFade  delay={0.45} inView>
        <Image src='/global.png' alt='Global Reach' width={540} height={540} className=''/>
        </BlurFade>
        </div>
        <div className='flex-1 w-full md:w-1/2 flex items-start flex-col gap-4'>
          <BlurFade  delay={0.55} inView>
          <h1 className="text-3xl md:text-4xl border-l-8 border-l-secondary  pb-5 px-3">Serving a World of Needs</h1>
          </BlurFade>

            <BlurFade  delay={0.65} inView>
          <p className='text-xl text-gray-400 dark:text-gray-200'>Our reach extends to various sectors, ensuring that everyone—from individual households to large-scale industries—has access to premium food products.</p>
          </BlurFade>

            <BlurFade  delay={0.75} inView>
          <p className='text-gray-400 dark:text-gray-200 text-lg'>We proudly Serve:</p>
          </BlurFade>

            <BlurFade  delay={0.85} inView>
           <div className='flex items-center gap-3 flex-wrap'>
          
          <p className='text-secondary text-md'>Retail</p>
          
          <p className='text-secondary text-md'>Industrial</p>
          
          <p className='text-secondary text-md'>Club Stores</p>
          
          <p className='text-secondary text-md'>Food Service</p>
         
          </div>
          </BlurFade>


        </div>
        
    </div>
  )
}

export default Global