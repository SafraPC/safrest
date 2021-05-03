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
import { cities, states } from "../../services/locations";
import { useState } from "react";
import { useEffect } from "react";
import * as yup from "yup";
import { workSchema } from "../../validations/workWithUs";


function WorkWithUs() {
  const [cidades, setCidades] = useState([]);
  const [estados, setEstados] = useState([]);
  const [selectedState, setSelectedState] = useState({});

  //form variables
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    states().then(setEstados).catch(console.error);
  }, []);

  useEffect(() => {
    if (!selectedState.value) return;
    cities(selectedState.value).then(setCidades).catch(console.error);
  }, [selectedState]);

  const sendForm = async (event) => {
    event.preventDefault();
    let formData = {
      name: name,
      age: age,
      email: email,
    };

    const isValid = await workSchema.validate(formData);
    console.log(isValid)
  };

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
          <form>
            <span>TEXT EXAMPLE</span>
            <input
              type="text"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <span>TEXT EXAMPLE</span>
            <input
              type="text"
              placeholder="Idade"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
            <span>TEXT EXAMPLE</span>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <span>Estado</span>
            <MySelect
              styles={customStyles}
              placeholder={"INSIRA INFORMAÇÃO"}
              noOptionsMessage={() => "SEM NADA"}
              options={estados}
              onChange={(e) => {
                console.log(e);
                setSelectedState(e);
              }}
            />
            <span>Cidade</span>
            <MySelect
              styles={customStyles}
              placeholder={"INSIRA INFORMAÇÃO"}
              noOptionsMessage={() => "SEM NADA"}
              options={cidades}
            />
            <span>TEXT EXAMPLE</span>

            <input type="text" placeholder="Curriculo" />
            <button type="button" onClick={(e) => sendForm(e)}>
              Enviar
            </button>
          </form>
        </TForm>
      </ScreenView>
      <Footer />
    </Page>
  );
}

export default WorkWithUs;
