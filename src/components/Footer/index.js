import React from 'react';
import { FooterStyles} from './styles';

const Footer = () => {
  return  ( 
    <FooterStyles>
      <div>
        <label>All Directs : Leandro Safra</label>
        <label>Developed by : Leandro Safra</label>
        <label>Contact: +55 (19)9 9587-9599</label>
        <a target="_" href="http://www.github.com/SafraPC">Github: www.github.com/SafraPC</a>
      </div>
    </FooterStyles> 
  );
}

export {Footer};