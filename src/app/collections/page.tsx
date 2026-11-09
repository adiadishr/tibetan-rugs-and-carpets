import Navbar from "@/components/shared/navbar/navbar";
import CollectionsClient from "@/components/collections/collections-client";
import { COLLECTIONS } from "@/lib/collections-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Collections | Tibetan Rugs and Carpets",
   description: "Explore our curated series of hand-knotted Himalayan carpets, woven on upright looms using hand-carded Changthang plateau wool and cultivated mulberry silk.",
};

export default function CollectionsPage() {
   return (
      <>
         <Navbar isTransparentTop={false} />
         <CollectionsClient collections={COLLECTIONS} />
      </>
   );
}
