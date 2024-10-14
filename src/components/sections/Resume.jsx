import { useEffect, useRef } from "react";
import { Container, SectionHeader } from "@/components/layout";
import { animate } from "@/lib/utils";
import {
  Education,
  Experience,
  Testimonials,
  Tools,
} from "@/components/sections";
import { UseActiveLinkContext } from "@/context/ActiveLinkContext";

const Resume = () => {
  const textRef = useRef(null);

  const { sectionsRefs } = UseActiveLinkContext();

  useEffect(() => {
    const textAnimation = animate(textRef.current, 50);

    return () => {
      textAnimation.revert();
    };
  }, []);

  return (
    <Container sectionRef={sectionsRefs.resume} id="resume">
      <SectionHeader
        title="Education and practical experience"
        subtitle="Resume"
      />

      <p ref={textRef} className="text-medium 2xl:text-[24px] text-[20px]">
        As an IT Specialist and passionate front-end developer, I strive to
        enhance user experiences and solve complex problems through technology.
        My journey in computer science and digital marketing has equipped me
        with the skills to create impactful solutions. I am dedicated to
        continuous learning and collaboration, eager to contribute my technical
        and creative expertise to innovative projects.
      </p>

      <Education />

      <Experience />

      <Tools />

      <Testimonials />
    </Container>
  );
};

export default Resume;
