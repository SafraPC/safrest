import styled, { css } from "styled-components";

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #edf4f5;
`
export const view = css`
  width: 100%;
  height: auto;
  min-height: 90vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.1rem;
`;

export const ScreenView = styled.div`
${view};
`