import { animate } from "@/lib/utils";
import { useEffect, useRef } from "react";

const ServiceDetails = ({ title, touls, description, position }) => {
  const serviceRef = useRef(null);
  const titleRef = useRef(null);
  const toulsRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const serviceAnimation = animate(
      serviceRef.current,
      position % 2 == 0 ? 80 : 150
    );

    const titleAnimation = animate(titleRef.current, 50);
    const toulsAnimation = animate(toulsRef.current, 50);
    const imageAnimation = animate(imageRef.current, 50);
    const descriptionAnimation = animate(descriptionRef.current, 50);

    return () => {
      serviceAnimation.revert();
      titleAnimation.revert();
      toulsAnimation.revert();
      imageAnimation.revert();
      descriptionAnimation.revert();
    };
  }, []);

  return (
    <div
      ref={serviceRef}
      className="border-box rounded-3xl md:w-[calc(50%-16px)] cursor-pointer"
    >
      <div className="2xl:p-[50px] p-[30px]">
        <h4 ref={titleRef} className="2xl:text-[34px] xl:text-[30px] text-[26px] font-bold text-bright leading-[35px]">
          {title == "Brand identity" ? (
            <>
              Brand <br /> identity
            </>
          ) : (
            title
          )}
        </h4>
        <div ref={toulsRef} className="flex gap-2 mt-2">
          {touls.map((toul, index) => (
            <p
              key={index}
              className="px-[14px] 2xl:h-[38px] h-[34px] flex items-center font-semibold 2xl:text-[15px] text-[13px] border-box rounded-3xl w-fit text-medium"
            >
              {toul}
            </p>
          ))}
        </div>
        <p ref={descriptionRef} className="text-medium 2xl:text-[20px] text-[18px] mt-6">{description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
