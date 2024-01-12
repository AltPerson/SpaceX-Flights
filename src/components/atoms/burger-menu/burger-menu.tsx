import styled from "styled-components";
import burgerMenu from "@/assets/common/menu.svg";

const BurgerMenu = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  background: url(${burgerMenu});
  background-position: center center;
  @media (min-width: 768px) {
    & {
      display: none;
    }
  }
`;

export default BurgerMenu;
