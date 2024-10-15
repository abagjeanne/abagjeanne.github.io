import { ImageWrapper } from "@/components/data-display";
import { animate } from "@/lib/utils";
import { useEffect, useRef } from "react";
const SocialDetails = ({ url, icon, darkIcon, position }) => {

  const socialRef = useRef(null)
  
  useEffect(()=>{
    const y = 50 + parseInt(`${position}9`)
    const socialAnimation = animate(socialRef.current, y)

    return()=>{
      socialAnimation.revert()
    }
  },[])

  return (
    <li ref={socialRef} className="xl:w-[calc(20%-16px)] md:w-[calc((100%/3)-20px)] w-[calc(50%-10px)] hover:border-box border-dark h-[120px] transition-colors ease-in rounded-[30px] ">
      <a href={url} className="w-full h-full flex justify-center items-center">
        <ImageWrapper
          src={icon}
          srcForDarkMode={darkIcon}
          className="2xl:h-[58px] h-[55px] 2xl:w-[58px] w-[55px]"
        />
      </a>
    </li>
  );
};

export default SocialDetails;
