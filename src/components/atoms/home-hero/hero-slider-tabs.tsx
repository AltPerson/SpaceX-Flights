import { heroSliderTabs } from "@/contants";
import styled from "styled-components";
import radioImageNonActive from "@/assets/common/nonActiveCircleWhite.svg";
import radioImageActive from "@/assets/common/activeCircleWhite.svg";
import { flexMixinCenterWithGap } from "@/styles/global-styles";

interface HeroSliderButtonLabelProps {
  $img: string;
}

interface HeroSliderTabsProps {
  activeIndex: number;
  onClickHandler: (indx: number) => void;
}

const HeroSliderButtons = styled.div`
  position: absolute;
  z-index: 8;
  left: 47%;
  top: 50%;
  min-width: 90px;
  transform: translate(-47%, 50%);
  ${flexMixinCenterWithGap({ gapValue: "8" })}
  @media (max-width: 1298px) {
    & {
      left: 50%;
      bottom: 20%;
      transform: translate(-50%, 20%);
    }
  }
`;

const HeroSliderButtonLabel = styled.button<HeroSliderButtonLabelProps>`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transform: var(--slider-button-transition);
  background: url(${({ $img }) => $img});
  outline: none;
  border: none;
  background-color: transparent;
`;

const HeroSliderTabs = ({
  activeIndex,
  onClickHandler,
}: HeroSliderTabsProps) => {
  return (
    <>
      <HeroSliderButtons>
        {heroSliderTabs.map((_, indx) => (
          <HeroSliderButtonLabel
            key={indx}
            $img={activeIndex === indx ? radioImageActive : radioImageNonActive}
            onClick={() => onClickHandler(indx)}></HeroSliderButtonLabel>
        ))}
      </HeroSliderButtons>
    </>
  );
};

export default HeroSliderTabs;
