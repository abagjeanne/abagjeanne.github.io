import { animate } from "@/lib/utils";
import { useEffect, useRef } from "react";

const InformationDetails = ({label, info}) => {

  const informationRef = useRef(null)

  useEffect(()=>{
    const informationAnimation = animate(informationRef.current, 60)

    return ()=>{
      informationAnimation.revert()
    }
  },[])

  return (
    <div ref={informationRef} className="">
      <small className="mb-1 text-medium">{label}</small>
      <h6 className="text-bright leading-5 2xl:text-[18px] font-bold">
        {info}
      </h6>
    </div>
  );
};

export default InformationDetails;
