'use client'

import { motion } from "motion/react";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {

   const container = useRef<HTMLDivElement | null>(null)

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end center"],
   })

   const backgroundY = useTransform(scrollYProgress, [0, 1], [-100, 200])

   return (<>
      <div ref={container} className="mt-20 h-[calc(100vh-80px)] relative overflow-hidden">
         <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 h-[calc(100vh+100px)]"
         >
            <video
               autoPlay
               muted
               loop
               playsInline
               className="absolute inset-0 z-0 object-cover w-full h-full"
               src="/craftsmanship/video.MOV"
            />
         </motion.div>
      </div>
   </>)
}