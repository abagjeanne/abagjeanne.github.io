import { Sparkle } from "lucide-react";
import { useEffect, useRef } from "react";
import { animate } from "@/lib/utils";

const SectionHeader = ({ title, subtitle }) => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useEffect(() => {
    const titleAnimation = animate(titleRef.current, 50);
    const subTitleAnimation = animate(subTitleRef.current, 50);

    return () => {
      titleAnimation.revert();
      subTitleAnimation.revert();
    };
  }, []);


  return (
    <div>
      <p ref={subTitleRef} className="2xl:mb-[17px] mb-[11px] px-[14px] 2xl:h-[38px] h-[34px] flex gap-[10px] items-center font-bold 2xl:text-[15px] text-[13px] border-box rounded-3xl w-fit text-medium">
        <Sparkle className="h-[14px] w-[14px]" /> {subtitle}
      </p>
      <h2 ref={titleRef} className="font-semibold t-accent 2xl:text-6xl xl:text-[54px] text-4xl leading-[50px] 2xl:max-w-[900px]  lg:max-w-[740px] w-full">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
