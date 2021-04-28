import React from "react";
import {Header} from "../../components/Header";
import { Apresentation, Page, ScreenView } from "../../styles/default";
import {Footer} from "../../components/Footer";
import HomeCarousel from "./carousel";
import { Content } from "./styles.js";
import CardComum from "../../components/CardComum";

//Import images for cards
import workTogether from "../../assets/svgs/workTogether.svg";
import relasionship from '../../assets/svgs/relasionship.svg'
import welcome from '../../assets/svgs/welcome.svg'
import i18n from "../../services/i18next";
function Home() {
  return (
    <Page>
      <Header />
      <ScreenView>
        <Apresentation>
          <label>{i18n.t('pageHome.homeHeader.homeWelcome.text')}</label>
          <hr></hr>
          <span>
          {i18n.t('pageHome.homeHeader.homeSubwelcome.text')}
          </span>
          <ul>
            <li>{i18n.t('pageHome.homeHeader.homeList.text')}</li>
            <li>{i18n.t('pageHome.homeHeader.homeList.text2')}</li>
            <li>{i18n.t('pageHome.homeHeader.homeList.text3')}</li>
            <li>{i18n.t('pageHome.homeHeader.homeList.text4')}</li>
          </ul>
        </Apresentation>
        <HomeCarousel />
        <br></br>
        <Apresentation>
          <label>{i18n.t('pageHome.homeContent.homeWelcome.text')}</label>
          <hr></hr>
          <span>{i18n.t('pageHome.homeContent.subWelcome.text')}
          </span>
          <span>{i18n.t('pageHome.homeContent.subWelcome.text2')}
          </span>
        </Apresentation>
        <Content>
          <CardComum
            image={welcome}
            link="/who_we_are"
            title={i18n.t('pageHome.homeContent.cards.card.title')}
            text={i18n.t('pageHome.homeContent.cards.card.text')}
            color="var(--color-hover-blue)"
            fontColor="white"
          />
          <CardComum
            link="/login"
            image={relasionship}
            title={i18n.t('pageHome.homeContent.cards.card2.title')}
            text={i18n.t('pageHome.homeContent.cards.card2.text')}
            color="var(--color-soft-green)"
            fontColor="white"
          />
            <CardComum
            link="/work_with_us"
            image={workTogether}
            title={i18n.t('pageHome.homeContent.cards.card3.title')}
            text={i18n.t('pageHome.homeContent.cards.card3.text')}
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
