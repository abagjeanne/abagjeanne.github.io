import { animate } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { ResumeDetails } from "@/components/data-display";
import { CERTIFICATES, EXPERIENCES } from "@/lib/data";
import { AchievementsDetails } from "@/components/data-display";

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const experienceAnimation = animate(experienceRef.current, 50);

    return () => {
      experienceAnimation.revert();
    };
  }, []);

  return (
    <div ref={experienceRef} className="px-4 py-8 md:py-12 lg:py-16">
      <h3 className="text-bright 2xl:text-[44px] md:text-[34px] text-[28px] font-bold lg:mb-10 mb-6">
        My Experience
      </h3>
      
      {/* Experience Section */}
      <div className="border-t border-[#d1d5e0] dark:border-[#303033] pt-6 md:pt-8 mb-8 md:mb-12">
        {EXPERIENCES.map((experience, index) => (
          <ResumeDetails key={index} {...experience} />
        ))}
      </div>
      
      {/* Achievements Section */}
      <h3 className="text-bright 2xl:text-[44px] md:text-[34px] text-[28px] font-bold lg:mb-10 mb-6">
        My Certificates
      </h3>
      <div className="flex flex-wrap gap-8">
        {CERTIFICATES.map((achievement, index) => (
          <AchievementsDetails key={index} {...achievement} position={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
