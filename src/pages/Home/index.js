import React from "react";
import Header from "../../components/Header";
import { Page, ScreenView } from "../../styles/default";
import Footer from "../../components/Footer";
import HomeCarousel from "./carousel";
import { Apresentation, Content } from "./styles.js";
import CardComum from "../../components/CardComum";

//Import images for cards
import workTogether from "../../assets/svgs/workTogether.svg";
import relasionship from '../../assets/svgs/relasionship.svg'
import welcome from '../../assets/svgs/welcome.svg'
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
        <br></br>
        <Apresentation>
          <label>Nossa Apresentação.</label>
          <hr></hr>
          <span>Vamos fazer você se apaixonar por máquinas de lavar 
            e com que este seja seu negócio também!
          </span>
          <span>Dessa forma você poderá fazer seu sucesso com o que ama,
            dedicar-se a felicidade junto as máquinas de lavar roupa e a SAFRESTS, e quem
             sabe, inovar! 
          </span>
        </Apresentation>
        <Content>
          <CardComum
            image={welcome}
            title="Quem Somos ?"
            text="Clique Aqui e Acesse a
        Página quem Somos para Saber mais Sobre Nós!"
            color="var(--color-hover-blue)"
            fontColor="white"
          />
          <CardComum
            image={relasionship}
            title="Entre em Nossa Comunidade!"
            text="Faça seu Login , Gerencie suas Maquinas de Lavar,
            Entre em Contato Direto Conosco e Tenha Total Apoio da SAFRESTS!"
            color="var(--color-soft-green)"
            fontColor="white"
          />
            <CardComum
            image={workTogether}
            title="Trabalhe Conosco!"
            text="Preencha um Formulário e nos Envie seu currículo! Quando Abrirmos novas
            Vagas Entraremos em Contato!"
            color="var(--color-blackPurple)"
            fontColor="white"
          />
        </Content>
      </ScreenView>
      <Footer />
    </Page>
  );
}

export default Home;
