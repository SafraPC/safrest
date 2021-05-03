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
import { Formik, Form, Field, ErrorMessage } from "formik";

function WorkWithUs() {
  const [cidades, setCidades] = useState([]);
  const [estados, setEstados] = useState([]);
  const [selectedState, setSelectedState] = useState({});

  useEffect(() => {
    states().then(setEstados).catch(console.error);
  }, []);

  useEffect(() => {
    if (!selectedState.value) return;
    cities(selectedState.value).then(setCidades).catch(console.error);
  }, [selectedState]);

  const workSchema2 = yup.object().shape({
    name: yup
      .string("Need to be an Text!")
      .min(4, "Min text is 4!")
      .max(30, "Max Text is 30!")
      .required(),
    age: yup.string().required().max(3).min(1),
    email: yup.string().email().required(),
  });

  const handleFormSubmit = (values) => {
    console.log(values);
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
          <div>
            <label>Trabalhe Conosco!</label>
            <img src={workImage} />
          </div>
          <Formik
            initialValues={{
              name: "",
              age: "",
              email: "",
            }}
            validationSchema={workSchema2}
            onSubmit={handleFormSubmit}
          >
              <Form>
                <span>TEXT EXAMPLE</span>
                <Field type="text" placeholder="Nome" name="name" />
                <ErrorMessage component="p" name="name" />

                <span>TEXT EXAMPLE</span>
                <Field type="text" placeholder="Idade" name="age" />
                <ErrorMessage component="p" name="age" />

                <span>TEXT EXAMPLE</span>
                <Field type="text" placeholder="Email" name="email" />
                <ErrorMessage component="p" name="email" />

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
                {/* <span>TEXT EXAMPLE</span>
                <Field type="text" placeholder="Curriculo" /> */}

                <button type="submit">Enviar</button>
              </Form>
          </Formik>
        </TForm>
      </ScreenView>
      <Footer />
    </Page>
  );
}

export default WorkWithUs;
