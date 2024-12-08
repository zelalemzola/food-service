import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Leaf } from 'lucide-react'
import BlurFade from './ui/blur-fade'

const Faq = () => {
  return (
    <div className='h-auto px-5 md:px-20 flex  py-10 flex-col gap-6'>
      <div className='border-l-8 border-l-secondary flex items-start flex-col gap-4 px-4 '>
          <BlurFade  delay={0.45} inView>
      <h1 className='text-3xl md:text-4xl font-bold'>Any Questions?</h1>
      </BlurFade>
          <BlurFade  delay={0.55} inView>
      <p className='text-md md:text-lg text-gray-400 dark:text-gray-300 w-full md:w-[46%]'>If you have any questions, you may find your answer on this FAQ. Not answered yet? Email us on <span className='text-secondary'>tenameaza@gmail.com</span></p>
      </BlurFade>
      </div>
      <div className='flex flex-col items-center md:flex-row gap-10 w-full'>
         
       <Accordion type="single" collapsible className="w-[80%] md:w-[50%]">
         <BlurFade  delay={0.65} inView>
      <AccordionItem value="item-1">
        <AccordionTrigger ><p className='flex items-center gap-6'><Leaf color='white' fill='green' size={32}/>Is it accessible?</p></AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger ><p className='flex items-center gap-6'><Leaf color='white' fill='green' size={32}/>Is it accessible?</p></AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger ><p className='flex items-center gap-6'><Leaf color='white' fill='green' size={32}/>Is it accessible?</p></AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
       </BlurFade>
    </Accordion>
   
        
       <Accordion type="single" collapsible className="w-[80%] md:w-[50%]">
        <BlurFade  delay={0.85} inView>
      <AccordionItem value="item-1">
        <AccordionTrigger ><p className='flex items-center gap-6'><Leaf color='white' fill='green' size={32}/>Is it accessible?</p></AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger ><p className='flex items-center gap-6'><Leaf color='white' fill='green' size={32}/>Is it accessible?</p></AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger ><p className='flex items-center gap-6'><Leaf color='white' fill='green' size={32}/>Is it accessible?</p></AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
       </BlurFade>
    </Accordion>
   
    
    </div>
    </div>
  )
}

export default Faq