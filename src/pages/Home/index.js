import React from "react";
import Header from "../../components/Header";
import { Page, ScreenView } from "../../styles/default";
import Footer from "../../components/Footer";
import HomeCarousel from "./carousel";
import { Apresentation, Content } from "./styles.js";
function Home() {
  return (
    <Page>
      <Header />
      <ScreenView>
        <Apresentation>
          <label>Nós somos a Safrests!</label>
          <hr></hr>
          <span>
            A SAFRESTS é uma empresa que vai te ajudar em todos os assuntos
            relacionados as maquinas de lavar! Nossas Especialidades :
          </span>
          <ul>
            <li>Limpeza</li>
            <li>Montagem</li>
            <li>Venda</li>
            <li>Auxílio/Manutenção Técnica</li>
          </ul>
        </Apresentation>
        <HomeCarousel />
        <Content>
      
        </Content>
      </ScreenView>
      <Footer />
    </Page>
  );
}

export default Home;
