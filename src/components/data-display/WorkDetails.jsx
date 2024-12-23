import { animate } from "@/lib/utils";
import { useEffect, useRef } from "react";

const WorkDetails = ({ image, touls, position, title, description, link }) => {
  const workRef = useRef(null);

  useEffect(() => {
    const workAnimation = animate(workRef.current, position % 2 === 0 ? 80 : 150);

    return () => {
      workAnimation.revert();
    };
  }, [position]);

  return (
    <div ref={workRef} className="relative w-full md:pt-[calc(50%-16px)] pt-[100%] md:w-[calc(50%-16px)]">
      <div className="work-box absolute top-0 left-0 w-full h-full rounded-[30px] cursor-pointer overflow-hidden hover:scale-[1.03] transition-transform duration-300">
        <img
          src={image}
          className="work-img absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 rounded-[30px] scale-110 hover:scale-100"
          alt={title}
        />
        {/* Overlay for title, description, and button */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[30px]">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm mt-1">{description}</p>
          {/* Conditionally render the button if `link` is provided */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-300 transition duration-300"
            >
              View Project
            </a>
          )}
        </div>
      </div>
      <div className="absolute left-7 bottom-7 flex gap-1">
        {touls.map((toul, index) => (
          <p
            key={index}
            className={`px-[14px] 2xl:h-[38px] h-[34px] flex gap-[10px] items-center font-semibold 2xl:text-[15px] text-[13px] rounded-3xl w-fit text-medium ${
              position === 0 || position === 3
                ? "bg-[#111] text-[#EBF0F7]"
                : "text-[#22232C] bg-[#E6EBF4]"
            }`}
          >
            {toul}
          </p>
        ))}
      </div>
    </div>
  );
};

export default WorkDetails;
