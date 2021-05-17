import { headerEN } from "../../components/Header/translate";
import { footerEN } from "../../components/Footer/translate";
import { homeEN } from "../../pages/Home/translate";
import { workWithUsEN} from "../../pages/WorkWithUs/translate";
import { notFoundEN } from "../../pages/NotFound/translate";
import { contactEN } from "../../pages/Contact/translate";

export const messages = {
  en: {
    translations: {
      //Home
      pageHome: {
        ...homeEN,
      },
      notFound:{
        ...notFoundEN
      },
      pageContact:{
        ...contactEN
      },
      //Page Work With Us
      pageWWU:{
        ...workWithUsEN
      },
      //Header Translate
      header: {
        ...headerEN,
      },

      //Footer Translate
      footer: {
        ...footerEN,
      },

      //Home Translate
    },
  },
};
