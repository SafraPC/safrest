import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import MineSelect from "../../components/Select";

import i18n from "../../services/i18next";
import { MyField, MyTextArea, Req } from "../../styles/default";
import { TOASTIFY_OPTIONS } from "../../styles/toast";
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

  const [description, setDescription] = useState([{}]);

  useEffect(() => {
    const storage = localStorage.getItem("i18nextLng");

    if (storage === "en") {
      setDescription([
        { label: "Buy", value: "compra" },
        { label: "Sell", value: "venda" },
        { label: "Reapair", value: "conserto" },
        { label: "Help", value: "auxilio" },
      ]);
    } else {
      setDescription([
        { label: "Compra", value: "compra" },
        { label: "Venda", value: "venda" },
        { label: "Conserto", value: "conserto" },
        { label: "Auxílio", value: "auxilio" },
      ]);
    }
  }, []);

  const handleErrors = ()=>{
    if (Object.values(errors).length) {
    toast.error(i18n.t("pageWWU.form.errors.seeAll.text"),TOASTIFY_OPTIONS)
    }
  }

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
        {i18n.t("pageContact.form.input.text")}
        <Req>*</Req>
      </span>
      <MineSelect
        name="typeWork"
        value={values.typeWork}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.typeWork}
        touched={touched.typeWork}
        options={description}
        translateText={i18n.t("pageContact.form.input.text")}
      />

      <span>
        {i18n.t("pageContact.form.input2.text")}
        <Req>*</Req>
      </span>

      <MyTextArea
        error={errors.description && touched.description}
        name="description"
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <button type="submit" onClick={()=>handleErrors()}>{i18n.t("pageWWU.form.buttonSend.text")}</button>
    </form>
  );
};

export default formikEnhancer(MyForm);
