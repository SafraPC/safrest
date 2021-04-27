import React from "react";
import Header from "../../components/Header";
import { Page, ScreenView } from "../../styles/default";
import Footer from '../../components/Footer'
import HomeCarousel from "./carousel";
import {CarouselSupport} from './styles.js'
function Home() {
  return (
    <Page>
      <Header/>
      <ScreenView>
        <h1>Home Page</h1>
        <CarouselSupport>
        <HomeCarousel/>
        </CarouselSupport>
      </ScreenView>
      <Footer/>
    </Page>
  );
}

export default Home;
