import { animate } from "@/lib/utils";
import { useEffect, useRef } from "react";

const ContactDetails = ({label, value}) => {
  const labelRef = useRef(null)
  const valueRef = useRef(null)

  useEffect(()=>{
    const labelAnimation = animate(labelRef.current, 50)
    const valueAnimation = animate(valueRef.current, 50)

    return()=>{
      labelAnimation.revert()
      valueAnimation.revert()
    }
  },[])
  return (
    <div className="md:w-1/3 w-full py-8 border-box border-b-0 border-x-0 leading-tight">
      <p ref={labelRef} className="font-bold text-bright">{label}</p>
      <p ref={valueRef} className="text-medium">
        <a href="">{value}</a>
      </p>
    </div>
  );
};

export default ContactDetails;
