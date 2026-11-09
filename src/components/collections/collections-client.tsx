"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, SlidersHorizontalIcon, SparklesIcon, CompassIcon, LayersIcon } from "lucide-react";
import type { Collection, Rug } from "@/lib/collections-data";
import LinkButton from "@/components/shared/link-button";

interface CollectionsClientProps {
   collections: Collection[];
}

export default function CollectionsClient({ collections }: CollectionsClientProps) {

   const [activeFilter, setActiveFilter] = useState<string>("all");
   const [viewMode, setViewMode] = useState<"collections" | "rugs">("collections");
   const [selectedKnot, setSelectedKnot] = useState<string>("all");

   // Filter collections
   const filteredCollections = collections.filter((c) => {
      if (activeFilter === "all") return true;
      if (activeFilter === "silk") return c.slug === "namtso" || c.slug === "shangri-la";
      if (activeFilter === "heritage") return c.slug === "lhokha";
      if (activeFilter === "undyed") return c.slug === "chomolungma";
      if (activeFilter === "modern") return c.slug === "norbulingka";
      return true;
   });

   // Flatten all rugs
   const allRugs = collections.flatMap((c) =>
      c.rugs.map((r) => ({ ...r, collectionSlug: c.slug, collectionTitle: c.title }))
   );

   const filteredRugs = allRugs.filter((rug) => {
      if (selectedKnot === "all") return true;
      if (selectedKnot === "60-80") return rug.knotCount <= 80;
      if (selectedKnot === "100") return rug.knotCount === 100;
      if (selectedKnot === "120+") return rug.knotCount >= 120;
      return true;
   });

   return (
      <div className="mt-20 pb-20">
         {/* Hero Header */}
         <section className="relative py-20 space-y-12 wrapper">

            {/* Content */}
            <div className="flex flex-col items-center justify-center gap-8">
               <div className="space-y-4">
                  {/* <div className="flex items-center gap-3">
                     <span className="badge text-foreground/50 tracking-widest">Master Catalogue 2026</span>
                  </div> */}
                  <h1 className="text-center ">
                     Tibetan Rugs and Carpets
                  </h1>
                  <p className="text-center max-w-3xl mx-auto text-foreground/75">
                     Each series is a dedicated architectural study—hand-carded Changthang plateau sheep wool, wild nettle, and cultivated mulberry silk, knotted row-by-row on vertical wooden looms in the Kathmandu Valley.
                  </p>
               </div>
            </div>

            {/* Filter and Mode Bar */}
            <div className="flex w-full justify-between items-center py-4 border-y border-foreground/10">
               <div className="flex items-center gap-4">
                  <h3>4 Collections</h3>
                  <div className="size-2 mt-1 rounded-full bg-foreground/50"></div>
                  <h3>24 Products</h3>
               </div>
               {/* View Toggle */}
               <div className="flex items-center gap-2 p-1 rounded-sm">
                  <button
                     onClick={() => setViewMode("collections")}
                     className={`flex items-center gap-2 px-3 py-1.5 text-xs uppercase tracking-wider rounded-sm transition-all ${viewMode === "collections"
                        ? "bg-primary text-background font-medium"
                        : "text-foreground/70 hover:text-foreground"
                        }`}
                  >
                     <LayersIcon className="size-3.5" />
                     <span>Series View</span>
                  </button>
                  <button
                     onClick={() => setViewMode("rugs")}
                     className={`flex items-center gap-2 px-3 py-1.5 text-xs uppercase tracking-wider rounded-sm transition-all ${viewMode === "rugs"
                        ? "bg-primary text-background font-medium"
                        : "text-foreground/70 hover:text-foreground"
                        }`}
                  >
                     <SlidersHorizontalIcon className="size-3.5" />
                     <span>Individual Rugs</span>
                  </button>
               </div>
            </div>
         </section>

         {/* Collections View */}
         {viewMode === "collections" && (
            <section className="wrapper space-y-24">
               {filteredCollections.map((collection, index) => {
                  const isEven = index % 2 === 0;
                  return (
                     <article
                        key={collection.slug}
                        className="group bg-white/70 border border-foreground/10 rounded-sm overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
                     >
                        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${isEven ? "" : "lg:grid-flow-dense"}`}>
                           {/* Visual Column */}
                           <div className={`lg:col-span-7 relative h-[420px] md:h-[500px] overflow-hidden ${isEven ? "" : "lg:col-start-6"}`}>
                              <Image
                                 src={collection.heroImage}
                                 alt={collection.title}
                                 fill
                                 className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                 sizes="(max-width: 1024px) 100vw, 60vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                              {/* Overlaid Badges */}
                              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                                 <div>
                                    <div className="font-tibetan text-2xl text-white/90 drop-shadow">
                                       {collection.tibetanTitle}
                                    </div>
                                    <div className="text-sm font-light text-white/80">
                                       {collection.specs.knotDensityRange}
                                    </div>
                                 </div>
                                 <span className="badge bg-white/20 backdrop-blur-md px-3 py-1 rounded text-white border border-white/20">
                                    {collection.rugs.length} Carpet Designs
                                 </span>
                              </div>
                           </div>

                           {/* Editorial Content Column */}
                           <div className={`lg:col-span-5 p-8 md:p-12 flex flex-col justify-between ${isEven ? "" : "lg:col-start-1"}`}>
                              <div className="space-y-6">
                                 <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                       <span className="badge text-primary font-semibold tracking-wider">
                                          {String(index + 1).padStart(2, "0")}
                                       </span>
                                       <span className="text-foreground/30">•</span>
                                       <span className="text-xs uppercase tracking-wider text-foreground/50">
                                          {collection.specs.primaryFibers.split(",")[0]}
                                       </span>
                                    </div>
                                    <h2 className="">
                                       <Link
                                          href={`/collections/${collection.slug}`}
                                          className="hover:text-primary transition-colors"
                                       >
                                          {collection.title}
                                       </Link>
                                    </h2>
                                    <p className="text-primary text-xs text-base">
                                       {collection.subtitle}
                                    </p>
                                 </div>

                                 <p className="text-foreground/75 leading-relaxed text-sm md:text-base">
                                    {collection.curatorNote}
                                 </p>

                                 {/* Spec Highlights Table */}
                                 <div className="grid grid-cols-2 gap-4 py-4 border-y border-foreground/10 text-xs">
                                    <div>
                                       <div className="text-foreground/50 uppercase tracking-wider">Technique</div>
                                       <div className="font-medium text-foreground/90 mt-0.5">
                                          {collection.specs.weavingTechnique}
                                       </div>
                                    </div>
                                    <div>
                                       <div className="text-foreground/50 uppercase tracking-wider">Pile Finish</div>
                                       <div className="font-medium text-foreground/90 mt-0.5">
                                          {collection.specs.pileHeight}
                                       </div>
                                    </div>
                                 </div>

                                 {/* Carpet Preview Thumbnails */}
                                 <div>
                                    <div className="text-xs uppercase tracking-wider text-foreground/50 mb-3">
                                       Featured Pieces in this Series
                                    </div>
                                    <div className="flex items-center gap-3">
                                       {collection.rugs.map((rug) => (
                                          <div
                                             key={rug.id}
                                             className="group/thumb relative size-16 rounded border border-foreground/10 overflow-hidden cursor-pointer"
                                             title={rug.name}
                                          >
                                             <Image
                                                src={rug.image}
                                                alt={rug.name}
                                                fill
                                                className="object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                                             />
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                              </div>

                              {/* Action Link */}
                              <div className="pt-8 flex items-center justify-between">
                                 <Link
                                    href={`/collections/${collection.slug}`}
                                    className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-primary group/btn hover:translate-x-1 transition-transform"
                                 >
                                    <span>Discover Full Collection Story</span>
                                    <ArrowRightIcon className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                                 </Link>
                                 <span className="text-xs text-foreground/40 font-mono">
                                    {collection.specs.standardLeadTime}
                                 </span>
                              </div>
                           </div>
                        </div>
                     </article>
                  );
               })}
            </section>
         )}

         {/* Individual Rugs Catalog Grid View */}
         {viewMode === "rugs" && (
            <section className="wrapper space-y-12">
               {/* Secondary Knot Count Filter */}
               <div className="flex items-center justify-between pb-6 border-b border-foreground/10">
                  <div className="text-sm text-foreground/60">
                     Displaying <span className="font-bold text-foreground">{filteredRugs.length}</span> hand-knotted creations
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="text-xs uppercase tracking-wider text-foreground/50 mr-2">Knot Density:</span>
                     {[
                        { id: "all", label: "All" },
                        { id: "60-80", label: "60-80 Knots (Raw/Sculpted)" },
                        { id: "100", label: "100 Knots (Fine Wool)" },
                        { id: "120+", label: "120-150 Knots (Master Silk)" },
                     ].map((knot) => (
                        <button
                           key={knot.id}
                           onClick={() => setSelectedKnot(knot.id)}
                           className={`text-xs px-3 py-1.5 rounded-sm border transition-colors ${selectedKnot === knot.id
                              ? "bg-foreground text-background border-foreground"
                              : "border-foreground/15 text-foreground/70 hover:border-foreground/50"
                              }`}
                        >
                           {knot.label}
                        </button>
                     ))}
                  </div>
               </div>

               {/* Rugs Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {filteredRugs.map((rug) => (
                     <div
                        key={rug.id}
                        className="group bg-white/80 border border-foreground/10 rounded-sm overflow-hidden flex flex-col justify-between hover:border-primary/40 transition-all duration-300"
                     >
                        <div>
                           <div className="relative aspect-[4/5] w-full overflow-hidden bg-foreground/5">
                              <Image
                                 src={rug.image}
                                 alt={rug.name}
                                 fill
                                 className="object-cover group-hover:scale-105 transition-transform duration-700"
                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-mono uppercase tracking-wider text-foreground/75">
                                 {rug.designNumber}
                              </div>
                              <div className="absolute top-4 right-4 bg-primary text-background px-2.5 py-1 rounded text-[11px] uppercase tracking-wider font-semibold">
                                 {rug.knotCount} Knots/in²
                              </div>
                              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 to-transparent p-3 rounded-b text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                 <div className="font-tibetan text-sm">{rug.tibetanName}</div>
                                 <div className="text-xs text-white/80 line-clamp-1">{rug.description}</div>
                              </div>
                           </div>

                           <div className="p-6 space-y-3">
                              <div className="text-xs uppercase tracking-wider text-primary font-semibold">
                                 {rug.collectionTitle}
                              </div>
                              <h3 className="text-xl font-heading text-foreground group-hover:text-primary transition-colors">
                                 {rug.name}
                              </h3>
                              <p className="text-xs text-foreground/70 line-clamp-2">
                                 {rug.materials}
                              </p>

                              {/* Color Swatch Dots */}
                              <div className="flex items-center gap-1.5 pt-2">
                                 {rug.palette.map((color, i) => (
                                    <span
                                       key={i}
                                       className="inline-block text-[10px] bg-foreground/5 text-foreground/75 px-2 py-0.5 rounded"
                                    >
                                       {color}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        </div>

                        <div className="p-6 pt-0 border-t border-foreground/5 mt-4 flex items-center justify-between">
                           <Link
                              href={`/collections/${rug.collectionSlug}`}
                              className="text-xs uppercase tracking-wider font-bold text-primary inline-flex items-center gap-1 group/btn"
                           >
                              <span>View Series</span>
                              <ArrowRightIcon className="size-3 group-hover/btn:translate-x-0.5 transition-transform" />
                           </Link>
                           <Link
                              href={`/bespoke?rug=${rug.designNumber}`}
                              className="text-xs text-foreground/50 hover:text-foreground transition-colors underline underline-offset-4"
                           >
                              Custom Sizing
                           </Link>
                        </div>
                     </div>
                  ))}
               </div>
            </section>
         )}

         {/* Interior Designer / Architectural Trade Strip */}
         <section className="mt-20 wrapper">
            <div className="relative rounded-sm bg-primary text-background p-10 md:p-16 overflow-hidden">
               <div className="relative z-10 max-w-2xl space-y-6">
                  <div className="badge text-background/60 tracking-widest flex items-center gap-2">
                     <SparklesIcon className="size-4" />
                     <span>Interior Designer & Architectural Trade Program</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading text-background leading-tight">
                     Specify Himalayan Masterpieces for Residential & Hospitality Projects
                  </h2>
                  <p className="text-background/80 text-sm md:text-base leading-relaxed">
                     We partner directly with leading interior architecture firms worldwide. Receive our comprehensive Box of 48 Hand-Dyed Tibetan Wool and Mulberry Silk Yarn Pom-Poms, high-resolution CAD texture maps, and custom strike-off samples within 14 days.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                     <LinkButton light href="/bespoke">
                        Request Designer Trade Kit
                     </LinkButton>
                     <Link
                        href="/get-in-touch"
                        className="text-xs uppercase tracking-wider text-background/80 hover:text-background underline underline-offset-4 py-3 px-2"
                     >
                        Book Architectural Consultation
                     </Link>
                  </div>
               </div>

               {/* Subtle background decoration */}
               <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none">
                  <div className="font-tibetan text-[180px] leading-none select-none text-white">
                     བཀྲ་ཤིས།
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

// {/* Filters */ }
// <div className="flex flex-wrap items-center gap-2">
//    {[
//       { id: "all", label: "All Curations" },
//       { id: "silk", label: "Silk & Mineral Waters" },
//       { id: "heritage", label: "Monastic Heritage" },
//       { id: "undyed", label: "Undyed Himalayan Wool" },
//       { id: "modern", label: "Modernist Pigments" },
//    ].map((filter) => (
//       <button
//          key={filter.id}
//          onClick={() => setActiveFilter(filter.id)}
//          className={`text-xs uppercase px-4 py-2.5 rounded-full transition-all duration-300 ${activeFilter === filter.id
//             ? "bg-primary text-background shadow-sm"
//             : "bg-background border border-foreground/15 text-foreground/75 hover:border-primary hover:text-primary"
//             }`}
//       >
//          {filter.label}
//       </button>
//    ))}
// </div>