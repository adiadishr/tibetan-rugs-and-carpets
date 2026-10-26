import Hero from "@/components/craftsmanship/hero";
import Navbar from "@/components/shared/navbar/navbar";
import Image from "next/image";

export default function Page() {
   return (<>
      {/* Navbar */}
      <Navbar isTransparentTop={false} />
      {/* Hero */}
      <Hero />
      {/* About */}
      <section className="relative py-24 wrapper">
         <div className="grid grid-cols-2 gap-12">
            <div className="relative w-full translate-y-4 h-120">
               <Image src="/home/hero.png" alt="bg" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center h-full gap-8">
               <div className="space-y-8">
                  <div className="space-y-4">
                     <div className="badge text-foreground/50">Artisanal Craftsmanship</div>
                     <h3 className="font-tibetan text-primary">ང་ཚོའི་མཚན་ཉིད་རིག་པ།</h3>
                  </div>
                  <div className="">
                     <h2>Before Design, Before Form,</h2>
                     <h2>There is Craft.</h2>
                  </div>
               </div>
               <p className="text-foreground/75">
                  Every rug tells a story of patience, precision, and tradition. Rooted in the rich heritage of Tibetan weaving, our craftsmanship brings together time-honoured techniques, thoughtful design, and a deep appreciation for the natural beauty of every fibre.
               </p>
            </div>
         </div>
      </section>
      {/*  */}
      <div className="wrapper py-20 bg-primary/5 mb-20 rounded-sm">
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
      </div>
      <div className="wrapper pb-20">
         <div className="space-y-8">
            <div className="space-y-4">
               <div className="badge text-foreground/50">The Process</div>
               <h3 className="font-tibetan text-primary">ང་ཚོའི་མཚན་ཉིད་རིག་པ།</h3>
            </div>
            <div className="grid grid-cols-3 gap-20">
               <div className="space-y-0">
                  <h2>
                     From Fibre, To Finish
                  </h2>
                  <h2 className="text-foreground/50">
                     Every step matters.
                  </h2>
               </div>
               <div className="w-full h-full space-y-4">
                  <div className="flex items-center w-full gap-4">
                     <div className="size-12 font-tibetan bg-primary rounded-sm text-xl text-background flex items-center justify-center shrink-0">
                        01
                     </div>
                     <div className="w-full h-px bg-primary" />
                  </div>
                  <h4>Hand-Carding</h4>
                  <p className="text-foreground/75">
                     Hand-carded yarn is combed by hand to align the wool fibers before spinning, preserving natural texture for a soft feel.
                  </p>
                  <div className="w-full relative h-96">
                     <Image
                        fill
                        src="https://cdn11.bigcommerce.com/s-ajr4uzac3y/images/stencil/1920w/image-manager/1286x1800-nepal25-carding-c2.jpg?t=1761556636"
                        alt="bg"
                        className="object-cover"
                     />
                  </div>
               </div>
               <div className="w-full h-full space-y-4">
                  <div className="flex items-center w-full gap-4">
                     <div className="size-12 font-tibetan bg-primary rounded-sm text-xl text-background flex items-center justify-center shrink-0">
                        01
                     </div>
                     <div className="w-full h-px bg-primary" />
                  </div>
                  <h4>Hand-Carding</h4>
                  <p className="text-foreground/75">
                     Hand-carded yarn is combed by hand to align the wool fibers before spinning, preserving natural texture for a soft feel.
                  </p>
                  <div className="w-full relative h-96">
                     <Image
                        fill
                        src="https://cdn11.bigcommerce.com/s-ajr4uzac3y/images/stencil/1920w/image-manager/1286x1800-nepal25-spinning-c1.jpg?t=1761556546"
                        alt="bg"
                        className="object-cover"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </>)
}