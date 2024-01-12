import { heroSliderTabs } from "@/contants";
import styled from "styled-components";
import radioImageNonActive from "@/assets/common/nonActiveCircleBlack.svg";
import radioImageActive from "@/assets/common/activeCircleBlack.svg";
import {
  flexMixinCenter,
  flexMixinCenterWithGap,
} from "@/styles/global-styles";

interface ToursSliderButtonLabelProps {
  $img: string;
}

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

const ToursSliderButtonLabel = styled.button<ToursSliderButtonLabelProps>`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transform: var(--slider-button-transition);
  background: url(${({ $img }) => $img});
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
            $img={activeIndex === indx ? radioImageActive : radioImageNonActive}
            onClick={() => onClickHandler(indx)}
          />
        ))}
      </ToursSliderButtons>
    </>
  );
};

export default ToursSliderTabs;
