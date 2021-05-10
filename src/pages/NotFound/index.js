import React from 'react';
import {Footer} from '../../components/Footer';
import {Header} from '../../components/Header';
import i18n from '../../services/i18next';
import { Page, ScreenView } from '../../styles/default';
import notFound from '../../assets/svgs/not_found.svg'
import { Container } from './styles';
import { useHistory } from 'react-router';

function NotFound() {

  const {push} = useHistory();

  return <Page>
      <Header/>
      <ScreenView>
        <Container>
          <h1>{i18n.t('notFound.title.text')}</h1>
          <img src={notFound} alt="notFound"/>
          <button onClick={()=>(push('/'))}>{i18n.t('notFound.button.text')}</button>
        </Container>
      </ScreenView>
      <Footer/>
  </Page>
}

export default NotFound;