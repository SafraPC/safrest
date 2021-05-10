import React, { useEffect, useState } from "react";

import { CloseButton, Container, Description, MyImage } from "./styles";
import {
  AiOutlineCloseCircle,
  AiFillFileImage,
  AiFillFilePdf,
  AiFillFileWord,
} from "react-icons/ai";
function FileCard(props) {
  const [myCV, setMyCV] = useState();
  useEffect(() => {
    setMyCV(props.myFile);
  }, [props.myFile]);

  return myCV ? (
    <Container>
      <CloseButton onClick={() => props.handleClose()}>
        <AiOutlineCloseCircle size={25} fill="var(--color-high-red)" />
      </CloseButton>
      <MyImage>
        {myCV.type === "application/pdf" ? (
          <AiFillFilePdf size={75} />
        ) : myCV.type === "application/msword" ||
        myCV.type ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
          <AiFillFileWord size={75} />
        ) : (
          <AiFillFileImage size={75} />
        )}
      </MyImage>
      <Description>
        <label>{myCV.name}</label>
      </Description>
    </Container>
  ) : null;
}

export default FileCard;
