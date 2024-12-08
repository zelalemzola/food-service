import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Leaf, Menu } from 'lucide-react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='fixed py-2 px-5 md:px-20 flex items-center justify-between w-full bg-background  z-20'>
        <Link href='/' className='text-2xl text-primary flex items-center gap-1'>Tena <span className='text-secondary '> Meaza</span> <Leaf fill='green' color='white'/></Link>
        <div className="hidden md:flex items-center gap-10">
            <Link className='text-gray-600 hover:text-primary text-lg dark:text-white dark:hover:text-primary' href='/'>Home</Link>
            <Link className='text-gray-600 hover:text-primary text-lg dark:text-white dark:hover:text-primary' href='/about'>About</Link>
            <Link className='text-gray-600 hover:text-primary text-lg dark:text-white dark:hover:text-primary' href='/services'>Services</Link>
            <Link className='text-gray-600 hover:text-primary text-lg dark:text-white dark:hover:text-primary' href='/blogs'>Blog</Link>
            <Link className='text-gray-600 hover:text-primary text-lg dark:text-white dark:hover:text-primary' href='/workers'>Workers</Link>
            
        </div>
        <div className='flex items-center gap-4'>
        <ThemeToggle/>
        <div className='block md:hidden'>
        
           <Drawer>
             <DrawerTrigger>
              <Menu className='text-secondary ' size={32}/>
             </DrawerTrigger>
             <DrawerContent>
               <div className="flex flex-col items-center gap-3">
            <Link className='text-gray-600 hover:bg-primary hover:text-white text-lg dark:text-white dark:hover:bg-secondary px-3 py-2 rounded-xl' href='/'>Home</Link>
            <Link className='text-gray-600 hover:bg-primary hover:text-white text-lg dark:text-white dark:hover:bg-secondary px-3 py-2 rounded-xl' href='/about'>About</Link>
            <Link className='text-gray-600 hover:bg-primary hover:text-white text-lg dark:text-white dark:hover:bg-secondary px-3 py-2 rounded-xl' href='/services'>Services</Link>
            <Link className='text-gray-600 hover:bg-primary hover:text-white text-lg dark:text-white dark:hover:bg-secondary px-3 py-2 rounded-xl' href='/blogs'>Blog</Link>
            <Link className='text-gray-600 hover:bg-primary hover:text-white text-lg dark:text-white dark:hover:bg-secondary px-3 py-2 rounded-xl' href='/workers'>Workers</Link>
            
                  </div>
               <DrawerFooter>
                 <DrawerClose>
                   <Button variant="outline">Close</Button>
                 </DrawerClose>
               </DrawerFooter>
             </DrawerContent>
           </Drawer>

        </div>

        </div>
    </div>
  )
}

export default Navbar