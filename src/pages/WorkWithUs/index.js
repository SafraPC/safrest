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
import { Formik, Form, Field, ErrorMessage } from "formik";
import { workSchema } from "../../validations/workTogether";

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
            validationSchema={workSchema}
            onSubmit={handleFormSubmit}
          >
            {({errors,touched})=>(
              <Form>
                <span>TEXT EXAMPLE</span>
                <Field type="text" placeholder="Nome" name="name" />
                {errors.name && touched.name ? (
                <span>{errors.name}</span>
                ) : null}
                <span>TEXT EXAMPLE</span>
                <Field type="text" placeholder="Idade" name="age" />

                <span>TEXT EXAMPLE</span>
                <Field type="text" placeholder="Email" name="email" />

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
                <Field type="text" placeholder="Curriculo" name="curriculo" />

                <button type="submit">Enviar</button>
              </Form>
            )}
              
          </Formik>
        </TForm>
      </ScreenView>
      <Footer />
    </Page>
  );
}

export default WorkWithUs;
