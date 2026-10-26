'use client'
import LinkButton from "@/components/shared/link-button";
import Image from "next/image";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { TextAnimate } from "../ui/text-animate";

export function ContactButton({ children }: { children: React.ReactNode }) {
   return (<>
      <div className="relative flex items-center justify-center w-full p-3 overflow-hidden text-xs text-center duration-300 border rounded-full cursor-pointer group border-primary h-fit hover:bg-primary hover:text-background">
         {children}
      </div>
   </>)
}

export default function Hero() {

   const container = useRef<HTMLDivElement | null>(null)

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end start"],
   })


   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0px", "100px"])
   const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1])

   return (<>
      <div ref={container} className="grid grid-cols-2 gap-12 py-20 mt-20 wrapper">
         <div className="relative overflow-hidden h-160">
            <motion.div
               style={{
                  y: backgroundY,
                  scale: backgroundScale,
               }}
               className="absolute z-0 inset-0 h-[calc(640px+100px)] will-change-transform"
            >
               <Image src="/home/hero.png" alt="bg" fill className="relative z-0 object-cover" />
            </motion.div>
         </div>
         <div className="space-y-8">
            <div className="space-y-4">
               <h1>Contact Us</h1>
               <p className="text-foreground/75">
                  Whether you&apos;re browsing our collections, considering a custom design, or simply seeking assistance, we&apos;re here to help. Share your inquiry with us, and our team will respond with the guidance and care you expect from us.
               </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 space-y-6 rounded-lg cursor-pointer bg-primary/5">
                  <div className="space-y-1">
                     <h4 className="font-light">Call Us</h4>
                     <p className="text-foreground/75">Mon-Sat / 10AM-7PM (IST)</p>
                  </div>
                  <ContactButton>+91 0000000000</ContactButton>
               </div>
               <div className="p-6 space-y-6 rounded-lg cursor-pointer bg-primary/5">
                  <div className="space-y-1">
                     <h4 className="font-light">Email Us</h4>
                     <p className="text-foreground/75">We&apos;d love to hear from you.</p>
                  </div>
                  <ContactButton>
                     shop@tibetanstudio.com
                  </ContactButton>
               </div>
               <div className="col-span-2 p-6 space-y-6 rounded-lg cursor-pointer bg-primary/5">
                  <div className="space-y-1">
                     <h4 className="font-light">Message Us</h4>
                     <p className="text-foreground/75">Our advisors will reply to you as soon as possible.</p>
                  </div>
                  <div className="flex items-center gap-4">
                     <ContactButton>
                        Schedule A Call
                     </ContactButton>
                     <ContactButton>
                        WhatsApp Us
                     </ContactButton>
                  </div>
               </div>
               <div className="flex items-center justify-center col-span-2 pt-8">
                  <LinkButton href="/collections">
                     Visit Our Store
                  </LinkButton>
               </div>
            </div>
         </div>
      </div>
   </>)
}