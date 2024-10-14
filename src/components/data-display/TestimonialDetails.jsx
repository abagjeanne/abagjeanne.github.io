import { animate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const TestimonialDetails = ({avatar, name, company, jobTitle, feedback}) => {

  const testimonialRef = useRef(null)
  const feedbackRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(()=>{
    const testimonialAnimation = animate(testimonialRef.current, 50)
    const feedbackAnimation = animate(feedbackRef.current, 50)
    const btnAnimation = animate(btnRef.current, 50)

    return()=>{
      testimonialAnimation.revert()
      feedbackAnimation.revert()
      btnAnimation.revert()
    }
  },[])

  return (
    <div ref={testimonialRef} className="border-box 2xl:p-[50px] p-[30px] rounded-3xl flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <img
          className="md:w-[100px] w-[60px] md:h-[100px] h-[60px] rounded-3xl"
          src={avatar}
          alt=""
        />
        <div className="">
          <p className="2xl:text-[30px] md:text-[26px] text-[24px] text-bright font-bold leading-none">
            {name}
          </p>
          <p className="text-[15px] text-meduim">
            {jobTitle} in{" "}
            <span className="font-bold text-bright">{company}</span>
          </p>
        </div>
      </div>
      <p ref={feedbackRef} className="2xl:text-[22px] text-[20px] leading-tight text-medium">
        {feedback}
      </p>
      <div ref={btnRef} className="2xl:text-[20px] text-bright font-bold">
        <a className="flex items-center gap-1" href="">Project Page <ArrowRight className="h-[18px] w-[18px]" /></a>
      </div>
    </div>
  );
};

export default TestimonialDetails;
