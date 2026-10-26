import Form from "@/components/get-in-touch/form";
import Hero from "@/components/get-in-touch/hero";
import LinkButton from "@/components/shared/link-button";
import Navbar from "@/components/shared/navbar/navbar";
import GridMotion from "@/components/ui/react-bits/grid-motion/GridMotion";
import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";
import Image from "next/image";

const items = [
   'https://images.unsplash.com/photo-1705032033999-efa3082e1a4e?w=640&q=75&auto=format&fit=crop',
   'https://images.unsplash.com/photo-1721407964262-f9864b562453?w=640&q=75&auto=format&fit=crop',
   'https://images.unsplash.com/photo-1721407964262-f9864b562453?w=640&q=75&auto=format&fit=crop',
   'https://images.unsplash.com/photo-1721407964262-f9864b562453?w=640&q=75&auto=format&fit=crop',
   'https://images.unsplash.com/photo-1721407964262-f9864b562453?w=640&q=75&auto=format&fit=crop',
   'https://images.unsplash.com/photo-1721407964262-f9864b562453?w=640&q=75&auto=format&fit=crop',
   'https://images.unsplash.com/photo-1721407964262-f9864b562453?w=640&q=75&auto=format&fit=crop',
];

export function ContactButton({ children }: { children: React.ReactNode }) {
   return (<>
      <div className="relative flex items-center justify-center w-full p-3 overflow-hidden text-xs text-center duration-300 border rounded-full cursor-pointer group border-primary h-fit hover:bg-primary hover:text-background">
         {children}
      </div>
   </>)
}

export default function Page() {
   return (<>
      {/* Navbar */}
      <Navbar isTransparentTop={false} />
      {/* Hero */}
      <Hero />
      {/* Form */}
      <Form />
      {/* Socials */}
      <div className="wrapper">
         <div className="mb-16 space-y-12">
            <div className="max-w-md mx-auto space-y-2 text-center">
               <h2>Follow Us On Our Socials</h2>
               <p className="text-foreground/75">
                  We share behind-the-scenes content from our workshops, new arrivals, styling inspiration, and artisan stories on Instagram. If you want to see what we are working on right now — this is where to look.
               </p>
            </div>
            <div className="flex items-center gap-8 mx-auto w-fit">
               <div className="pb-3 text-xs uppercase duration-300 border-b cursor-pointer text-primary border-primary hover:text-primary/75">
                  Instagram
               </div>
               <div className="pb-3 text-xs uppercase duration-300 border-b cursor-pointer text-primary border-primary hover:text-primary/75">
                  TikTok
               </div>
               <div className="pb-3 text-xs uppercase duration-300 border-b cursor-pointer text-primary border-primary hover:text-primary/75">
                  LinkedIn
               </div>
               <div className="pb-3 text-xs uppercase duration-300 border-b cursor-pointer text-primary border-primary hover:text-primary/75">
                  Youtube
               </div>
               <div className="pb-3 text-xs uppercase duration-300 border-b cursor-pointer text-primary border-primary hover:text-primary/75">
                  FaceBook
               </div>
            </div>
         </div>
         <div
            className="relative w-full mb-20 h-96"
         >
            <GridMotion
               items={items}
               rows={1}
               aspectRatio={1.1}
               gap={36}
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