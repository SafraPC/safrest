import React from "react";
import i18n from "../../services/i18next";
import { MySelect } from "../../styles/default";
import { customStyles } from "../../styles/selectStyles";

export default function MineSelect(props) {
	const handleChange = (value) => {
		props.onChange("state", value.value);
	};

	const handleBlur = () => {
		props.onBlur("state", true);
	};

	return (
		<div>
			<MySelect
				styles={customStyles}
				placeholder={i18n.t("pageWWU.form.secction4.input")}
				noOptionsMessage={() => "Not to see here.."}
				options={props.options}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			{!!props.error && props.touched && (
				<span style={{ color: "red" }}>{props.error}</span>
			)}
		</div>
	);
}
