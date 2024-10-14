import { ACHIEVEMENTS, INFORMATIONS } from "@/lib/data";
import { Button, Container, SectionHeader } from "@/components/layout";
import { AchievementsDetails, InformationDetails } from "@/components/data-display";
import { ArrowDownToLine } from "lucide-react";
import { useEffect, useRef } from "react";
import { animate } from "@/lib/utils";
import { Services } from "@/components/sections";
import { UseActiveLinkContext } from "@/context/ActiveLinkContext";

const About = () => {

  const {sectionsRefs} = UseActiveLinkContext()

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
      btnAnimation.revert()
    };
  }, []);

  return (
    <Container sectionRef={sectionsRefs.about} id="about">
      <SectionHeader
        subtitle={"About Me"}
        title={<>Turning complex problems into simple design</>}
      />
      {/* <div className="flex flex-wrap 2xl:gap-[50px] gap-[30px]">
        {ACHIEVEMENTS.map((achievement, index) => (
          <AchievementsDetails key={index} {...achievement} position={index} />
        ))}
      </div> */}
      <div className="flex xl:flex-row flex-col gap-5">
        <div className="flex flex-col 2xl:gap-6 gap-4 xl:w-2/3 w-full">
          <p
            ref={descRef}
            className="text-medium 2xl:text-[24px] text-[20px] "
          >
            I wonder if I've been changed in the night? Let me think. Was I the
            same when I got up this morning? I almost think I can remember
            feeling a little different. But if I'm not the same, the next
            question is 'Who in the world am I?' Ah, that's the great puzzle!
          </p>
          <p
            ref={secendDescRef}
            className="text-medium 2xl:text-[24px] text-[20px] "
          >
            Be what you would seem to be - or, if you'd like it put more simply
            - never imagine yourself not to be otherwise than what it might
            appear to others that what you were or might have been was not
            otherwise than what you had been would have appeared to them to be
            otherwise.
          </p>
          <div ref={btnRef} className="">
            <Button
              className="2xl:h-[60px] h-[50px] 2xl:w-[227px] w-[185px] text-btn bg-btn"
            >
              <span className="">Download CV</span>{" "}
              <ArrowDownToLine className="h-[22px] w-[22px] ml-[6px]" />
            </Button>
          </div>
        </div>
        <div className="xl:w-1/3 w-full flex flex-col 2xl:gap-7 gap-5 ">
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
