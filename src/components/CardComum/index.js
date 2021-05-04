import React from "react";
import { Card, Image, Details } from "./styles";
function CardComum(props) {


  return (
    <Card color={props.color} to={props.link}>
      {props.image ? (
        <Image>
          <img src={props.image} alt="Card" />
        </Image>
      ) : null}
      <hr></hr>
      <Details fontColor={props.fontColor}>
        {props.title ? <label>{props.title}</label> : null}
        {props.text ? <span>{props.text}</span> : null}
      </Details>
    </Card>
  );
}

export default CardComum;
