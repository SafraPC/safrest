import styled, { css } from "styled-components";

export const Page = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: #edf4f5;
`;
export const view = css`
	width: 100%;
	max-width: 1440px;
	height: auto;
	min-height: 90vh;
	display: flex;
	margin: 0 auto;
	margin-bottom:2rem;
	flex-direction: column;
	background-color: ${props=>props.theme.background};
	border-radius: 0.1rem;
`;

export const ScreenView = styled.div`
	${view};
`;

//All Pages that needs to have an Apresentation
export const Apresentation = styled.section`
  height: auto;
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  > label {
    margin-bottom: 1rem;
    margin: 0 auto;
    font-size: 32px;
    text-transform: uppercase;
    color:${props=>props.theme.textColored}
  }
  > hr {
    background-color: var(--color-hover-blue);
    width: 50%;
    align-self: center;
  }
  > span {
    font-size: 20px;
    margin-bottom: 1rem;
  }
  > ul {
    margin-left: 4rem;
    list-style: circle;
    > li {
      font-size: 20px;
      margin-top: 0.5rem;
      color: ${props=>props.theme.textColored}
    }
  }
`;