import { containerMixin, font_Syne_800 } from "@/styles/global-styles";
import styled from "styled-components";

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 7;
  ${font_Syne_800};
  color: var(--second-text-color);
  font-size: var(--primary-font-size-medium);
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  ${containerMixin}/* @media (max-width: 680px) {
    font-size: 20px;
  } */
`;
const SubTitle = styled.span`
  font-size: var(--primary-font-size-big);

  @media (max-width: 1298px) {
    font-size: 200px;
  }

  @media (max-width: 798px) {
    font-size: 150px;
  }

  @media (max-width: 568px) {
    font-size: 100px;
  }

  @media (max-width: 425px) {
    font-size: 70px;
  }
`;

const HeroTitle = () => {
  return (
    <Title>
      the space is waiting for
      <br />
      <SubTitle>you</SubTitle>
    </Title>
  );
};

export default HeroTitle;
