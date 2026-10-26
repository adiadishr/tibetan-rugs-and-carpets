import type { Metadata } from "next";
import { Darker_Grotesque, EB_Garamond, Geist, Geist_Mono, Jomolhari, Lato, Libre_Baskerville, Philosopher } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/lenis";
import { cn } from "cn";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";

const headingFont = Philosopher({
   // Philosopher
   weight: ["400", "700"],
   variable: "--font-heading",
   subsets: ["latin"],
})

const bodyFont = Lato({
   // Lato
   weight: ["400", "700", "300"],
   variable: "--font-body",
   subsets: ["latin"],
})

const tibetanFont = Jomolhari({
   weight: "400",
   variable: "--font-tibetan",
   subsets: ["latin", "tibetan"],
})

export const metadata: Metadata = {
   title: "Tibetan Rugs and Carpets",
   description: "Woven in the Himalayas. Made for modern rooms",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
   return (
      <html
         lang="en"
         className={cn("antialiased h-full", headingFont.variable, bodyFont.variable, tibetanFont.variable)}
      >
         <body className="flex flex-col min-h-full">
            <LenisScroll>
               <main>
                  {children}
                  <Footer />
               </main>
            </LenisScroll>
         </body>
      </html>
   );
}
