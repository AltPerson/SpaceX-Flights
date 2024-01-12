import { toursQuery } from "@/selectors";
import { favoritesToursState, mobileNavbarState } from "@/states/atom";
import { flexMixinCenter } from "@/styles/global-styles";
import { RocketType } from "@/types";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

interface HeartButtonProps {
  $isActive?: boolean;
  isLink?: boolean;
}

interface HeartButtonElementProps extends HeartButtonProps {
  tourId?: string;
}

enum IconFillEnum {
  DEFAULT = "black",
  ACTIVE = "white",
}

enum ButtonBackgroundEnum {
  DEFAULT = "var(--favorite-button-color)",
  ACTIVE = "var(--favorite-button-color_active)",
}

const HeartIcon = () => (
  <svg
    viewBox="0 0 21 19"
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={19}>
    <g id="Heart">
      <path
        id="Heart_2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.98311 0.315291C1.31152 1.49738 -0.326136 5.50569 0.90482 9.32952C1.52947 11.1301 2.54534 12.7485 3.88004 14.0762C5.71101 15.8545 7.72254 17.4194 9.88488 18.7491L10.1304 18.8961C10.3656 19.0369 10.6598 19.0344 10.8926 18.8897L11.1218 18.7473C13.2812 17.4194 15.2927 15.8545 17.1174 14.0824C18.4584 12.7485 19.4743 11.1301 20.0937 9.34515C21.3291 5.50801 19.6847 1.4978 16.012 0.31535L15.7463 0.236231C14.0624 -0.226913 12.273 0.00130112 10.7645 0.855348L10.4964 1.01429L10.233 0.856235C8.64194 -0.04656 6.7404 -0.249969 4.98311 0.315291ZM9.87465 2.35427L10.0714 2.49538C10.3307 2.68111 10.6806 2.67742 10.936 2.48625C12.266 1.49057 13.9873 1.20082 15.5641 1.70669C18.4097 2.62284 19.7047 5.78096 18.7064 8.88199C18.165 10.4417 17.2687 11.8696 16.0916 13.0405L15.5636 13.5421C14.141 14.8642 12.6026 16.061 10.9691 17.1156L10.5013 17.4098L10.644 17.4998C8.58049 16.2308 6.65375 14.7319 4.90582 13.0343C3.73505 11.8696 2.83877 10.4417 2.29207 8.86635C1.29808 5.77801 2.58746 2.62212 5.43153 1.70646C6.93331 1.22339 8.57056 1.46289 9.87465 2.35427ZM14.3703 3.98374C13.9855 3.86093 13.5739 4.07304 13.451 4.45749C13.3281 4.84194 13.5404 5.25316 13.9252 5.37597C14.6814 5.61735 15.2206 6.29803 15.2881 7.10096C15.322 7.50313 15.6757 7.80175 16.0782 7.76794C16.4807 7.73413 16.7796 7.3807 16.7457 6.97853C16.6288 5.58859 15.6917 4.40551 14.3703 3.98374Z"
      />
    </g>
  </svg>
);

const Button = styled.button<HeartButtonProps>`
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
    background: var(--favorite-button-color_hover);
    & svg {
      fill: var(--second-text-color);
    }
  }
  & svg {
    fill: ${({ $isActive }) =>
      $isActive ? IconFillEnum.ACTIVE : IconFillEnum.DEFAULT};
  }
`;

const CustomLink = styled(Link)`
  width: 100%;
  height: 100%;
  ${flexMixinCenter};
`;
const HeartButton = ({
  $isActive,
  isLink,
  tourId,
}: HeartButtonElementProps) => {
  const { pathname } = useLocation();
  const [favoritesTours, setFavoritesTours] =
    useRecoilState(favoritesToursState);
  const [, setIsActiveMobileNavbar] = useRecoilState(mobileNavbarState);

  const data = useRecoilValue(toursQuery);

  const heartButtonHandler = () => {
    const tour = data.find((rocket: RocketType) => rocket.id === tourId);
    if (tour) {
      if (favoritesTours.includes(tour)) {
        toast.warn("You already added this tour!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      toast.success("Tour added !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setFavoritesTours((prev) => [...prev, tour]);
    }
  };

  const linkHandler = () => {
    if (!pathname.includes("/favorites")) setIsActiveMobileNavbar(false);
  };

  return (
    <Button $isActive={$isActive} onClick={heartButtonHandler}>
      {isLink ? (
        <CustomLink to="/favorites" onClick={linkHandler}>
          <HeartIcon />
        </CustomLink>
      ) : (
        <HeartIcon />
      )}
    </Button>
  );
};

export default HeartButton;
