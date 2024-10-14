import { useEffect, useRef } from "react";
import { Container, SectionHeader } from "@/components/layout";
import { ContactForm } from "@/components/forms";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/data";
import { ContactDetails, SocialDetails } from "@/components/data-display";
import { animate } from "@/lib/utils";
import { UseActiveLinkContext } from "@/context/ActiveLinkContext";

const Contact = () => {

  const {sectionsRefs} = UseActiveLinkContext()

  const textRef = useRef(null)

  useEffect(()=>{
    const textAnimation = animate(textRef.current, 50)

    return()=>{
      textAnimation.revert()
    }
  },[])

  return (
    <Container sectionRef={sectionsRefs.contact} id="contact">
      <SectionHeader
        title="Let's make something awesome together!"
        subtitle="Contact"
      />
      <ContactForm />
      <ul className="flex items-center flex-wrap gap-5">
        {SOCIAL_LINKS.map((social, index) => (
          <SocialDetails {...social} position={index} key={index} />
        ))}
      </ul>
      <p ref={textRef} className="2xl:text-[38px] md:text-[30px] text-[26px] t-accent 2xl:max-w-[800px] md:max-w-[620px] w-full font-bold leading-tight">
        Want to know more about me, tell me about your project or just to say
        hello? Drop me a line and I'll get back as soon as possible.
      </p>
      <div className="flex md:flex-row flex-col">
        {CONTACT_INFO.map((contact, index)=>
          <ContactDetails key={index} {...contact} />
        )}
      </div>
    </Container>
  );
};

export default Contact;
