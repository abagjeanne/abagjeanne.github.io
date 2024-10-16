import { animate } from "@/lib/utils";
import { useEffect, useRef } from "react";

const AchievementsDetails = ({ image, title, position, desc }) => {
  const achievementRef = useRef(null);

  useEffect(() => {
    const y = 30 + parseInt(`${position}9`);
    const achievementAnimation = animate(achievementRef.current, y);

    return () => {
      achievementAnimation.revert();
    };
  }, []);

  return (
    <div
      className="border-box rounded-3xl md:w-[calc(50%-16px)] w-full cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
      ref={achievementRef}
    >
      <div className="p-6 flex flex-col">
        <img
          src={image}
          alt={title}
          className="w-full rounded-lg object-cover mb-4"
        />
        <p className="text-[26px] lg:text-[30px] 2xl:text-[34px] font-bold text-bright leading-[35px] mb-2">
          {title}
        </p>
        <div className="text-bright text-[16px] lg:text-[18px] 2xl:text-[20px] leading-relaxed max-w-prose">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default AchievementsDetails;
