'use client'
import LinkButton from "@/components/shared/link-button";
import Image from "next/image";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { TextAnimate } from "../ui/text-animate";

export default function Crafstmanship() {

   const container = useRef<HTMLDivElement | null>(null)

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   })

   const backgroundY = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"])

   return (<>
      <section ref={container} className="overflow-hidden h-fit">
         <div className="relative flex items-center justify-center wrapper h-[512px]">
            {/* Background */}
            <motion.div
               style={{ y: backgroundY }}
               className="absolute inset-x-0 top-0 h-[calc(512px+128px)] will-change-transform"
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
            <div
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
               <LinkButton light href="/collections">Learn More</LinkButton>
            </div>
         </div>
      </section>
   </>)
}