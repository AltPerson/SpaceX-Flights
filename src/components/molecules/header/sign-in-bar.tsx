import HeartButton from "@/components/atoms/buttons/heart-button";
import Button from "@/components/atoms/buttons/button";
import styled from "styled-components";
const SignInBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

const SignInBar = ({ $isActive }: { $isActive: boolean }) => {
  return (
    <SignInBarWrapper>
      <HeartButton isLink={true} $isActive={$isActive} />
      <Button children="sign in" />
    </SignInBarWrapper>
  );
};

export default SignInBar;
