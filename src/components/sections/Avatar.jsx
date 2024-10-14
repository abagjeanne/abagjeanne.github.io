import { myPic } from "@/assets/images";
import { SocialIcons } from "@/components/data-display";
import { Button } from "@/components/layout";

const Avatar = () => {
  return (
    <div className="lg:sticky relative top-8 bg-[#ebf0f6] dark:bg-[#161616]  lg:h-[calc(100vh-64px)] h-auto p-8 border border-box rounded-[40px] flex flex-col justify-between lg:gap-0 gap-4">
      <div className="">
        <div className="flex gap-5 2xl:mb-5 mb-[10px]">
          {/* <div className="2xl:h-[75px] h-[60px] 2xl:w-[75px] w-[60px] rounded-3xl border-[1.5px] border-[#AA70E0] dark:border-[#E4B8BF] relative overflow-hidden"></div> */}
          <p className="2xl:text-3xl text-[28px] font-bold text-bright leading-8">
            Jeanne Mari <br /> Abag
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden">
          <img className="w-full" src={myPic} alt="" />
        </div>
      </div>
      <div className="">
        <small className="mb-1 text-medium">Specialization:</small>
        <h6 className="text-bright leading-5 2xl:text-[18px] font-bold">
          UI/UX designer <br />
          and frontend developer
        </h6>
      </div>
      <div className="">
        <small className="mb-1 text-medium">Based in:</small>
        <h6 className="text-bright leading-5 2xl:text-[18px] font-bold">
          Manila, Philippines
        </h6>
      </div>
      <div className="">
        {/* <SocialIcons /> */}
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
