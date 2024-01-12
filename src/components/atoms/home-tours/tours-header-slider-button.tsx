import styled from "styled-components";

const SvgArrow = ({ isLeft }: { isLeft: boolean }) => {
  return (
    <svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Arrow - Right 2">
        <path
          id="Stroke 1"
          d={isLeft ? "M8.5 1L1.5 8L8.5 15" : "M1.5 1L8.5 8L1.5 15"}
          stroke="#200E32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

const ToursHeaderSliderButtonWrapper = styled.button`
  width: 44px;
  height: 44px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: var(--button-background-color-transition);
  &:hover {
    background-color: var(--tours-button-color_hover);
  }
`;

const ToursHeaderSliderButton = ({
  isLeft,
  slideButtonHandler,
}: {
  isLeft: boolean;
  slideButtonHandler: (side: string) => void;
}) => {
  return (
    <ToursHeaderSliderButtonWrapper
      onClick={() => slideButtonHandler(isLeft ? "left" : "right")}>
      <SvgArrow isLeft={isLeft} />
    </ToursHeaderSliderButtonWrapper>
  );
};
export default ToursHeaderSliderButton;
