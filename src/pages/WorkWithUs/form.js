import React, { useEffect, useState } from "react";
import { cities, states } from "../../services/locations";

import i18n from "../../services/i18next";
import { MyField, Req } from "../../styles/default";
import { formikEnhancer } from "../../validations/workTogether";

import MineSelect from "../../components/Select";
import FileCard from "../../components/FileCard";

const MyForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    handleBlur,
  } = props;

  const [cidades, setCidades] = useState([]);
  const [estados, setEstados] = useState([]);

  //Get file from input 
  const [cv,setCv] = useState();

  useEffect(() => {
    states().then(setEstados).catch(console.error);
  }, []);

  useEffect(() => {
    if (!values.state) return;
    cities(values.state).then(setCidades).catch(console.error);
  }, [values.state]);

  return (
    <form onSubmit={handleSubmit}>
      <span>
        {i18n.t("pageWWU.form.secction.label")}
        <Req>*</Req>
      </span>

      <MyField
        error={errors.name && touched.name}
        type="text"
        placeholder={i18n.t("pageWWU.form.secction.input")}
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
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
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
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
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <span>
        {i18n.t("pageWWU.form.secction4.label")}
        <Req>*</Req>
      </span>

      <MineSelect
        name="state"
        value={values.state}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.state}
        touched={touched.state}
        options={estados}
        translateText={i18n.t("pageWWU.form.secction4.input")}
      />

      <span>
        {i18n.t("pageWWU.form.secction5.label")}
        <Req>*</Req>
      </span>

      <MineSelect
        name="city"
        value={values.city}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.city}
        touched={touched.city}
        options={cidades}
        translateText={i18n.t("pageWWU.form.secction5.input")}
      />
      <section>
        <label htmlFor="myCV">{i18n.t("pageWWU.form.secction6.label")}</label>
        <input type="file" id="myCV" onChange={(e)=>setCv(e.target.files[0])} />
      </section>
     
     <FileCard  myFile={cv} handleClose={()=>(setCv(undefined))}/>
      <button type="submit">{i18n.t("pageWWU.form.buttonSend.text")}</button>
    </form>
  );
};

export default formikEnhancer(MyForm);
