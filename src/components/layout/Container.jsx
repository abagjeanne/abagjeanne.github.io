const Container = ({ children, id, className,sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      id={id}
      className={`lg:pl-[50px] py-16 md:py-20 2xl:py-24 flex flex-col md:gap-12 gap-6 ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
