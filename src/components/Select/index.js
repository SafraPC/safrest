import React from "react";
import { MySelect } from "../../styles/default";
import { customStyles } from "../../styles/selectStyles";

export default function MineSelect(props) {
	const handleChange = (value) => {
		props.onChange(props.name, value.value);
	};

	const handleBlur = () => {
		props.onBlur(props.name, true);
	};

	return (
		<div>
			<MySelect
				error={props.error && props.touched}
				styles={customStyles}
				placeholder={props.translateText}
				noOptionsMessage={() => "Not to see here.."}
				options={props.options}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
		</div>
	);
}
