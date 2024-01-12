import { font_Lato_300, font_Syne_700 } from "@/styles/global-styles";
import styled from "styled-components";

const ToursSliderCardTextWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  text-align: center;
  max-width: 411px;
`;
const ToursSliderCardTextTitle = styled.h3`
  ${font_Syne_700}
  font-size:var(--primary-font-size-small);
  text-transform: uppercase;
  margin-bottom: 16px;
`;
const ToursSliderCardTextParagraph = styled.p`
  ${font_Lato_300}
  font-size:var(--second-font-size-base);
  color: var(--subtext-text-color);
  height: 100px;
  max-width: 400px;
  text-align: justify;
  text-indent: 20px;
  padding: 0 25px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ToursSliderCardText = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <ToursSliderCardTextWrapper>
      <ToursSliderCardTextTitle>{title}</ToursSliderCardTextTitle>
      <ToursSliderCardTextParagraph>{text}</ToursSliderCardTextParagraph>
    </ToursSliderCardTextWrapper>
  );
};
export default ToursSliderCardText;
