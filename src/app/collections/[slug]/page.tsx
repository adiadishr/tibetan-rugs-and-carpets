import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar/navbar";
import { COLLECTIONS, getCollectionBySlug } from "@/lib/collections-data";
import CollectionDetailClient from "@/components/collections/collection-detail-client";

interface PageProps {
   params: Promise<{
      slug: string;
   }>;
}

export async function generateStaticParams() {
   return COLLECTIONS.map((c) => ({
      slug: c.slug,
   }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { slug } = await params;
   const collection = getCollectionBySlug(slug);

   if (!collection) {
      return {
         title: "Collection Not Found | Tibetan Rugs and Carpets",
      };
   }

   return {
      title: `${collection.title} | Tibetan Rugs and Carpets`,
      description: collection.curatorNote,
   };
}

export default async function CollectionDetailPage({ params }: PageProps) {
   const { slug } = await params;
   const collection = getCollectionBySlug(slug);

   if (!collection) {
      notFound();
   }

   // Find next collection for carousel/footer navigation
   const currentIndex = COLLECTIONS.findIndex((c) => c.slug === slug);
   const nextCollection = COLLECTIONS[(currentIndex + 1) % COLLECTIONS.length];

   return (
      <>
         <Navbar isTransparentTop={true} />
         <CollectionDetailClient collection={collection} nextCollection={nextCollection} />
      </>
   );
}
