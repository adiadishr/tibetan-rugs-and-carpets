import { cn } from "cn";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

interface LinkButtonProps {
   href: string;
   light?: boolean;
   children: React.ReactNode;
   arrowOrientation?: "right" | "bottom";
}

export default function LinkButton({ href, light = false, children, arrowOrientation = "right" }: LinkButtonProps) {
   return (
      <Link href={href} className={cn(
         "relative pb-3 border-b flex gap-2 items-center w-fit group",
         light ? "text-background border-background" : "text-foreground border-foreground"
      )}>
         <div className="uppercase leading-[100%] text-sm">{children}</div>
         <ArrowRightIcon
            className={cn(
               "mt-1 duration-300 size-4 group-hover:-rotate-45",
               arrowOrientation === "bottom" && "rotate-90 group-hover:rotate-90 -translate-y-0.5 group-hover:translate-y-0.5"
            )}
         />
      </Link>
   )
}