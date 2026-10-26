import { cn } from "cn";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
   return (<>
      <div className="space-y-12">
         <div className="w-full py-20 rounded-sm wrapper bg-primary text-background">
            <div className="flex items-start justify-between w-full wrapper">
               {/* Newsletter */}
               <div className="flex">
                  <div className="max-w-sm space-y-8">
                     <div className="space-y-2">
                        <h5>Stay in the loop</h5>
                        <p className="text-sm text-background/75">
                           Receive our newsletter and discover our world, collections, and latest news from us.
                        </p>
                     </div>
                     <div className="relative flex items-center justify-between pb-4 border-b border-background h-fit">
                        <p className="text-xs text-background/50">
                           Your Email Address
                        </p>
                        <ArrowRightIcon className="absolute right-0 duration-300 -translate-y-1/2 top-1/3 size-4 text-background/50" />
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="mt-1 border size-3 shrink-0 border-background"></div>
                        <p className="text-xs text-background/75">
                           I acknowledge that my email address will be processed by Tibetan Rugs and Carpets in accordance with the provisions of the Privacy Policy.
                        </p>
                     </div>
                  </div>
               </div>
               {/* Links */}
               <div className="flex gap-12">
                  <div className="space-y-6">
                     <h5>Quick Links</h5>
                     <div className="flex flex-col gap-4">
                        <FooterLink>Home</FooterLink>
                        <FooterLink>Collections</FooterLink>
                        <FooterLink>Crafstmanship</FooterLink>
                        <FooterLink>Journal</FooterLink>
                        <FooterLink>Bespoke</FooterLink>
                        <FooterLink>Get In Touch</FooterLink>
                     </div>
                  </div>
                  {/* <div className="space-y-6">
                     <h5>Company</h5>
                     <div className="flex flex-col gap-4">
                        <FooterLink>Privacy Policy</FooterLink>
                        <FooterLink>Terms and conditions</FooterLink>
                        <FooterLink>Shipping Information</FooterLink>
                     </div>
                  </div> */}
                  <div className="space-y-6">
                     <h5>Socials</h5>
                     <div className="flex flex-col gap-4">
                        <FooterLink>Instagram</FooterLink>
                        <FooterLink>Facebook</FooterLink>
                        <FooterLink>TikTok</FooterLink>
                        <FooterLink>LinkedIn</FooterLink>
                     </div>
                  </div>
                  <div className="space-y-6">
                     <h5>Connect With Us</h5>
                     <div className="flex flex-col gap-4">
                        <FooterLink isUpperCase={false}>Tel: +91 0000000000</FooterLink>
                        <FooterLink isUpperCase={false}>Time: Mon-Sat / 10AM-7PM (IST)</FooterLink>
                        <FooterLink isUpperCase={false}>Mail: shop@tibetanstudio.com</FooterLink>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="relative mb-12 wrapper">
            <div className="flex items-center justify-between w-full">
               {/* Spacer */}
               <div className=""></div>
               <Link href="/" className="absolute left-0 -translate-y-1/2 h-fit w-fit top-1/2">
                  <div className="relative aspect-video h-14">
                     <Image src="/shared/logo.svg" alt="logo" fill className="object-contain brightness-15" />
                  </div>
               </Link>
               {/* <div className="flex items-center gap-8">
                  <BottomLink>Instagram</BottomLink>
                  <BottomLink>Facebook</BottomLink>
                  <BottomLink>TikTok</BottomLink>
                  <BottomLink>LinkedIn</BottomLink>
               </div> */}
               <div className="flex flex-col items-end gap-2">
                  <p className="text-xs text-foreground/75 w-fit">
                     © 2026 Tibetan Carpets and rugs. All rights reserved.
                  </p>
                  <div className="flex items-center gap-6">
                     <BottomLink>Privacy Policy</BottomLink>
                     <BottomLink>Terms and conditions</BottomLink>
                     <BottomLink>Shipping Information</BottomLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </>)
}

function FooterLink({ children, href = "#", isUpperCase = true }: { children: React.ReactNode, href?: string, isUpperCase?: boolean }) {
   return (<>
      <Link href={href} className="group">
         <div className={cn("relative flex overflow-hidden w-fit h-fit text-[13px]", isUpperCase && "uppercase text-xs")}>
            <div className="static duration-300 text-background/75 group-hover:-translate-y-full ease-out-quart">
               {children}
            </div>
            <div className="absolute inset-x-0 bottom-0 duration-300 translate-y-full group-hover:translate-y-0 ease-out-quart group-hover:delay-100 text-background">
               {children}
            </div>
         </div>
      </Link>
   </>)
}

function BottomLink({ children, href = "#" }: { children: React.ReactNode, href?: string }) {
   return (<>
      <Link href={href} className="group">
         <div className="relative flex overflow-hidden w-fit h-fit">
            <div className="static text-xs uppercase duration-300 text-foreground/75 group-hover:-translate-y-full ease-out-quart">
               {children}
            </div>
            <div className="absolute inset-x-0 bottom-0 text-xs uppercase duration-300 translate-y-full group-hover:translate-y-0 ease-out-quart group-hover:delay-100 text-foreground">
               {children}
            </div>
         </div>
      </Link>
   </>)
}