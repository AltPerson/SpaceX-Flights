import styled from "styled-components";

const BurgerMenu = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  background-position: center center;
  @media (min-width: 768px) {
    & {
      display: none;
    }
  }
`;

export default BurgerMenu;
