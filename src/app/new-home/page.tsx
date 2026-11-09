import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, SparklesIcon, ShieldCheckIcon, CompassIcon, RulerIcon } from "lucide-react";
import Navbar from "@/components/shared/navbar/navbar";
import LinkButton from "@/components/shared/link-button";
import { COLLECTIONS } from "@/lib/collections-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Tibetan Rugs and Carpets | Woven in the Himalayas, Made for Modern Rooms",
   description: "Hand-carded Changthang plateau wool and cultivated mulberry silk, knotted row-by-row on upright Himalayan looms for world-class interior architecture.",
};

export default function NewHomePage() {
   return (
      <div className="relative">
         {/* Navbar */}
         <Navbar isTransparentTop={true} />

         {/* 1. Hero: Elevated Architectural Editorial */}
         <section className="relative min-h-screen flex items-end pb-24 pt-32 bg-black text-white overflow-hidden">
            <Image
               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
               alt="Hand-knotted Tibetan carpet in grand modern architectural interior"
               fill
               priority
               className="object-cover opacity-65 scale-100 transition-transform duration-1000 ease-out"
               sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

            <div className="relative z-10 wrapper w-full space-y-8">
               <div className="flex items-center gap-3">
                  <span className="badge text-white/80 tracking-widest">Kathmandu Atelier • Est. 1982</span>
                  <span className="text-white/40">•</span>
                  <span className="font-tibetan text-primary text-xl md:text-2xl">བོད་ཀྱི་ས་གདན།</span>
               </div>

               <div className="max-w-4xl space-y-4">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white tracking-tight leading-[1.05]">
                     Woven in the Himalayas. <br />
                     <span className="font-serif italic font-normal text-white/90">Shaped for Modern Rooms.</span>
                  </h1>
                  <p className="text-white/80 text-base md:text-xl font-light max-w-2xl leading-relaxed">
                     Hand-knotted from high-altitude Changthang sheep wool and luminous mulberry silk. Soft architecture designed not for passing trends, but for generations of quiet presence.
                  </p>
               </div>

               <div className="flex flex-wrap items-center gap-5 pt-4">
                  <Link
                     href="/collections"
                     className="px-8 py-4 bg-primary text-white text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-primary/90 transition-colors shadow-xl inline-flex items-center gap-2"
                  >
                     <span>Explore Curated Collections</span>
                     <ArrowRightIcon className="size-4" />
                  </Link>
                  <Link
                     href="/bespoke"
                     className="px-6 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-white/20 transition-colors"
                  >
                     Commission Bespoke Piece
                  </Link>
               </div>
            </div>
         </section>

         {/* 2. Brand Thesis: Architectural Restraint & Tibetan Roots */}
         <section className="py-28 wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
               <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden shadow-2xl border border-foreground/10">
                     <Image
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                        alt="Minimalist Tibetan carpet in warm stone architectural space"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                     />
                  </div>
                  {/* Floating Authenticity Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-primary text-background p-6 rounded-sm shadow-xl hidden sm:block max-w-[220px]">
                     <div className="font-tibetan text-lg mb-1">རྡོ་རྗེ་རྒྱ་གྲམ།</div>
                     <div className="text-[11px] leading-snug text-background/80">
                        Traditional Senneh Loop Knotting with Zero Synthetic Backing
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-7 space-y-8 lg:pl-6">
                  <div className="space-y-3">
                     <span className="badge text-primary font-bold tracking-widest">Design Philosophy</span>
                     <h2 className="text-3xl md:text-5xl font-heading text-foreground leading-[1.2]">
                        Some things are made quickly. <br />
                        <span className="italic font-serif">We make ours to last centuries.</span>
                     </h2>
                  </div>

                  <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
                     A Tibetan carpet does not shout. It grounds a room. Knotted around traditional iron rods from lanolin-rich sheep wool of the high plateau, our carpets absorb the acoustics of lofty modern volumes while growing softer, more nuanced, and deeply personal with every passing decade.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-foreground/10">
                     <div className="space-y-1">
                        <div className="text-xl font-heading font-bold text-primary">Changthang Wool</div>
                        <p className="text-xs text-foreground/70 leading-relaxed">
                           Sourced above 4,500m. Naturally coated in protective lanolin for soil resistance.
                        </p>
                     </div>
                     <div className="space-y-1">
                        <div className="text-xl font-heading font-bold text-primary">Iron-Rod Knot</div>
                        <p className="text-xs text-foreground/70 leading-relaxed">
                           Continuous loop weave technique that never unravels under heavy foot traffic.
                        </p>
                     </div>
                     <div className="space-y-1">
                        <div className="text-xl font-heading font-bold text-primary">Mineral Dyes</div>
                        <p className="text-xs text-foreground/70 leading-relaxed">
                           Vegetal madder, walnut husk, fermented indigo, and non-fading Swiss eco pigments.
                        </p>
                     </div>
                  </div>

                  <div className="pt-2">
                     <Link
                        href="/craftsmanship"
                        className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-primary group"
                     >
                        <span>Discover Our Artisanal Weaving Method</span>
                        <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </div>
               </div>
            </div>
         </section>

         {/* 3. Curated Collections: Showcase with Distinct Identity & Imagery */}
         <section className="py-24 bg-white/60 border-y border-foreground/10">
            <div className="wrapper space-y-16">
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="space-y-2 max-w-2xl">
                     <span className="badge text-primary tracking-widest font-bold">The Collections</span>
                     <h2 className="text-3xl md:text-5xl font-heading text-foreground">
                        Curated Series for Architectural Spaces
                     </h2>
                     <p className="text-foreground/75 text-sm md:text-base">
                        Each series explores a distinct dialogue between Himalayan natural topography and contemporary spatial balance.
                     </p>
                  </div>
                  <Link
                     href="/collections"
                     className="text-xs uppercase tracking-widest font-semibold text-primary inline-flex items-center gap-2 group self-start md:self-auto"
                  >
                     <span>View All 5 Collections</span>
                     <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>

               {/* Collections Asymmetric Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {COLLECTIONS.slice(0, 3).map((collection) => (
                     <div
                        key={collection.slug}
                        className="group bg-background border border-foreground/10 rounded-sm overflow-hidden flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-sm"
                     >
                        <div>
                           <div className="relative aspect-[4/3] w-full overflow-hidden">
                              <Image
                                 src={collection.heroImage}
                                 alt={collection.title}
                                 fill
                                 className="object-cover group-hover:scale-105 transition-transform duration-700"
                                 sizes="(max-width: 768px) 100vw, 33vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                                 <div className="font-tibetan text-lg text-white/90">
                                    {collection.tibetanTitle}
                                 </div>
                                 <span className="text-[11px] font-mono uppercase bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded">
                                    {collection.specs.knotDensityRange.split("/")[0]}
                                 </span>
                              </div>
                           </div>

                           <div className="p-6 space-y-3">
                              <h3 className="text-2xl font-heading text-foreground group-hover:text-primary transition-colors">
                                 <Link href={`/collections/${collection.slug}`}>
                                    {collection.title}
                                 </Link>
                              </h3>
                              <p className="text-xs text-primary font-serif italic">
                                 {collection.subtitle}
                              </p>
                              <p className="text-xs text-foreground/70 line-clamp-3 leading-relaxed">
                                 {collection.curatorNote}
                              </p>
                           </div>
                        </div>

                        <div className="p-6 pt-0 border-t border-foreground/5 mt-4 flex items-center justify-between">
                           <span className="text-xs text-foreground/50">
                              {collection.rugs.length} Carpet Designs
                           </span>
                           <Link
                              href={`/collections/${collection.slug}`}
                              className="text-xs uppercase tracking-wider font-bold text-primary inline-flex items-center gap-1 group/btn"
                           >
                              <span>Explore Series</span>
                              <ArrowRightIcon className="size-3 group-hover/btn:translate-x-0.5 transition-transform" />
                           </Link>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 4. Full-Bleed Edge-to-Edge Architectural Break */}
         <section className="relative py-32 bg-primary text-background overflow-hidden">
            <div className="wrapper relative z-10">
               <div className="max-w-3xl space-y-6">
                  <span className="badge text-background/60 tracking-widest flex items-center gap-2">
                     <SparklesIcon className="size-4" />
                     <span>Himalayan Upright Looms</span>
                  </span>
                  <h2 className="text-4xl md:text-6xl font-heading text-background leading-tight">
                     Design at Scale. <br />
                     <span className="font-serif italic font-normal text-background/90">
                        Woven by Master Hands That Understand Proportion.
                     </span>
                  </h2>
                  <p className="text-background/80 text-base md:text-lg leading-relaxed max-w-2xl">
                     We weave carpets exceeding 15 meters without a single seam. On vertical wooden upright looms in the foothills of the Himalayas, up to eight master weavers sit side by side in silent rhythm, translating CAD architectural renderings into millions of hand-tied wool knots.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-4">
                     <LinkButton light href="/bespoke">
                        Commission Custom Dimensions
                     </LinkButton>
                     <Link
                        href="/craftsmanship"
                        className="py-3 px-6 text-xs uppercase tracking-widest text-background border border-background/30 rounded-sm hover:bg-background/10 transition-colors"
                     >
                        View Loom Video & Weaving Stages
                     </Link>
                  </div>
               </div>
            </div>

            {/* Subtle Tibetan Background Watermark */}
            <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-10 pointer-events-none select-none">
               <div className="font-tibetan text-[240px] text-white">
                  བཀྲ་ཤིས།
               </div>
            </div>
         </section>

         {/* 5. Interior Designer & Architectural Concierge */}
         <section className="py-28 wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
               <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                     <span className="badge text-primary tracking-widest font-bold">For Interior Designers & Architects</span>
                     <h2 className="text-3xl md:text-5xl font-heading text-foreground leading-tight">
                        A Dedicated Atelier Partner for Your Specifying Practice
                     </h2>
                  </div>

                  <p className="text-foreground/80 text-base leading-relaxed">
                     Whether designing an expansive Manhattan duplex, a ski chalet in Aspen, or a boutique resort in Kyoto, we provide the technical rigor required by leading architectural practices.
                  </p>

                  <div className="space-y-4 pt-2">
                     <div className="flex items-start gap-3">
                        <div className="size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                           <span className="text-xs font-bold">1</span>
                        </div>
                        <div>
                           <div className="font-semibold text-sm text-foreground">Complimentary 48-Pom Designer Swatch Box</div>
                           <p className="text-xs text-foreground/70">Physical yarn tufts of hand-carded sheep wool, cultivated silk, and wild nettle shipped overnight.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-3">
                        <div className="size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                           <span className="text-xs font-bold">2</span>
                        </div>
                        <div>
                           <div className="font-semibold text-sm text-foreground">14-Day 1:1 Scale Loom Strike-Offs</div>
                           <p className="text-xs text-foreground/70">Woven on miniature looms in Kathmandu so your client can approve pile relief and color nuance before production.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-3">
                        <div className="size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                           <span className="text-xs font-bold">3</span>
                        </div>
                        <div>
                           <div className="font-semibold text-sm text-foreground">CAD & 3D Texture Maps Included</div>
                           <p className="text-xs text-foreground/70">Seamless displacement, normal, and diffuse maps for 3ds Max, SketchUp, and Revit presentations.</p>
                        </div>
                     </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                     <LinkButton href="/bespoke">
                        Request Designer Trade Kit
                     </LinkButton>
                     <Link
                        href="/get-in-touch"
                        className="text-xs uppercase tracking-wider text-foreground/70 hover:text-foreground underline underline-offset-4"
                     >
                        Schedule Atelier Call
                     </Link>
                  </div>
               </div>

               <div className="lg:col-span-6 relative">
                  <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden shadow-2xl border border-foreground/10">
                     <Image
                        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
                        alt="High-end rug strike-off and architectural samples"
                        fill
                        className="object-cover"
                     />
                  </div>
               </div>
            </div>
         </section>

         {/* 6. Journal & Himalayan Chronicles */}
         <section className="py-24 bg-foreground/5 border-t border-foreground/10">
            <div className="wrapper space-y-12">
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="space-y-2">
                     <span className="badge text-primary tracking-widest font-bold">The Chronicles</span>
                     <h2 className="text-3xl md:text-4xl font-heading text-foreground">
                        Stories from the Loom, Wool & Dye Pots
                     </h2>
                  </div>
                  <Link
                     href="/heritage"
                     className="text-xs uppercase tracking-widest font-semibold text-primary inline-flex items-center gap-2 group"
                  >
                     <span>Explore Heritage Archive</span>
                     <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     {
                        title: "Why High Lanolin in Tibetan Sheep Wool Outperforms Synthetic Stain Coatings",
                        category: "Material Science",
                        read: "5 Min Read",
                        image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80",
                        slug: "/craftsmanship",
                     },
                     {
                        title: "The Iron Rod Knot: Decoding the Ancient Tibetan Loop Technique",
                        category: "Heritage Technique",
                        read: "7 Min Read",
                        image: "https://cdn11.bigcommerce.com/s-ajr4uzac3y/images/stencil/1920w/image-manager/1286x1800-nepal25-carding-c2.jpg?t=1761556636",
                        slug: "/craftsmanship",
                     },
                     {
                        title: "Specifying Rug Proportions for Double-Height Living Volumes",
                        category: "Interior Architecture",
                        read: "6 Min Read",
                        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                        slug: "/bespoke",
                     },
                  ].map((article, idx) => (
                     <Link
                        key={idx}
                        href={article.slug}
                        className="group bg-background border border-foreground/10 rounded-sm overflow-hidden flex flex-col justify-between hover:border-primary/40 transition-all duration-300"
                     >
                        <div>
                           <div className="relative aspect-[16/10] w-full overflow-hidden">
                              <Image
                                 src={article.image}
                                 alt={article.title}
                                 fill
                                 className="object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                           </div>
                           <div className="p-6 space-y-2">
                              <div className="flex items-center justify-between text-[11px] text-foreground/50 uppercase tracking-wider">
                                 <span className="text-primary font-semibold">{article.category}</span>
                                 <span>{article.read}</span>
                              </div>
                              <h3 className="text-lg font-heading text-foreground group-hover:text-primary transition-colors leading-snug">
                                 {article.title}
                              </h3>
                           </div>
                        </div>
                        <div className="p-6 pt-0 border-t border-foreground/5 mt-2 flex items-center justify-end">
                           <span className="text-xs uppercase tracking-wider text-primary font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                              Read Article <ArrowRightIcon className="size-3" />
                           </span>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
}
