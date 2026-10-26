'use client'

import Image from "next/image";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { TextAnimate } from "../ui/text-animate";
import LinkButton from "../shared/link-button";

export default function About() {

   const container = useRef<HTMLDivElement | null>(null)
   const container2 = useRef<HTMLDivElement | null>(null)

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   })

   const { scrollYProgress: scrollYProgress2 } = useScroll({
      target: container2,
      offset: ["start end", "end start"],
   })

   const backgroundOneY = useTransform(scrollYProgress, [0, 1], ["0px", "120px"])
   const backgroundTwoY = useTransform(scrollYProgress, [0, 1], ["0px", "80px"])
   const backgroundThreeY = useTransform(scrollYProgress2, [0, 1], ["0px", "128px"])
   const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1])
   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

   return (<>
      <div className="wrapper py-20">
         <div className="space-y-1 mb-16">
            <h3 className="font-tibetan text-center text-primary">ང་ཚོའི་ལོ་རྒྱུས།</h3>
            <h2 className="text-center">Our Heritage</h2>
         </div>
         <div ref={container} className="h-144 max-w-5xl grid grid-cols-2 gap-4 mx-auto mb-16">
            <div className="relative overflow-hidden w-full h-full bg-black">
               <motion.div
                  style={{
                     y: backgroundOneY,
                     scale: backgroundScale,
                  }}
                  className="absolute z-0 inset-0 h-174 will-change-transform -top-30"
               >
                  <Image src="/home/hero.png" alt="bg" fill className="z-0 object-cover" />
               </motion.div>
            </div>
            <div className="relative overflow-hidden w-full h-full bg-black">
               <motion.div
                  style={{
                     y: backgroundTwoY,
                     scale: backgroundScale,
                  }}
                  className="absolute z-0 inset-0 h-164 will-change-transform -top-20"
               >
                  <Image src="/heritage/hero.png" alt="bg" fill className="z-0 object-cover" />
               </motion.div>
            </div>
         </div>
         <p className="text-center max-w-5xl mx-auto text-base mb-16">
            Long before Tibetan Rugs and Carpets became what it is today, there was a woman whose vision, determination, and appreciation for the art of weaving laid the foundation for everything that followed. With her hands, she began something that would grow beyond her own lifetime — a legacy rooted in craftsmanship, shaped by tradition, and carried forward by family.
         </p>
         <section ref={container2} className="overflow-hidden h-fit">
            <div className="relative flex items-center justify-center wrapper h-[512px]">
               {/* Background */}
               <motion.div
                  style={{ y: backgroundThreeY }}
                  className="absolute inset-x-0 -top-[128px] h-[calc(512px+128px)] will-change-transform"
               >
                  <Image
                     src="/home/craftsmanship.png"
                     alt="Craftsmanship"
                     fill
                     sizes="100vw"
                     className="object-cover"
                  />
               </motion.div>
               {/* Overlay */}
               <div className="absolute inset-0 z-1 bg-black/50" />
               {/* Content */}
               {/* <div
                        className="relative flex flex-col items-center justify-center gap-16 wrapper z-2"
                     >
                        <div className="flex flex-col items-center justify-center gap-4">
                           <TextAnimate duration={0.5} as="h2" animate="slideUp" by="word" className="text-center text-background">
                              The Art of the Craft
                           </TextAnimate>
                           <h5 className="max-w-xl mx-auto text-center text-background/75">
                              We approach carpet making not as floor covering, but as soft architecture that defines spatial volume and acoustics.
                           </h5>
                        </div>
                     </div> */}
            </div>
         </section>
      </div>
   </>)
}