import { useEffect, useRef } from "react";
import { SectionHeader } from "@/components/layout";
import { TESTIMONIALS } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { TestimonialDetails } from "@/components/data-display";
import { animate } from "@/lib/utils";

const Testimonials = () => {

  const btnsRef = useRef(null)

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  useEffect(()=>{
    const btnsAnimation = animate(btnsRef.current, 50)

    return()=>{
      btnsAnimation.revert()
    }
  },[])

  return (
    <div className="2xl:pt-24 md:pt-20 pt-16 flex flex-col md:gap-12 gap-6">
      <SectionHeader title="Clients say about me" subtitle="Testimonials" />
      <Carousel
        plugins={[plugin.current]}
        className="w-full relative"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {TESTIMONIALS.map((testimonial, index) => (
            <CarouselItem key={index}>
              <TestimonialDetails {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div ref={btnsRef} className="mt-4 flex items-center gap-2">
          <CarouselPrevious className="border-box bg-transparent hover:bg-transparent 2xl:h-[60px] h-[50px] 2xl:w-[60px] w-[50px]  dark:bg-transparent hover:dark:bg-transparent" />
          <CarouselNext className="border-box bg-transparent hover:bg-transparent 2xl:h-[60px] h-[50px] 2xl:w-[60px] w-[50px] dark:bg-transparent hover:dark:bg-transparent" />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
