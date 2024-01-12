import { flexMixinLeftWithGap, flexMixinCenter } from "@/styles/global-styles";
import styled from "styled-components";

const FavoriteToursList = styled.div`
  margin-top: 40px;
  ${flexMixinLeftWithGap({ gapValue: "24" })}
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  @media (max-width: 1298px) {
    ${flexMixinCenter}
  }
`;

export default FavoriteToursList;
