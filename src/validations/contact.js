import { withFormik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import i18n from "../services/i18next";
import { TOASTIFY_OPTIONS } from "../styles/toast";
import api from "../services/api";

export const formikEnhancer = withFormik({
  validationSchema: yup.object().shape({
    name: yup.string().min(3).max(30).required(),
    email: yup.string().email().required(),
    typeWork: yup.string().ensure().required(),
    description: yup.string().required(),
  }),
  mapPropsToValues: (props) => ({
    name: "",
    email: "",
    typeWork: "",
    description: "",
  }),
  handleSubmit: async (values) => {
    try {
    const resul = api.post("/contact", {
        ...values,
      });
      console.log(await resul);
      toast.success(i18n.t("pageWWU.form.success.text"), TOASTIFY_OPTIONS);
    } catch (error) {
      toast.error(
        i18n.t("pageWWU.form.errors.server.text") + error,
        TOASTIFY_OPTIONS
      );
    }
  },
});
