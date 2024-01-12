import { NavLinks } from "@/contants/index";
import styled from "styled-components";
import { font_Lato_600 } from "@/styles/global-styles";
import NavbarList from "@/components/atoms/header-navbar/header-navbar-list";
import NavbarLinkItem from "@/components/atoms/header-navbar/header-navbar-list-link";
import NavLink from "@/components/atoms/header-navbar/header-navbar-link";

const NavbarElement = styled.nav`
  ${font_Lato_600}
  font-size:var(--second-font-size-small);
  flex: 1;
  cursor: pointer;
  @media (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarElement>
      <NavbarList>
        {NavLinks.map(({ path, title }: { path: string; title: string }) => (
          <NavbarLinkItem key={title}>
            <NavLink to={path}>{title}</NavLink>
          </NavbarLinkItem>
        ))}
      </NavbarList>
    </NavbarElement>
  );
};

export default Navbar;
