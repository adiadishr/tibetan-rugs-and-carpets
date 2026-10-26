import Crafstmanship from "@/components/home/craftsmanship";
import Hero from "@/components/home/hero";
import LinkButton from "@/components/shared/link-button";
import Navbar from "@/components/shared/navbar/navbar";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Pag() {
   return (<>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* About */}
      <section className="relative py-20 wrapper">
         <div className="grid grid-cols-2 gap-12">
            <div className="relative w-full h-96">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center h-full">
               <div className="flex flex-col gap-8">
                  <div className="">
                     <h2>Some things are made quickly.</h2>
                     <h2>We make ours to last.</h2>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                     <p className="text-foreground/75">
                        Wool, knotted by hand, that grows softer and more particular with the years.
                     </p>
                     <p className="text-foreground/75">
                        A craft carried from Tibetan tradition into the way we work today.
                     </p>
                     <p className="text-foreground/75">
                        Designs drawn for contemporary architecture, not for trends.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* Heritage  */}
      <section className="relative wrapper bg-primary h-fit">
         <div className="relative grid grid-cols-2 gap-12 wrapper">
            <div className="flex flex-col justify-center h-full gap-8 py-20 text-background">
               <div className="">
                  <h2>Design at scale.</h2>
                  <h2>By the hands that wove it.</h2>
               </div>
               <p>
                  We approach carpet making not as floor covering, but as soft architecture that defines spatial volume and acoustics.
               </p>
               <LinkButton light href="/collections">Learn More</LinkButton>
            </div>
            <div className="relative w-full h-120">
            </div>
            <div className="absolute right-0 w-[calc(50%-24px)] h-120">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
         </div>
      </section>
      {/* Collections */}
      <section className="relative py-20 space-y-12">
         <div className="space-y-4 wrapper">
            <h2>Our Collections</h2>
            <div className="flex items-end justify-between">
               <p className="max-w-3xl text-foreground/75">
                  Crafted by hand in the Himalayan tradition, our carpets bring together natural materials, generations of knowledge, and a contemporary understanding of space.
               </p>
               <div className="bg-foreground/15 px-2.5 py-2.5 gap-6 rounded-lg flex relative">
                  <div className="absolute w-px -translate-x-1/2 -translate-y-1/2 h-2/3 bg-foreground/25 left-1/2 top-1/2" />
                  <ChevronLeftIcon strokeWidth={1.5} className="size-6 text-foreground/25" />
                  <ChevronRightIcon strokeWidth={1.5} className="size-6 text-foreground/75" />
               </div>
            </div>
         </div>
         <div className="grid grid-cols-4 gap-2 px-2 h-120">
            <div className="relative w-full h-full">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
            <div className="relative w-full h-full">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
            <div className="relative w-full h-full">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
            <div className="relative w-full h-full">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
         </div>
      </section>
      {/* Craftsmanship */}
      <Crafstmanship />
      {/* Bespoke */}
      <section className="relative py-24 wrapper">
         <div className="grid grid-cols-2 gap-12">
            <div className="grid grid-cols-2 gap-2">
               <div className="relative w-full -translate-y-4 h-120">
                  <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
               </div>
               <div className="relative w-full translate-y-4 h-120">
                  <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
               </div>
            </div>
            <div className="flex flex-col justify-center h-full gap-8">
               <div className="space-y-4">
                  <div className="badge text-foreground/50">
                     For designers and architechts
                  </div>
                  <div className="">
                     <h2>Design at scale,</h2>
                     <h2>by the hand that wove it.</h2>
                  </div>
               </div>
               <p className="text-foreground/75">
                  We approach carpet making not as floor covering, but as soft architecture that defines spatial volume and acoustics.
               </p>
               <LinkButton href="/collections">Learn More</LinkButton>
            </div>
         </div>
      </section>
      {/* Journal */}
      <section className="relative pb-20 space-y-12">
         <div className="space-y-4 wrapper">
            <h2>From Our Journals</h2>
            <div className="flex items-end justify-between">
               <p className="max-w-3xl text-foreground/75">
                  Crafted by hand in the Himalayan tradition, our carpets bring together natural materials, generations of knowledge, and a contemporary understanding of space.
               </p>
               <div className="bg-foreground/15 px-2.5 py-2.5 gap-6 rounded-lg flex relative">
                  <div className="absolute w-px -translate-x-1/2 -translate-y-1/2 h-2/3 bg-foreground/25 left-1/2 top-1/2" />
                  <ChevronLeftIcon strokeWidth={1.5} className="size-6 text-foreground/25" />
                  <ChevronRightIcon strokeWidth={1.5} className="size-6 text-foreground/75" />
               </div>
            </div>
         </div>
         <div className="grid grid-cols-4 gap-2 px-2 h-120">
            <div className="relative w-full h-full">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
            <div className="relative w-full h-full">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
            <div className="relative w-full h-full">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
            <div className="relative w-full h-full">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
         </div>
      </section>
   </>)
}