import Button from "@/components/atoms/buttons/button";
import HeartButton from "@/components/atoms/buttons/heart-button";
import MobileHeaderButtons from "@/components/atoms/mobile-header/mobile-header-buttons";
import MobileHeaderList from "@/components/atoms/mobile-header/mobile-header-list";
import { NavLinks } from "@/contants";
import { mobileNavbarState } from "@/states/atom";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import NavLink from "@/components/atoms/header-navbar/header-navbar-link";
import NavbarLinkItem from "@/components/atoms/header-navbar/header-navbar-list-link";

interface MobileHeaderWrapperProps {
  $isActiveMobile: boolean;
}

const MobileHeaderWrapper = styled.div<MobileHeaderWrapperProps>`
  position: absolute;
  display: flex;
  right: ${({ $isActiveMobile }) => ($isActiveMobile ? 0 : "-100%")};
  transition: right 0.4s ease-in;
  min-height: 100vh;
  background: var(--header-background-color);
  min-width: 200px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  z-index: 20;
`;

const MobileHeader = ({ $isActive }: { $isActive: boolean }) => {
  const [isActiveMobile] = useRecoilState(mobileNavbarState);
  const { pathname } = useLocation();
  const [, setIsActiveMobile] = useRecoilState(mobileNavbarState);

  const linkHandler = (path: string) => {
    if (path === "/" && pathname.includes("/favorites")) {
      setIsActiveMobile(false);
    }
  };

  return (
    <MobileHeaderWrapper $isActiveMobile={isActiveMobile}>
      <MobileHeaderList>
        {NavLinks.map(({ path, title }: { path: string; title: string }) => (
          <NavbarLinkItem key={title}>
            <NavLink to={path} onClick={() => linkHandler(path)}>
              {title}
            </NavLink>
          </NavbarLinkItem>
        ))}
      </MobileHeaderList>
      <MobileHeaderButtons>
        <HeartButton isLink={true} $isActive={$isActive} />
        <Button children="sign in" />
      </MobileHeaderButtons>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
