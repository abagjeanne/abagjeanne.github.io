import { lightModePic, darkModePic } from "@/assets/images";
import { Button } from "@/components/layout";
import { useTheme } from "@/components/theme-provider";
import { ImageWrapper } from "@/components/data-display";

const Avatar = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div className="lg:sticky relative top-8 bg-[#ebf0f6] dark:bg-[#161616] lg:h-[calc(100vh-64px)] h-auto p-8 border border-box rounded-[40px] flex flex-col justify-between lg:gap-0 gap-4">
      <div className="">
        <div className="flex gap-5 2xl:mb-5 mb-[10px]">
          <p className="2xl:text-3xl text-[28px] font-bold text-bright leading-8">
            Jeanne Mari <br /> Abag
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden">
          <ImageWrapper 
            className="w-full" 
            src={lightModePic} // Light mode image
            srcForDarkMode={darkModePic} // Dark mode image
            alt="Jeanne Mari Abag" // Provide a meaningful alt text
          />
        </div>
      </div>
      <div className="">
        <small className="mb-1 text-medium">Specialization:</small>
        <h6 className="text-bright leading-5 2xl:text-[18px] font-bold">
          UI/UX designer <br />
          and Frontend Development
        </h6>
      </div>
      <div className="">
        <small className="mb-1 text-medium">Based in:</small>
        <h6 className="text-bright leading-5 2xl:text-[18px] font-bold">
          Manila, Philippines
        </h6>
      </div>
      <div className="">
        <Button
          href={"#contact"}
          className="2xl:h-[60px] h-[50px] bg-btn text-btn"
        >
          Let's Work Together!
        </Button>
      </div>
    </div>
  );
};

export default Avatar;
