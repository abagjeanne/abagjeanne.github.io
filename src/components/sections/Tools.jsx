import { TOOLS } from "@/lib/data";
import { animate } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { ToolDetails } from "@/components/data-display";

const Tools = () => {
  const toolsRef = useRef(null);

  useEffect(() => {
    const toolsAnimation = animate(toolsRef.current, 50);

    return () => {
      toolsAnimation.revert();
    };
  }, []);

  return (
    <div className="2xl:pb-12 md:pb-8 pb-10" ref={toolsRef}>
      <h3 className="text-bright 2xl:text-[44px] md:text-[30px] text-[28px] font-bold lg:mb-7 mb-5">
        My favourite tools
      </h3>

      <div className="flex flex-wrap gap-5">
        {TOOLS.map((tool, index) => (
          <ToolDetails key={index} position={index} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
