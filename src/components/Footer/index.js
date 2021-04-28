import React from 'react';
import i18n from '../../services/i18next';
import { FooterStyles} from './styles';

const Footer = () => {
  return  ( 
    <FooterStyles>
      <div>
        <label>{i18n.t('footer.text')}</label>
        <label>{i18n.t('footer.text2')}</label>
        <label>{i18n.t('footer.text3')}</label>
        <a target="_" href="http://www.github.com/SafraPC">Github: www.github.com/SafraPC</a>
      </div>
    </FooterStyles> 
  );
}

export {Footer};