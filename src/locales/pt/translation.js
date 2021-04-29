import { headerBR } from "../../components/Header/translate";
import { footerBR } from "../../components/Footer/translate";
import {homeBR} from '../../pages/Home/translate';
import { workWithUsBR } from "../../pages/WorkWithUs/translate";
export const messages = {
  pt: {
    translations: {
      //Home
      pageHome: {
        ...homeBR
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
