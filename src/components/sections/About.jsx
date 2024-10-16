import { INFORMATIONS } from "@/lib/data";
import { Button, Container, SectionHeader } from "@/components/layout";
import {
  InformationDetails,
} from "@/components/data-display";
import { ArrowDownToLine } from "lucide-react";
import { useEffect, useRef } from "react";
import { animate } from "@/lib/utils";
import { Services } from "@/components/sections";
import { UseActiveLinkContext } from "@/context/ActiveLinkContext";

const About = () => {
  const { sectionsRefs } = UseActiveLinkContext();

  const descRef = useRef(null);
  const secendDescRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const descAnimation = animate(descRef.current, 60);
    const secendDescAnimation = animate(secendDescRef.current, 60);
    const btnAnimation = animate(btnRef.current, 60);

    return () => {
      descAnimation.revert();
      secendDescAnimation.revert();
      btnAnimation.revert();
    };
  }, []);

  // Function to handle CV download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./src/assets/images/ResumeAbag.pdf"; // Updated path to your CV file
    link.download = "JeanneAbag_CV.pdf"; // Filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container sectionRef={sectionsRefs.about} id="about">
      <SectionHeader
        subtitle={"About Me"}
        title={<>Turning complex problems into simple design</>}
      />

      <div className="flex xl:flex-row flex-col gap-5">
        <div className="flex flex-col 2xl:gap-6 gap-4 xl:w-2/3 w-full">
          <p ref={descRef} className="text-medium 2xl:text-[24px] text-[20px]">
            In today's fast-paced digital landscape, creating intuitive and
            engaging user experiences is more important than ever. With a focus
            on frontend development, graphic design, and digital marketing, I
            strive to blend creativity with technical precision to bring
            innovative ideas to life. My goal is to craft solutions that not
            only meet the needs of users but also leave a lasting impact on
            their journey.
          </p>
          <p
            ref={secendDescRef}
            className="text-medium 2xl:text-[24px] text-[20px]"
          >
            Collaboration and adaptability are at the heart of my approach.
            Whether I'm designing a seamless user interface, developing a
            digital marketing strategy, or creating visual content, I aim to
            deliver results that resonate with audiences and elevate brand
            presence. Together, let's turn complex challenges into clear,
            effective, and beautiful digital experiences.
          </p>

          <div ref={btnRef}>
            <Button
              className="2xl:h-[60px] h-[50px] 2xl:w-[227px] w-[185px] text-btn bg-btn"
              onClick={handleDownload} // Add the onClick event to trigger download
            >
              <span>Download CV</span>
              <ArrowDownToLine className="h-[22px] w-[22px] ml-[6px]" />
            </Button>
          </div>
        </div>
        <div className="xl:w-1/3 w-full flex flex-col 2xl:gap-7 gap-5">
          {INFORMATIONS.map((information, index) => (
            <InformationDetails {...information} key={index} position={index} />
          ))}
        </div>
      </div>
      <Services />
    </Container>
  );
};

export default About;
