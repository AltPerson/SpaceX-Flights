import SignInBar from "@/components/molecules/header/sign-in-bar";
import Logo from "@/components/molecules/header/logo";
import styled from "styled-components";
import { containerMixin, flexMixinBetween } from "@/styles/global-styles";
import Navbar from "@/components/molecules/header/navbar";
import { useLocation } from "react-router-dom";
import { mobileNavbarState } from "@/states/atom";
import { useRecoilState } from "recoil";
import BurgerMenu from "@/components/atoms/burger-menu/burger-menu";
import MobileHeader from "@/components/molecules/mobile-header/mobile-header";
import BurgerMenuIcon from "@/assets/common/menu.svg";

const HeaderWrapper = styled.div`
  min-height: 80px;
  ${flexMixinBetween}
  ${containerMixin}
`;

const HeaderElement = styled.header`
  background: var(--header-background-color);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 20;
`;

const Header = () => {
  const { pathname } = useLocation();
  const [, setIsActiveMobile] = useRecoilState(mobileNavbarState);

  return (
    <HeaderElement>
      <HeaderWrapper>
        <Logo />
        <Navbar />
        <SignInBar $isActive={pathname.includes("/favorites")} />
        <BurgerMenu onClick={() => setIsActiveMobile((prev) => !prev)}>
          <BurgerMenuIcon />
        </BurgerMenu>
      </HeaderWrapper>
      <MobileHeader $isActive={pathname.includes("/favorites")} />
    </HeaderElement>
  );
};

export default Header;
