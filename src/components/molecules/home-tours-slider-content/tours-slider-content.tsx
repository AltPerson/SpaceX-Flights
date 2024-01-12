import { flexMixinBetween } from "@/styles/global-styles";
import styled from "styled-components";

const ToursSliderContent = styled.div`
  margin: 40px 0;
  ${flexMixinBetween}
  gap:24px;
  scroll-behavior: smooth;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ToursSliderContent;
