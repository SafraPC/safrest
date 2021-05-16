/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Apresentation, Page, ScreenView, TForm } from "../../styles/default";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import i18n from "../../services/i18next";
import workImage from "../../assets/svgs/interview.svg";
import MyForm from "./form";
import api from "../../services/api";
const WorkWithUs = () => {
  const [totalCV, setTotalCV] = useState();

  const getCount = async () => {
    const data = await api.get("/work_with_us");
    setTotalCV(data.data);
  };

  useEffect(() => {
    getCount();
  }, []);

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
          <div>
            <label>{i18n.t("pageWWU.image.text")}</label>
            <img src={workImage} alt="CardMage" />
            <br></br>
            <label>
              {i18n.t("pageWWU.backendCV.text")}
              {totalCV?.total}
            </label>
          </div>
          <MyForm />
        </TForm>
      </ScreenView>
      <Footer />
    </Page>
  );
};

export default WorkWithUs;
