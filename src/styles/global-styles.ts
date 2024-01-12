import { createGlobalStyle, keyframes } from "styled-components";
import reset from "react-style-reset/string";
import "react-toastify/dist/ReactToastify.css";



const GlobalStyle = createGlobalStyle`
	${reset};
	html{
		// container
		--container-width:1260px;
		--container-padding:0 20px;

		// font-family
		--primary-font-family:'Syne';
		--secondary-font-family:'Lato';

		// font-weight
		--primary-font-weight-semiBold:600;
		--primary-font-weight-bold:700;
		--primary-font-weight-extraBold:800;
		--secondary-font-weight-medium:600;
		--secondary-font-weight-light:300;

		// font-size
		--primary-font-size-base:32px;
		--primary-font-size-small:calc(var(--primary-font-size-base) / 1.333333); 
		--primary-font-size-medium:calc(var(--primary-font-size-base) * 1.5); 
		--primary-font-size-big:calc(var(--primary-font-size-base) * 9.6875);
		--second-font-size-base:24px;
		--second-font-size-small:calc(var(--second-font-size-base) / 1.5);
		--second-font-size-medium:calc(var(--second-font-size-base) * 1.333333);
		
		// colors
		--button-color:#D3EAFF;
		--button-color_hover:#6AA7DE;
		--favorite-button-color:#ECECEC;
		--favorite-button-color_hover:#E66C9F;
		--favorite-button-color_active:#DD377D;
		--delete-button-color:#ECECEC;
		--delete-button-color_hover:#E63C3C;
		--primary-text-color:#000000;
		--second-text-color:#FFFFFF;
		--subtext-text-color:#556B84;
		--header-background-color:rgba(30, 30, 30, 0.48);
		--tours-button-color:#ECECEC;
		--tours-button-color_hover:#D4D2D2;
		--tours-slider-card-border:#D3EAFF;
		--favorite-tour-clear-button:#556B84;

		// transitions
		--button-background-color-transition:background-color 0.3s linear;
		--link-underline-transition:width 0.3s linear;
		--slider-button-transition:background 0.3s linear;
		--slider-left-transition:left 0.4s linear;

		// default styles
		line-height: normal;
		position: relative;

	@media (max-width: 768px) {
			--primary-font-size-base:20px;
			--second-font-size-base:17px;
  }
	
		@media (max-width: 1024px) {
			--primary-font-size-base:25px;
			--second-font-size-base:20px;
  }

	@media (max-width: 568px) {
			--primary-font-size-base:15px;
			--second-font-size-base:14px;
  }
	}
`;

export const containerMixin = `
	max-width: var(--container-width);
	padding: var(--container-padding);
	margin: 0 auto;
`
export const flexMixinCenter = `
	display: flex;
	align-items: center;
	justify-content: center;
`
export const flexMixinBetween = `
	display: flex;
	align-items: center;
	justify-content: space-between;
`
export const flexMixinAround = `
	display: flex;
	align-items: center;
	justify-content: space-around;
`
export const flexMixinCenterWithGap = ({ gapValue }: { gapValue: string }) => `
	display: flex;
	align-items: center;
	justify-content:center;
	gap:${gapValue}px;
`
export const flexMixinLeftWithGap = ({ gapValue }: { gapValue: string }) => `
	display: flex;
	align-items: center;
	justify-content:flex-start;
	gap:${gapValue}px;
`

export const font_Lato_300 = `
	font-family:var(--secondary-font-family);
	font-weight:var(--secondary-font-weight-light);
`;

export const font_Lato_600 = `
	font-family:var(--secondary-font-family);
	font-weight:var(--secondary-font-weight-medium);
`;

export const font_Syne_600 = `
	font-family:var(--primary-font-family);
	font-weight:var(--primary-font-weight-semiBold);
`;

export const font_Syne_700 = `
	font-family:var(--primary-font-family);
	font-weight:var(--primary-font-weight-bold);
`;

export const font_Syne_800 = `
	font-family:var(--primary-font-family);
	font-weight:var(--primary-font-weight-extraBold);
`;

export const flexMixinAroundColumn = `
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction:column;
`

export const flexMixinBetweenColumn = `
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction:column;
`


export const slideIn = keyframes`
	  from {
      transform: translateY(0%);
    }

    to {
      transform: translateY(40%);
    }
`;

export default GlobalStyle;
