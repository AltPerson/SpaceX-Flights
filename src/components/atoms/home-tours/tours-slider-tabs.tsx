import { heroSliderTabs } from "@/contants";
import styled from "styled-components";
import RadioImageNonActive from "@/assets/common/nonActiveCircleBlack.svg";
import RadioImageActive from "@/assets/common/activeCircleBlack.svg";
import {
  flexMixinCenter,
  flexMixinCenterWithGap,
} from "@/styles/global-styles";

interface ToursSliderTabsProps {
  activeIndex: number;
  onClickHandler: (indx: number) => void;
}

const ToursSliderButtons = styled.div`
  ${flexMixinCenter}
  min-width: 90px;
  margin-bottom: 96px;
  ${flexMixinCenterWithGap({ gapValue: "8" })}
`;

const ToursSliderButtonLabel = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transform: var(--slider-button-transition);
  background: transparent;
  outline: none;
  border: none;
  background-color: transparent;
`;

const ToursSliderTabs = ({
  activeIndex,
  onClickHandler,
}: ToursSliderTabsProps) => {
  return (
    <>
      <ToursSliderButtons>
        {heroSliderTabs.map((_, indx) => (
          <ToursSliderButtonLabel
            key={indx}
            onClick={() => onClickHandler(indx)}>
            {activeIndex === indx ? (
              <RadioImageActive />
            ) : (
              <RadioImageNonActive />
            )}
          </ToursSliderButtonLabel>
        ))}
      </ToursSliderButtons>
    </>
  );
};

export default ToursSliderTabs;
