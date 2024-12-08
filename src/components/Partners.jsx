"use client"
import React,{useState,useEffect} from "react";
import axios from 'axios';
import Image from "next/image";
import Marquee from "./ui/marquee";
// import Marquee from "@/components/magicui/marquee";
const Partners =()=>{
      const [partners, setPartners] = useState([]);
       useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    const response = await axios.get('/api/partners');
    setPartners(response.data.partners);
  };
  return (
     <div className='w-full md:w-auto  bg-gray-300 dark:bg-gray-300 mx-auto md:mx-20 my-10'>
    {/* <h1 className='text-4xl font-bold text-center'>Our Partners</h1> */}
    <div className=' flex items-center flex-wrap flex-col md:flex-row place-content-center gap-10   px-10'>
      <Marquee  className="[--duration:20s] gap-7 max-w-full overflow-clip" repeat={100} >
      {partners.map((partner)=>(
        <div key={partner._id} className='flex items-center justify-evenly p-1 md:p-2 px-10 w-[80%] md:w-[30%]'>
        
          <Image src={partner.photoUrl} alt={partner.name} width={120} height={120} className='scale-[60%] md:scale-[100%]'/>
        </div>
      ))}
      </Marquee>
    </div>
    </div>
  );
}

export default Partners;