'use client'
import LinkButton from "@/components/shared/link-button";
import Image from "next/image";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { TextAnimate } from "../ui/text-animate";

export default function Hero() {

   const container = useRef<HTMLDivElement | null>(null)

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end start"],
   })


   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
   const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1])
   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

   return (<>
      <section ref={container} className="relative flex items-center justify-center h-screen overflow-hidden">
         {/* Background */}
         <motion.div
            style={{
               y: backgroundY,
               scale: backgroundScale,
            }}
            className="absolute z-0 inset-0 h-[calc(100vh+100px)] will-change-transform"
         >
            <Image src="/heritage/hero.png" alt="bg" fill className="relative z-0 object-cover" />
         </motion.div>
         {/* Overlay */}
         <div className="absolute inset-0 z-1 bg-black/50" />
         {/* Content */}
         <motion.div
            style={{ opacity }}
            className="relative flex flex-col items-center justify-center gap-16 pt-20 wrapper z-2"
         >
            <div className="flex flex-col items-center justify-center gap-4">
               <div className="flex flex-col -gap-4">
                  <TextAnimate once duration={0.75} as="h1" animate="slideUp" by="word" className="text-center text-background leading-[180%]">
                     Oops! Looks like this page either doesn't exist or is being built! View other pages for now!
                  </TextAnimate>
               </div>
            </div>
         </motion.div>
      </section>
   </>)
}