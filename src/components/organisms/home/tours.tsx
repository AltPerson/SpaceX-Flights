import { containerMixin } from "@/styles/global-styles";
import styled from "styled-components";
import ToursHeaderSliderButtons from "../../molecules/home-tours/tours-header-slider-button";
import ToursHeaderTitle from "../../atoms/home-tours/tours-header-title";
import ToursSliderCard from "../../molecules/home-tours/tours-slider-card";
import { forwardRef, useRef, useState } from "react";
import ToursSliderTabs from "../../atoms/home-tours/tours-slider-tabs";
import { RocketType } from "@/types";
import { toursQuery } from "@/selectors";
import { useRecoilValue } from "recoil";
import ToursHeader from "@/components/molecules/home-tours-header/tours-header";
import ToursSliderContent from "@/components/molecules/home-tours-slider-content/tours-slider-content";

const ToursWrapper = styled.section`
  position: relative;
  z-index: 10;
  ${containerMixin};
`;

const Tours = forwardRef<HTMLDivElement | null>((_, customRef) => {
  const toursSliderContentRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const data = useRecoilValue(toursQuery);

  const onClickHandler = (indx: number) => {
    if (indx === activeIndex) return;
    const itemsMultiplier = Math.round(data.length / 3);
    const side = indx > activeIndex ? "right" : "left";
    slideButtonHandler(side, itemsMultiplier);
    setActiveIndex(indx);
  };

  const slideButtonHandler = (side: string, itemsMultiplier?: number) => {
    if (toursSliderContentRef.current !== null) {
      const extraOffset =
        toursSliderContentRef.current.offsetParent?.clientWidth === 425
          ? 13
          : 24;
      const childNodes = toursSliderContentRef.current
        .childNodes[0] as HTMLDivElement;

      if (side === "left") {
        if (itemsMultiplier) {
          toursSliderContentRef.current.scrollLeft -=
            (childNodes.offsetWidth + extraOffset) * itemsMultiplier;
        } else {
          toursSliderContentRef.current.scrollLeft -=
            childNodes.offsetWidth + extraOffset;
        }
      } else {
        if (itemsMultiplier) {
          toursSliderContentRef.current.scrollLeft +=
            (childNodes.offsetWidth + extraOffset) * itemsMultiplier;
        } else {
          toursSliderContentRef.current.scrollLeft +=
            childNodes.offsetWidth + extraOffset;
        }
      }
    }
  };

  return (
    <ToursWrapper ref={customRef}>
      <ToursHeader>
        <ToursHeaderTitle>Popular Tours</ToursHeaderTitle>
        <ToursHeaderSliderButtons slideButtonHandler={slideButtonHandler} />
      </ToursHeader>
      <ToursSliderContent ref={toursSliderContentRef}>
        {data.map((rocket: RocketType) => (
          <ToursSliderCard
            key={rocket.id}
            image={rocket.img}
            text={rocket.description}
            title={rocket.name}
            tourId={rocket.id}
          />
        ))}
      </ToursSliderContent>
      <ToursSliderTabs
        activeIndex={activeIndex}
        onClickHandler={onClickHandler}
      />
    </ToursWrapper>
  );
});

export default Tours;
