'use client'

import { cn } from "cn"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

function Navlink({ children, href }: { children: React.ReactNode, href: string }) {
   return (<>
      <Link href={href} className="relative overflow-hidden group">
         <div className="static text-xs uppercase duration-300 group-hover:-translate-y-full ease-out-quart">
            {children}
         </div>
         <div className="absolute bottom-0 text-xs uppercase duration-300 translate-y-full group-hover:translate-y-0 ease-out-quart group-hover:delay-100">
            {children}
         </div>
      </Link>
   </>)
}

interface NavbarProps {
   isTransparentTop?: boolean
}

export default function Navbar({ isTransparentTop = true }: NavbarProps) {

   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(
            window.scrollY > window.innerHeight * 0.5
         );
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll, {
         passive: true,
      });

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const isSolid = !isTransparentTop || isScrolled;

   return (<>
      <nav
         className={cn(
            "fixed top-0 z-50 w-full h-fit text-background bg-transparent duration-300 ease-out-quart",
            isSolid && "bg-white text-foreground"
         )}
      >
         <div
            className={cn(
               "flex items-center justify-between h-20 wrapper duration-300 ease-out-quart",
               isScrolled && "h-18"
            )}>
            <div className="flex items-center gap-16">
               <Navlink href="/">Home</Navlink>
               <Navlink href="/collections">Collections</Navlink>
               <Navlink href="/craftsmanship">Crafstmanship</Navlink>
               <Navlink href="/heritage">Heritage</Navlink>
            </div>
            <Link href="/" className="absolute -translate-x-1/2 -translate-y-1/2 h-fit w-fit top-1/2 left-1/2">
               <div
                  className={cn(
                     "relative aspect-video h-14 duration-400 delay-50",
                     isScrolled && "h-13"
                  )}
               >
                  <Image
                     src="/shared/logo.svg"
                     alt="logo"
                     fill
                     className={cn(
                        "object-contain",
                        isSolid && "brightness-0"
                     )}
                  />
               </div>
            </Link>
            <div className="flex items-center gap-16">
               <Navlink href="/collections">Gallery</Navlink>
               <Navlink href="/collections">Journal</Navlink>
               <Navlink href="/collections">Bespoke</Navlink>
               <Navlink href="/get-in-touch">Get In Touch</Navlink>
            </div>
         </div>
      </nav>
   </>)
}