import { createContext, useContext, useEffect, useRef, useState } from "react";

const ActiveLinkStateContext = createContext({
  activeLink: "",
  sectionsRefs: {
    home: null,
    portfolio: null,
    about: null,
    resume: null,
    contact: null,
  },
});

const ActiveLinkContext = ({ children }) => {
  const [activeLink, setActiveLink] = useState(null);
  const sectionsRefs = {
    home: useRef(null),
    portfolio: useRef(null),
    about: useRef(null),
    resume: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const scrollHandler = () => {
      Object.entries(sectionsRefs).forEach(([sectionId, ref]) => {
        if (ref.current) {
          const section = ref.current.getBoundingClientRect();
          section.top < window.innerHeight && setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("load", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("load", scrollHandler);
    };
  }, []);
  return (
    <ActiveLinkStateContext.Provider value={{ sectionsRefs, activeLink }}>
      {children}
    </ActiveLinkStateContext.Provider>
  );
};

export const UseActiveLinkContext = () => useContext(ActiveLinkStateContext);
export default ActiveLinkContext;
