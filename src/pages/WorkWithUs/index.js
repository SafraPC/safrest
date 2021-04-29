import React from "react";
import { Apresentation, Page, ScreenView, TForm } from "../../styles/default";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import i18n from "../../services/i18next";
import workImage from "../../assets/svgs/interview.svg";
function WorkWithUs() {
  return (
    <Page>
      <Header />
      <ScreenView>
        <Apresentation>
          <label>{i18n.t("pageWWU.header.welcome.text")}</label>
          <hr></hr>
          <span>{i18n.t("pageWWU.header.welcome.subtext")}</span>
        </Apresentation>
        <TForm>
          {/* Image Content */}
          <div>
            <label>Trabalhe Conosco!</label>
            <img src={workImage} />
          </div>
          {/* Form */}
          <div>
            <div>
              <span>TEXT EXAMPLE</span>

              <input type="text" placeholder="Nome" />
              <span>TEXT EXAMPLE</span>
              <input type="text" placeholder="Idade" />
              <span>TEXT EXAMPLE</span>
              <input type="text" placeholder="Email" />
              <span>TEXT EXAMPLE</span>
              <input type="text" placeholder="Estado" />
              <span>TEXT EXAMPLE</span>
              <input type="text" placeholder="Cidade" />
              <span>TEXT EXAMPLE</span>
              <input type="text" placeholder="Curriculo" />
              <button type="button">Enviar</button>
            </div>
          </div>
        </TForm>
      </ScreenView>
      <Footer />
    </Page>
  );
}

export default WorkWithUs;
