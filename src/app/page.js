import Faq from "@/components/Faq";
import Global from "@/components/Global";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Products from "@/components/Products";
import Promise from "@/components/Promise";
import Why from "@/components/Why";



export default function Home() {
  return (
    <div className="flex flex-col gap-7">
     <Hero/>
     <Partners/>
     <Why/>
    <Products/>
     <Promise/>
    <Global/>
    <Faq/>
    </div>
  );
}
