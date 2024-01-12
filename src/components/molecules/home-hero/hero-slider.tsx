import HeroSliderSlide from "@/components/atoms/hero-slider/hero-slider-slide";
import { heroSliderImages } from "@/contants";
import { flexMixinCenter } from "@/styles/global-styles";
import styled from "styled-components";

interface HeroSliderProps {
  activeIndex: number;
}

interface HeroSliderWrapperProps {
  $index: number;
}

const HeroSliderWrapper = styled.div<HeroSliderWrapperProps>`
  position: absolute;
  width: 300vw;
  height: 100vh;
  top: 0;
  left: ${({ $index }) => -100 * $index + "vw"};
  z-index: 5;
  transition: var(--slider-left-transition);
  ${flexMixinCenter}
`;

const HeroSlider = ({ activeIndex }: HeroSliderProps) => {
  return (
    <HeroSliderWrapper $index={activeIndex}>
      {heroSliderImages.map((img) => (
        <HeroSliderSlide key={img} $img={img} />
      ))}
    </HeroSliderWrapper>
  );
};

export default HeroSlider;
