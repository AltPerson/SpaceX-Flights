import styled from "styled-components";

const ToursSliderCardImageWrapper = styled.div`
  max-width: 444px;
  height: 100%;
  @media (max-width: 768px) {
    & {
      min-width: auto;
      width: 100%;
    }
  }
`;
const ToursSliderCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ToursSliderCardImage = ({ image }: { image: string }) => {
  return (
    <ToursSliderCardImageWrapper>
      <ToursSliderCardImg src={image} />
    </ToursSliderCardImageWrapper>
  );
};
export default ToursSliderCardImage;
