import "@/components/style/RotatingButton.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const RotatingButton = () => {
  const rotatingBtn = useRef(null);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const rotatingBtnAnimation = gsap.context(() => {
      gsap.fromTo(
        rotatingBtn.current,
        {},
        {
          scrollTrigger: {
            onUpdate: (self) => {
              const currentScrollY = window.scrollY;

              const isScrollingDown = currentScrollY > previousScrollY;

              gsap.to(rotatingBtn.current, {
                rotate: isScrollingDown ? "+=20" : "-=20",
                duration: 0.8,
              });

              previousScrollY = currentScrollY;
            },
          },
        }
      );
    });

    return () => {
      rotatingBtnAnimation.revert();
    };
  }, []);

  return (
    <div className="">
      <a
        href="#portfolio"
        className="absolute bottom-12 right-0 rounded-[50%] overflow-hidden arrow lg:block hidden"
      >
        <svg
          ref={rotatingBtn}
          width="134"
          height="134"
          viewBox="0 0 200 200"
          className="text-bright font-bold uppercase text-lg tracking-wider"
        >
          <defs>
            <path
              id="fullCirclePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text className="">
            <textPath
              href="#fullCirclePath"
              startOffset="0%"
              fill="currentColor"
            >
              Scroll for More * Scroll for More * Scroll for More * Scroll for
              More *
            </textPath>
          </text>
        </svg>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 2xl:h-[26px] h-[23px] 2xl:w-[26px] w-[23px] overflow-hidden">
          <ArrowDown className="arrow-back w-full h-full text-bright absolute top-[-40px]" />
          <ArrowDown className="arrow-front w-full h-full text-bright absolute bottom-0" />
        </span>
      </a>
    </div>
  );
};

export default RotatingButton;
