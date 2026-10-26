
"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function LenisScroll({
   children,
}: {
   children: ReactNode;
}) {
   useEffect(() => {
      const lenis = new Lenis({
         autoRaf: true,
         lerp: 0.1,
         smoothWheel: true,
         anchors: true,
      });

      return () => {
         lenis.destroy();
      };
   }, []);

   return <>{children}</>;
}