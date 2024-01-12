import {
  containerMixin,
  flexMixinCenter,
  font_Syne_800,
} from "@/styles/global-styles";
import styled from "styled-components";
import thirdImage from "@/assets/home-bg/thirdImage.jpg";

const FavoriteHeroWrapper = styled.section`
  min-height: 50vh;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  ${flexMixinCenter}
  background: linear-gradient(
      var(--header-background-color),
      var(--header-background-color)
    ),url(${thirdImage}) no-repeat;
  background-size: cover;
`;
const FavoriteHeroTitle = styled.h1`
  ${font_Syne_800}
  text-transform: uppercase;
  color: var(--second-text-color);
  font-size: var(--primary-font-size-medium);
  ${containerMixin}

  @media (max-width: 768px) {
    & {
      font-size: 20px;
    }
  }
`;

const FavoriteHero = () => {
  return (
    <FavoriteHeroWrapper>
      <FavoriteHeroTitle>Favorites</FavoriteHeroTitle>
    </FavoriteHeroWrapper>
  );
};

export default FavoriteHero;
