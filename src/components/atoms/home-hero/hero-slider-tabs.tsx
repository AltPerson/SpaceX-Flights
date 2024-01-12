import { heroSliderTabs } from "@/contants";
import styled from "styled-components";
import RadioImageNonActive from "@/assets/common/nonActiveCircleWhite.svg";
import RadioImageActive from "@/assets/common/activeCircleWhite.svg";
import { flexMixinCenterWithGap } from "@/styles/global-styles";

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
      left: 48%;
      bottom: 25%;
      transform: translate(-50%, 25%);
    }
  }
  @media (max-width: 425px) {
    & {
      left: 48%;
      bottom: 30%;
      transform: translate(-50%, 25%);
    }
  }
`;

const HeroSliderButtonLabel = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transform: var(--slider-button-transition);
  background: transparent;
  outline: none;
  border: none;
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
            onClick={() => onClickHandler(indx)}>
            {activeIndex === indx ? (
              <RadioImageActive />
            ) : (
              <RadioImageNonActive />
            )}
          </HeroSliderButtonLabel>
        ))}
      </HeroSliderButtons>
    </>
  );
};

export default HeroSliderTabs;
