import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const animate = (element, y) => {
  return gsap.context(() => {
    gsap.fromTo(
      element,
      { y: y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: element,
          start: "top 100%", 
          end: "bottom 20%", 
          toggleActions: "play none none reverse", 
        },
      }
    );
  });
};
