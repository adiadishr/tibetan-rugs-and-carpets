'use client'

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { TextAnimate } from '@/components/ui/text-animate';

type TimelineItem = {
   Date: string;
   description: string;
};

const timeline: TimelineItem[] = [
   {
      Date: '1999',
      description:
         'Our journey begins with a passion for Tibetan rugs, celebrating the rich heritage of Himalayan weaving and traditional craftsmanship.',
   },
   {
      Date: '2005',
      description:
         'We continue to preserve traditional rug-making techniques, bringing the warmth, character, and artistry of Tibetan rugs into homes and spaces.',
   },
   {
      Date: '2012 Onwards',
      description:
         'We build on generations of weaving knowledge, combining traditional Tibetan motifs with meticulous craftsmanship and a commitment to lasting quality.',
   },
   {
      Date: '2020',
      description:
         'We continue to refine our craft, focusing on thoughtful design, carefully selected materials, and rugs made to stand the test of time.',
   },
   {
      Date: '2023',
      description:
         'Our collection evolves to embrace contemporary interiors while remaining rooted in the timeless patterns, textures, and cultural heritage of Tibetan rug-making.',
   },
   {
      Date: 'Today',
      description:
         'We create distinctive Tibetan rugs that bring together Himalayan heritage, skilled craftsmanship, and enduring design for homes and thoughtfully designed spaces.',
   },
];

export default function TimelineSection({
   className,
}: {
   className?: string;
}) {

   const journeyTitle = 'Our Journey';

   const journeyDescription = 'From our beginnings in Kathmandu to serving international clients, our journey reflects a commitment to craftsmanship, responsible production, and enduring quality.';

   return (
      <section
         className={cn(
            '',
            className,
         )}
      >
         {/* Desktop timeline */}
         <div className="hidden overflow-x-auto pt-10 xl:block">
            <div className="flex min-w-max">
               {timeline.map((item, i) => (
                  <motion.div
                     key={item.Date}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="flex flex-1 flex-col items-center"
                  >
                     <span className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
                        {item.Date}
                     </span>

                     <div className="mb-4 flex w-full items-center">
                        <div
                           className={cn(
                              'h-[2px] flex-1 bg-primary',
                              i === 0 && 'invisible',
                           )}
                        />

                        <div className="z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white">
                           <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>

                        <div
                           className={cn(
                              'h-[2px] flex-1 bg-primary',
                              i === timeline.length - 1 &&
                              'invisible',
                           )}
                        />
                     </div>

                     <p className="max-w-[180px] text-center text-xs leading-relaxed text-neutral-600 body-text sm:text-sm">
                        {item.description}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>

         {/* Mobile timeline */}
         {/* <div className="block overflow-y-auto pt-12 xl:hidden">
            <div className="flex flex-col items-center">
               {timeline.map((item, i) => {
                  const isLast = i === timeline.length - 1;
                  const isEven = i % 2 === 0;

                  return (
                     <motion.div
                        key={item.Date}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex w-full items-stretch"
                     >
                        <div className="flex flex-1 justify-end pr-4">
                           {isEven && (
                              <div className="flex flex-col items-end pb-8 text-right">
                                 <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
                                    {item.Date}
                                 </span>

                                 <p className="max-w-[320px] text-xs leading-relaxed text-neutral-600 body-text sm:text-sm">
                                    {item.description}
                                 </p>
                              </div>
                           )}
                        </div>

                        <div className="flex flex-col items-center">
                           <div className="z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white">
                              <div className="h-2 w-2 rounded-full bg-primary" />
                           </div>

                           {!isLast && (
                              <div className="w-[2px] flex-1 bg-primary" />
                           )}
                        </div>

                        <div className="flex flex-1 justify-start pl-4">
                           {!isEven && (
                              <div className="flex flex-col items-start pb-8 text-left">
                                 <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
                                    {item.Date}
                                 </span>

                                 <p className="max-w-[320px] text-xs leading-relaxed text-neutral-600 body-text sm:text-sm">
                                    {item.description}
                                 </p>
                              </div>
                           )}
                        </div>
                     </motion.div>
                  );
               })}
            </div>
         </div> */}
      </section>
   );
}