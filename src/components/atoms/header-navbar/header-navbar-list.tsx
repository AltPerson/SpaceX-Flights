import { flexMixinCenterWithGap } from "@/styles/global-styles";
import styled from "styled-components";

const NavbarList = styled.ul`
  ${flexMixinCenterWithGap({ gapValue: "32" })}
`;

export default NavbarList;
