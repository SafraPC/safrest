import styled, { css } from "styled-components";

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #edf4f5;
`
export const view = css`
  width: 75%;
  height: auto;
  min-height: 100vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  padding: 1rem 1rem 3rem 1rem;
  margin-top: 1.5rem ;
  margin-bottom: 1.5rem ;
  background-color: #fff;
  border-radius: 0.25rem;
`;

export const ScreenView = styled.div`
${view};
`