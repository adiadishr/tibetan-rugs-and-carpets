"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
   ArrowLeftIcon, 
   ArrowRightIcon, 
   CheckIcon, 
   Maximize2Icon, 
   SparklesIcon, 
   ShieldCheckIcon,
   RulerIcon,
   PaletteIcon,
   XIcon,
   SendIcon
} from "lucide-react";
import type { Collection, Rug } from "@/lib/collections-data";
import LinkButton from "@/components/shared/link-button";

interface CollectionDetailClientProps {
   collection: Collection;
   nextCollection: Collection;
}

export default function CollectionDetailClient({
   collection,
   nextCollection,
}: CollectionDetailClientProps) {
   const [selectedRug, setSelectedRug] = useState<Rug>(collection.rugs[0]);
   const [activeView, setActiveView] = useState<"rug" | "room" | "detail">("rug");
   const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
   const [inquirySubmitted, setInquirySubmitted] = useState(false);

   // Determine currently active image for inspector
   const currentImage =
      activeView === "room"
         ? selectedRug.roomImage
         : activeView === "detail"
         ? selectedRug.detailImage
         : selectedRug.image;

   return (
      <div className="relative">
         {/* Hero Section */}
         <section className="relative min-h-[85vh] flex items-end pb-16 pt-32 overflow-hidden bg-black text-white">
            <Image
               src={collection.heroImage}
               alt={collection.title}
               fill
               priority
               className="object-cover opacity-60 scale-105 transition-transform duration-1000 ease-out"
               sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 wrapper w-full space-y-8">
               <div className="space-y-4">
                  <Link
                     href="/collections"
                     className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors py-1 px-3 rounded-full bg-white/10 backdrop-blur-md w-fit border border-white/15"
                  >
                     <ArrowLeftIcon className="size-3.5" />
                     <span>Back to Collections</span>
                  </Link>

                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
                     <div className="space-y-3 max-w-3xl">
                        <div className="flex items-center gap-3">
                           <span className="font-tibetan text-2xl md:text-3xl text-primary font-normal drop-shadow">
                              {collection.tibetanTitle}
                           </span>
                           <span className="text-white/40">•</span>
                           <span className="badge text-white/80 tracking-widest">
                              {collection.specs.knotDensityRange}
                           </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading tracking-tight leading-none text-white">
                           {collection.title}
                        </h1>
                        <p className="text-lg md:text-xl font-light text-white/90 font-serif italic">
                           {collection.subtitle}
                        </p>
                     </div>

                     <div className="flex items-center gap-4">
                        <button
                           onClick={() => setInquiryModalOpen(true)}
                           className="px-6 py-3.5 bg-primary text-white text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-primary/90 transition-colors shadow-lg"
                        >
                           Inquire About This Series
                        </button>
                     </div>
                  </div>
               </div>

               {/* Specs Grid Strip */}
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-6 border-t border-white/20 text-xs">
                  <div>
                     <div className="text-white/50 uppercase tracking-widest text-[10px]">Knot Density</div>
                     <div className="text-white font-medium mt-1">{collection.specs.knotDensityRange}</div>
                  </div>
                  <div>
                     <div className="text-white/50 uppercase tracking-widest text-[10px]">Composition</div>
                     <div className="text-white font-medium mt-1">{collection.specs.primaryFibers}</div>
                  </div>
                  <div>
                     <div className="text-white/50 uppercase tracking-widest text-[10px]">Technique</div>
                     <div className="text-white font-medium mt-1">{collection.specs.weavingTechnique}</div>
                  </div>
                  <div>
                     <div className="text-white/50 uppercase tracking-widest text-[10px]">Pile Profile</div>
                     <div className="text-white font-medium mt-1">{collection.specs.pileHeight}</div>
                  </div>
                  <div>
                     <div className="text-white/50 uppercase tracking-widest text-[10px]">Wash & Treatment</div>
                     <div className="text-white font-medium mt-1">{collection.specs.washFinish}</div>
                  </div>
                  <div>
                     <div className="text-white/50 uppercase tracking-widest text-[10px]">Custom Lead Time</div>
                     <div className="text-white font-medium mt-1">{collection.specs.standardLeadTime}</div>
                  </div>
               </div>
            </div>
         </section>

         {/* Curatorial Story & Origins */}
         <section className="py-24 wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
               <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                     <span className="badge text-primary tracking-widest font-bold">The Origin & Artistic Intent</span>
                     <h2 className="text-3xl md:text-4xl font-heading text-foreground leading-snug">
                        {collection.story.headline}
                     </h2>
                  </div>

                  <p className="text-foreground/80 leading-relaxed text-base">
                     {collection.story.paragraph1}
                  </p>

                  <p className="text-foreground/80 leading-relaxed text-base">
                     {collection.story.paragraph2}
                  </p>

                  <div className="pt-4 border-t border-foreground/10 flex items-center gap-4 text-xs">
                     <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        LOC
                     </div>
                     <div>
                        <div className="text-foreground/50 uppercase tracking-wider text-[10px]">Geographic Inspiration</div>
                        <div className="font-medium text-foreground">{collection.story.inspirationOrigin}</div>
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-6 relative">
                  <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden shadow-xl border border-foreground/10">
                     <Image
                        src={collection.detailImage}
                        alt="Macro weave texture detail"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                     />
                     <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md p-4 rounded text-xs border border-foreground/10 flex items-center justify-between">
                        <div>
                           <div className="font-semibold text-foreground">Tactile Surface Relief</div>
                           <div className="text-foreground/60">{collection.specs.primaryFibers}</div>
                        </div>
                        <span className="badge bg-primary text-background px-2.5 py-1 rounded">
                           100% Himalayan
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* The Carpet Studio & Architectural Specifier */}
         <section className="py-20 bg-white/60 border-y border-foreground/10">
            <div className="wrapper space-y-12">
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="space-y-2">
                     <span className="badge text-primary tracking-widest font-bold">The Collection Archive</span>
                     <h2 className="text-3xl md:text-4xl font-heading text-foreground">
                        Select a Design to Inspect Architecture & Dimensions
                     </h2>
                  </div>
                  <p className="text-xs uppercase tracking-wider text-foreground/50 font-mono">
                     Showing {collection.rugs.length} Bespoke Variations
                  </p>
               </div>

               {/* Rug Selection Carousel/Tabs */}
               <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                  {collection.rugs.map((rug) => (
                     <button
                        key={rug.id}
                        onClick={() => {
                           setSelectedRug(rug);
                           setActiveView("rug");
                        }}
                        className={`flex items-center gap-4 px-5 py-3 rounded-sm border text-left shrink-0 transition-all ${
                           selectedRug.id === rug.id
                              ? "bg-primary text-background border-primary shadow-sm"
                              : "bg-background border-foreground/15 text-foreground hover:border-foreground/40"
                        }`}
                     >
                        <div className="relative size-12 rounded overflow-hidden shrink-0 border border-white/20">
                           <Image src={rug.image} alt={rug.name} fill className="object-cover" />
                        </div>
                        <div>
                           <div className="text-xs uppercase tracking-wider font-semibold">
                              {rug.name}
                           </div>
                           <div className={`text-[11px] font-mono ${selectedRug.id === rug.id ? "text-background/80" : "text-foreground/50"}`}>
                              {rug.designNumber} • {rug.knotCount} Knots
                           </div>
                        </div>
                     </button>
                  ))}
               </div>

               {/* Selected Rug Deep-Dive Inspector */}
               <div className="bg-background border border-foreground/15 rounded-sm p-6 md:p-10 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                     {/* Image Inspector */}
                     <div className="lg:col-span-7 space-y-4">
                        <div className="relative aspect-[4/3] w-full rounded overflow-hidden bg-black/5 border border-foreground/10">
                           <Image
                              src={currentImage}
                              alt={selectedRug.name}
                              fill
                              className="object-cover transition-opacity duration-500"
                              sizes="(max-width: 1024px) 100vw, 60vw"
                           />
                           <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-mono font-medium text-foreground">
                              {selectedRug.designNumber} • {activeView.toUpperCase()} VIEW
                           </div>
                        </div>

                        {/* View Mode Switcher */}
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-2">
                              <button
                                 onClick={() => setActiveView("rug")}
                                 className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-sm border transition-all ${
                                    activeView === "rug"
                                       ? "bg-foreground text-background border-foreground"
                                       : "bg-background border-foreground/20 text-foreground/70 hover:border-foreground"
                                 }`}
                              >
                                 Carpet Flat View
                              </button>
                              <button
                                 onClick={() => setActiveView("room")}
                                 className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-sm border transition-all ${
                                    activeView === "room"
                                       ? "bg-foreground text-background border-foreground"
                                       : "bg-background border-foreground/20 text-foreground/70 hover:border-foreground"
                                 }`}
                              >
                                 In Situ Room View
                              </button>
                              <button
                                 onClick={() => setActiveView("detail")}
                                 className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-sm border transition-all ${
                                    activeView === "detail"
                                       ? "bg-foreground text-background border-foreground"
                                       : "bg-background border-foreground/20 text-foreground/70 hover:border-foreground"
                                 }`}
                              >
                                 Macro Weave Texture
                              </button>
                           </div>
                           <span className="text-xs text-foreground/50 font-tibetan text-base">
                              {selectedRug.tibetanName}
                           </span>
                        </div>
                     </div>

                     {/* Specification Sheet */}
                     <div className="lg:col-span-5 space-y-6">
                        <div className="space-y-1">
                           <div className="badge text-primary font-bold">Architectural Spec Sheet</div>
                           <h3 className="text-2xl md:text-3xl font-heading text-foreground">
                              {selectedRug.name}
                           </h3>
                           <p className="text-xs text-foreground/60 font-serif italic">
                              {selectedRug.description}
                           </p>
                        </div>

                        {/* Specs Table */}
                        <div className="space-y-3 border-y border-foreground/10 py-4 text-xs">
                           <div className="flex justify-between items-center py-1">
                              <span className="text-foreground/60 flex items-center gap-1.5">
                                 <RulerIcon className="size-3.5 text-primary" /> Knot Density:
                              </span>
                              <span className="font-semibold text-foreground">{selectedRug.knotCount} Knots / Sq. In.</span>
                           </div>
                           <div className="flex justify-between items-center py-1">
                              <span className="text-foreground/60 flex items-center gap-1.5">
                                 <PaletteIcon className="size-3.5 text-primary" /> Fiber Content:
                              </span>
                              <span className="font-semibold text-foreground text-right">{selectedRug.materials}</span>
                           </div>
                           <div className="flex justify-between items-center py-1">
                              <span className="text-foreground/60">Total Thickness:</span>
                              <span className="font-semibold text-foreground">{selectedRug.thickness}</span>
                           </div>
                           <div className="flex justify-between items-center py-1">
                              <span className="text-foreground/60">Crafting Lead Time:</span>
                              <span className="font-semibold text-foreground">{selectedRug.leadTime}</span>
                           </div>
                           <div className="flex justify-between items-center py-1">
                              <span className="text-foreground/60">Standard Sizes:</span>
                              <span className="font-semibold text-foreground">{selectedRug.standardSizes.join(", ")}</span>
                           </div>
                           <div className="flex justify-between items-center py-1">
                              <span className="text-foreground/60">Custom Dimensions:</span>
                              <span className="font-semibold text-primary">Seamless up to 15m (50ft)</span>
                           </div>
                        </div>

                        {/* Color Palette Chips */}
                        <div>
                           <div className="text-xs uppercase tracking-wider text-foreground/60 mb-2">
                              Curated Dye Palette
                           </div>
                           <div className="flex flex-wrap gap-2">
                              {selectedRug.palette.map((color, idx) => (
                                 <span
                                    key={idx}
                                    className="text-xs bg-foreground/5 border border-foreground/10 px-2.5 py-1 rounded text-foreground/80"
                                 >
                                    {color}
                                 </span>
                              ))}
                           </div>
                        </div>

                        {/* Room Fit Recommendation */}
                        <div className="bg-primary/5 border border-primary/15 p-4 rounded text-xs space-y-1">
                           <div className="font-bold text-primary uppercase tracking-wider text-[10px]">
                              Architectural Fit Recommendation
                           </div>
                           <p className="text-foreground/75">
                              {selectedRug.dimensionsGuide}
                           </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="pt-2 flex flex-col sm:flex-row gap-3">
                           <button
                              onClick={() => setInquiryModalOpen(true)}
                              className="w-full py-3 bg-primary text-background text-xs uppercase tracking-widest font-semibold rounded hover:bg-primary/90 transition-colors text-center"
                           >
                              Order Yarn Swatch & Reserve
                           </button>
                           <Link
                              href={`/bespoke?design=${selectedRug.designNumber}`}
                              className="w-full py-3 bg-foreground/5 hover:bg-foreground/10 text-foreground text-xs uppercase tracking-widest font-semibold rounded transition-colors text-center border border-foreground/15"
                           >
                              Commission Custom Size
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* The Tibetan Weaving Technique Feature */}
         <section className="py-24 wrapper">
            <div className="bg-primary text-background rounded-sm p-10 md:p-16">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                     <div className="badge text-background/60 tracking-widest flex items-center gap-2">
                        <ShieldCheckIcon className="size-4" />
                        <span>Artisanal Heritage Differentiator</span>
                     </div>
                     <h2 className="text-3xl md:text-5xl font-heading text-background leading-tight">
                        The Tibetan Iron-Rod Loop Knot: Why These Carpets Outlast Generations
                     </h2>
                     <p className="text-background/80 leading-relaxed text-sm md:text-base">
                        Unlike Persian or Turkish knots which are tied around vertical warp threads individually, Tibetan carpets are knotted row-by-row around a horizontal iron rod. When the row is complete, the weaver draws a keen blade across the rod to cut the loops.
                     </p>
                     <p className="text-background/80 leading-relaxed text-sm md:text-base">
                        This ancient Himalayan technique locks both warp and weft into an interconnected matrix that cannot unravel, providing exceptional resilience against furniture compression, foot traffic, and decades of life.
                     </p>
                     <div className="grid grid-cols-3 gap-6 pt-4 border-t border-background/20 text-xs">
                        <div>
                           <div className="font-bold text-lg font-heading">High Lanolin</div>
                           <div className="text-background/70 mt-1">Naturally repels liquid and resists soil penetration.</div>
                        </div>
                        <div>
                           <div className="font-bold text-lg font-heading">Zero Plastic</div>
                           <div className="text-background/70 mt-1">Pure sheep wool, mulberry silk, and cotton foundation.</div>
                        </div>
                        <div>
                           <div className="font-bold text-lg font-heading">Acoustic Mass</div>
                           <div className="text-background/70 mt-1">Absorbs spatial reverberation in contemporary high ceilings.</div>
                        </div>
                     </div>
                  </div>

                  <div className="lg:col-span-5 relative">
                     <div className="relative aspect-[4/5] w-full rounded overflow-hidden shadow-2xl border border-background/20">
                        <Image
                           src="https://cdn11.bigcommerce.com/s-ajr4uzac3y/images/stencil/1920w/image-manager/1286x1800-nepal25-spinning-c1.jpg?t=1761556546"
                           alt="Master weaver spinning yarn"
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Next Collection Navigation Strip */}
         <section className="py-16 wrapper border-t border-foreground/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-foreground/50">Next Curated Series</span>
                  <div className="text-2xl font-heading text-foreground">
                     {nextCollection.title}
                  </div>
                  <div className="text-xs text-primary font-serif italic">
                     {nextCollection.subtitle}
                  </div>
               </div>

               <Link
                  href={`/collections/${nextCollection.slug}`}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-foreground text-background text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-primary transition-colors group"
               >
                  <span>Explore {nextCollection.title}</span>
                  <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
         </section>

         {/* Decorative / Interactive Sample Swatch Inquiry Modal */}
         {inquiryModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
               <div className="bg-background border border-foreground/15 rounded-sm p-8 max-w-lg w-full relative shadow-2xl space-y-6">
                  <button
                     onClick={() => {
                        setInquiryModalOpen(false);
                        setInquirySubmitted(false);
                     }}
                     className="absolute top-4 right-4 p-2 text-foreground/60 hover:text-foreground"
                  >
                     <XIcon className="size-5" />
                  </button>

                  {!inquirySubmitted ? (
                     <>
                        <div className="space-y-2">
                           <div className="badge text-primary font-bold">Designer & Collector Inquiry</div>
                           <h3 className="text-2xl font-heading text-foreground">
                              Inquire About {selectedRug.name}
                           </h3>
                           <p className="text-xs text-foreground/70">
                              Order hand-sheared yarn tufts, confirm stock availability, or request custom dimensions for your interior project.
                           </p>
                        </div>

                        <form
                           onSubmit={(e) => {
                              e.preventDefault();
                              setInquirySubmitted(true);
                           }}
                           className="space-y-4 text-xs"
                        >
                           <div className="grid grid-cols-2 gap-3">
                              <div>
                                 <label className="block text-foreground/60 mb-1 uppercase tracking-wider text-[10px]">Your Name</label>
                                 <input
                                    required
                                    type="text"
                                    placeholder="Jane Doe"
                                    className="w-full bg-white border border-foreground/15 p-2.5 rounded focus:outline-primary"
                                 />
                              </div>
                              <div>
                                 <label className="block text-foreground/60 mb-1 uppercase tracking-wider text-[10px]">Email Address</label>
                                 <input
                                    required
                                    type="email"
                                    placeholder="jane@studio.com"
                                    className="w-full bg-white border border-foreground/15 p-2.5 rounded focus:outline-primary"
                                 />
                              </div>
                           </div>

                           <div className="grid grid-cols-2 gap-3">
                              <div>
                                 <label className="block text-foreground/60 mb-1 uppercase tracking-wider text-[10px]">Studio / Client Type</label>
                                 <select className="w-full bg-white border border-foreground/15 p-2.5 rounded focus:outline-primary">
                                    <option>Interior Designer</option>
                                    <option>Architect</option>
                                    <option>Private Collector</option>
                                    <option>Hospitality Specifier</option>
                                 </select>
                              </div>
                              <div>
                                 <label className="block text-foreground/60 mb-1 uppercase tracking-wider text-[10px]">Desired Dimensions</label>
                                 <input
                                    type="text"
                                    placeholder="e.g. 9' x 12' or Custom"
                                    defaultValue={selectedRug.standardSizes[1] || "9' x 12'"}
                                    className="w-full bg-white border border-foreground/15 p-2.5 rounded focus:outline-primary"
                                 />
                              </div>
                           </div>

                           <div>
                              <label className="block text-foreground/60 mb-1 uppercase tracking-wider text-[10px]">Project Notes / Room Location</label>
                              <textarea
                                 rows={3}
                                 placeholder="Tell us about the space, lighting orientation, or delivery timeline..."
                                 className="w-full bg-white border border-foreground/15 p-2.5 rounded focus:outline-primary resize-none"
                              />
                           </div>

                           <button
                              type="submit"
                              className="w-full py-3 bg-primary text-background uppercase tracking-widest font-semibold rounded hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                           >
                              <SendIcon className="size-3.5" />
                              <span>Submit Specification Inquiry</span>
                           </button>
                        </form>
                     </>
                  ) : (
                     <div className="py-8 text-center space-y-4">
                        <div className="size-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
                           <CheckIcon className="size-6" />
                        </div>
                        <h4 className="text-xl font-heading text-foreground">Inquiry Received</h4>
                        <p className="text-xs text-foreground/75 leading-relaxed max-w-sm mx-auto">
                           Thank you for your interest in the <span className="font-semibold text-primary">{selectedRug.name}</span>. A senior rug concierge will follow up with technical specs, high-res strike-off imagery, and shipping timelines within 24 hours.
                        </p>
                        <button
                           onClick={() => {
                              setInquiryModalOpen(false);
                              setInquirySubmitted(false);
                           }}
                           className="px-6 py-2.5 bg-foreground text-background text-xs uppercase tracking-wider rounded"
                        >
                           Close Window
                        </button>
                     </div>
                  )}
               </div>
            </div>
         )}
      </div>
   );
}
