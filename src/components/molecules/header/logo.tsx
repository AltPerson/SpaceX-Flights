import logoImage from "@/assets/logo/test.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: transparent;
`;

const LogoWrapper = styled.div`
  width: 229px;
  height: 42px;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/">
        <LogoImg src={logoImage} />
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
