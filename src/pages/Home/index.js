import React from "react";
import Header from "../../components/Header";
import { Page, ScreenView } from "../../styles/default";
import Footer from '../../components/Footer'
function Home() {
  return (
    <Page>
      <Header/>
      <ScreenView>
        <h1>Home Page</h1>
      </ScreenView>
      <Footer/>
    </Page>
  );
}

export default Home;
