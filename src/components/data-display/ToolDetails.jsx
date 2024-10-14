import { animate } from "@/lib/utils";
import { useEffect, useRef } from "react";

const ToolDetails = ({ image, title, position }) => {
  const toolRef = useRef(null);

  useEffect(() => {
    const y = 30 + parseInt(`${position}9`);
    const toolAnimation = animate(toolRef.current, y);

    return () => {
      toolAnimation.revert();
    };
  }, []);

  return (
    <div
      ref={toolRef}
      className="p-[30px] rounded-[40px] border-box flex flex-col justify-start items-center xl:w-[calc(20%-16px)] md:w-[calc((100%/3)-(40px/3))] w-[calc(50%-10px)]"
    >
      <img
        className="2xl:h-[70px] xl:h-[60px] md:h-[90px] h-[60px]"
        src={image}
        alt=""
      />
      <h6 className="text-brigth font-bold mt-[15px]  2xl:text-[18px]">
        {title}
      </h6>
    </div>
  );
};

export default ToolDetails;
