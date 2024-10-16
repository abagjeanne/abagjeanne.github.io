import { CREATIVETOOLS, DEVTOOLS } from "@/lib/data";
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

      {/* Creative Tools Section */}
      <div className="mb-10">
        <h4 className="text-bright 2xl:text-[36px] md:text-[28px] text-[24px] font-bold lg:mb-5 mb-4">
          Creative Tools
        </h4>
        <div className="flex flex-wrap gap-5">
          {CREATIVETOOLS.map((tool, index) => (
            <ToolDetails key={index} position={index} {...tool} />
          ))}
        </div>
      </div>

      {/* Development Tools Section */}
      <div>
        <h4 className="text-bright 2xl:text-[36px] md:text-[28px] text-[24px] font-bold lg:mb-5 mb-4">
          Development Tools
        </h4>
        <div className="flex flex-wrap gap-5">
          {DEVTOOLS.map((tool, index) => (
            <ToolDetails key={index} position={index} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
