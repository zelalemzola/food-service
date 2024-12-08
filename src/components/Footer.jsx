import { Facebook, Instagram, Leaf, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bottom-0 left-0 w-full h-auto pt-6 flex items-center justify-between flex-col md:flex-row   border-t border-primary rounded-t-2xl  px-5 md:px-20 py-5 gap-5 md:gap-0'>
        <div className="flex flex-col gap-4 items-start">
            <div className='flex items-end gap-3 flex-wrap'>
               
                <p className='text-2xl font-bold text-primary flex items-center gap-1'>Tenaye <span className='text-secondary'>Meaza</span><Leaf fill='green' color='white'/></p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-4 flex-wrap">
                <Link href='/about' className='text-sm md:text-md text-primary font-light'>About</Link>
                <Link href='/services' className='text-sm md:text-md text-primary font-light'>services</Link>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <Link href='/chat' className='text-sm md:text-md text-primary font-light'>Contact</Link>
                <Link href='/' className='text-sm md:text-md text-primary font-light'>Terms and conditions</Link>
              </div>
            </div>
        </div>
        <div className="flex flex-row flex-wrap gap-7 md:gap-20">
              <Instagram className='text-lg text-primary  p-1  font-bold scale-[200%]' />
              <Facebook className='text-lg text-primary  p-1   font-bold scale-[200%]' />
              <Twitter className='text-lg text-primary p-1   font-bold scale-[200%]' />
              <Linkedin className='text-lg text-primary p-1  font-bold scale-[200%]' />

        </div>
    </div>
  )
}

export default Footer