import styled from "styled-components";

const NavbarLinkItem = styled.li`
  position: relative;
  &:after {
    content: "";
    width: 0%;
    height: 2px;
    position: absolute;
    background: var(--second-text-color);
    bottom: -5px;
    left: 0;
    transition: var(--link-underline-transition);
  }
  &:hover {
    &:after {
      width: 100%;
    }
  }
`;

export default NavbarLinkItem;
