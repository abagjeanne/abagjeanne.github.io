import { useEffect, useRef } from "react";
import { Container, SectionHeader } from "@/components/layout";
import { animate } from "@/lib/utils";
import { Education, Experience, Testimonials, Tools } from "@/components/sections";
import { UseActiveLinkContext } from "@/context/ActiveLinkContext";

const Resume = () => {
  const textRef = useRef(null);

  const {sectionsRefs} = UseActiveLinkContext()

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
        Be what you would seem to be - or, if you'd like it put more simply -
        never imagine yourself not to be otherwise than what it might appear to
        others that what you were or might have been was not otherwise than what
        you had been would have appeared to them to be otherwise.
      </p>

      <Education />

      <Experience />

      <Tools />

      <Testimonials />
    </Container>
  );
};

export default Resume;
