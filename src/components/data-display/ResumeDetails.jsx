import { animate } from "@/lib/utils";
import { useEffect, useRef } from "react";

const ResumeDetails = ({
  startDate,
  endDate,
  title,
  currentlyHere,
  source,
  description,
  isEducation = false,
}) => {
  const dateRef = useRef(null);
  const infoRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const dateAnimation = animate(dateRef.current, 40);
    const infoAnimation = animate(infoRef.current, 40);
    const titleAnimation = animate(titleRef.current, 30);
    const descriptionAnimation = animate(descriptionRef.current, 40);

    return () => {
      dateAnimation.revert();
      titleAnimation.revert();
      infoAnimation.revert();
      descriptionAnimation.revert();
    };
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleString("default", {
      year: "numeric",
      month: "long", // Use "short" for abbreviated month names
    });
  };

  return (
    <div className="2xl:py-11 py-10 flex md:flex-row flex-col border-b border-[#d1d5e0] dark:border-[#303033]">
      <div ref={dateRef} className="md:w-1/5 w-full">
        <span className="text-[15px] text-medium">
          {formatDate(startDate)} -<br/>{" "}
          {currentlyHere ? "now" : formatDate(endDate)}
        </span>
      </div>
      <div className="md:w-2/5 w-full 2xl:pr-[50px] pr-[30px]">
        <h5 ref={titleRef} className="font-bold 2xl:text-[24px] text-[22px] text-bright">
          {title}
        </h5>
        <p ref={infoRef} className="text-[15px] text-medium">
          {isEducation ? (
            <>
              Course by <span className="font-bold text-bright">{source}</span>
            </>
          ) : (
            <>
              in the <span className="font-bold text-bright">{source}</span>
            </>
          )}
        </p>
      </div>
      <div
        ref={descriptionRef}
        className="text-medium md:w-2/5 w-full 2xl:text-[20px] text-[18px]"
      >
        {description}
      </div>
    </div>
  );
};

export default ResumeDetails;
