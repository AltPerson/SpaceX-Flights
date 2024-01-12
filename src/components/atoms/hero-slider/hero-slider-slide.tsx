import styled from "styled-components";

interface HeroSliderSlideProps {
  $img: string;
}

const HeroSliderSlide = styled.div<HeroSliderSlideProps>`
  background-image: linear-gradient(
      var(--header-background-color),
      var(--header-background-color)
    ),
    url(${({ $img }) => $img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export default HeroSliderSlide;
