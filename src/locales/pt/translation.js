import { headerBR } from "../../components/Header/translate";
import { footerBR } from "../../components/Footer/translate";
import {homeBR} from '../../pages/Home/translate';
import { workWithUsBR } from "../../pages/WorkWithUs/translate";
import { notFoundBR } from "../../pages/NotFound/translate";
export const messages = {
  pt: {
    translations: {
      //Home
      pageHome: {
        ...homeBR
      },
      notFound:{
        ...notFoundBR
      },
      //Page Work With Us
      pageWWU:{
        ...workWithUsBR
      },
      //Header
      header: {
        ...headerBR,
      },

      //Footer
      footer: {
        ...footerBR,
      },
    },
  },
};
