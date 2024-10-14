import { EDUCATIONS } from "@/lib/data";
import { ResumeDetails } from "@/components/data-display";
import { useEffect, useRef } from "react";
import { animate } from "@/lib/utils";

const Education = () => {

  const educationRef = useRef(null)

  useEffect(()=>{
    const educationAnimation = animate(educationRef.current,50)

    return ()=>{
      educationAnimation.revert()
    }
  },[])

  return (
    <div ref={educationRef}>
      <h3 className="text-bright 2xl:text-[44px] md:text-[30px] text-[28px] font-bold lg:mb-7 mb-5">
        My education
      </h3>
      <div className="border-t border-[#d1d5e0] dark:border-[#303033]">
        {EDUCATIONS.map((education, index) => (
          <ResumeDetails key={index} {...education} isEducation={true} />
        ))}
      </div>
    </div>
  );
};

export default Education;
