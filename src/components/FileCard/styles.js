import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.5rem !important;
  width: 30% !important;
  border: 1px solid ${(props) => props.theme.inputBorder};
  border-radius: 0.2rem;
  padding: 0.5rem;
`;
export const CloseButton = styled.div`
  cursor: pointer;
  margin-left: auto;
  max-width: 30px;
`;

export const MyImage = styled.div`
display:flex !important;
justify-content:center;
`;

export const Description = styled.div`
  margin-top: 1rem !important;
  padding: 0.5rem;
  text-align: center;
  margin: 0 auto;

  > label {
    color: ${(props) => props.theme.text};
    font-size: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    display: block;
    overflow: hidden;
  }
`;
