import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Page, ScreenView } from '../../styles/default';

// import { Container } from './styles';

function NotFound() {
  return <Page>
      <Header/>
      <ScreenView>
          <h1>Page Not Found!</h1>
      </ScreenView>
      <Footer/>
  </Page>
}

export default NotFound;