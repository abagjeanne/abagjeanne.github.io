import { useEffect, useRef } from "react";
import { Button } from "@/components/layout";
import { Send } from "lucide-react";
import { animate } from "@/lib/utils";

const ContactForm = () => {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const emailRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const formAnimation = animate(formRef.current, 50);
    const nameAnimation = animate(nameRef.current, 50);
    const companyAnimation = animate(companyRef.current, 50);
    const phoneAnimation = animate(phoneRef.current, 50);
    const messageAnimation = animate(messageRef.current, 50);
    const emailAnimation = animate(emailRef.current, 50);
    const btnAnimation = animate(btnRef.current, 50);

    return () => {
      formAnimation.revert();
      nameAnimation.revert();
      companyAnimation.revert();
      phoneAnimation.revert();
      messageAnimation.revert();
      emailAnimation.revert();
      btnAnimation.revert();
    };
  }, []);

  return (
    <form ref={formRef} className="" action="">
      <div className="flex md:flex-row flex-col md:items-center 2xl:gap-[50px] gap-[30px] mb-[30px]">
        <input
          className="px-[4px] py-[14px] md:w-1/2 w-full bg-transparent outline-none border-b-[2px] border-b-[#d1d5e0] dark:border-b-[#303033] font-bold text-bright focus:border-b-[#aa70e0] dark:focus:border-b-[#E4B8BF] text-[20px]"
          type="text"
          required
          placeholder="Your Name*"
          ref={nameRef}
        />
        <input
          className="px-[4px] py-[14px] md:w-1/2 w-full bg-transparent outline-none border-b-[2px] border-b-[#d1d5e0] dark:border-b-[#303033] font-bold text-bright focus:border-b-[#aa70e0] dark:focus:border-b-[#E4B8BF] text-[20px]"
          type="text"
          placeholder="Company Name"
          ref={companyRef}
        />
      </div>
      <div className="flex md:flex-row flex-col md:items-center 2xl:gap-[50px] gap-[30px] mb-[30px]">
        <input
          className="px-[4px] py-[14px] md:w-1/2 w-full bg-transparent outline-none border-b-[2px] border-b-[#d1d5e0] dark:border-b-[#303033] font-bold text-bright focus:border-b-[#aa70e0] dark:focus:border-b-[#E4B8BF] text-[20px]"
          type="email"
          required
          placeholder="Email Adress*"
          ref={emailRef}
        />
        <input
          className="px-[4px] py-[14px] md:w-1/2 w-full bg-transparent outline-none border-b-[2px] border-b-[#d1d5e0] dark:border-b-[#303033] font-bold text-bright focus:border-b-[#aa70e0] dark:focus:border-b-[#E4B8BF] text-[20px]"
          type="text"
          required
          placeholder="Phone Number*"
          ref={phoneRef}
        />
      </div>
      <div ref={messageRef} className=" mb-[30px]">
        <textarea
          className="px-[4px] py-[14px] w-full bg-transparent outline-none border-b-[2px] border-b-[#d1d5e0] dark:border-b-[#303033] font-bold text-bright focus:border-b-[#aa70e0] dark:focus:border-b-[#E4B8BF] text-[20px] h-40 resize-none"
          required
          placeholder="A Few Words*"
        ></textarea>
      </div>
      <div ref={messageRef} className="">
        <Button className="bg-btn text-btn h-[50px] w-[192px]">
          Send Message{" "}
          <span>
            <Send className="ms-[6px] h-[18px] w-[18px]" />
          </span>
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
