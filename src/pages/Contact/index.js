import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import i18n from '../../services/i18next';
import MyForm from './form'
import co_worker from '../../assets/svgs/co_worker.svg'
import { Apresentation, Page, ScreenView, TForm } from '../../styles/default';

// import { Container } from './styles';

function Contact() {
  return (
      <Page>
        <Header/>
        <ScreenView>
        <Apresentation>
        <label>{i18n.t("pageContact.header.welcome.text")}</label>
          <hr></hr>
          <span>{i18n.t("pageContact.header.welcome.subtext")}</span>
          <TForm>
          <div>
            <img src={co_worker} alt="CardMage" />
          </div>
          <MyForm />
        </TForm>
        </Apresentation>
        </ScreenView>
        <Footer/>
      </Page>
  );
}

export default Contact;