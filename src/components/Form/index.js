import React, { useEffect, useState } from "react";
import { cities, states } from "../../services/locations";

import i18n from "../../services/i18next";
import { MyField, MySelect, Req } from "../../styles/default";
import { customStyles } from "../../styles/selectStyles";
import { formikEnhancer } from "../../validations/workTogether";

import MineSelect from "../../components/Select";

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
	const [selectedState, setSelectedState] = useState({});
	const [selectedCity, setSelectedCity] = useState({});

	useEffect(() => {
		states().then(setEstados).catch(console.error);
	}, []);

	useEffect(() => {
		if (!selectedState.value) return;
		cities(selectedState.value).then(setCidades).catch(console.error);
	}, [selectedState]);

	return (
		<form onSubmit={handleSubmit}>
			<span>
				{i18n.t("pageWWU.form.secction.label")}
				<Req>*</Req>
			</span>
			<MyField
				type="text"
				placeholder={i18n.t("pageWWU.form.secction.input")}
				name="name"
				value={values.name}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			{errors.name && touched.name && (
				<div style={{ color: "red" }}>{errors.name}</div>
			)}
			<span>
				{i18n.t("pageWWU.form.secction2.label")}
				<Req>*</Req>
			</span>

			<MyField
				type="text"
				placeholder={i18n.t("pageWWU.form.secction2.input")}
				name="age"
				value={values.age}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			{errors.age && touched.age && (
				<div style={{ color: "red" }}>{errors.age}</div>
			)}

			<span>
				{i18n.t("pageWWU.form.secction3.label")}
				<Req>*</Req>
			</span>
			<MyField
				type="text"
				placeholder={i18n.t("pageWWU.form.secction3.input")}
				name="email"
			/>

			<span>
				{i18n.t("pageWWU.form.secction4.label")}
				<Req>*</Req>
			</span>

			<MineSelect
				value={values.state}
				onChange={setFieldValue}
				onBlur={setFieldTouched}
				error={errors.state}
				touched={touched.state}
				options={estados}
			/>

			<span>
				{i18n.t("pageWWU.form.secction5.label")}
				<Req>*</Req>
			</span>

			<MySelect
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

			<button type="submit">{i18n.t("pageWWU.form.buttonSend.text")}</button>
		</form>
	);
};

export default formikEnhancer(MyForm);
