import Navbar from "@/components/shared/navbar/navbar";
import BespokeClient from "@/components/bespoke/bespoke-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Bespoke Commissions | Tibetan Rugs and Carpets",
   description: "Commission custom hand-knotted Tibetan carpets tailored to your architectural spaces. For interior designers, architects, and discerning private residences.",
};

export default function BespokePage() {
   return (
      <>
         <Navbar isTransparentTop={true} />
         <BespokeClient />
      </>
   );
}
