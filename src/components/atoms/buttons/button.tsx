import { font_Syne_600 } from "@/styles/global-styles";
import styled from "styled-components";

interface ButtonProps {
  children: string;
}

export const Button = styled.button<ButtonProps>`
  background: var(--button-color);
  color: var(--primary-text-color);
  text-transform: uppercase;
  padding: 12px;
  min-width: 163px;
  max-width: 278px;
  min-height: 53px;
  border: none;
  outline: none;
  flex: 1;
  ${font_Syne_600}
  font-size: var(--primary-font-size-small);
  cursor: pointer;
  transition: var(--button-background-color-transition);
  &:hover {
    background: var(--button-color_hover);
  }
  @media (max-width: 768px) {
    & {
      min-width: auto;
      width: 100%;
    }
  }
`;

export default Button;
