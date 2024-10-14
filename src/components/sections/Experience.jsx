import { animate } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { ResumeDetails } from "@/components/data-display";
import { EXPERIENCES } from "@/lib/data";

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const experienceAnimation = animate(experienceRef.current, 50);

    return () => {
      experienceAnimation.revert();
    };
  }, []);

  return (
    <div ref={experienceRef}>
      <h3 className="text-bright 2xl:text-[44px] md:text-[30px] text-[28px] font-bold lg:mb-7 mb-5">
        My experience
      </h3>
      <div className="border-t border-[#d1d5e0] dark:border-[#303033]">
        {EXPERIENCES.map((experience, index) => (
          <ResumeDetails key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
