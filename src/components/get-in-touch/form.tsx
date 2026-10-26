import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";

export default function Form() {
   return (<>
      <div className="mb-20 rounded-sm wrapper bg-primary/5 text-foreground">
         <div className="py-20 wrapper grid grid-cols-[1fr_1.5fr] gap-12 relative">
            <div className="space-y-4 h-fit sticky top-40">
               <div className="badge text-foreground/50">
                  Write to us
               </div>
               <div className="space-y-2">
                  <h2>Send Us a Message</h2>
                  <p className="text-foreground/75">
                     Fill out the form and our team will get back to you within 1 business day. For urgent queries, please call us directly.
                  </p>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-12 rounded-xs gap-y-12 bg-background">
               {/* Title and Full Name */}
               <div className="flex col-span-2 gap-4">
                  <div className="relative flex items-center justify-between w-1/5 pb-3 border-b border-foreground h-fit shrink-0">
                     <p className="text-xs text-foreground/50">
                        Title
                     </p>
                     <ChevronDownIcon className="absolute right-0 duration-300 -translate-y-1/2 top-1/3 size-4 text-foreground/50" />
                  </div>
                  <div className="relative flex items-center justify-between w-full pb-3 border-b border-foreground h-fit">
                     <p className="text-xs text-foreground/50">
                        Full Name
                     </p>
                  </div>
               </div>
               {/* Phone */}
               <div className="flex col-span-2 gap-4">
                  <div className="relative flex items-center justify-between w-1/5 pb-3 border-b border-foreground h-fit shrink-0">
                     <p className="text-xs text-foreground/50">
                        Country Code
                     </p>
                     <ChevronDownIcon className="absolute right-0 duration-300 -translate-y-1/2 top-1/3 size-4 text-foreground/50" />
                  </div>
                  <div className="relative flex items-center justify-between w-full pb-3 border-b border-foreground h-fit">
                     <p className="text-xs text-foreground/50">
                        Phone Number
                     </p>
                  </div>
               </div>
               {/* Email & Subject */}
               <>
                  {/* Email */}
                  <div className="relative flex items-center justify-between w-full pb-3 border-b border-foreground h-fit">
                     <p className="text-xs text-foreground/50">
                        Email Address
                     </p>
                  </div>
                  {/* Subject */}
                  <div className="relative flex items-center justify-between w-full pb-3 border-b border-foreground h-fit shrink-0">
                     <p className="text-xs text-foreground/50">
                        Select A Subject
                     </p>
                     <ChevronDownIcon className="absolute right-0 duration-300 -translate-y-1/2 top-1/3 size-4 text-foreground/50" />
                  </div>
               </>
               {/* Message */}
               <div className="relative flex items-start justify-between w-full col-span-2 pb-3 border-b h-36 border-foreground">
                  <p className="text-xs text-foreground/50 h-fit">
                     Message
                  </p>
               </div>
               {/* Submit Button */}
               <div className="px-8 py-4 text-center cursor-pointer hover:bg-primary/75 duration-300 text-sm bg-primary text-background rounded-sm">
                  Submit Message
               </div>
            </div>
         </div>
      </div>
   </>)
}