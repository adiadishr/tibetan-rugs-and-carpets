export interface Rug {
   id: string;
   name: string;
   tibetanName: string;
   designNumber: string;
   image: string;
   detailImage: string;
   roomImage: string;
   knotCount: number; // knots per sq inch
   materials: string;
   palette: string[];
   thickness: string;
   leadTime: string;
   description: string;
   standardSizes: string[];
   customAvailable: boolean;
   priceTier: "Atelier" | "Masterpiece" | "Heritage Archive";
   dimensionsGuide: string;
}

export interface Collection {
   slug: string;
   title: string;
   tibetanTitle: string;
   subtitle: string;
   heroImage: string;
   detailImage: string;
   curatorNote: string;
   story: {
      headline: string;
      paragraph1: string;
      paragraph2: string;
      inspirationOrigin: string;
   };
   specs: {
      knotDensityRange: string;
      primaryFibers: string;
      weavingTechnique: string;
      pileHeight: string;
      standardLeadTime: string;
      washFinish: string;
   };
   rugs: Rug[];
}

export const COLLECTIONS: Collection[] = [
   {
      slug: "namtso",
      title: "The Namtso Series",
      tibetanTitle: "གནམ་མཚོའི་མཛེས་ལྗོངས།",
      subtitle: "Celestial Waters & Raw Mineral Silk",
      heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      detailImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      curatorNote: "An architectural study in liquid stillness, echoing the sacred alpine lake where glacial snowmelt meets Himalayan sky.",
      story: {
         headline: "Light captured in hand-sheared Tibetan silk and high-altitude sheep wool.",
         paragraph1: "Namtso, known to Tibetan pilgrims as the 'Heavenly Lake,' sits at an altitude of 4,718 meters. The light reflected upon its mineral surface transforms by the hour—from crystalline silver at dawn to deep lapis and slate mist as dusk descends.",
         paragraph2: "In this collection, master weavers translate these fluid light gradients into high-density knots using un-dyed Tibetan highland wool juxtaposed against luminous Chinese mulberry silk. Each rug requires between three to five months on the upright loom, hand-knotted row by row around iron rods to produce an exceptionally resilient pile.",
         inspirationOrigin: "Tibet Autonomous Region, Changthang Plateau, 4,700m",
      },
      specs: {
         knotDensityRange: "100 - 120 Knots / Sq. In.",
         primaryFibers: "70% Tibetan Highland Wool, 30% Mulberry Silk",
         weavingTechnique: "Traditional Tibetan Loop Knot (Senneh Khotan variation)",
         pileHeight: "7mm - 9mm (Relief Hand-Carved)",
         standardLeadTime: "10 - 14 Weeks",
         washFinish: "Herbal Mountain Spring Wash, Sun-Dried",
      },
      rugs: [
         {
            id: "namtso-01",
            name: "Namtso Glacial Mist",
            tibetanName: "གངས་ཆུའི་ན་བུན།",
            designNumber: "NM-101",
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
            detailImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
            roomImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
            knotCount: 100,
            materials: "Tibetan Highland Wool & Cultivated Mulberry Silk",
            palette: ["Glacial Silver", "Celadon Mist", "Warm Ecru", "Deep Shale"],
            thickness: "8mm",
            leadTime: "10-12 weeks",
            description: "A continuous gradated colorfield with subtle silk striations that shimmer as ambient room lighting shifts throughout the day.",
            standardSizes: ["8' x 10'", "9' x 12'", "10' x 14'", "12' x 18'"],
            customAvailable: true,
            priceTier: "Masterpiece",
            dimensionsGuide: "Ideal for central living pavilions and primary bedroom suites.",
         },
         {
            id: "namtso-02",
            name: "Lapis Horizon",
            tibetanName: "མཐིང་སྔོན་མཁའ་དབྱིངས།",
            designNumber: "NM-104",
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
            detailImage: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80",
            roomImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
            knotCount: 120,
            materials: "Hand-carded Tibetan Wool with Natural Vegetable Indigo & Raw Silk",
            palette: ["Deep Mineral Indigo", "Weathered Lapis", "Champagne Gold", "Smoked Pearl"],
            thickness: "7.5mm",
            leadTime: "12-14 weeks",
            description: "Dyed with fermented Himalayan indigo leaves, this design features micro-abrash tone variations achieved solely through manual skein kettle dips.",
            standardSizes: ["6' x 9'", "8' x 10'", "9' x 12'", "10' x 14'"],
            customAvailable: true,
            priceTier: "Masterpiece",
            dimensionsGuide: "Perfect contrast anchor under minimalist walnut or bleached oak dining tables.",
         },
         {
            id: "namtso-03",
            name: "Rippled Silt",
            tibetanName: "ཆུ་རིས་བྱེ་མ།",
            designNumber: "NM-109",
            image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
            detailImage: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=1000&q=80",
            roomImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
            knotCount: 100,
            materials: "80% Highland Wool, 20% Chinese Silk",
            palette: ["Bleached Sand", "Warm Taupe", "Dolomite Gray"],
            thickness: "9mm",
            leadTime: "10-12 weeks",
            description: "High-and-low relief loop knots create an organic wave texture reminiscent of wind ripples on high alpine shoreline sands.",
            standardSizes: ["8' x 10'", "9' x 12'", "10' x 14'", "12' x 15'"],
            customAvailable: true,
            priceTier: "Atelier",
            dimensionsGuide: "Brings tactile warmth to stone and concrete minimalist architecture.",
         },
      ],
   },
   {
      slug: "lhokha",
      title: "The Lhokha Heritage Series",
      tibetanTitle: "ལྷོ་ཁའི་གནའ་བོའི་རི་མོ།",
      subtitle: "Monastic Geometry & Sacred Medallions",
      heroImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80",
      detailImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      curatorNote: "The historic cradle of Tibetan civilization, distilled into architectural emblems of eternity, protection, and balanced proportions.",
      story: {
         headline: "Seven centuries of iconography re-imagined for contemporary spaces.",
         paragraph1: "Lhokha is home to Samye, Tibet's oldest monastery founded in the 8th century. In its sacred halls, carpet weaving was never merely utilitarian; it served as spiritual demarcation, grounding monks and kings upon auspicious geometric mandalas.",
         paragraph2: "We revisit the eternal knot (Dpal be'u), stylised Himalayan cloud banks, and sacred lotus borders with restrained negative space. By opening up the field and simplifying ancient border motifs, these rugs become commanding focal points in both classic and hyper-modern interiors.",
         inspirationOrigin: "Yarlung Valley & Samye Monastery, Southern Tibet",
      },
      specs: {
         knotDensityRange: "80 - 100 Knots / Sq. In.",
         primaryFibers: "100% Un-sheared Tibetan Highland Wool",
         weavingTechnique: "Tibetan Iron-Rod Double Knot",
         pileHeight: "10mm (Dense Plush Body)",
         standardLeadTime: "8 - 12 Weeks",
         washFinish: "Traditional Soapnut & River Rinse",
      },
      rugs: [
         {
            id: "lhokha-01",
            name: "Eternal Knot Imperial",
            tibetanName: "དཔལ་བེའུ་རྒྱལ་པོ།",
            designNumber: "LK-201",
            image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
            detailImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
            roomImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80",
            knotCount: 80,
            materials: "100% Changthang Plateau Sheep Wool",
            palette: ["Deep Tibetan Madder", "Oxidized Ochre", "Warm Slate", "Raw Bone"],
            thickness: "10mm",
            leadTime: "8-10 weeks",
            description: "The endless knot—symbol of boundless wisdom and compassion—reinterpreted with monolithic weight and architectural poise.",
            standardSizes: ["6' x 9'", "8' x 10'", "9' x 12'", "10' x 14'"],
            customAvailable: true,
            priceTier: "Heritage Archive",
            dimensionsGuide: "Commands authority in executive salons, private libraries, and formal reception galleries.",
         },
         {
            id: "lhokha-02",
            name: "Himalayan Cloud Lattice",
            tibetanName: "གངས་རིའི་སྤྲིན་རིས།",
            designNumber: "LK-205",
            image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
            detailImage: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=1000&q=80",
            roomImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
            knotCount: 100,
            materials: "Tibetan Wool with Silk Cloud Highlights",
            palette: ["Smoky Charcoal", "Antique Brass", "Dusk Rose", "Alabaster"],
            thickness: "9mm",
            leadTime: "10-12 weeks",
            description: "Layered Tibetan cloud motifs hand-carved at three distinct pile depths to catch directional architectural downlighting.",
            standardSizes: ["8' x 10'", "9' x 12'", "10' x 14'"],
            customAvailable: true,
            priceTier: "Masterpiece",
            dimensionsGuide: "Ideal for contemporary sitting rooms seeking textural depth without visual noise.",
         },
      ],
   },
   {
      slug: "chomolungma",
      title: "The Chomolungma Series",
      tibetanTitle: "ཇོ་མོ་གླང་མའི་རྡོ་དབྱིབས།",
      subtitle: "High-Altitude Undyed Wool & Sculpted Textures",
      heroImage: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1600&q=80",
      detailImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      curatorNote: "Zero chemical dyes. Only the raw, honest fleece of high-altitude mountain sheep, sculpted by hand into tactile topography.",
      story: {
         headline: "The purest expression of wool: lanolin-rich, honest, and indestructible.",
         paragraph1: "Living above 4,000 meters, Tibetan sheep grow a dense, resilient double fleece rich in natural protective lanolin. When sorted entirely by natural shade—from chalk white to granite gray, hazel, and deep peat—it eliminates the need for dyeing entirely.",
         paragraph2: "Chomolungma celebrates raw tactile texture. Our weavers combine tight loop knots with sheared cut piles and unspun thick-and-thin yarn cords, yielding carpets that feel like stepping onto moss-covered mountain moraine.",
         inspirationOrigin: "Mount Everest North Face & Rongbuk Valley, 5,200m",
      },
      specs: {
         knotDensityRange: "60 - 80 Knots / Sq. In. (Ultra-Heavy Yarn)",
         primaryFibers: "100% Undyed Mountain Sheep Wool & Wild Nettle",
         weavingTechnique: "Dual Pile Sculpted Cut-and-Loop",
         pileHeight: "12mm - 16mm (Architectural Relief)",
         standardLeadTime: "8 - 10 Weeks",
         washFinish: "Pure Glacier Water & Himalayan Sun Bleach",
      },
      rugs: [
         {
            id: "chomo-01",
            name: "Moraine Undyed Relief",
            tibetanName: "རྫ་རྡོའི་གཏིང་རིས།",
            designNumber: "CM-301",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
            detailImage: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=1000&q=80",
            roomImage: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1600&q=80",
            knotCount: 60,
            materials: "100% Naturally Graded Tibetan Sheep Wool (Undyed)",
            palette: ["Raw Ivory", "Natural Granite", "Heather Brown"],
            thickness: "14mm",
            leadTime: "8-10 weeks",
            description: "Thick hand-carded wool loops juxtaposed with sheared cut pile creates shadowplay across open expanses of stone or timber flooring.",
            standardSizes: ["8' x 10'", "9' x 12'", "10' x 14'", "12' x 16'"],
            customAvailable: true,
            priceTier: "Atelier",
            dimensionsGuide: "Superb for master bedrooms, mountain retreats, and warm brutalist interiors.",
         },
         {
            id: "chomo-02",
            name: "Rongbuk Ridge",
            tibetanName: "རྫོང་བུ་གངས་རྒྱུད།",
            designNumber: "CM-304",
            image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80",
            detailImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
            roomImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
            knotCount: 70,
            materials: "85% Highland Wool, 15% Wild Himalayan Nettle",
            palette: ["Oatmeal", "Peat Charcoal", "Chalk White"],
            thickness: "12mm",
            leadTime: "8-10 weeks",
            description: "The wild nettle fiber adds structural tension and an organic linen-like crispness that contrasts with the soft highland sheep wool.",
            standardSizes: ["8' x 10'", "9' x 12'", "10' x 14'"],
            customAvailable: true,
            priceTier: "Atelier",
            dimensionsGuide: "Exceptional resistance to heavy footfall in penthouses, lobbies, and luxury boutique hotels.",
         },
      ],
   },
   {
      slug: "norbulingka",
      title: "The Norbulingka Modernist Series",
      tibetanTitle: "ནོར་བུ་གླིང་ཀའི་ཚོན་རིས།",
      subtitle: "Architectural Colorfields & Fresco Pigments",
      heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      detailImage: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80",
      curatorNote: "The jewel palace of Lhasa, deconstructed into bold modernist planes, asymmetric geometries, and earthy mineral saturation.",
      story: {
         headline: "Where ancient mineral pigments converse with Mid-Century and Contemporary spaces.",
         paragraph1: "Norbulingka—the summer palace of the Dalai Lamas—is renowned for its vibrant murals depicting cosmology, flora, and courtyard life. Our modernist series strips away decorative ornament to focus purely on colour tension, proportion, and weight.",
         paragraph2: "We use Swiss eco-friendly metal-free dyes alongside natural walnut bark and saffron to achieve intense, saturated hues that will not fade even under expansive floor-to-ceiling glass fenestration.",
         inspirationOrigin: "Norbulingka Palace, Lhasa, 3,650m",
      },
      specs: {
         knotDensityRange: "100 - 120 Knots / Sq. In.",
         primaryFibers: "80% Tibetan Wool, 20% Chinese Mulberry Silk",
         weavingTechnique: "Tibetan Iron-Rod Weave with Beveled Edge Carving",
         pileHeight: "8mm (Razor Sharp Definition)",
         standardLeadTime: "10 - 14 Weeks",
         washFinish: "Luster Wash & Organic Softener",
      },
      rugs: [
         {
            id: "norbu-01",
            name: "Jewel Pavilion Ochre",
            tibetanName: "གསེར་མདོག་ཕོ་བྲང་།",
            designNumber: "NB-401",
            image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
            detailImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
            roomImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
            knotCount: 100,
            materials: "Tibetan Highland Wool & Raw Silk Accents",
            palette: ["Tibetan Terracotta", "Raw Saffron", "Dusty Rose (#8D4F5C)", "Deep Basalt"],
            thickness: "8mm",
            leadTime: "10-12 weeks",
            description: "A commanding colorfield arrangement featuring our signature dusty rose anchored by warm earthen ochre.",
            standardSizes: ["8' x 10'", "9' x 12'", "10' x 14'", "12' x 18'"],
            customAvailable: true,
            priceTier: "Masterpiece",
            dimensionsGuide: "Creates a gallery-like focal point in open-plan architectural residences.",
         },
         {
            id: "norbu-02",
            name: "Courtyard Geometry",
            tibetanName: "ཁྱམས་རའི་དབྱིབས་རིས།",
            designNumber: "NB-404",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            detailImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
            roomImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
            knotCount: 120,
            materials: "70% Wool, 30% Silk",
            palette: ["Deep Burgundy", "Camel", "French Gray", "Antique Gold"],
            thickness: "7.5mm",
            leadTime: "12-14 weeks",
            description: "Asymmetrical intersecting bands of silk cut against velvety hand-spun wool, framing furniture arrangements with quiet elegance.",
            standardSizes: ["8' x 10'", "9' x 12'", "10' x 14'"],
            customAvailable: true,
            priceTier: "Masterpiece",
            dimensionsGuide: "Pairs seamlessly with mid-century Italian furniture and sculptural bronze tables.",
         },
      ],
   },
   {
      slug: "shangri-la",
      title: "The Shangri-La Silk Botanical Series",
      tibetanTitle: "ཤམ་བྷ་ལའི་མེ་ཏོག་ཚལ།",
      subtitle: "High-Density Mulberry Silk & Alpine Florals",
      heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
      detailImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      curatorNote: "The apex of artisanal Tibetan weaving: 150 knots per square inch in luminous silk, depicting mythological flora and high-altitude mountain blooms.",
      story: {
         headline: "Heirloom collector carpets taking over half a year of concentrated knotting.",
         paragraph1: "Shangri-La embodies the elusive mythical valley of harmony. In this master series, our most senior artisans employ the finest reeled silk yarns, producing intricate line resolution comparable to classical European tapestries and Persian court carpets.",
         paragraph2: "Every blossom, tendril, and shading gradation is hand-knotted without machine intervention. The luminous sheen of the silk reflects changing daylight, causing the rug to appear entirely different when viewed from opposing sides.",
         inspirationOrigin: "Himalayan Sacred Valleys & Botanical Archives",
      },
      specs: {
         knotDensityRange: "140 - 160 Knots / Sq. In.",
         primaryFibers: "100% Fine Mulberry Silk (or 50% Wool / 50% Silk)",
         weavingTechnique: "Fine Gauge Tibetan Rod Weave (Micro Knot)",
         pileHeight: "5mm - 6mm (Silken Velvet Sheen)",
         standardLeadTime: "16 - 22 Weeks",
         washFinish: "Traditional Herbal Gloss Finishing Wash",
      },
      rugs: [
         {
            id: "shangri-01",
            name: "Himalayan Lotus Tapestry",
            tibetanName: "པདྨའི་གདན་ཁྲི།",
            designNumber: "SL-501",
            image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
            detailImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
            roomImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80",
            knotCount: 150,
            materials: "100% Luminous Cultivated Mulberry Silk",
            palette: ["Pale Sage", "Waterlily Ivory", "Rose Quartz", "Silver Champagne"],
            thickness: "6mm",
            leadTime: "18-20 weeks",
            description: "Over 1.5 million individual hand-tied knots. A tactile museum-grade investment piece that radiates soft, iridescent luminescence.",
            standardSizes: ["6' x 9'", "8' x 10'", "9' x 12'", "10' x 14'"],
            customAvailable: true,
            priceTier: "Heritage Archive",
            dimensionsGuide: "Designed for private salon collections, master dressing suites, and prestigious penthouses.",
         },
      ],
   },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
   return COLLECTIONS.find((c) => c.slug === slug);
}

export function getAllCollections(): Collection[] {
   return COLLECTIONS;
}
