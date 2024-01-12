import { useRef } from "react";
import styled from "styled-components";
import ToursSliderCardImage from "../../atoms/home-tours/tours-slider-image";
import ToursSliderCardText from "../../atoms/home-tours/tours-slider-card-text";
import ToursSliderCardButtons from "../../atoms/home-tours/tours-slider-card-buttons";
import { flexMixinBetweenColumn } from "@/styles/global-styles";

interface ToursSliderCardProps {
  image: string;
  title: string;
  text: string;
  $isFavoriteItem?: boolean;
  tourId: string;
}

type IsFavoriteItemType = Pick<ToursSliderCardProps, "$isFavoriteItem">;

const ToursSliderCardWrapper = styled.div<IsFavoriteItemType>`
  min-width: 402px;
  max-width: ${({ $isFavoriteItem }) => ($isFavoriteItem ? "400px" : "")};
  ${flexMixinBetweenColumn}
  border:1px solid var(--tours-slider-card-border);

  @media (max-width: 1440px) {
    & {
      min-width: 260px;
      max-width: fit-content;
      width: 100%;
    }
  }
`;

const ToursSliderCard = ({
  image,
  title,
  text,
  $isFavoriteItem,
  tourId,
}: ToursSliderCardProps) => {
  const toursSliderCardRef = useRef(null);
  return (
    <ToursSliderCardWrapper
      ref={toursSliderCardRef}
      $isFavoriteItem={$isFavoriteItem}>
      <ToursSliderCardImage image={image} />
      <ToursSliderCardText title={title} text={text} />
      <ToursSliderCardButtons
        isFavoriteItem={$isFavoriteItem}
        tourId={tourId}
      />
    </ToursSliderCardWrapper>
  );
};

export default ToursSliderCard;
