import styled from "styled-components";
import Button from "../buttons/button";
import HeartButton from "../buttons/heart-button";
import { flexMixinCenterWithGap } from "@/styles/global-styles";
import DeleteButton from "../buttons/delete-button";

interface ToursHeaderSliderButtonsProps {
  isFavoriteItem?: boolean;
  tourId: string;
}

const ToursSliderCardButtonsWrapper = styled.div`
  ${flexMixinCenterWithGap({ gapValue: "16" })}
  margin-bottom:24px;
  width: 100%;
`;

const ToursHeaderSliderButtons = ({
  isFavoriteItem,
  tourId,
}: ToursHeaderSliderButtonsProps) => {
  return (
    <ToursSliderCardButtonsWrapper>
      <Button children="buy" />
      {isFavoriteItem ? (
        <DeleteButton tourId={tourId} />
      ) : (
        <HeartButton tourId={tourId} />
      )}
    </ToursSliderCardButtonsWrapper>
  );
};

export default ToursHeaderSliderButtons;
