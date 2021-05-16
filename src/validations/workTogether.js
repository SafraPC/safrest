import { withFormik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import api from "../services/api";
import i18n from "../services/i18next";
import { TOASTIFY_OPTIONS } from "../styles/toast";

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
    cv: yup.string().ensure().required(),
  }),
  mapPropsToValues: (props) => ({
    email: "",
    age: "",
    state: "",
    city: "",
    cv: undefined,
  }),
  handleSubmit: async (values) => {
    const data = new FormData();
    data.append("name", values.name);
    data.append("age", values.age);
    data.append("email", values.email);
    data.append("state", values.state);
    data.append("city", values.city);
    data.append("cv", values.cv);
    try {
      await api.put("work_with_us", data);
      toast.success(i18n.t("pageWWU.form.success.text"), TOASTIFY_OPTIONS);
    } catch (error) {
      toast.error(i18n.t("Something Happened!"), TOASTIFY_OPTIONS);
    }
  },
});
