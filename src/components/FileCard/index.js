import React from "react";

import { CloseButton, Container, Description,MyImage } from "./styles";
import { AiOutlineCloseCircle,AiFillFileImage,AiFillFilePdf,AiFillFileWord } from "react-icons/ai";
function FileCard(props) {
  return props.title ? (
    <Container>
      <CloseButton onClick={()=>props.handleClose()}>
        <AiOutlineCloseCircle size={25} fill="var(--color-high-red)" />
      </CloseButton>
      <MyImage>
      {props.extension === "jpg"
        ? <AiFillFileImage size={75}/>
        : props.extension === "pdf"
        ? <AiFillFilePdf size={75}/>
        : props.extension === "docx"
        ? <AiFillFileWord size={75}/>
        : null}
      </MyImage>
      <Description>
        <label>{props.title}</label>
      </Description>
    </Container>
  ) : null;
}

export default FileCard;
