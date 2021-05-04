import styled, { css } from "styled-components";
import Select from "react-select";
import { Field } from "formik";

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bodyColor};
`;
export const view = css`
  width: 100%;
  max-width: 1440px;
  height: auto;
  min-height: 90vh;
  display: flex;
  margin: 0 auto;
  margin-bottom: 2rem;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  border-radius: 0.1rem;
`;

export const ScreenView = styled.div`
  ${view};
`;

export const MySelect = styled(Select)`
  > div.css-1fbj37m-control {
    border-color: ${(props) =>
      props.error
        ? "var(--color-high-red)"
        : props.theme.inputBorder} !important;
  }
  > div > div div.css-1opnhvy-singleValue {
    color: ${(props) => props.theme.text} !important;
  }
`;

// this view was made for have 2 content, one for left and other for right, like
//an image and a form. With this design, we can have a better ui for user.
export const TForm = styled.section`
  width: 100%;
  padding: 1rem;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
  > div {
    text-align: center;
    width: 100%;
    place-items: center;
    margin: 0 auto;

    @media (min-width: 1000px) {
      border-right: 1px solid var(--color-soft-blue);
    }
    @media (max-width: 1000px) {
      border-bottom: 1px solid var(--color-soft-blue);
    }

    > label {
      color: var(--color-soft-blue);
      font-size: 24px;
    }

    > img {
      height: 70%;
      width: 100%;
    }
  }
  > form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    > label {
      color: var(--color-primary);
      font-size: 24px;
    }
    > div {
      width: 75%;
      margin: 0 auto;
      margin-top: 1rem;
    }

    > span {
      width: 75%;
      margin: 0 auto;
      margin-top: 1.5rem;
      color: ${(props) => props.theme.inputText};
      text-align: left;
    }

    > section {
      margin: 0 auto;
      border: 1px solid ${(props) => props.theme.inputBorder};
      margin-top: 2rem;
      height: auto;
      width: 75%;
      text-align: center;
      padding: 0.5rem;
      justify-content: center;
      > label {
        color: ${(props) => props.theme.text};
        font-size: 18px;
		margin:0;
        cursor: pointer;
      }
      > input[type="file"] {
        display: none;
      }
    }

    > input {
      width: 75%;
      margin: 0 auto;
      padding: 0.5rem;
      margin-top: 1rem;
    }
    > button {
      margin: 0 auto;
      margin-top: 2rem;
      padding: 0.4rem;
      border: 1.5px solid ${(props) => props.theme.inputBorder} !important;
      width: 30%;
      color: ${(props) => props.theme.inputText};
      border-radius: 0.3rem;
      transition: background-color 0.3s ease;
      :hover {
        background-color: var(--color-soft-blue);
        color: white;
      }
    }
  }
  //Props for div
`;
export const Req = styled.text`
  font-size: 18px;
  color: var(--color-high-red);
  font-style: bold;
  margin-left: 0.5rem;
`;

export const MyField = styled.input`
  border-color: ${(props) =>
    props.error === true ? "var(--color-high-red)" : ""} !important;
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
    color: ${(props) => props.theme.textColored};
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
      color: ${(props) => props.theme.textColored};
    }
  }
`;
