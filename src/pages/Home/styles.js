import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content:center;
  flex-wrap:wrap;

  > a {
    :not(:first-child) {
      margin-left: 1rem;
    }
  }
`;
