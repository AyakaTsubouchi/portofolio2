import { useState, useEffect, useRef } from "react";

export const useFadeIn = () => {
  const [visibleSection, setVisibleSection] = useState();
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "About", ref: aboutRef },
    { section: "Works", ref: worksRef },
    { section: "Contac", ref: contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight + 500;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
        return ele;
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection, sectionRefs]);

  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  // const scrollTo = (ele) => {
  //   ele.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };

  return {
    visibleSection,
    // scrollTo,
    headerRef,
    aboutRef,
    worksRef,
    contactRef,
  };
};
