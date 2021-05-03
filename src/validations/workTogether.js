import * as yup from 'yup';

export  const workSchema = yup.object().shape({
    meuNome: yup
      .string("Need to be an Text!")
      .min(4, "Min text is 4!")
      .max(30, "Max Text is 30!"),
    idade: yup.string().required().max(3).min(1),
    email: yup.string().required().min(8).max(50),
  });