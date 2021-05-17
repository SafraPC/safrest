import React from "react";
import MineSelect from "../../components/Select";

import i18n from "../../services/i18next";
import { MyField, Req } from "../../styles/default";
import { formikEnhancer } from "../../validations/contact";

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
        {i18n.t("pageWWU.form.secction3.label")}
        <Req>*</Req>
      </span>
      <MineSelect
        name="city"
        value={values.city}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.city}
        touched={touched.city}
        translateText={i18n.t("pageWWU.form.secction5.input")}
      />

      <button type="submit">{i18n.t("pageWWU.form.buttonSend.text")}</button>
    </form>
  );
};

export default formikEnhancer(MyForm);
