import {
  containerMixin,
  flexMixinCenterWithGap,
  font_Lato_300,
  slideIn,
} from "@/styles/global-styles";
import styled from "styled-components";
import ArrowDown from "@/assets/common/arrowDown.svg";

const HeroExploreWrapper = styled.div`
  position: absolute;
  z-index: 9;
  bottom: 5%;
  left: 48%;
  transform: translate(-48%, 5%);
  ${containerMixin}
  ${flexMixinCenterWithGap({ gapValue: "8" })} 
	@media (max-width: 425px) {
    & {
      left: 50%;
      bottom: 15%;
      transform: translate(-50%, 15%);
    }
  }
`;
const HeroExploreTitle = styled.h3`
  ${font_Lato_300}
  font-size:var(--second-font-size-medium);
  color: var(--second-text-color);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
const HeroExploreButton = styled.button`
  width: 20px;
  height: 26px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  animation: ${slideIn} infinite ease-in 1s both alternate;
`;

const HeroExplore = ({
  scrollToToursSlider,
}: {
  scrollToToursSlider: () => void;
}) => {
  return (
    <HeroExploreWrapper>
      <HeroExploreTitle>Explore tours</HeroExploreTitle>
      <HeroExploreButton onClick={scrollToToursSlider}>
        <ArrowDown />
      </HeroExploreButton>
    </HeroExploreWrapper>
  );
};

export default HeroExplore;
