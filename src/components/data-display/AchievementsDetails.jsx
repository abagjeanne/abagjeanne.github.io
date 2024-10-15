import { animate } from "@/lib/utils";
import { useEffect, useRef } from "react";

const AchievementsDetails = ({ number, title, position,animationY }) => {
  const achievementRef = useRef(null);

  useEffect(()=>{
    const y = 30 + parseInt(`${position}9`) 
    
    const achievementAnimation = animate(achievementRef.current, y)

    return ()=>{
      achievementAnimation.revert()
    }
  },[])

  return (
    <div
      className="p-[25px] border-box rounded-3xl 2xl:w-[calc((100%/3)-(100px/3))] md:w-[calc((100%/3)-20px)] w-full text-center"
      ref={achievementRef}
    >
      <p className="2xl:text-[80px] xl:text-[70px] text-[60px] font-bold t-accent leading-none">
        {number}
      </p>
      <p className="2xl:text-[20px] xl:text-[18px] font-bold text-bright mt-[6px]">
        {title}
      </p>
    </div>
  );
};

export default AchievementsDetails;
