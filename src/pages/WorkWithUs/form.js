import React, { useEffect, useState } from "react";
import { cities, states } from "../../services/locations";

import i18n from "../../services/i18next";
import { MyField, Req } from "../../styles/default";
import { formikEnhancer } from "../../validations/workTogether";

import MineSelect from "../../components/Select";
import FileCard from "../../components/FileCard";
import { toast } from "react-toastify";
import { TOASTIFY_OPTIONS } from "../../styles/toast";

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

  useEffect(()=>{
console.log(values)
  },[values])

  const handleErrors = ()=>{
    if(Object.values(errors).length){
      if(!cv || cv === undefined){ 
        toast.error(i18n.t('pageWWU.form.errors.seeAll.text')+"\n , "+i18n.t('pageWWU.form.errors.cv.text'),TOASTIFY_OPTIONS)
      }else{
        toast.error(i18n.t('pageWWU.form.errors.seeAll.text'),TOASTIFY_OPTIONS)
      }
    }else if(!cv || cv === undefined){
      toast.error(i18n.t('pageWWU.form.errors.cv.text'),TOASTIFY_OPTIONS)
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
        <label htmlFor="cv">{i18n.t("pageWWU.form.secction6.label")}</label>
        <input
        id="cv"
        type="file"
        name="cv"
        onChange={(e)=>{
          setCv(e.target.files[0]);
          setFieldValue("cv",e.target.files[0])}}
        onBlur={handleBlur}
      />
      </section>
     
     <FileCard  myFile={cv} handleClose={()=>{setCv(undefined);setFieldValue("cv",undefined)}}/>
      <button type="submit" onClick={()=>(handleErrors())}>{i18n.t("pageWWU.form.buttonSend.text")}</button>
    </form>
  );
};

export default formikEnhancer(MyForm);
