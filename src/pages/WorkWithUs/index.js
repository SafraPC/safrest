import React from "react";
import {
  Apresentation,
  MyField,
  MySelect,
  Page,
  Req,
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
import { Formik, Form } from "formik";
import { workSchema } from "../../validations/workTogether";

const WorkWithUs = () => {
  const [cidades, setCidades] = useState([]);
  const [estados, setEstados] = useState([]);
  const [selectedState, setSelectedState] = useState({});
  const [selectedCity, setSelectedCity] = useState({});
  const [firstRender,setFirstRender] = useState(true)
  useEffect(() => {
    states().then(setEstados).catch(console.error);
  }, []);

  useEffect(() => {
    if (!selectedState.value) return;
    cities(selectedState.value).then(setCidades).catch(console.error);
  }, [selectedState]);

  const handleFormSubmit = (values) => {
    setFirstRender(false);
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
            <label>{i18n.t("pageWWU.image.text")}</label>
            <img src={workImage} alt="CardMage" />
          </div>
          <Formik
            initialValues={{
              name: "",
              age: "",
              email: "",
              state:"",
              city:"",
            }}
            validationSchema={workSchema}
            onSubmit={handleFormSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <span>
                  {i18n.t("pageWWU.form.secction.label")}
                  <Req>*</Req>
                </span>
                <MyField
                  error={errors.name && touched.name}
                  type="text"
                  placeholder={i18n.t("pageWWU.form.secction.input")}
                  name="name"
                />

                <span>
                  {i18n.t("pageWWU.form.secction2.label")}
                  <Req>*</Req>
                </span>

                <MyField
                  error={errors.age && touched.age}
                  type="text"
                  placeholder={i18n.t("pageWWU.form.secction2.input")}
                  name="age"
                />

                <span>
                  {i18n.t("pageWWU.form.secction3.label")}
                  <Req>*</Req>
                </span>
                <MyField
                  error={errors.email && touched.email}
                  type="text"
                  placeholder={i18n.t("pageWWU.form.secction3.input")}
                  name="email"
                />

                <span>
                  {i18n.t("pageWWU.form.secction4.label")}
                  <Req>*</Req>
                </span>

                <MySelect
                  styles={customStyles}
                  error={errors.state && touched.state}
                  placeholder={i18n.t("pageWWU.form.secction4.input")}
                  noOptionsMessage={() => "Not to see here.."}
                  options={estados}
                  onChange={(e) => {
                    setSelectedState(e);
                  }}
                  name="state"
                />
                <span>
                  {i18n.t("pageWWU.form.secction5.label")}
                  <Req>*</Req>
                </span>

                <MySelect
                  error={errors.city && touched.city}
                  styles={customStyles}
                  placeholder={i18n.t("pageWWU.form.secction5.input")}
                  noOptionsMessage={() => "Not to see here.."}
                  options={cidades}
                  onChange={(e) => {
                    setSelectedCity(e);
                  }}
                  name="city"
                />
                <span>
                  {i18n.t("pageWWU.form.secction6.label")}
                  <Req>*</Req>
                </span>

                <MyField
                  type="text"
                  placeholder={i18n.t("pageWWU.form.secction6.label")}
                  name="curriculo"
                />

                <button type="submit">
                  {i18n.t("pageWWU.form.buttonSend.text")}
                </button>
              </Form>
            )}
          </Formik>
        </TForm>
      </ScreenView>
      <Footer />
    </Page>
  );
};

export default WorkWithUs;
