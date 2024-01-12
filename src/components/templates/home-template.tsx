import { useRef } from "react";
import Hero from "../organisms/home/hero";
import Tours from "../organisms/home/tours";

const HomeTemplate = () => {
  const toursRef = useRef<HTMLDivElement | null>(null);
  const scrollToToursSlider = () => {
    if (toursRef.current) {
      toursRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Hero scrollToToursSlider={scrollToToursSlider} />
      <Tours ref={toursRef} />
    </>
  );
};

export default HomeTemplate;
