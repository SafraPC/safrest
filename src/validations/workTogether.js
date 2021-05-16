import { withFormik } from "formik";
import * as yup from "yup";
import api from "../services/api";

export const formikEnhancer = withFormik({
	validationSchema: yup.object().shape({
		name: yup
			.string("Need to be an Text!")
			.min(4, "Min text is 4!")
			.max(30, "Max Text is 30!")
			.required("Nome é requirido!"),
		age: yup.string().required().min(1).max(2),
		email: yup.string().email().required(),
		state: yup.string().ensure().required(),
		city: yup.string().ensure().required(),
		cv:yup.string().ensure().required(),
	}),
	mapPropsToValues: (props) => ({
		name: "",
		email: "",
		age: "",
		state: "",
		city: "",
		cv: undefined,
	}),
	handleSubmit: async (values) => {
		console.log(values.cv);
		try{
			await api.put('work_with_us',{...values});
	}catch(error){
		console.log(error);
	}
	},
});
