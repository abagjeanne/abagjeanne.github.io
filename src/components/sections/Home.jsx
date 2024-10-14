import { ArrowDownToLine, Grid2X2, Sparkle } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button, RotatingButton } from "@/components/layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animate } from "@/lib/utils";
import { UseActiveLinkContext } from "@/context/ActiveLinkContext";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const {sectionsRefs} = UseActiveLinkContext()

  const headingRef = useRef(null);
  const primaryButtonRef = useRef(null);
  const secondaryButtonRef = useRef(null);
  const downloadButtonRef = useRef(null);

  useEffect(() => {
    const headingAnimation = animate(headingRef.current, 40);
    const primaryButtonAnimation = animate(primaryButtonRef.current, 70);
    const secondaryButtonAnimation = animate(secondaryButtonRef.current, 70);
    const downloadButtonAnimation = animate(downloadButtonRef.current, 95);

    return () => {
      headingAnimation.revert();
      primaryButtonAnimation.revert();
      secondaryButtonAnimation.revert();
      downloadButtonAnimation.revert();
    };
  }, []);


  return (
    <section
      ref={sectionsRefs.home}
      id="home"
      className="lg:h-[calc(100vh-50px)] flex flex-col lg:justify-end lg:pb-12 pb-[80px] lg:pt-0 pt-[80px] lg:pl-[50px] relative"
    >
      <div className="w-full">
        <p className="mb-[22px] px-[14px] 2xl:h-[38px] h-[34px] flex gap-[10px] items-center font-bold 2xl:text-[15px] text-[13px] border-box rounded-3xl w-fit text-medium">
          <Sparkle className="h-[14px] w-[14px]" /> Let's meet!
        </p>
        <h1
          ref={headingRef}
          className="2xl:text-[70px] xl:text-[60px] md:text-[50px] text-[38px] font-bold t-accent leading-tight"
        >
          I'm Alex Walker <br />
          Digital designer and illustrator.
        </h1>
        <div className="2xl:mt-[51px] mt-[46px] flex items-center sm:flex-row flex-col gap-1">
          <div ref={primaryButtonRef}>
            <Button className="2xl:h-[60px] h-[50px] 2xl:w-[186px] sm:w-[152px] bg-transparent text-bright border-dark lg:block hidden">
              My Works{" "}
              <Grid2X2 className="h-[22px] w-[22px] ml-[6px] text-bright" />
            </Button>
          </div>
          <div className="sm:w-auto w-full" ref={secondaryButtonRef}>
            <Button className="2xl:h-[60px] h-[50px] 2xl:w-[186px] sm:w-[152px] w-full bg-btn text-btn border-dark lg:hidden block">
              My Works{" "}
              <Grid2X2 className="h-[22px] w-[22px] ml-[6px] text-btn" />
            </Button>
          </div>
          <div className="sm:w-auto w-full" ref={downloadButtonRef}>
            <Button className="2xl:h-[60px] h-[50px] 2xl:w-[227px] sm:w-[185px] w-full bg-transparent">
              <span className="text-disabled">Download Cv</span>{" "}
              <ArrowDownToLine className="h-[22px] w-[22px] ml-[6px] text-disabled" />
            </Button>
          </div>
        </div>
      </div>
      <RotatingButton />
    </section>
  );
};

export default Home;
