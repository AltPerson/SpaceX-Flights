import { font_Lato_600 } from "@/styles/global-styles";
import styled from "styled-components";

const MobileHeaderList = styled.ul`
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  ${font_Lato_600}
  font-size:var(--second-font-size-medium);
  cursor: pointer;
`;

export default MobileHeaderList;
