import { font_Lato_300 } from "@/styles/global-styles";
import styled from "styled-components";

const FavoriteToursHeaderClearButton = styled.button`
  ${font_Lato_300}
  font-size:var(--second-font-size-base);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  color: var(--favorite-tour-clear-button);
`;

export default FavoriteToursHeaderClearButton;
