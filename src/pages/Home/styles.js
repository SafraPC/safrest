import styled from "styled-components";

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
    color: var(--color-soft-blue);
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
      color: var(--color-soft-blue);
    }
  }
`;
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
