"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
   CheckCircle2Icon,
   RulerIcon,
   SparklesIcon,
   LayersIcon,
   UploadCloudIcon,
   ArrowRightIcon,
   SlidersIcon,
   ShieldCheckIcon,
   SendIcon,
   DownloadIcon
} from "lucide-react";
import LinkButton from "@/components/shared/link-button";

export default function BespokeClient() {
   // Interactive Customization Studio state
   const [selectedDensity, setSelectedDensity] = useState<number>(100);
   const [selectedFiber, setSelectedFiber] = useState<string>("wool-silk");
   const [selectedFinish, setSelectedFinish] = useState<string>("sculpted");
   const [selectedShape, setSelectedShape] = useState<string>("rectangular");

   // Form state
   const [submitted, setSubmitted] = useState<boolean>(false);
   const [formState, setFormState] = useState({
      clientType: "Interior Designer",
      fullName: "",
      firmName: "",
      email: "",
      phone: "",
      projectType: "High-End Residential",
      dimensions: "10' x 14'",
      shape: "Rectangular",
      colorNotes: "",
      timeline: "12-16 Weeks",
   });

   const densityMap: Record<number, { title: string; desc: string; lead: string; tactile: string }> = {
      60: {
         title: "60 Knots — Heavy Architectural",
         desc: "Chunky, organic hand-carded wool loops. High structural weight and earthy texture ideal for rustic or brutalist timber interiors.",
         lead: "8 - 10 Weeks",
         tactile: "Deep 14mm pile, raw textural grounding",
      },
      80: {
         title: "80 Knots — Classic Heritage",
         desc: "The quintessential Tibetan monastic density. Strikes the optimum equilibrium of durability, softness, and crisp geometric definition.",
         lead: "10 - 12 Weeks",
         tactile: "Plush 10mm pile, resilient under heavy furniture",
      },
      100: {
         title: "100 Knots — Refined Contemporary",
         desc: "Our most specified density by interior architects. Flawless gradient transitions, subtle silk accents, and razor-sharp contour carving.",
         lead: "12 - 14 Weeks",
         tactile: "Refined 8mm pile, velvety and luminous",
      },
      150: {
         title: "150 Knots — Ultra-Fine Silk Masterpiece",
         desc: "The pinnacle of Himalayan loom craft. Requires over 200,000 hand-tied knots per square meter, rendered in pure mulberry silk.",
         lead: "16 - 22 Weeks",
         tactile: "Micro-velvet 5mm profile, museum heirloom quality",
      },
   };

   const fiberMap: Record<string, { label: string; ratio: string; features: string }> = {
      "wool-100": {
         label: "100% Changthang Plateau Sheep Wool",
         ratio: "100% Wool",
         features: "Unrivaled high lanolin content, stain resistance, matte luster, organic springback resilience.",
      },
      "wool-silk": {
         label: "70% Highland Wool / 30% Cultivated Silk",
         ratio: "70% Wool, 30% Silk",
         features: "Our signature blend. Silk highlights catch daylight dynamically while wool body maintains structural anchor.",
      },
      "silk-100": {
         label: "100% Fine Mulberry Silk",
         ratio: "100% Silk",
         features: "Pure liquid iridescence. Reflects directional ambient lighting and feels cool, sensual, and opulent.",
      },
      "wool-nettle": {
         label: "85% Highland Wool / 15% Wild Himalayan Nettle",
         ratio: "85% Wool, 15% Nettle",
         features: "Wild-harvested stinging nettle adds linen-like crispness, earthy flecks, and immense abrasion resistance.",
      },
   };

   const currentDensity = densityMap[selectedDensity];
   const currentFiber = fiberMap[selectedFiber];

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
   };

   return (
      <div className="relative">

         {/* Atmospheric Editorial Hero */}
         <section className="relative min-h-[85vh] flex items-end pb-20 pt-32 bg-black text-white overflow-hidden">
            <Image
               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
               alt="Bespoke luxury carpet installation in architectural living pavilion"
               fill
               priority
               className="object-cover opacity-50 scale-100 transition-transform duration-1000"
               sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />

            <div className="relative z-10 wrapper space-y-6 w-full">
               <div className="flex items-center gap-3">
                  <span className="badge text-background/75">The Bespoke Commission Atelier</span>
                  {/* <span className="text-white/40">•</span>
                  <span className="font-tibetan text-primary text-xl md:text-2xl">གཟིགས་བཟོའི་ས་གདན།</span> */}
               </div>

               <h1 className="text-background">
                  Soft Architecture Commissioned for Your Space
               </h1>

               <p className="text-background/75 max-w-2xl">
                  Tailored to the exact proportions, solar orientation, and materials of your interior project. Hand-carded, custom-dyed, and knotted without dimension limitations on upright Himalayan looms.
               </p>

               {/* <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                     href="#commission-form"
                     className="px-8 py-3.5 bg-primary text-white text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-primary/90 transition-colors shadow-lg"
                  >
                     Start a Commission
                  </a>
                  <a
                     href="#customization-studio"
                     className="px-6 py-3.5 bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-white/20 transition-colors"
                  >
                     Explore Fiber & Knot Densities
                  </a>
               </div> */}
            </div>
         </section>

         {/* The 4-Stage Commission Process */}
         <section className="py-24 wrapper">
            <div className="space-y-4 max-w-2xl mx-auto mb-16">
               <div className="badge text-primary text-center">The Commission Journey</div>
               <h2 className="text-center">
                  From Architectural Blueprint to Loomed Reality
               </h2>
               <p className="text-foreground/75 text-center">
                  Every bespoke commission is overseen by our Kathmandu atelier directors and dedicated design concierges, ensuring meticulous precision from initial strike-off to final white-glove placement.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  {
                     step: "01",
                     tibetan: "ཐོག་མའི་ཇུས་འགོད།",
                     title: "Spatial Discovery & Color Strike",
                     desc: "We analyze your CAD plans, floor finishes, and natural daylight exposure. Custom dye formulas matched to Pantone, ARS, or physical fabric swatches.",
                     icon: RulerIcon,
                  },
                  {
                     step: "02",
                     tibetan: "དཔེ་ཚད་བཟོ་བ།",
                     title: "1:1 Scale Loom Sample",
                     desc: "Before production begins, we weave a physical 1' x 1' (30x30cm) hand-knotted sample delivered to your studio within 14 days for client approval.",
                     icon: LayersIcon,
                  },
                  {
                     step: "03",
                     tibetan: "ལག་ཐགས་འཐག་ལས།",
                     title: "Upright Loom Hand-Knotting",
                     desc: "Master artisans knot your rug row-by-row around the Tibetan steel rod. Progress photography and loom milestone videos provided throughout.",
                     icon: SlidersIcon,
                  },
                  {
                     step: "04",
                     tibetan: "གངས་ཆུའི་ཁྲུས་ལས།",
                     title: "Herbal Snowmelt Wash & Carving",
                     desc: "Washed in herbal organic soapnuts and mountain spring water, sun-dried on Himalayan terraces, and hand-sheared to sculpted pile depths.",
                     icon: SparklesIcon,
                  },
               ].map((item, idx) => (
                  <div
                     key={idx}
                     className="bg-white/70 border border-foreground/10 rounded-sm p-8 space-y-6 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-sm"
                  >
                     <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
                           <span className="font-heading text-3xl font-bold text-primary">{item.step}</span>
                           <span className="font-tibetan text-foreground/40 text-sm">{item.tibetan}</span>
                        </div>
                        <h3 className="text-xl font-heading text-foreground">{item.title}</h3>
                        <p className="text-xs text-foreground/70 leading-relaxed">{item.desc}</p>
                     </div>
                     <div className="pt-4 flex items-center gap-2 text-[11px] text-primary font-semibold uppercase tracking-wider">
                        <item.icon className="size-4" />
                        <span>Stage {idx + 1} Milestone</span>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* Interactive Bespoke Customization Studio */}
         <section id="customization-studio" className="py-24 bg-white/70 border-y border-foreground/10">
            <div className="wrapper space-y-16">
               <div className="flex flex-col gap-4">
                  <div className="space-y-2 max-w-2xl">
                     <span className="badge text-primary">Tactile Atelier</span>
                     <h2 className="text-foreground">
                        Configure Your Commission Specifications
                     </h2>
                  </div>
                  <p className="text-foreground/75">
                     Test different knot densities, fiber compositions, and pile sculpting to preview weight, texture, and crafting lead times.
                  </p>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Selector Controls Column */}
                  <div className="lg:col-span-7 space-y-8">
                     {/* 1. Knot Density */}
                     <div className="space-y-3">
                        <div className="flex items-center justify-between">
                           <label className="text-xs uppercase tracking-wider font-semibold text-foreground">
                              1. Select Knot Density (Knots / Sq. In.)
                           </label>
                           <span className="text-xs text-primary font-bold font-mono">{selectedDensity} Knots / in²</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                           {[60, 80, 100, 150].map((knot) => (
                              <button
                                 key={knot}
                                 onClick={() => setSelectedDensity(knot)}
                                 className={`py-3 px-3 text-left rounded-sm border transition-all ${selectedDensity === knot
                                    ? "bg-primary text-background border-primary shadow-sm"
                                    : "bg-background border-foreground/15 text-foreground hover:border-foreground/40"
                                    }`}
                              >
                                 <div className="text-base font-heading font-bold">{knot} Knots</div>
                                 <div className={`text-[10px] uppercase tracking-wider ${selectedDensity === knot ? "text-background/80" : "text-foreground/50"}`}>
                                    {knot === 60 ? "Chunky" : knot === 80 ? "Heritage" : knot === 100 ? "Architectural" : "Master Silk"}
                                 </div>
                              </button>
                           ))}
                        </div>
                     </div>

                     {/* 2. Fiber Composition */}
                     <div className="space-y-3">
                        <label className="text-xs uppercase tracking-wider font-semibold text-foreground block">
                           2. Select Raw Fiber Matrix
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                           {Object.entries(fiberMap).map(([key, item]) => (
                              <button
                                 key={key}
                                 onClick={() => setSelectedFiber(key)}
                                 className={`p-3.5 text-left rounded-sm border transition-all ${selectedFiber === key
                                    ? "bg-primary text-background border-primary shadow-sm"
                                    : "bg-background border-foreground/15 text-foreground hover:border-foreground/40"
                                    }`}
                              >
                                 <div className="text-xs font-semibold">{item.label}</div>
                                 <div className={`text-[11px] mt-1 line-clamp-2 ${selectedFiber === key ? "text-background/80" : "text-foreground/60"}`}>
                                    {item.features}
                                 </div>
                              </button>
                           ))}
                        </div>
                     </div>

                     {/* 3. Pile Relief & Sculpting */}
                     <div className="space-y-3">
                        <label className="text-xs uppercase tracking-wider font-semibold text-foreground block">
                           3. Select Pile Surface & Carving
                        </label>
                        <div className="grid grid-cols-3 gap-2.5">
                           {[
                              { id: "velvet", name: "Uniform Cut Pile", desc: "Even, velvety smooth surface" },
                              { id: "sculpted", name: "High-Low Sculpted", desc: "Hand-beveled relief contours" },
                              { id: "loop", name: "Dual Cut & Loop", desc: "Tactile ribbed architectural weave" },
                           ].map((finish) => (
                              <button
                                 key={finish.id}
                                 onClick={() => setSelectedFinish(finish.id)}
                                 className={`p-3 text-left rounded-sm border transition-all ${selectedFinish === finish.id
                                    ? "bg-primary text-background border-primary shadow-sm"
                                    : "bg-background border-foreground/15 text-foreground hover:border-foreground/40"
                                    }`}
                              >
                                 <div className="text-xs font-semibold">{finish.name}</div>
                                 <div className={`text-[10px] mt-0.5 ${selectedFinish === finish.id ? "text-background/80" : "text-foreground/50"}`}>
                                    {finish.desc}
                                 </div>
                              </button>
                           ))}
                        </div>
                     </div>

                     {/* 4. Shape & Proportions */}
                     <div className="space-y-3">
                        <label className="text-xs uppercase tracking-wider font-semibold text-foreground block">
                           4. Custom Geometry
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                           {[
                              { id: "rectangular", name: "Rectangular" },
                              { id: "circular", name: "Circular / Oval" },
                              { id: "runner", name: "Stair / Runner" },
                              { id: "freeform", name: "Organic Freeform" },
                           ].map((shape) => (
                              <button
                                 key={shape.id}
                                 onClick={() => setSelectedShape(shape.id)}
                                 className={`py-2 px-2 text-center text-xs rounded-sm border transition-all ${selectedShape === shape.id
                                    ? "bg-foreground text-background border-foreground font-semibold"
                                    : "bg-background border-foreground/15 text-foreground/75 hover:border-foreground"
                                    }`}
                              >
                                 {shape.name}
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Dynamic Specification Sheet Output */}
                  <div className="lg:col-span-5">
                     <div className="bg-background border border-foreground/20 rounded-sm p-8 space-y-6 shadow-md sticky top-28">
                        <div className="space-y-1 border-b border-foreground/10 pb-4">
                           <span className="badge text-primary font-bold">Commission Summary</span>
                           <h3 className="text-2xl font-heading text-foreground">
                              {currentDensity.title.split("—")[1]?.trim() || "Bespoke Carpet"}
                           </h3>
                           <p className="text-xs text-foreground/60 font-serif italic">
                              Himalayan Loom Configuration
                           </p>
                        </div>

                        <div className="space-y-4 text-xs">
                           <div>
                              <div className="text-foreground/50 uppercase tracking-wider text-[10px]">Density Profile</div>
                              <div className="font-semibold text-foreground mt-0.5">{currentDensity.title}</div>
                              <p className="text-foreground/70 text-[11px] mt-1">{currentDensity.desc}</p>
                           </div>

                           <div className="border-t border-foreground/10 pt-3">
                              <div className="text-foreground/50 uppercase tracking-wider text-[10px]">Material Composition</div>
                              <div className="font-semibold text-foreground mt-0.5">{currentFiber.label}</div>
                           </div>

                           <div className="border-t border-foreground/10 pt-3">
                              <div className="text-foreground/50 uppercase tracking-wider text-[10px]">Tactile Hand-Feel</div>
                              <div className="font-semibold text-primary mt-0.5">{currentDensity.tactile}</div>
                           </div>

                           <div className="border-t border-foreground/10 pt-3">
                              <div className="text-foreground/50 uppercase tracking-wider text-[10px]">Estimated Hand-Weaving Duration</div>
                              <div className="font-semibold text-foreground mt-0.5 font-mono">{currentDensity.lead}</div>
                           </div>
                        </div>

                        <div className="pt-2">
                           <a
                              href="#commission-form"
                              className="w-full py-3.5 bg-primary text-white text-xs uppercase tracking-widest font-semibold rounded text-center block hover:bg-primary/90 transition-colors shadow"
                           >
                              Apply Specifications to Inquiry
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Interior Designer Concierge Strip */}
         <section className="py-20 wrapper">
            <div className="bg-primary text-background rounded-sm p-10 md:p-14">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                     <span className="badge text-background/60 tracking-widest flex items-center gap-2">
                        <SparklesIcon className="size-4" />
                        <span>For Interior Architecture & Design Studios</span>
                     </span>
                     <h2 className="text-3xl md:text-4xl font-heading text-background">
                        Trade Services: Swatches, CAD Assets & Dedicated Loom Concierge
                     </h2>
                     <p className="text-background/80 text-sm md:text-base leading-relaxed">
                        We work closely with hospitality groups and private residential interior designers across London, New York, Milan, and Tokyo. Trade accounts receive our physical Swatch Folio (48 Tibetan wool & silk pom-poms) and seamless 3D textures for rendering engines.
                     </p>
                  </div>
                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                     <a
                        href="#commission-form"
                        className="py-3 px-6 bg-background text-foreground text-xs uppercase tracking-widest font-semibold rounded text-center hover:bg-background/90 transition-colors"
                     >
                        Request Designer Trade Kit
                     </a>
                     <Link
                        href="/get-in-touch"
                        className="py-3 px-6 bg-transparent border border-background/30 text-background text-xs uppercase tracking-widest font-semibold rounded text-center hover:bg-background/10 transition-colors"
                     >
                        Direct Studio Contact
                     </Link>
                  </div>
               </div>
            </div>
         </section>

         {/* Commission Inquiry Form Section */}
         <section id="commission-form" className="py-24 wrapper">
            <div className="max-w-4xl mx-auto space-y-12">
               <div className="text-center space-y-3">
                  <span className="badge text-primary tracking-widest font-bold">Commission Proposal</span>
                  <h2 className="text-3xl md:text-5xl font-heading text-foreground">
                     Commission Your Bespoke Carpet
                  </h2>
                  <p className="text-foreground/75 text-sm md:text-base max-w-xl mx-auto">
                     Share your project dimensions, aesthetic mood, and material preference. Our atelier director will review and prepare a concept proposal with yarn strike-offs within 24 hours.
                  </p>
               </div>

               <div className="bg-white/80 border border-foreground/15 rounded-sm p-8 md:p-12 shadow-md">
                  {!submitted ? (
                     <form onSubmit={handleSubmit} className="space-y-8">
                        {/* 1. Client & Studio Classification */}
                        <div className="space-y-4">
                           <div className="text-xs uppercase tracking-widest font-bold text-primary border-b border-foreground/10 pb-2">
                              1. Client & Professional Classification
                           </div>
                           <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {[
                                 "Interior Designer",
                                 "Architect",
                                 "Private Collector",
                                 "Hospitality Specifier",
                              ].map((type) => (
                                 <button
                                    type="button"
                                    key={type}
                                    onClick={() => setFormState({ ...formState, clientType: type })}
                                    className={`py-2 px-3 text-xs rounded border transition-all ${formState.clientType === type
                                       ? "bg-primary text-background border-primary font-semibold"
                                       : "bg-background border-foreground/15 text-foreground/75 hover:border-foreground"
                                       }`}
                                 >
                                    {type}
                                 </button>
                              ))}
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                              <div>
                                 <label className="block text-[11px] uppercase tracking-wider text-foreground/60 mb-1">
                                    Full Name / Contact Person *
                                 </label>
                                 <input
                                    required
                                    type="text"
                                    placeholder="e.g. Christian Liaigre Studio"
                                    value={formState.fullName}
                                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                                    className="w-full bg-background border border-foreground/15 p-3 rounded text-sm focus:outline-primary"
                                 />
                              </div>
                              <div>
                                 <label className="block text-[11px] uppercase tracking-wider text-foreground/60 mb-1">
                                    Design Firm / Studio Name (If Applicable)
                                 </label>
                                 <input
                                    type="text"
                                    placeholder="e.g. Studio Liaigre Paris"
                                    value={formState.firmName}
                                    onChange={(e) => setFormState({ ...formState, firmName: e.target.value })}
                                    className="w-full bg-background border border-foreground/15 p-3 rounded text-sm focus:outline-primary"
                                 />
                              </div>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                 <label className="block text-[11px] uppercase tracking-wider text-foreground/60 mb-1">
                                    Email Address *
                                 </label>
                                 <input
                                    required
                                    type="email"
                                    placeholder="liaigre@design.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-background border border-foreground/15 p-3 rounded text-sm focus:outline-primary"
                                 />
                              </div>
                              <div>
                                 <label className="block text-[11px] uppercase tracking-wider text-foreground/60 mb-1">
                                    Phone / WhatsApp (For Loom Progress Updates)
                                 </label>
                                 <input
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    value={formState.phone}
                                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                    className="w-full bg-background border border-foreground/15 p-3 rounded text-sm focus:outline-primary"
                                 />
                              </div>
                           </div>
                        </div>

                        {/* 2. Spatial & Dimension Specifications */}
                        <div className="space-y-4 pt-4">
                           <div className="text-xs uppercase tracking-widest font-bold text-primary border-b border-foreground/10 pb-2">
                              2. Spatial Scale & Proportions
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                 <label className="block text-[11px] uppercase tracking-wider text-foreground/60 mb-1">
                                    Project Environment
                                 </label>
                                 <select
                                    value={formState.projectType}
                                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                                    className="w-full bg-background border border-foreground/15 p-3 rounded text-sm focus:outline-primary"
                                 >
                                    <option>High-End Residential Living</option>
                                    <option>Primary Bedroom Suite</option>
                                    <option>Dining & Entertaining Salon</option>
                                    <option>Luxury Penthouse / Duplex</option>
                                    <option>Boutique Hotel Lobby</option>
                                    <option>Private Superyacht</option>
                                    <option>Corporate Boardroom</option>
                                 </select>
                              </div>

                              <div>
                                 <label className="block text-[11px] uppercase tracking-wider text-foreground/60 mb-1">
                                    Desired Dimensions (Custom) *
                                 </label>
                                 <input
                                    required
                                    type="text"
                                    placeholder="e.g. 12' x 16' (or 3.6m x 4.8m)"
                                    value={formState.dimensions}
                                    onChange={(e) => setFormState({ ...formState, dimensions: e.target.value })}
                                    className="w-full bg-background border border-foreground/15 p-3 rounded text-sm focus:outline-primary"
                                 />
                              </div>

                              <div>
                                 <label className="block text-[11px] uppercase tracking-wider text-foreground/60 mb-1">
                                    Target Completion Timeline
                                 </label>
                                 <select
                                    value={formState.timeline}
                                    onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                                    className="w-full bg-background border border-foreground/15 p-3 rounded text-sm focus:outline-primary"
                                 >
                                    <option>Standard (10-14 Weeks)</option>
                                    <option>Expedited Loom (8-10 Weeks)</option>
                                    <option>Future Build (4-6 Months)</option>
                                    <option>Concept Exploration</option>
                                 </select>
                              </div>
                           </div>
                        </div>

                        {/* 3. Design Direction & Palette */}
                        <div className="space-y-4 pt-4">
                           <div className="text-xs uppercase tracking-widest font-bold text-primary border-b border-foreground/10 pb-2">
                              3. Aesthetic Direction & Architectural Palette
                           </div>

                           <div>
                              <label className="block text-[11px] uppercase tracking-wider text-foreground/60 mb-1">
                                 Color Inspiration, Natural Pigments, or Floor Materials
                              </label>
                              <textarea
                                 rows={4}
                                 placeholder="Describe your interior palette (e.g. muted slate blue with raw ecru wool, travertine stone floors, brass fixtures, low ambient lighting)..."
                                 value={formState.colorNotes}
                                 onChange={(e) => setFormState({ ...formState, colorNotes: e.target.value })}
                                 className="w-full bg-background border border-foreground/15 p-3 rounded text-sm focus:outline-primary resize-none"
                              />
                           </div>

                           {/* File Dropzone Mock */}
                           <div className="border-2 border-dashed border-foreground/20 rounded-sm p-6 text-center hover:border-primary/50 transition-colors cursor-pointer bg-foreground/[0.02]">
                              <UploadCloudIcon className="size-8 mx-auto text-primary/70 mb-2" />
                              <div className="text-xs font-semibold text-foreground">
                                 Upload CAD Plan, Moodboard, or Material Swatch Photo
                              </div>
                              <p className="text-[11px] text-foreground/50 mt-1">
                                 PDF, JPG, PNG, or DWG (Up to 25MB)
                              </p>
                           </div>
                        </div>

                        <div className="pt-4">
                           <button
                              type="submit"
                              className="w-full py-4 bg-primary text-background text-xs uppercase tracking-widest font-semibold rounded hover:bg-primary/90 transition-colors shadow-lg flex items-center justify-center gap-2"
                           >
                              <SendIcon className="size-4" />
                              <span>Submit Commission Request for Atelier Review</span>
                           </button>
                           <p className="text-[11px] text-center text-foreground/50 mt-3">
                              All bespoke consultations are confidential. We never share proprietary architectural renderings or custom formulations.
                           </p>
                        </div>
                     </form>
                  ) : (
                     <div className="py-12 text-center space-y-6">
                        <div className="size-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
                           <CheckCircle2Icon className="size-8" />
                        </div>
                        <div className="space-y-2">
                           <div className="badge text-primary font-bold">Commission Proposal Received</div>
                           <h3 className="text-3xl font-heading text-foreground">
                              Thank You, {formState.fullName || "Valued Client"}
                           </h3>
                           <p className="text-sm text-foreground/75 max-w-md mx-auto leading-relaxed">
                              Your commission inquiry for a <span className="font-semibold text-primary">{formState.dimensions}</span> carpet in <span className="font-semibold text-primary">{formState.projectType}</span> has been transferred to our Himalayan master loom studio.
                           </p>
                        </div>

                        <div className="bg-primary/5 border border-primary/20 p-4 rounded max-w-md mx-auto text-xs text-foreground/70 text-left space-y-2">
                           <div className="font-semibold text-foreground">Next Immediate Steps:</div>
                           <div>1. Our senior design director reviews your spatial parameters within 24 hours.</div>
                           <div>2. A curated digital strike-off rendering and yarn swatch box will be dispatched to your studio.</div>
                        </div>

                        <button
                           onClick={() => setSubmitted(false)}
                           className="px-8 py-3 bg-foreground text-background text-xs uppercase tracking-widest rounded hover:bg-foreground/90 transition-colors"
                        >
                           Submit Another Project
                        </button>
                     </div>
                  )}
               </div>
            </div>
         </section>

         {/* Designer Testimonials & Case Studies */}
         <section className="py-20 bg-foreground/5 border-t border-foreground/10">
            <div className="wrapper space-y-12">
               <div className="text-center space-y-2">
                  <span className="badge text-primary font-bold tracking-widest">Architectural Endorsements</span>
                  <h2 className="text-2xl md:text-3xl font-heading text-foreground">
                     Trusted by Premier Interior Design Practices
                  </h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     {
                        quote:
                           "The Tibetan loop knot has a quiet sculptural integrity that machine tufting can never replicate. The lanolin in the Changthang wool gave our client's penthouse dining room both stain protection and remarkable acoustic softness.",
                        author: "Elena Rostova",
                        title: "Principal Architect, Rostova & Associates, Milan",
                     },
                     {
                        quote:
                           "We commissioned a 14-meter seamless runner for an alpine residence in Gstaad. The color gradation from un-dyed charcoal to pale snowmelt ecru was executed with extraordinary fidelity to our original watercolor rendering.",
                        author: "Marcus Lindqvist",
                        title: "Creative Director, Studio Nord, Stockholm",
                     },
                     {
                        quote:
                           "The bespoke strike-off arrived in London within 10 days of our initial brief. Seeing and feeling the actual wool-silk density made client sign-off effortless. Their loom progress updates are a masterclass in transparency.",
                        author: "Sophia Kensington",
                        title: "Head of Interiors, Kensington Residential, London",
                     },
                  ].map((item, idx) => (
                     <div
                        key={idx}
                        className="bg-background border border-foreground/10 rounded-sm p-6 space-y-4 flex flex-col justify-between"
                     >
                        <p className="text-xs text-foreground/80 leading-relaxed font-serif italic">
                           “{item.quote}”
                        </p>
                        <div className="border-t border-foreground/10 pt-3">
                           <div className="font-heading font-semibold text-sm text-foreground">{item.author}</div>
                           <div className="text-[11px] text-foreground/50">{item.title}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
}
