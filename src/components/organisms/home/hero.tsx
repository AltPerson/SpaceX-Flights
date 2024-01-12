import styled from "styled-components";
import HeroTitle from "@/components/atoms/home-hero/hero-title";
import HeroSlider from "@/components/molecules/home-hero/hero-slider";
import { flexMixinCenter } from "@/styles/global-styles";
import HeroSliderTabs from "@/components/atoms/home-hero/hero-slider-tabs";
import { useState } from "react";
import HeroExplore from "../../atoms/home-hero/hero-explore";

const HeroWrapper = styled.section`
  min-height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: 9;
  ${flexMixinCenter}
`;

const Hero = ({ scrollToToursSlider }: { scrollToToursSlider: () => void }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickHandler = (indx: number) => {
    setActiveIndex(indx);
  };

  return (
    <>
      <HeroWrapper>
        <HeroSlider activeIndex={activeIndex} />
        <HeroSliderTabs
          activeIndex={activeIndex}
          onClickHandler={onClickHandler}
        />
        <HeroTitle />
        <HeroExplore scrollToToursSlider={scrollToToursSlider} />
      </HeroWrapper>
    </>
  );
};

export default Hero;
