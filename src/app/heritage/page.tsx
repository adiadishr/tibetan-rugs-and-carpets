import About from "@/components/heritage/about";
import Hero from "@/components/heritage/hero";
import GridMotion from "@/components/ui/react-bits/grid-motion/GridMotion";
import Image from "next/image";
import TimelineSection from "./timeline";
import Navbar from "@/components/shared/navbar/navbar";

export default function Page() {

   const items = [
      'https://images.unsplash.com/photo-1705032033999-efa3082e1a4e?w=640&q=75&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1721407964262-f9864b562453?w=640&q=75&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1721407964262-f9864b562453?w=640&q=75&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1721407964262-f9864b562453?w=640&q=75&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1721407964262-f9864b562453?w=640&q=75&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1721407964262-f9864b562453?w=640&q=75&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1721407964262-f9864b562453?w=640&q=75&auto=format&fit=crop',
   ];

   return (<>
      {/* Navbar */}
      <Navbar />
      <Hero />
      {/* About */}
      <About />
      {/* Philosophy */}
      {/* <div className="wrapper py-20 bg-primary/5 mb-20 rounded-sm">
         <div className="wrapper flex items-center space-y-8 ">
            <div className="space-y-8">
               <div className="space-y-4">
                  <div className="badge text-foreground/50">Our Philosophy</div>
                  <h3 className="font-tibetan text-primary">ང་ཚོའི་མཚན་ཉིད་རིག་པ།</h3>
               </div>
               <h2 className="max-w-3xl mx-auto">
                  We believe a carpet is more than something that fills a room. It is a piece of art, shaped by time, skill, and the hands that bring it to life.
               </h2>
            </div>
            <div className="size-60 relative mx-auto">
               <Image
                  src="/shared/endless-knot.png"
                  fill
                  alt="endless knot"
                  className=""
               />
            </div>
         </div>
      </div> */}
      {/* Journey */}
      <div className="wrapper pb-20">
         <h2 className="text-center mb-8">Our Journey</h2>
         <p className="text-center max-w-3xl text-base mx-auto mb-16">
            Each cashmere piece is brought to life by experienced artisans who blend traditional techniques with modern precision. From spinning to weaving, every step is handled with care to preserve the softness and strength of the fiber. The result is a product that reflects dedication, heritage, and refined craftsmanship.
         </p>
         <TimelineSection />
      </div>
      {/* Images Alt */}
      {/* <div className="grid grid-cols-4 gap-2 px-2 h-120">
         <div className="flex flex-col h-full gap-2">
            <div className="relative w-full h-4/10 shrink-0">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
            <div className="relative w-full h-full">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
         </div>
         <div className="flex flex-col h-full gap-2">
            <div className="relative w-full h-full">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
            <div className="relative w-full h-4/10 shrink-0">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
         </div>
         <div className="flex flex-col h-full gap-2">
            <div className="relative w-full h-4/10 shrink-0">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
            <div className="relative w-full h-full">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
         </div>
         <div className="flex flex-col h-full gap-2">
            <div className="relative w-full h-full">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
            <div className="relative w-full h-4/10 shrink-0">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
         </div>
      </div> */}
      {/* Images */}
      <div className="wrapper">
         <div
            className="relative w-full mb-20 h-96"
         >
            <GridMotion
               items={items}
               rows={1}
               aspectRatio={1.1}
               gap={12}
               radius={8}
               angle={0}
               tilt={0}
               speed={24}
               direction="alternate"
               parallax={0.5}
               spotlight={0.12}
               dim={0.12}
               fade={0.12}
               grayscale={false}
            />
         </div>
      </div>
   </>)
}