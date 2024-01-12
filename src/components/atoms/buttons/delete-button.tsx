import { favoritesToursState } from "@/states/atom";
import { flexMixinCenter } from "@/styles/global-styles";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import styled from "styled-components";

interface DeleteButtonProps {
  $isActive?: boolean;
}

interface DeleteButtonElementProps extends DeleteButtonProps {
  tourId: string;
}

enum IconFillEnum {
  DEFAULT = "",
  ACTIVE = "white",
}

enum ButtonBackgroundEnum {
  DEFAULT = "var(--delete-button-color)",
  ACTIVE = "var(--delete-button-color_hover)",
}

const DeleteIcon = () => (
  <svg
    width="19"
    height="21"
    viewBox="0 0 19 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g id="Delete">
      <path
        id="Stroke 1"
        d="M16.8249 7.9682C16.8249 7.9682 16.2819 14.7032 15.9669 17.5402C15.8169 18.8952 14.9799 19.6892 13.6089 19.7142C10.9999 19.7612 8.38791 19.7642 5.77991 19.7092C4.46091 19.6822 3.63791 18.8782 3.49091 17.5472C3.17391 14.6852 2.63391 7.9682 2.63391 7.9682"
        stroke="#1E1E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Stroke 3"
        d="M18.2082 4.73969H1.25024"
        stroke="#1E1E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Stroke 5"
        d="M14.9407 4.73967C14.1557 4.73967 13.4797 4.18467 13.3257 3.41567L13.0827 2.19967C12.9327 1.63867 12.4247 1.25067 11.8457 1.25067H7.6127C7.0337 1.25067 6.5257 1.63867 6.3757 2.19967L6.1327 3.41567C5.9787 4.18467 5.3027 4.73967 4.5177 4.73967"
        stroke="#1E1E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const Button = styled.button<DeleteButtonProps>`
  width: 53px;
  height: 53px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: var(--button-background-color-transition);
  ${flexMixinCenter}
  background: ${({ $isActive }) =>
    $isActive ? ButtonBackgroundEnum.ACTIVE : ButtonBackgroundEnum.DEFAULT};
  &:hover {
    background: var(--delete-button-color_hover);
    & svg {
      fill: var(--second-text-color);
    }
  }
  & svg {
    fill: ${({ $isActive }) =>
      $isActive ? IconFillEnum.ACTIVE : IconFillEnum.DEFAULT};
  }
`;

const DeleteButton = ({ $isActive, tourId }: DeleteButtonElementProps) => {
  const [, setFavoritesTours] = useRecoilState(favoritesToursState);
  const deleteButtonHandler = () => {
    toast.info("Tour deleted", { position: toast.POSITION.TOP_RIGHT });
    setFavoritesTours((prev) => prev.filter((tour) => tour.id !== tourId));
  };
  return (
    <Button $isActive={$isActive} onClick={deleteButtonHandler}>
      <DeleteIcon />
    </Button>
  );
};

export default DeleteButton;
