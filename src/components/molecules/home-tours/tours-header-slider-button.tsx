import { flexMixinCenterWithGap } from "@/styles/global-styles";
import styled from "styled-components";
import ToursHeaderSliderButton from "../../atoms/home-tours/tours-header-slider-button";

type SliderButtonHandlerType = (side: string) => void;

const ToursHeaderSliderButtonsWrapper = styled.div`
  ${flexMixinCenterWithGap({ gapValue: "16" })}
`;

const ToursHeaderSliderButtons = ({
  slideButtonHandler,
}: {
  slideButtonHandler: SliderButtonHandlerType;
}) => {
  return (
    <ToursHeaderSliderButtonsWrapper>
      <ToursHeaderSliderButton
        isLeft={true}
        slideButtonHandler={slideButtonHandler}
      />
      <ToursHeaderSliderButton
        isLeft={false}
        slideButtonHandler={slideButtonHandler}
      />
    </ToursHeaderSliderButtonsWrapper>
  );
};

export default ToursHeaderSliderButtons;
