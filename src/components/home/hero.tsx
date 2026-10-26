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
            <Image src="/home/hero.png" alt="bg" fill className="relative z-0 object-cover" />
         </motion.div>
         {/* Overlay */}
         <div className="absolute inset-0 z-1 bg-black/50" />
         {/* Content */}
         <motion.div
            style={{ opacity }}
            className="relative flex flex-col items-center justify-center gap-16 wrapper z-2"
         >
            <div className="flex flex-col items-center justify-center gap-4 pt-16">
               <div className="flex flex-col -gap-4">
                  <TextAnimate duration={0.5} as="h4" animate="slideUp" by="word" className="text-center text-background/50 font-tibetan! mb-8">
                     བོད་ཀྱི་ས་གདན།

                  </TextAnimate>
                  <TextAnimate duration={0.5} as="h1" animate="slideUp" by="word" className="text-center text-5xl! text-background">
                     Where Heritage Meets
                  </TextAnimate>
                  <TextAnimate duration={0.5} as="h1" animate="slideUp" by="word" className="text-center text-5xl! text-background">
                     Contemporary Design
                  </TextAnimate>
               </div>
               <h1 className="text-center text-background"></h1>
               <p className="max-w-3xl mx-auto text-center text-background/75 font-body! text-base">
                  Handcrafted Tibetan carpets created with generations of craftsmanship, thoughtful design, and an enduring appreciation for the art of weaving.
               </p>
            </div>
            <LinkButton light href="/collections">Learn More</LinkButton>
         </motion.div>
      </section>
   </>)
}