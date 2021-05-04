import React from "react";

import { CloseButton, Container, Description } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
function FileCard(props) {
  return props.title ? (
    <Container>
      <CloseButton>
        <AiOutlineCloseCircle size={25} fill="var(--color-high-red)" />
      </CloseButton>
      {props.extension === "jpg"
        ? ""
        : props.extension === "pdf"
        ? ""
        : props.extension === "docx"
        ? ""
        : null}
      <Description>
        <label>{props.title}</label>
      </Description>
    </Container>
  ) : null;
}

export default FileCard;
