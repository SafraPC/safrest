import React from "react";
import {
  Apresentation,
  MySelect,
  Page,
  ScreenView,
  TForm,
} from "../../styles/default";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import i18n from "../../services/i18next";
import workImage from "../../assets/svgs/interview.svg";
import { customStyles } from "../../styles/selectStyles";
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
            <span>TEXT EXAMPLE</span>
            <input type="text" placeholder="Nome" />
            <span>TEXT EXAMPLE</span>
            <input type="text" placeholder="Idade" />
            <span>TEXT EXAMPLE</span>
            <input type="text" placeholder="Email" />
            <span>Estado</span>
            <MySelect
              styles={customStyles}
              placeholder={"INSIRA INFORMAÇÃO"}
              noOptionsMessage={()=>"SEM NADA"}
              options={[
                // { label: "oi", value: "oi" },
                // { label: "oie", value: "oir" },
                // { label: "oie2", value: "oie" },
              ]}
            />
            <span>Cidade</span>
            <MySelect
              styles={customStyles}
              placeholder={"INSIRA INFORMAÇÃO"}
              noOptionsMessage={()=>"SEM NADA"}
              options={[
                // { label: "oi", value: "oi" },
                // { label: "oie", value: "oir" },
                // { label: "oie2", value: "oie" },
              ]}
            />
            <span>TEXT EXAMPLE</span>

            <input type="text" placeholder="Curriculo" />
            <button type="button">Enviar</button>
          </div>
        </TForm>
      </ScreenView>
      <Footer />
    </Page>
  );
}

export default WorkWithUs;
