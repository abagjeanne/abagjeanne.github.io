import React, { useRef, useEffect } from "react";
import { Button } from "@/components/layout"; // Using your custom Button component
import { Send } from "lucide-react";
import { animate } from "@/lib/utils";
import emailjs from "emailjs-com"; // Import EmailJS

const ContactForm = () => {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    // Initialize EmailJS with your User ID
    emailjs.init('Kd6O_7iRX7alvPzmK');

    const formAnimation = animate(formRef.current, 50);
    const nameAnimation = animate(nameRef.current, 50);
    const companyAnimation = animate(companyRef.current, 50);
    const phoneAnimation = animate(phoneRef.current, 50);
    const messageAnimation = animate(messageRef.current, 50);
    const emailAnimation = animate(emailRef.current, 50);

    return () => {
      formAnimation.revert();
      nameAnimation.revert();
      companyAnimation.revert();
      phoneAnimation.revert();
      messageAnimation.revert();
      emailAnimation.revert();
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    console.log('Form submission triggered'); // Debug statement

    const formData = {
      name: nameRef.current.value,
      company: companyRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };

    try {
      // Send the email using EmailJS
      const response = await emailjs.send('service_rpvzfce', 'template_d2bsmba', formData, 'Kd6O_7iRX7alvPzmK');
      console.log('Email sent successfully!', response.status, response.text);
      formRef.current.reset(); // Reset the form after successful submission
      alert("Message sent successfully!"); // Show success message
    } catch (error) {
      console.error('Error sending email:', error);
      alert(`There was an error sending your message: ${error.text || error.message}. Please try again.`);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
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
          placeholder="Email Address*"
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
      <div className="mb-[30px]">
        <textarea
          className="px-[4px] py-[14px] w-full bg-transparent outline-none border-b-[2px] border-b-[#d1d5e0] dark:border-b-[#303033] font-bold text-bright focus:border-b-[#aa70e0] dark:focus:border-b-[#E4B8BF] text-[20px] h-40 resize-none"
          required
          placeholder="A Few Words*"
          ref={messageRef}
        ></textarea>
      </div>
      <div>
        {/* Restored your custom Button component */}
        <Button type="submit" className="bg-btn text-btn h-[50px] w-[192px]">
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
