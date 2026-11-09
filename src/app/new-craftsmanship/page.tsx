import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, SparklesIcon, ShieldCheckIcon, CheckCircle2Icon } from "lucide-react";
import Navbar from "@/components/shared/navbar/navbar";
import LinkButton from "@/components/shared/link-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Artisanal Craftsmanship | Tibetan Rugs and Carpets",
   description: "Explore the ancient Tibetan iron-rod weaving technique, hand-carded high plateau fleece, and herbal snowmelt washing that shape our heirloom carpets.",
};

export default function NewCraftsmanshipPage() {
   const steps = [
      {
         step: "01",
         tibetan: "བལ་འདེམས་དང་ཤེད་འཐེན།",
         title: "Sorting & Hand-Carding",
         subtitle: "Preserving the Natural High-Plateau Lanolin",
         desc: "Sheep grazing on the Changthang plateau at 4,500m develop extraordinarily dense double fleece rich in protective lanolin. In our Kathmandu atelier, artisans comb the raw wool by hand using wooden carders with metal teeth, aligning the crimped fibers without breaking their natural spring-like elasticity.",
         details: [
            "Hand-sorted into 5 natural un-dyed shades",
            "Retains 100% natural organic lanolin",
            "Eliminates static and repels airborne dust",
         ],
         image: "https://cdn11.bigcommerce.com/s-ajr4uzac3y/images/stencil/1920w/image-manager/1286x1800-nepal25-carding-c2.jpg?t=1761556636",
      },
      {
         step: "02",
         tibetan: "འཕང་གིས་སྐུད་པ་འཁལ་བ།",
         title: "Drop-Spindle & Wheel Hand-Spinning",
         subtitle: "Creating the Tactile Thick-and-Thin Abrash",
         desc: "Hand-spinning is an art of touch and tactile intuition. Unlike mechanical spinning rings which compress fibers into uniform wire-like strands, Tibetan drop-spindles allow subtle variations in thickness and twist tension. This produces the subtle 'abrash' (organic color vibration) that distinguishes true artisanal carpets from machine imitations.",
         details: [
            "Spun on traditional wooden drop-spindles & wheels",
            "Subtle variations absorb natural dyes at differing depths",
            "Soft, lofty hand-feel with immense tensile resilience",
         ],
         image: "https://cdn11.bigcommerce.com/s-ajr4uzac3y/images/stencil/1920w/image-manager/1286x1800-nepal25-spinning-c1.jpg?t=1761556546",
      },
      {
         step: "03",
         tibetan: "ལྕགས་ཐེམ་ཐོག་ས་གདན་འཐག་ལས།",
         title: "The Tibetan Steel-Rod Weave",
         subtitle: "The Unbreakable Continuous Loop Knot",
         desc: "Tibetan weaving is structurally unique. The weaver wraps continuous yarn around a horizontal steel rod positioned in front of vertical cotton warp threads. When a complete row of knots is finished, the artisan hammers the weft down with a heavy iron comb, then slices the loops open with a razor-sharp crescent knife.",
         details: [
            "Double-knot structure locks warp and weft perpetually",
            "Superior crush resistance under heavy bronze and stone furniture",
            "Zero chemical latex backing or artificial adhesives",
         ],
         image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      },
      {
         step: "04",
         tibetan: "ཁྲུས་ལས་དང་མཐའ་སྒྲིལ།",
         title: "Herbal Snowmelt Wash & Sun-Shearing",
         subtitle: "Unlocking Natural Luster & Sculpted Relief",
         desc: "Once cut from the upright loom, carpets are washed with organic soapnuts (Sapindus) and pure mountain spring water, scrubbed with wooden squeegees on sloped washing beds. Dried naturally under the Himalayan sun, master shearers then hand-trim the pile with beveled shears to highlight pattern contours.",
         details: [
            "Soapnut wash softens wool without stripping lanolin",
            "Sun-dried on open-air Himalayan mountain terraces",
            "Beveled hand-carving creates tactile shadow relief",
         ],
         image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=1200&q=80",
      },
   ];

   return (
      <div className="relative">
         {/* Navbar */}
         <Navbar isTransparentTop={true} />

         {/* 1. Craftsmanship Hero */}
         <section className="relative min-h-[85vh] flex items-end pb-20 pt-32 bg-black text-white overflow-hidden">
            <Image
               src="https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=1920&q=80"
               alt="Master weaver hands knotting Tibetan wool"
               fill
               priority
               className="object-cover opacity-55 scale-100"
               sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />

            <div className="relative z-10 wrapper space-y-6 w-full">
               <div className="flex items-center gap-3">
                  <span className="badge text-white/80 tracking-widest">Master Himalayan Weaving</span>
                  <span className="text-white/40">•</span>
                  <span className="font-tibetan text-primary text-2xl">ལག་ཤེས་བཟོ་རྩལ།</span>
               </div>

               <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-white max-w-4xl tracking-tight leading-[1.1]">
                  Before Design, Before Form, <br />
                  <span className="font-serif italic font-normal text-white/90">There is Ancient Craft.</span>
               </h1>

               <p className="text-white/80 font-light text-base md:text-xl max-w-2xl leading-relaxed">
                  Rooted in centuries of Himalayan knowledge, our carpets are fashioned by hand from high-altitude fleece, hand-turned spindles, and the rhythmic percussion of wooden upright looms.
               </p>
            </div>
         </section>

         {/* 2. Philosophy & Endless Knot Manifesto */}
         <section className="py-24 wrapper">
            <div className="bg-primary/5 border border-primary/15 rounded-sm p-8 md:p-14">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-6">
                     <div className="space-y-2">
                        <span className="badge text-primary tracking-widest font-bold">Artisanal Ethos</span>
                        <div className="font-tibetan text-primary text-xl">ང་ཚོའི་མཚན་ཉིད་རིག་པ།</div>
                        <h2 className="text-2xl md:text-4xl font-heading text-foreground leading-snug">
                           “A carpet is more than something that covers a floor. It is soft architecture shaped by time, patience, and human devotion.”
                        </h2>
                     </div>
                     <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
                        In an era of industrial speed and synthetic petrochemical filaments, we choose slow, deliberate permanence. A Tibetan carpet requires up to 6 months of focused labor by multi-generational weaving families in Nepal and Tibet. Every knot is a tactile record of human focus.
                     </p>
                  </div>
                  <div className="lg:col-span-4 flex justify-center">
                     <div className="relative size-48 md:size-56">
                        <Image
                           src="/shared/endless-knot.png"
                           alt="Tibetan Endless Knot (Shrivatsa)"
                           fill
                           className="object-contain drop-shadow"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 3. The 4-Stage Process: Balanced Whitespace & Alternating Rhythm */}
         <section className="py-20 wrapper space-y-24">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
               <span className="badge text-primary tracking-widest font-bold">The Weaving Journey</span>
               <h2 className="text-3xl md:text-5xl font-heading text-foreground">
                  From Highland Fleece to Luminous Heirloom
               </h2>
               <p className="text-foreground/75 text-sm md:text-base">
                  Every step is executed entirely by hand, honoring techniques virtually unchanged since the 14th century.
               </p>
            </div>

            <div className="space-y-24">
               {steps.map((step, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                     <div
                        key={step.step}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                     >
                        {/* Image Column */}
                        <div className={`lg:col-span-6 relative ${isEven ? "" : "lg:order-2"}`}>
                           <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden shadow-xl border border-foreground/10 group">
                              <Image
                                 src={step.image}
                                 alt={step.title}
                                 fill
                                 className="object-cover group-hover:scale-105 transition-transform duration-700"
                                 sizes="(max-width: 1024px) 100vw, 50vw"
                              />
                              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-mono font-bold text-primary">
                                 STAGE {step.step}
                              </div>
                           </div>
                        </div>

                        {/* Content Column */}
                        <div className={`lg:col-span-6 space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                           <div className="space-y-2">
                              <div className="flex items-center gap-3">
                                 <span className="font-heading text-2xl font-bold text-primary">{step.step}</span>
                                 <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                 <span className="font-tibetan text-primary text-base">{step.tibetan}</span>
                              </div>
                              <h3 className="text-3xl md:text-4xl font-heading text-foreground">
                                 {step.title}
                              </h3>
                              <p className="text-sm font-serif italic text-primary">
                                 {step.subtitle}
                              </p>
                           </div>

                           <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                              {step.desc}
                           </p>

                           {/* Bullet Points */}
                           <div className="space-y-2.5 pt-2 border-t border-foreground/10 text-xs">
                              {step.details.map((detail, i) => (
                                 <div key={i} className="flex items-center gap-2.5 text-foreground/80">
                                    <CheckCircle2Icon className="size-4 text-primary shrink-0" />
                                    <span>{detail}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </section>

         {/* 4. Natural Materials Matrix */}
         <section className="py-24 bg-white/70 border-y border-foreground/10">
            <div className="wrapper space-y-16">
               <div className="text-center space-y-2 max-w-2xl mx-auto">
                  <span className="badge text-primary tracking-widest font-bold">Pure Raw Matter</span>
                  <h2 className="text-3xl md:text-4xl font-heading text-foreground">
                     Sourced at High Altitudes. Unadulterated by Plastics.
                  </h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     {
                        title: "Changthang Highland Wool",
                        origin: "Tibetan Plateau (>4,500m)",
                        desc: "Long, resilient staple fibers packed with organic lanolin. Repels stains naturally, withstands heavy foot traffic, and cleans effortlessly with water.",
                        stat: "100% Natural Lanolin",
                     },
                     {
                        title: "Cultivated Mulberry Silk",
                        origin: "Chinese Cultivated Filaments",
                        desc: "Continuous organic silk filament spun to create luminescent sheen. Shimmers under changing natural sunlight, creating light-catching depth in modern spaces.",
                        stat: "Natural Iridescence",
                     },
                     {
                        title: "Wild Himalayan Nettle (Allo)",
                        origin: "High Nepal Valleys (2,000 - 3,000m)",
                        desc: "Harvested sustainably from wild stinging nettle plants. Yields a crisp, linen-like fiber with remarkable abrasion endurance and organic earthy flecks.",
                        stat: "Sustainable Wildcraft",
                     },
                  ].map((mat, i) => (
                     <div
                        key={i}
                        className="bg-background border border-foreground/15 rounded-sm p-8 space-y-4 flex flex-col justify-between"
                     >
                        <div className="space-y-2">
                           <span className="text-[10px] uppercase tracking-wider text-primary font-bold">
                              {mat.origin}
                           </span>
                           <h3 className="text-xl font-heading text-foreground">{mat.title}</h3>
                           <p className="text-xs text-foreground/75 leading-relaxed">{mat.desc}</p>
                        </div>
                        <div className="pt-4 border-t border-foreground/10 flex items-center justify-between text-xs font-semibold text-primary">
                           <span>{mat.stat}</span>
                           <ShieldCheckIcon className="size-4" />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 5. CTA Footer Strip */}
         <section className="py-20 wrapper">
            <div className="bg-primary text-background rounded-sm p-10 md:p-14 text-center space-y-6">
               <h2 className="text-3xl md:text-5xl font-heading text-background max-w-2xl mx-auto">
                  Experience the Tactility in Your Studio
               </h2>
               <p className="text-background/80 text-sm md:text-base max-w-xl mx-auto">
                  Order a designer swatch box containing hand-carded wool, cultivated silk, and loom texture samples for your architectural practice.
               </p>
               <div className="pt-2 flex flex-wrap justify-center gap-4">
                  <LinkButton light href="/bespoke">
                     Request Swatch Box
                  </LinkButton>
                  <Link
                     href="/collections"
                     className="px-6 py-3 border border-background/40 text-background rounded text-xs uppercase tracking-widest hover:bg-background/10 transition-colors"
                  >
                     Browse Curated Collections
                  </Link>
               </div>
            </div>
         </section>
      </div>
   );
}
