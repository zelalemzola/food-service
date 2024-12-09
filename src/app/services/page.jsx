import BlurFade from '@/components/ui/blur-fade'
import { Leaf } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='px-5 md:px-20 py-5'>
        <div className='h-auto flex  flex-col md:flex-row'>
            <div className='flex flex-col gap-4'>
                <div className='border-l-8 border-l-secondary pb-4 px-3'>
                <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-5xl  font-bold'>Our Services</h1>
                </BlurFade>
                 <BlurFade  delay={0.55} inView>
                <p className='text-gray-400 dark:text-gray-300 text-md md:text-lg w-full '>Bringing Ethiopia&apos;s Rich Harvest to the World</p>
                </BlurFade>
                </div>
                <div className='flex flex-col items-center md:flex-row gap-5 md:gap-0'>
                  <div className='flex flex-col gap-3 w-full md:w-1/2'>
                   <BlurFade  delay={0.65} inView>
                    <h1 className='text-2xl md:text-3xl'>Introduction</h1>
                    </BlurFade>
                     <BlurFade  delay={0.75} inView>
                    <p className='text-gray-400  dark:text-gray-200 md:text-lg'>At Tena Meaza, we cater to diverse market needs with a range of fresh and processed food options. Whether you&apos;re a retailer, foodservice provider, or industrial buyer, our services are designed with you in mind.</p>
                  </BlurFade>
                  </div>
                  <div className='flex flex-row  items-end justify-center w-full md:w-1/2'>
                   <BlurFade  delay={0.65} inView>
                   <Image src='/ab2.png' alt='about' width={220} height={220} className=''/>
                   </BlurFade>
                     <BlurFade  delay={0.65} inView>
                   <Image src='/ab1.png' alt='about' width={320} height={320} className=''/>
                   </BlurFade>
                  </div>
                </div>
            </div>
        </div>


        <div className='h-auto flex  flex-col md:flex-row py-20'>
            <div className='flex flex-col gap-4'>
                <div className='border-l-8 border-l-secondary pb-4 px-3'>
                   <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-4xl  font-bold'>Fresh Produce</h1>
                </BlurFade>
               
                </div>
                <div className='flex flex-col items-center md:flex-row md:justify-between gap-10 md:gap-0'>
                  <div className='flex flex-col justify-center gap-3 w-full md:w-1/2'>
                   <BlurFade  delay={0.55} inView>
                    <h1 className='text-2xl md:text-3xl'>Farm-Fresh Quality</h1>
                    </BlurFade>
                     <BlurFade  delay={0.65} inView>
                    <p className='text-gray-400  dark:text-gray-200 md:text-lg w-full'>Vegetables: Crisp and nutritious, straight from the farm.<br/>Fruits: Juicy and flavorful varieties, perfect for any occasion.<br/>Herbs: Aromatic and vibrant for your culinary creations.</p>
                     </BlurFade>
                  </div>
                  <div className='flex flex-row  items-end justify-center w-full md:w-1/2'>
                   <BlurFade  delay={0.65} inView>
                   <Image src='/ab2.png' alt='about' width={220} height={220} className=''/>
                   </BlurFade>
                    <BlurFade  delay={0.65} inView>
                   <Image src='/ab1.png' alt='about' width={320} height={320} className=''/>
                   </BlurFade>
                  </div>
                </div>
            </div>
        </div>
        <div className='h-auto flex  flex-col md:flex-row py-20'>
            <div className='flex flex-col gap-4'>
                <div className='border-l-8 border-l-secondary pb-4 px-3'>
                   <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-4xl  font-bold'>Frozen Products</h1>
                </BlurFade>
               
                </div>
                <div className='w-full flex flex-col items-center md:flex-row-reverse md:justify-between gap-10 md:gap-0'>
                  <div className='flex-1 flex flex-col justify-center gap-3 w-full md:w-1/2'>
                   <BlurFade  delay={0.55} inView>
                    <h1 className='text-2xl md:text-3xl text-nowrap'>Convenience Without Compromise</h1>
                    </BlurFade>
                     <BlurFade  delay={0.65} inView>
                    <p className='text-gray-400  dark:text-gray-200 md:text-lg w-full'>Our quick-freezing methods preserve the taste and nutrients you love.<br/>Frozen Vegetables<br/>Frozen Fruits<br/>Frozen Herbs</p>
                  </BlurFade>
                  </div>
                  <div className='flex-1 w-full md:w-1/2 flex items-center justify-center'>
                   <BlurFade  delay={0.65} inView>
                   <Image src='/service.WEBP' alt='about' width={420} height={420} className='mx-auto'/>
                   </BlurFade>
                   </div>
                 
                 
                </div>
            </div>
        </div>

         <div className='h-auto flex  flex-col md:flex-row py-20'>
            <div className='flex flex-col gap-4'>
                <div className='border-l-8 border-l-secondary pb-4 px-3'>
                   <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-4xl  font-bold'>Cereals</h1>
                </BlurFade>
               
                </div>
                <div className='flex flex-col items-center md:flex-row md:justify-between gap-10 md:gap-0'>
                  <div className='flex flex-col justify-center gap-3 w-full md:w-1/2'>
                   <BlurFade  delay={0.55} inView>
                    <h1 className='text-2xl md:text-3xl'>Quality Grains for Every Need</h1>
                    </BlurFade>
                     <BlurFade  delay={0.65} inView>
                    <p className='text-gray-400  dark:text-gray-200 md:text-lg w-full'>Selected Grains: Premium cereals chosen for excellence.
Standard Grains: Reliable options for everyday use.</p>
</BlurFade>
                  </div>
                  <div className='flex flex-row  items-end justify-center w-full md:w-1/2'>
                   <BlurFade  delay={0.65} inView>
                   <Image src='/ab2.png' alt='about' width={220} height={220} className=''/>
                   </BlurFade>
                    <BlurFade  delay={0.65} inView>
                   <Image src='/ab1.png' alt='about' width={320} height={320} className=''/>
                   </BlurFade>
                  </div>
                </div>
            </div>
        </div>
        
         <div className='h-auto py-10 md:py-20'>
          <div className='border-l-8 border-l-secondary pb-4 px-3'>
             <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-4xl  font-bold'>Markets We Serve</h1>
                </BlurFade>
              </div>
              <div className='flex items-center flex-wrap gap-5 py-20'>
               <BlurFade  delay={0.55} inView>
                <h2 className="flex items-center gap-2 font-bold text-xl"><Leaf fill='green'  className='text-white' size={25}/>Retail</h2>
              </BlurFade>
              
                <BlurFade  delay={0.65} inView>
                <h2 className="flex items-center gap-2 font-bold text-xl"><Leaf fill='green' className='text-white' size={25}/>Industrial</h2>
               </BlurFade>
                  <BlurFade  delay={0.75} inView>
                <h2 className="flex items-center gap-2 font-bold text-xl"><Leaf fill='green' className='text-white' size={25}/>Club Stores</h2>
                  </BlurFade>
                   <BlurFade  delay={0.85} inView>
                <h2 className="flex items-center gap-2 font-bold text-xl"><Leaf fill='green' className='text-white' size={25}/>Food Services</h2>
               </BlurFade>
             
              </div>
        </div>
        </div>
  )
}

export default Services