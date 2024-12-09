import AvatarCircles from '@/components/ui/avatar-circles';
import BlurFade from '@/components/ui/blur-fade';
import { Crosshair, Telescope, Leaf } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const avatars = [
  {
    imageUrl: "/avatar.png",
    profileUrl: "/",
  },
  {
    imageUrl: "/avatar.png",
    profileUrl: "/an",
  },
  {
    imageUrl: "/avatar.png",
    profileUrl: "/"  },
  {
    imageUrl: "/avatar.png",
    profileUrl: "/",
  },
  {
    imageUrl: "/avatar.png",
    profileUrl: "/",
  },
  {
    imageUrl: "/avatar.png",
    profileUrl: "/",
  },
];
const AboutPage = () => {
  return (
    <div className='px-5 md:px-20 py-5'>
        <div className='h-auto flex  flex-col md:flex-row'>
            <div className='flex flex-col gap-4'>
                <div className='border-l-8 border-l-secondary pb-4 px-3'>
                  <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-5xl  font-bold'>About Tena Meaza</h1>
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
                    <p className='text-gray-400  dark:text-gray-200 md:text-lg'>At Tena Meaza Food Production, we believe that food connects people, cultures, and markets. Since our inception, we&apos;ve dedicated ourselves to delivering fresh, high-quality, and sustainable food products that exceed expectations.</p>
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
        <div className='h-auto flex flex-col md:flex-row gap-5 my-20'>
            
            <div className="border shadow-md hover:shadow-xl dark:shadow-white rounded-2xl flex flex-col items-center gap-4 w-full md:w-1/2 px-4 py-4 ">
              <BlurFade  delay={0.45} inView>
                 <Crosshair size={42} className='text-primary'/>
              </BlurFade>
               <BlurFade  delay={0.55} inView>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Mission</h2>
              </BlurFade>
               <BlurFade  delay={0.65} inView>
              <p className='text-lg text-gray-400 dark:text-gray-300 text-center'>To connect Ethiopia&apos;s vibrant food markets to sustainable, global supply chains while supporting healthy living and eco-friendly practices.</p>
             </BlurFade>
            </div>
           

            
            <div className="border shadow-md hover:shadow-xl dark:shadow-white rounded-2xl flex flex-col items-center gap-4 w-full md:w-1/2 px-4 py-4 ">
               <BlurFade  delay={0.55} inView>
                 <Telescope size={42} className='text-secondary'/>
                 </BlurFade>
                  <BlurFade  delay={0.65} inView>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary">Vision</h2>
              </BlurFade>
                 <BlurFade  delay={0.75} inView>
              <p className='text-lg text-gray-400 dark:text-gray-300 text-center'>To be the leading name in Ethiopia&apos;s food production industry, celebrated for our commitment to quality, sustainability, and community.</p>
               </BlurFade>
            </div>
            
        </div>
        <div className='h-auto py-10 md:py-20'>
          <div className='border-l-8 border-l-secondary pb-4 px-3'>
             <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-5xl  font-bold'>Our Values</h1>
                </BlurFade>
              </div>
              <div className='flex items-center flex-wrap gap-5 py-20'>
                 <BlurFade  delay={0.55} inView>
              <div className="flex flex-col gap-3">
                <h2 className="flex items-center gap-2 font-bold text-xl"><Leaf fill='green'  className='text-white' size={25}/>Excellence</h2>
                <p className='text-gray-400 dark:text-gray-300'>Delivering unmatched quality at every step.</p>
              </div>
              </BlurFade>
                 <BlurFade  delay={0.65} inView>
              <div className="flex flex-col gap-3">
                <h2 className="flex items-center gap-2 font-bold text-xl"><Leaf fill='green' className='text-white' size={25}/>Intergrity</h2>
                <p className='text-gray-400 dark:text-gray-300'>Building trust through transparency.</p>
              </div>
              </BlurFade>
               <BlurFade  delay={0.75} inView>
              <div className="flex flex-col gap-3">
                <h2 className="flex items-center gap-2 font-bold text-xl"><Leaf fill='green' className='text-white' size={25}/>Sustainablity</h2>
                <p className='text-gray-400 dark:text-gray-300'> Supporting local communities and sustainable agriculture.</p>
              </div>
              </BlurFade>
             
              </div>
        </div>
        <div className='h-auto py-10 md:py-20'>
          <div className='border-l-8 border-l-secondary pb-4 px-3'>
                <h1 className=' text-2xl md:text-4xl  font-bold'>Meet Our Team</h1>
              </div>
             <p className='text-gray-400 dark:text-gray-300 text-lg py-7'>
              Behind Tena Meaza is a passionate, multicultural team committed to connecting farms to families.
             </p>
              <AvatarCircles numPeople={99} avatarUrls={avatars} />
        </div>
    </div>
  )
}

export default AboutPage