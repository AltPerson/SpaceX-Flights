import { flexMixinCenter } from "@/styles/global-styles";
import { FadeLoader } from "react-spinners";
import styled from "styled-components";

const PageLoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  ${flexMixinCenter}
`;

const PageLoader = () => {
  return (
    <PageLoaderWrapper>
      <FadeLoader
        color={"#000000"}
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </PageLoaderWrapper>
  );
};

export default PageLoader;
