import React from 'react';

import { Card,Image,Details } from './styles';

function CardComum(props) {
  return (
      <Card color={props.color} >
       { props.image?
       <Image>
          <img src={props.image}/>
        </Image>:null}
        <hr></hr>
        <Details fontColor={props.fontColor}>
          {props.title?<label>{props.title}</label>:null}
          {props.text?<span>{props.text}</span>:null}
        </Details>
      </Card>
  );
}

export default CardComum;